import Image from "next/image";

const ProductCardImage = ({ image }: { image: string }) => {
  return (
    <div className="relative flex items-center justify-center h-full bg-grayscale-400 rounded-sm">
      <Image src={image} width={170} height={170} objectFit="cover" alt="" />
    </div>
  );
};

export default ProductCardImage;
