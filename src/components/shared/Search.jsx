import Button from "./Button";
const Search = () => {
  return (
    <section className="py-4 text-center text-slate-600">
      <h1 className="text-slate-600 text-xl font-semibold mb-4">
        Find your favourite destination
      </h1>
      <form className="flex flex-col w-sm mx-auto">
        <label htmlFor="origin" aria-label="Origin" className="rounded mb-2">
          <input
            type="text"
            name="origin"
            placeholder="Origin"
            id="origin"
            className="w-full border border-slate-200 p-2 rounded text-xs outline-0"
          />
        </label>
        <label
          htmlFor="destination"
          aria-label="Destination"
          className="rounded mb-2"
        >
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            id="destination"
            className="w-full border border-slate-200 p-2 rounded text-xs outline-0"
          />
        </label>
        <label
          htmlFor="departure"
          aria-label="Departure"
          className="rounded mb-2"
        >
          <input
            type="date"
            name="departure"
            id="departure"
            className="w-full border border-slate-200 p-2 rounded text-xs outline-0"
          />
        </label>
        <label htmlFor="return" aria-label="Return" className="rounded mb-2">
          <input
            type="date"
            name="return"
            id="return"
            className="w-full border border-slate-200 p-2 rounded text-xs outline-0"
          />
        </label>
        <Button name={"Search"} />
      </form>
    </section>
  );
};

export default Search;
