import MenuSection from "./MenuSection";

const desserts = [
  {
    name: "Boli & Chocolate Dip",
    description: "Roasted plantain served with rich chocolate sauce",
    price: "₦1,500",
    image: "/images/corperate-hosting.jpg",
  },
  {
    name: "Zobo Jelly",
    description: "Refreshing hibiscus jelly served chilled",
    price: "₦900",
    image: "/images/menu-bg.jpg",
  },
  {
    name: "Chin Chin Delight",
    description: "Sweet, crunchy fried dough bites with a dusting of sugar",
    price: "₦1,200",
    image: "/images/menu-bg.jpg",
  },
  {
    name: "Coconut Puff",
    description: "Soft coconut flavored pastry",
    price: "₦1,000",
    image: "/images/corperate-hosting.jpg",
  },
  {
    name: "Caramel Plantain Bites",
    description: "Fried plantain pieces drizzled with caramel sauce",
    price: "₦1,300",
    image: "/images/corperate-hosting.jpg",
  },
];

interface DessertsSectionProps {
  bgColor?: "white" | "gray-50";
}

export default function DessertsSection({ bgColor = "white" }: DessertsSectionProps) {
  return <MenuSection title="Desserts" items={desserts} bgColor={bgColor} />;
}
