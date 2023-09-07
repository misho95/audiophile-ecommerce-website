import earPhones from "../../assets/home/desktop/image-earphones-yx1.jpg";
import Button from "./button";

const LastItems = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-5">
      <div className="w-full md:w-px350 lg:w-w540 h-60 sm:h-80 rounded-lg overflow-hidden">
        <img src={earPhones} className="h-full object-cover" />
      </div>
      <div className="w-full md:w-px350 lg:w-w540 h-60 sm:h-80 bg-customGray relative rounded-lg overflow-hidden">
        <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-5">
          <h1 className="font-bold text-xl">YX1 EARPHONES</h1>
          <Button type={"outline"} link="/" />
        </div>
      </div>
    </div>
  );
};

export default LastItems;
