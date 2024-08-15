// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ImageData } from "../../utils/types";
import ImageCard from "@/components/ImageCard";

const HomePage = () => {
  const images: ImageData[] = [
    {
      id: "1",
      modelImage:
        "https://images.pexels.com/photos/1239294/pexels-photo-1239294.jpeg",
      modelName: "Model One",
      photographerName: "Photographer A",
      photographerId: "1",
    },
    {
      id: "2",
      modelImage:
        "https://images.pexels.com/photos/1239295/pexels-photo-1239295.jpeg",
      modelName: "Model Two",
      photographerName: "Photographer B",
      photographerId: "2",
    },
    // Add more images as needed
  ];

  return (
    <div className="bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-500 py-4 px-6">{/* Navigation content */}</nav>

      {/* Hero Section */}
      <section className="bg-blue-500 py-20">{/* Hero content */}</section>

      {/* Latest Photoshoots */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-blue-500">
          Latest Photoshoots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <Link key={image.id} href={`/gallery/${image.photographerId}`}>
              <ImageCard
                modelImage={image.modelImage}
                modelName={image.modelName}
                photographerName={image.photographerName}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 py-6">{/* Footer content */}</footer>
    </div>
  );
};

export default HomePage;
