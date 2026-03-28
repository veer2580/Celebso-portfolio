


export default function Gallery() {
 const images = [
  "/gallery/iamge08.jpeg",
  "/gallery/image01.jpeg",
  "/gallery/image02.jpeg",
  "/gallery/image09.jpeg",
  "/gallery/image7.jpeg",
  "/gallery/image10.jpeg",
  "/gallery/image11.jpeg",
  "/gallery/image12.jpeg",
  "/gallery/image13.jpeg",
  "/gallery/image03.jpeg",
  "/gallery/image06.jpeg",
   "/gallery/image04.jpeg",

];


  return (
    <div className="min-h-screen pt-28 px-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold text-center mb-12"></h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-white/10 hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={src}
              alt="gallery"
              className="w-full h-[260px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
