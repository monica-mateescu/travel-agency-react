import { useOutletContext } from "react-router";
import Title from "../components/Title";
import Card from "../components/Card";

const Destinations = () => {
  const destinations = useOutletContext();
  return (
    <section className="py-20 text-center text-slate-400 text-md">
      <Title title="Journey to Amazing Destinations" />
      <title>Journey to Amazing Destinations</title>
      <p className="mb-20">
        Escape, unwind, and explore the world one stunning destination at a
        time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {destinations?.map((destination) => (
          <Card key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
