import LastItems from "./product.last.items";
import SpeakerZx7 from "./product.speaker.zx7";
import SpeakerZx9 from "./product.speaker.zx9";

const ProductComponent = () => {
  return (
    <div className="flex justify-center pb-10">
      <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth flex flex-col gap-10">
        <SpeakerZx9 />
        <SpeakerZx7 />
        <LastItems />
      </div>
    </div>
  );
};

export default ProductComponent;
