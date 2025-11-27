const Button = ({ name }) => {
  return (
    <button className="btn btn-lg bg-indigo-400 hover:bg-indigo-500 text-slate-100 text-sm font-bold rounded">
      {name}
    </button>
  );
};

export default Button;
