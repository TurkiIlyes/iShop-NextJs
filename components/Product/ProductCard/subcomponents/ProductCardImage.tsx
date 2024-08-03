import Image from "next/image";

const ProductCardImage = ({ image }: { image: string }) => {
  return (
    <div className="relative flex items-center justify-center w-full aspect-1 bg-grayscale-400 rounded-sm">
      <Image
        src={image}
        width={170}
        height={170}
        objectFit="cover"
        className=" w-3/4 aspect-1"
        alt=""
      />
    </div>
  );
};

export default ProductCardImage;
