/* eslint-disable react/prop-types -- internal presentational helper */
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { useCookieConsent } from "../../context/useCookieConsent";

const ACCENT = "#33D6C5";

function CategoryRow({
  title,
  badge,
  description,
  bullets,
  footnote,
  checked,
  disabled,
  onToggle,
}) {
  return (
    <div className="rounded-xl border border-textGray/20 bg-cWhite p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <label
            className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition ${
              disabled
                ? "cursor-not-allowed opacity-80"
                : "cursor-pointer focus-within:ring-2 focus-within:ring-offset-1"
            }`}
            style={{
              borderColor: ACCENT,
              backgroundColor: checked ? ACCENT : "transparent",
            }}
            aria-label={`${title}: ${checked ? "enabled" : "disabled"}`}
          >
            <input
              type="checkbox"
              className="sr-only"
              checked={checked}
              disabled={disabled}
              onChange={(e) => onToggle?.(e.target.checked)}
            />
            {checked ? (
              <svg className="h-3.5 w-3.5 text-cWhite" viewBox="0 0 12 10" fill="none">
                <path
                  d="M1 5l3.5 3.5L11 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </label>
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <h3 className="text-base font-bold text-cBlack">{title}</h3>
              {badge ? (
                <span className="text-xs font-medium text-textGray">{badge}</span>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-textGray">
              {description}
            </p>
            {bullets?.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-textGray">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
            {footnote ? (
              <p className="mt-3 text-xs leading-relaxed text-textGray">
                {footnote}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

const CookieCustomizeModal = ({ consent }) => {
  const { saveConsent, closeCustomize, acceptAll, rejectOptional } =
    useCookieConsent();
  const titleId = useId();
  const [essential, setEssential] = useState(true);
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [view, setView] = useState("overview");

  const activeChoice = consent
    ? (consent.essential ?? true) && consent.functional && consent.analytics
      ? "acceptAll"
      : !consent.functional && !consent.analytics
        ? "rejectAll"
        : "custom"
    : null;

  useEffect(() => {
    if (consent) {
      setEssential(consent.essential ?? true);
      setFunctional(consent.functional);
      setAnalytics(consent.analytics);
    } else {
      setEssential(true);
      setFunctional(true);
      setAnalytics(false);
    }
  }, [consent, consent?.essential, consent?.functional, consent?.analytics]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCustomize();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCustomize]);

  const handleSave = () => {
    saveConsent(essential, functional, analytics);
  };

  const modal = (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 z-0 bg-cBlack/50 backdrop-blur-[1px]"
        aria-label="Close cookie preferences"
        onClick={closeCustomize}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[100dvh] w-full max-w-lg flex-col rounded-t-2xl border border-textGray/20 bg-cWhite shadow-xl sm:max-h-[90vh] sm:rounded-2xl"
      >
        <header className="flex shrink-0 items-start justify-between gap-3 border-b border-textGray/20 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-start gap-2">
            <MdSettings
              className="mt-0.5 h-6 w-6 shrink-0 text-cBlack"
              aria-hidden
            />
            <div>
              <h2
                id={titleId}
                className="text-lg font-bold text-cBlack sm:text-xl"
              >
                Cookie Preferences
              </h2>
              <p className="mt-2 text-sm text-textGray">
                We use cookies and similar technologies to enhance your
                experience, remember your preferences, and ensure our platform
                works properly. You can customize your preferences at any time.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeCustomize}
            className="rounded-lg p-2 text-textGray transition hover:bg-cgray hover:text-cBlack focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33D6C5]"
            aria-label="Close"
          >
            <IoClose className="h-6 w-6" />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6">
          {view === "overview" ? (
            <div className="space-y-4">
              <p className="text-sm text-textGray">
                Select an option below. You can change your preferences later by
                opening this dialog again.
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={acceptAll}
                  className={
                    activeChoice === "acceptAll"
                      ? "rounded-lg bg-[#33D6C5] px-4 py-2.5 text-sm font-semibold text-cWhite shadow-sm ring-2 ring-[#33D6C5] ring-offset-2 transition hover:bg-[#2bc4b4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33D6C5] focus-visible:ring-offset-2"
                      : "rounded-lg bg-[#33D6C5] px-4 py-2.5 text-sm font-semibold text-cWhite shadow-sm transition hover:bg-[#2bc4b4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33D6C5] focus-visible:ring-offset-2"
                  }
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={rejectOptional}
                  className={
                    activeChoice === "rejectAll"
                      ? "rounded-lg border border-textGray/30 bg-cWhite px-4 py-2.5 text-sm font-semibold text-cBlack ring-2 ring-textGray ring-offset-2 transition hover:bg-cgray focus:outline-none focus-visible:ring-2 focus-visible:ring-textGray focus-visible:ring-offset-2"
                      : "rounded-lg border border-textGray/30 bg-cWhite px-4 py-2.5 text-sm font-semibold text-cBlack transition hover:bg-cgray focus:outline-none focus-visible:ring-2 focus-visible:ring-textGray focus-visible:ring-offset-2"
                  }
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={() => setView("customize")}
                  className={
                    activeChoice === "custom"
                      ? "rounded-lg border border-textGray/30 bg-cWhite px-4 py-2.5 text-sm font-semibold text-cBlack ring-2 ring-textGray ring-offset-2 transition hover:bg-cgray focus:outline-none focus-visible:ring-2 focus-visible:ring-textGray focus-visible:ring-offset-2"
                      : "rounded-lg border border-textGray/30 bg-cWhite px-4 py-2.5 text-sm font-semibold text-cBlack transition hover:bg-cgray focus:outline-none focus-visible:ring-2 focus-visible:ring-textGray focus-visible:ring-offset-2"
                  }
                >
                  Customize
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-textGray">
                Choose which types of cookies you want to allow. Essential
                cookies cannot be disabled as they are required for the website
                to function.
              </p>
              <CategoryRow
                title="Essential Cookies"
                badge={essential ? "Enabled" : "Disabled"}
                description="Required for the website to function properly. These cookies enable core functionality such as security, authentication, and basic operations."
                bullets={[
                  "User authentication and session management",
                  "Secure login sessions",
                  "Security and fraud prevention",
                ]}
                checked={essential}
                disabled={false}
                onToggle={setEssential}
              />
              <CategoryRow
                title="Functional Cookies"
                description="Enable enhanced functionality and personalization, such as language preferences, theme settings, and user interface customizations."
                bullets={[
                  "Language preferences",
                  "Theme and display preferences",
                  "Saved user preferences",
                ]}
                checked={functional}
                disabled={false}
                onToggle={setFunctional}
              />
              <CategoryRow
                title="Analytics Cookies"
                description="Help us understand how you use our website to improve your experience. These cookies collect anonymous usage data."
                bullets={[]}
                footnote="Currently not implemented. We do not track user behavior."
                checked={analytics}
                disabled={false}
                onToggle={setAnalytics}
              />
            </div>
          )}
        </div>

        <footer className="shrink-0 border-t border-textGray/20 px-4 py-4 sm:px-6">
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
            {view === "customize" ? (
              <>
                <button
                  type="button"
                  onClick={() => setView("overview")}
                  className="rounded-lg border border-textGray/30 bg-cWhite px-5 py-2.5 text-sm font-semibold text-cBlack transition hover:bg-cgray focus:outline-none focus-visible:ring-2 focus-visible:ring-textGray focus-visible:ring-offset-2"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-lg bg-[#33D6C5] px-5 py-2.5 text-sm font-semibold text-cWhite shadow-sm transition hover:bg-[#2bc4b4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33D6C5] focus-visible:ring-offset-2"
                >
                  Save Preferences
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={closeCustomize}
                className="rounded-lg border border-textGray/30 bg-cWhite px-5 py-2.5 text-sm font-semibold text-cBlack transition hover:bg-cgray focus:outline-none focus-visible:ring-2 focus-visible:ring-textGray focus-visible:ring-offset-2"
              >
                Close
              </button>
            )}
          </div>
        </footer>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default CookieCustomizeModal;
