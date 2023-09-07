import speakerHome from "../../assets/home/desktop/image-speaker-zx7.jpg";
import Button from "./button";

const SpeakerZx7 = () => {
  return (
    <div className="bg-customGray h-80 w-full rounded-lg relative overflow-hidden">
      <img src={speakerHome} className="h-full object-cover md:object-auto" />
      <div className="absolute top-1/2 -translate-y-1/2 left-20 flex flex-col gap-3">
        <h1 className="font-bold text-4xl">ZX7 SPEAKER</h1>
        <Button type={"outline"} link="/" />
      </div>
    </div>
  );
};

export default SpeakerZx7;
