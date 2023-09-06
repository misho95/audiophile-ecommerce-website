import Button from "../home/button";

interface PropsType {
  id: number;
  title: string;
  img: string;
  des: string;
  type: string;
  ifNew: boolean;
}

const ProductComponent = ({ id, title, img, des, type, ifNew }: PropsType) => {
  return (
    <div className="w-full md:h-h720 lg:h-h560 flex flex-col lg:flex-row gap-5">
      <div className=" lg:hidden w-full lg:w-1/2 bg-customGray">
        <img
          src={img}
          className="w-w327 md:w-full md:h-h365 lg:h-h560 object-contain"
        />
      </div>
      {type === "left" && (
        <div className="hidden lg:block lg:w-1/2 bg-customGray">
          <img src={img} className="h-h560 w-full object-contain" />
        </div>
      )}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <div className="w-w327 md:w-w445 h-h365  flex flex-col gap-8 justify-center items-center text-center lg:justify-normal lg:items-start lg:text-left">
          {ifNew && <h3 className="text-customOrange">NEW PRODUCT</h3>}
          <h1 className="text-4xl">{title}</h1>
          <p className="text-black/50">{des}</p>
          <Button type="orange" />
        </div>
      </div>
      {type === "right" && (
        <div className="hidden lg:block lg:w-1/2 bg-customGray">
          <img src={img} className="h-h560 w-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default ProductComponent;
