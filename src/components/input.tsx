const Input = ({ type, placeHolder, error }) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={`h-h56 border-px1 ${
        error ? "border-red-500" : "border-inputBorder"
      }  rounded-lg p-2 ${
        error ? "focus:outline-red-500" : "focus:outline-customOrange"
      } w-full `}
    />
  );
};

export default Input;
