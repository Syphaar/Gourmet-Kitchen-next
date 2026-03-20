import Image from "next/image";
import { StaticImageData } from "next/image";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string | StaticImageData;
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className="flex gap-6 items-start w-full ">
      {/* Image */}
      {image && (
        <div className="w-1/3 h-24 sm:h-32 sm:w-1/3 lg:w-32 relative shrink-0 rounded-2xl overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 768px) 25vw, 25vw" />
        </div>
      )}

      {/* Text */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text- md:text-xl font-bold">{name}</h3>
          <div className="flex-1 border-b border-dashed border-gray-300"></div>
          <span className="text-lg md:text-xl font-semibold text-[#C9A227]">{price}</span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}