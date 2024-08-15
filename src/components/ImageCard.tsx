// components/ImageCard.tsx
import Image from "next/image";

interface ImageCardProps {
  modelImage: string;
  modelName: string;
  photographerName: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  modelImage,
  modelName,
  photographerName,
}) => {
  return (
    <div className="max-w-m rounded-lg overflow-hidden shadow-lg m-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Image
        src={modelImage}
        alt={modelName}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{modelName}</h2>
        <p className="text-sm text-gray-600">{photographerName}</p>
      </div>
    </div>
  );
};

export default ImageCard;
