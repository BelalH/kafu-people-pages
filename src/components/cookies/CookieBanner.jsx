import { MdPrivacyTip } from "react-icons/md";
import { useCookieConsent } from "../../context/useCookieConsent";

const COOKIE_BODY =
  "We use cookies and similar technologies to enhance your experience, remember your preferences, and ensure our platform works properly. You can customize your preferences at any time.";

const CookieBanner = () => {
  const { acceptAll, rejectOptional, openCustomize } = useCookieConsent();

  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-[100] font-inter border-t border-textGray/20 bg-cWhite shadow-[0_-4px_24px_rgba(0,0,0,0.12)]"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="container mx-auto max-w-6xl px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:py-5 md:flex md:items-end md:justify-between md:gap-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#33D6C5]/15 text-[#2bc4b4]"
              aria-hidden
            >
              <MdPrivacyTip className="h-6 w-6" />
            </span>
            <div>
              <h2
                id="cookie-banner-title"
                className="text-base font-bold text-cBlack sm:text-lg"
              >
                We value your privacy
              </h2>
              <p
                id="cookie-banner-desc"
                className="mt-2 text-sm leading-relaxed text-textGray sm:text-[15px]"
              >
                {COOKIE_BODY}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end md:mt-0 md:shrink-0">
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-lg bg-[#33D6C5] px-4 py-2.5 text-sm font-semibold text-cWhite shadow-sm transition hover:bg-[#2bc4b4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33D6C5] focus-visible:ring-offset-2"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={rejectOptional}
            className="rounded-lg border border-textGray/30 bg-cWhite px-4 py-2.5 text-sm font-semibold text-cBlack transition hover:bg-cgray focus:outline-none focus-visible:ring-2 focus-visible:ring-textGray focus-visible:ring-offset-2"
          >
            Reject All
          </button>
          <button
            type="button"
            onClick={openCustomize}
            className="rounded-lg border border-textGray/30 bg-cWhite px-4 py-2.5 text-sm font-semibold text-cBlack transition hover:bg-cgray focus:outline-none focus-visible:ring-2 focus-visible:ring-textGray focus-visible:ring-offset-2"
          >
            Customize
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CookieBanner;
