import product from "../../assets/images/ourProducts/product.webp";
import { FULL_VIEWPORT_SNAP_SECTION } from "../../constants/homeLayout";

const ProductsSection = () => {
  return (
    <section
      className={`relative flex w-full shrink-0 items-center justify-center overflow-hidden font-inter ${FULL_VIEWPORT_SNAP_SECTION}`}
    >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${product})` }}
          role="img"
          aria-label="Our Products"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(35,26,26,0.75),rgba(35,26,26,0.75))]" />

        <div className="relative z-10 grid w-full place-items-center px-4 sm:px-8 lg:px-16">
          <div className="w-full max-w-4xl rounded-2xl bg-black/35 p-6 text-center sm:p-8">
            <h2 className="mb-4 text-center text-2xl font-extrabold text-cWhite sm:text-4xl lg:text-5xl">
              Innovative Products by{" "}
              <span className="text-cWhite">KAFUPEOPLE</span>
            </h2>
            <p className="text-center text-sm leading-relaxed text-cWhite/90 sm:text-base lg:text-lg">
              Discover a world of innovation with KAFUPEOPLE’s range of
              cutting-edge products, meticulously crafted to meet the diverse
              needs and challenges of the modern IT landscape.
            </p>
          </div>
        </div>
    </section>
  );
};

export default ProductsSection;
