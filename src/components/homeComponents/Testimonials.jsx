import { TESTIMONIALS } from "../../constants/site";

const Testimonials = () => {
  return (
    <section className="bg-surface py-16 lg:py-24 px-4 sm:px-8 lg:px-24 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Client testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Real feedback from founders and engineering leaders we have partnered
            with on products, migrations, and production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ id, quote, name, location, project }) => (
            <blockquote
              key={id}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </p>
              <footer className="mt-6 pt-4 border-t border-slate-100">
                <cite className="not-italic">
                  <span className="block font-semibold text-slate-900">
                    {name}
                  </span>
                  <span className="block text-sm text-muted mt-1">
                    {location}
                  </span>
                  <span className="block text-xs text-accent mt-1 font-medium">
                    {project}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
