const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="bg-[#242565] text-white font-poppins text-xs px-4 py-2 rounded-md self-start">
      {text}
    </button>
  );
};

export default Button;
