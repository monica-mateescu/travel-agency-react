import { Link, useOutletContext, useParams } from "react-router";
import Title from "../components/Title";

const Destination = () => {
  const { slug } = useParams();
  const destination = useOutletContext().find((d) => d.slug === slug);
  const { title, image, description } = destination;

  return (
    <article className="py-20 text-center text-slate-400 text-md">
      <Title title={title} />
      <title>{title}</title>
      <div className="mb-4">
        <p>{description}</p>
        <Link to="/contact" className="btn btn-link">
          Book your trip
        </Link>
      </div>
      <figure>
        <img src={image} alt={title} className="w-auto max-h-150 mx-auto" />
      </figure>
    </article>
  );
};

export default Destination;
