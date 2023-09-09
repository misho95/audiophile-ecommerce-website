interface PropsType {
  id: number;
  paymentMethod: string;
  checked: number;
  setChecked: (arg: number) => void;
}

const InputCheckBox = ({
  id,
  paymentMethod,
  checked,
  setChecked,
}: PropsType) => {
  return (
    <div
      onClick={() => setChecked(id)}
      className={`h-h56 border-px1 
      border-inputBorder
        rounded-lg p-2 
      w-full flex gap-5 items-center ${
        checked === id ? "border-customOrange" : "border-inputBorder "
      }`}
    >
      <div className="border-px1 border-inputBorder rounded-full w-6 h-6 flex justify-center items-center">
        {checked === id && (
          <div className="w-3 h-3 bg-customOrange rounded-full"></div>
        )}
      </div>
      <div className="select-none">{paymentMethod}</div>
    </div>
  );
};

export default InputCheckBox;
