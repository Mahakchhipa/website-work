export default function CustomBackgroundImage({
    publicImage,
    width,
    height,
    rounded,
    alt,
  }) {
    return (
      <div className="w-full h-full">
      <img
        src={publicImage}
        alt={alt}
  
        style={{
          width: `${width} !important`,
          height: `${height} !important`,
          borderRadius: `${rounded}`,
        }}
        className={`rounded-[${rounded}] object-cover  `}
        // objectFit="cover"
      />
     </div>
    );
  }
  