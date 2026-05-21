import { useState } from "react";
import { Link } from "react-router-dom";
import BookMeetingButton from "../ui/BookMeetingButton";
import { HERO_CONTENT_PT, HERO_FLUSH_CLASS } from "../../constants/layout";
import {
  HERO_POSTER_SRC,
  HERO_VIDEO_URL,
  getDirectVideoSrc,
  getStreamableEmbedUrl,
  isStreamableUrl,
} from "../../constants/media";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const streamableEmbed = isStreamableUrl(HERO_VIDEO_URL)
    ? getStreamableEmbedUrl(HERO_VIDEO_URL)
    : null;
  const directVideoSrc = getDirectVideoSrc(HERO_VIDEO_URL);
  const showStreamable = streamableEmbed && !videoFailed;
  const showDirectVideo = directVideoSrc && !videoFailed;

  return (
    <section
      className={`relative box-border flex min-h-[90dvh] w-full flex-col justify-center overflow-hidden font-inter sm:min-h-[95dvh] lg:min-h-[100dvh] ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT}`}
    >
      <img
        src={HERO_POSTER_SRC}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />

      {showStreamable ? (
        <div
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
          aria-hidden
        >
          <iframe
            src={streamableEmbed}
            title=""
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
            allow="autoplay; fullscreen"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : null}

      {showDirectVideo ? (
        <video
          className="absolute inset-0 z-[1] h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER_SRC}
          aria-hidden
          onError={() => setVideoFailed(true)}
        >
          <source src={directVideoSrc} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 z-[2] bg-black/50" aria-hidden />

      <div className="relative z-10 w-full px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24 xl:px-32">
        <div className="container mx-auto flex flex-1 flex-col justify-center py-8 lg:py-12">
          <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Amsterdam · Remote worldwide
            </p>
            <h1 className="text-lg font-medium text-cWhite sm:text-xl lg:text-2xl">
              Welcome to <span className="text-primary-light">Kafu People</span>
            </h1>
            <h2 className="mb-6 text-3xl font-bold leading-snug text-cWhite sm:text-4xl lg:text-5xl">
              Build and scale with AI, cloud, and full-stack expertise
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-200 sm:text-lg lg:mb-10">
              We help startups and growing businesses move from idea to
              production-ready products — with practical AI workflows, end-to-end
              development, and scalable AWS architecture. Clear communication,
              structured delivery, and outcomes you can measure.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <BookMeetingButton buttonText="Book a Meeting" variant="secondary" />
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/90 px-6 py-3 text-sm font-semibold text-cWhite transition hover:bg-white/10"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
