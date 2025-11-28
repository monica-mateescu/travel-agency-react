import { Link } from "react-router";

const Card = ({ destination }) => {
  const { slug, title, image, description } = destination;
  return (
    <Link
      className="card bg-base-100 max-w-150 shadow-sm"
      to={`/destinations/${slug}`}
    >
      <figure>
        <img src={image} alt={title} className="w-full h-50" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info text-slate-100">
            View Destination
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
