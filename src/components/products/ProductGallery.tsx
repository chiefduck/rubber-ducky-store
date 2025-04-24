
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]);
  
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
        <div className="aspect-square flex items-center justify-center">
          <img 
            src={mainImage} 
            alt={productName} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`border rounded-md overflow-hidden flex items-center justify-center p-2 h-24 ${
              mainImage === image 
                ? "border-ducky-red" 
                : "border-gray-200 hover:border-ducky-red/50"
            }`}
            onClick={() => setMainImage(image)}
          >
            <img 
              src={image} 
              alt={`${productName} - View ${index + 1}`} 
              className="max-h-full max-w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
