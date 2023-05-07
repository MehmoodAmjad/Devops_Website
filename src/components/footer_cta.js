function Footer_CTA() {
  return (
    <section className="  py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="mb-8">Stay up-to-date with the latest DevOps student blogs and news.</p>
        <form className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 mb-4 sm:mb-0 sm:mr-4 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded-md text-white font-bold transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Footer_CTA;
