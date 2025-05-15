const Gallery = () => {
    const images = [
      "gallery1.jpg",
      "gallery2.jpg",
      "gallery3.jpg",
      "gallery4.jpg",
      "gallery5.jpg",
      "gallery6.jpg"
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
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Gallery;
  