import productImage from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import Button from "../home/button";

interface PropsType {
  type: string;
}

const ProductComponent = ({ type }: PropsType) => {
  return (
    <div className="w-full md:h-h720 lg:h-h560 flex flex-col lg:flex-row gap-5">
      <div className=" lg:hidden w-full lg:w-1/2 bg-customGray">
        <img
          src={productImage}
          className="w-w327 md:w-full md:h-h365 lg:h-h560 object-contain"
        />
      </div>
      {type === "left" && (
        <div className="hidden lg:block lg:w-1/2 bg-customGray">
          <img src={productImage} className="h-h560 w-full object-contain" />
        </div>
      )}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <div className="w-w327 md:w-w445 h-h365  flex flex-col gap-8 justify-center items-center text-center lg:justify-normal lg:items-start lg:text-left">
          <h3 className="text-customOrange">NEW PRODUCT</h3>
          <h1 className="text-4xl">XX99 Mark II Headphones</h1>
          <p className="text-black/50">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Button type="orange" />
        </div>
      </div>
      {type === "right" && (
        <div className="hidden lg:block lg:w-1/2 bg-customGray">
          <img src={productImage} className="h-h560 w-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default ProductComponent;
