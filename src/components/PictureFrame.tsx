
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface PictureFrameProps {
  imageUrl: string;
  altText: string;
  caption?: string;
}

const PictureFrame: React.FC<PictureFrameProps> = ({ imageUrl, altText, caption }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative max-w-xl w-full rounded-lg overflow-hidden">
        {/* Frame border effect */}
        <div className="absolute inset-0 border-8 border-miggle-softBrown rounded-lg shadow-md z-10"></div>
        
        {/* Inner shadow */}
        <div className="absolute inset-0 shadow-inner z-20"></div>
        
        {/* Image container with aspect ratio */}
        <div className="relative z-0 bg-white p-4">
          <AspectRatio ratio={4/3} className="relative">
            <img 
              src={imageUrl} 
              alt={altText} 
              className="object-cover w-full h-full rounded"
            />
          </AspectRatio>
        </div>
      </div>
      
      {caption && (
        <div className="mt-4 text-center max-w-lg">
          <p className="font-handwriting text-lg text-miggle-peach">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default PictureFrame;
