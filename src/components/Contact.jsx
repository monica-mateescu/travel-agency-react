import Button from "./shared/Button";

const Contact = () => {
  return (
    <section className="py-4 text-center text-slate-600">
      <h1 className="text-slate-600 text-xl font-semibold mb-4">Contact Us</h1>
      <form className="flex flex-col w-sm mx-auto">
        <label
          htmlFor="name"
          aria-label="Your full name"
          className="rounded mb-2"
        >
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            id="name"
            className="w-full border border-slate-200 p-2 rounded text-xs outline-0"
          />
        </label>
        <label
          htmlFor="email"
          aria-label="Your address email"
          className="rounded mb-2"
        >
          <input
            type="text"
            name="email"
            placeholder="name@example.com"
            id="email"
            className="w-full border border-slate-200 p-2 rounded text-xs outline-0"
          />
        </label>
        <label
          htmlFor="message"
          aria-label="Your message"
          className="rounded mb-2"
        >
          <textarea
            name="message"
            placeholder="Type your message here.."
            rows={4}
            id="message"
            className="w-full border border-slate-200 p-2 rounded text-xs outline-0"
          ></textarea>
        </label>
        <Button name={"Send your message"} />
      </form>
    </section>
  );
};

export default Contact;
