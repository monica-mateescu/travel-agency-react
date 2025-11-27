import Button from "./Button";
import { useNavigate } from "react-router";

const Search = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/destinations");
  };
  return (
    <section className="py-4 text-center text-slate-600">
      <h1 className="text-slate-600 text-xl font-semibold mb-4">
        Find your favorite destination
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-sm mx-auto">
        <label htmlFor="origin" aria-label="Origin" className="mb-2">
          <input
            type="text"
            name="origin"
            placeholder="Origin"
            id="origin"
            className="w-full input input-sm"
          />
        </label>
        <label htmlFor="destination" aria-label="Destination" className="mb-2">
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            id="destination"
            className="w-full input input-sm"
          />
        </label>
        <label htmlFor="departure" aria-label="Departure" className="mb-2">
          <input
            type="date"
            name="departure"
            id="departure"
            className="w-full input input-sm"
          />
        </label>
        <label htmlFor="return" aria-label="Return" className="mb-2">
          <input
            type="date"
            name="return"
            id="return"
            className="w-full input input-sm"
          />
        </label>
        <Button name={"Search"} />
      </form>
    </section>
  );
};

export default Search;
