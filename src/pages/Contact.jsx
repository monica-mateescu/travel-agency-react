import Button from "../components/Button";
import Title from "../components/Title";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="py-20 text-center text-slate-400 text-md">
      <Title title="Contact Us" />
      <title>Contact Us | Wanderlust Travel Co.</title>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-xl mx-auto">
        <label htmlFor="name" aria-label="Your full name" className="mb-2">
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            id="name"
            className="w-full input input-lg"
          />
        </label>
        <label htmlFor="email" aria-label="Your address email" className="mb-2">
          <input
            type="text"
            name="email"
            placeholder="name@example.com"
            id="email"
            className="w-full input input-lg"
          />
        </label>
        <label htmlFor="message" aria-label="Your message" className="mb-2">
          <textarea
            name="message"
            placeholder="Type your message here.."
            id="message"
            className="w-full textarea textarea-lg"
          ></textarea>
        </label>
        <Button name={"Send your message"} />
      </form>
    </section>
  );
};

export default Contact;
