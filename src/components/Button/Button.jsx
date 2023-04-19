const Button = ({ children }) => {
  return (
    <div>
      <button className="font-extrabold md:text-xl h-12 md:h-16 mt-4 lg:mt-0 text-base w-36 md:w-48 text-white rounded-lg transition-all bg-gradient-to-r from-blue-500 to-blue-600 ">
        {children}
      </button>
    </div>
  );
};

export default Button;
