const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl font-bold drop-shadow-lg">Capturing Life’s Moments</h1>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          Professional photography for weddings, portraits, and events. Let your story be told through the lens.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
