const Button = ({ name }) => {
  return (
    <button className="bg-indigo-400 hover:bg-indigo-500 w-full cursor-pointer px-4 py-2 text-slate-100 text-xs rounded">
      {name}
    </button>
  );
};

export default Button;
