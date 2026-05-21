import { useState } from "react";
import { Link } from "react-router-dom";
import BookMeetingButton from "../ui/BookMeetingButton";
import { HERO_CONTENT_PT, HERO_FLUSH_CLASS } from "../../constants/layout";
import { HERO_POSTER_SRC, HERO_VIDEO_SRC } from "../../constants/media";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = HERO_VIDEO_SRC && !videoFailed;

  return (
    <section
      className={`relative box-border flex min-h-[90dvh] w-full flex-col justify-center overflow-hidden font-inter sm:min-h-[95dvh] lg:min-h-[100dvh] ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT}`}
    >
      {showVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER_SRC}
          aria-hidden
          onError={() => setVideoFailed(true)}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <img
          src={HERO_POSTER_SRC}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
      )}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

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
