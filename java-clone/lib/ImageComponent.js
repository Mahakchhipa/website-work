// components/ImageComponent.js
import Image from 'next/image';

const ImageComponent = ({ src, alt, width, height,className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
      className={className}
    />
  );
};

export default ImageComponent;
