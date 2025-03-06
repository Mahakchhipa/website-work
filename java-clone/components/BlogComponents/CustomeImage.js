export default function CustomImage({
  publicImage,
  width,
  height,
  rounded,
  alt,
  lazyLoading,
  className,
}) {
  return (
    // <div className="w-full h-[300px] lg:h-[650px] relative">
    <img
      src={publicImage}
      alt={alt}
      width={width}
      height={height}
      // style={{
      //   width: `${width} !important`,
      //   height: `${height} !important`,
      //   borderRadius: `${rounded}`,
      // }}
      className={`${rounded} object-cover ${className} `}

      // objectFit="cover"
    />
    // </div>
  );
}
