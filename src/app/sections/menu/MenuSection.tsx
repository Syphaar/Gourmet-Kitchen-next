import MenuItem from "./MenuItem";
import { StaticImageData } from "next/image";

interface MenuItemType {
  name: string;
  description: string;
  price: string;
  image?: string | StaticImageData;
}

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
  bgColor?: "white" | "gray-50" | "bg-[#1A1A1A]";
  paddingY?: string;
}

export default function MenuSection({ title, items, bgColor = "white", }: MenuSectionProps) {
  return (
    <section className={`py-6 md:py-7 xl:py-8 ${bgColor === "gray-50" ? "bg-gray-50" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-7 lg:px-9 xl:px-12">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center mb-6">
          {title.split(" ").map((word, index) => {
            if (index === 1) {
              return (
                <span key={index} className="text-[#C9A227]">
                  {word}{" "}
                </span>
              );
            }
            return <span key={index}>{word} </span>;
          })}
        </h2>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((item) => (
            <MenuItem key={item.name} name={item.name} description={item.description}
              price={item.price} image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}