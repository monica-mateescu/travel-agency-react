import Title from "./shared/Title";

import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 text-center text-slate-400 text-md">
      <Title title="Oops… looks like this destination doesn’t exist." />
      <p className="mb-2">
        The page you're looking for might have taken a different flight.
      </p>
      <button onClick={() => navigate("/")} className="btn btn-link">
        Let’s get you back on the map.
      </button>
    </section>
  );
};

export default NotFound;
