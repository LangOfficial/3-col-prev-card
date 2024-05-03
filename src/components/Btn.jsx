const Btn = ({ primaryColor, text }) => {
  return (
    <button
      className={`text-primary-${primaryColor} rounded-full bg-neutralC-100 px-7 py-3 font-primary`}
    >
      {text}
    </button>
  );
};

export default Btn;
