const Gallery = () => {
    const images = [
      "gallery1.webp",
      "gallery2.webp",
      "gallery3.webp",
      "gallery4.webp",
      "gallery5.webp",
      "gallery6.webp"
    ];
  
    return (
      <section id="gallery" className="py-16 bg-red-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <img
                key={index}
                src={`/images/${img}`}
                alt={`Gallery ${index}`}
                loading = "lazy"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Gallery;
  