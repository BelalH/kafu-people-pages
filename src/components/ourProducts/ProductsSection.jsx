import React from "react";
import product from "../../assets/images/ourProducts/product.png";

const ProductsSection = () => {
  return (
    <div className="w-full font-inter">
      {/* Hero: Image + Overlay Content */}
      <div className="relative w-full h-[55vh] lg:h-[70vh] overflow-hidden">
        <img
          src={product}
          alt="Our Products"
          className="inset-0 w-[100vw] h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(35,26,26,0.75),rgba(35,26,26,0.75))]" />

        <div className="absolute inset-0 z-10 grid place-items-center px-4 sm:px-8 lg:px-16">
          <div className="w-full max-w-4xl rounded-2xl bg-black/35 p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-cWhite mb-4 text-center">
                Innovative Products by{" "}
                <span className="text-cWhite">KAFUPEOPLE</span>
              </h2>
              <p className="text-cWhite/90 text-sm sm:text-base lg:text-lg leading-relaxed text-center">
                Discover a world of innovation with KAFUPEOPLE’s range of
                cutting-edge products, meticulously crafted to meet the diverse
                needs and challenges of the modern IT landscape.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
