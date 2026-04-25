/* eslint-disable react/prop-types -- children-only wrapper */
import { useCallback, useEffect, useMemo, useState } from "react";
import CookieBanner from "../components/cookies/CookieBanner";
import CookieCustomizeModal from "../components/cookies/CookieCustomizeModal";
import { CookieConsentContext } from "./cookieConsentContext";

const STORAGE_KEY = "kafupeople_cookie_preferences";

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (
      (data?.essential === undefined || typeof data?.essential === "boolean") &&
      typeof data?.functional === "boolean" &&
      typeof data?.analytics === "boolean"
    ) {
      return { essential: data.essential ?? true, ...data };
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function CookieConsentProvider({ children }) {
  const [hydrated, setHydrated] = useState(false);
  const [consent, setConsent] = useState(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);

  useEffect(() => {
    const stored = readStored();
    setConsent(stored);
    setBannerVisible(!stored);
    setHydrated(true);
  }, []);

  const saveConsent = useCallback((essential, functional, analytics) => {
    const payload = {
      essential: essential ?? true,
      functional,
      analytics,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setConsent(payload);
    setBannerVisible(false);
    setCustomizeOpen(false);
  }, []);

  const openCustomize = useCallback(() => setCustomizeOpen(true), []);
  const closeCustomize = useCallback(() => setCustomizeOpen(false), []);

  const acceptAll = useCallback(
    () => saveConsent(true, true, true),
    [saveConsent]
  );
  const rejectOptional = useCallback(
    () => saveConsent(true, false, false),
    [saveConsent]
  );

  const allowEssential = Boolean(hydrated && (consent?.essential ?? true));
  const allowFunctional = Boolean(hydrated && consent?.functional);
  const allowAnalytics = Boolean(hydrated && consent?.analytics);
  const hasConsent = Boolean(hydrated && consent);

  useEffect(() => {
    if (!hydrated) return;
    window.dispatchEvent(
      new CustomEvent("kafupeople:cookie-consent", {
        detail: {
          essential: allowEssential,
          functional: allowFunctional,
          analytics: allowAnalytics,
          hasConsent,
        },
      })
    );
  }, [hydrated, allowEssential, allowFunctional, allowAnalytics, hasConsent]);

  const value = useMemo(
    () => ({
      consent,
      hydrated,
      hasConsent,
      allowEssential,
      allowFunctional,
      allowAnalytics,
      bannerVisible,
      customizeOpen,
      saveConsent,
      openCustomize,
      closeCustomize,
      acceptAll,
      rejectOptional,
    }),
    [
      consent,
      hydrated,
      hasConsent,
      allowEssential,
      allowFunctional,
      allowAnalytics,
      bannerVisible,
      customizeOpen,
      saveConsent,
      openCustomize,
      closeCustomize,
      acceptAll,
      rejectOptional,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {hydrated && bannerVisible ? <CookieBanner /> : null}
      {hydrated && customizeOpen ? (
        <CookieCustomizeModal consent={consent} />
      ) : null}
    </CookieConsentContext.Provider>
  );
}
