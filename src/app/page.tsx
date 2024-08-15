// pages/index.tsx
import Header from "@/components/Header";
import ImageCard from "../components/ImageCard";
import FooterSection from "@/components/Footer";

interface ImageData {
  modelImage: string;
  modelName: string;
  photographerName: string;
}

const HomePage: React.FC = () => {
  const images: ImageData[] = [
    {
      modelImage:
        "https://images.pexels.com/photos/1239294/pexels-photo-1239294.jpeg",
      modelName: "Model One",
      photographerName: "Photographer A",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239295/pexels-photo-1239295.jpeg",
      modelName: "Model Two",
      photographerName: "Photographer B",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239296/pexels-photo-1239296.jpeg",
      modelName: "Model Three",
      photographerName: "Photographer C",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239297/pexels-photo-1239297.jpeg",
      modelName: "Model Four",
      photographerName: "Photographer D",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239298/pexels-photo-1239298.jpeg",
      modelName: "Model Five",
      photographerName: "Photographer E",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239299/pexels-photo-1239299.jpeg",
      modelName: "Model Six",
      photographerName: "Photographer F",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239300/pexels-photo-1239300.jpeg",
      modelName: "Model Seven",
      photographerName: "Photographer G",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg",
      modelName: "Model Eight",
      photographerName: "Photographer H",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239302/pexels-photo-1239302.jpeg",
      modelName: "Model Nine",
      photographerName: "Photographer I",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239303/pexels-photo-1239303.jpeg",
      modelName: "Model Ten",
      photographerName: "Photographer J",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239304/pexels-photo-1239304.jpeg",
      modelName: "Model Eleven",
      photographerName: "Photographer K",
    },
    {
      modelImage:
        "https://images.pexels.com/photos/1239305/pexels-photo-1239305.jpeg",
      modelName: "Model Twelve",
      photographerName: "Photographer L",
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Navigation Bar */}
      {/* <nav className="bg-blue-500 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl">
            Image Gallery
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <Header/>

      {/* Hero Section */}
      <section className="bg-blue-500 py-20">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Image Gallery</h1>
          <p className="text-lg mb-8">
            Discover the best photography from around the world.
          </p>
          <a
            href="#"
            className="bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-gray-200"
          >
            View Gallery
          </a>
        </div>
      </section>

      {/* Latest Photoshoots */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-blue-500">
          Latest Photoshoots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              modelImage={image.modelImage}
              modelName={image.modelName}
              photographerName={image.photographerName}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-blue-500 py-6">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2023 Image Gallery. All rights reserved.</p>
        </div>
      </footer> */}
      <FooterSection/>
    </div>
  );
};

export default HomePage;
