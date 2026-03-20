import MenuSection from "./MenuSection";

// CLOUDINARY IMAGES
const img = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005240/suya_zptgue.jpg";
const img2 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005206/meatpie_zayyu2.jpg";
const img3 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005240/spring_roll_sngc6t.jpg";
const img4 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005203/chin_chin_outo4q.jpg";
const img5 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005240/spicy_chicken_zqaxu3.jpg";
const img6 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005208/Plantain_chips_ssnc6z.jpg";

const starters = [
  {
    name: "Peppered Suya",
    description: "Spicy beef skewers grilled to perfection, served with onions and tomatoes",
    price: "₦3,500",
    image: img,
  },
  {
    name: "Meat Pie",
    description: "Flaky pastry filled with seasoned minced beef and vegetables",
    price: "₦1,800",
    image: img2,
  },
  {
    name: "Spring Roll",
    description: "Flaky pastry filled with seasoned minced beef and vegetables",
    price: "₦1,500",
    image: img3,
  },
  {
    name: "Chin Chin",
    description: "Crispy sweet fried dough cubes, perfect for snacking",
    price: "₦1,200",
    image: img4,
  },
  {
    name: "Spicy Chicken",
    description: "Deep fried chicken tossed in pepper sauce",
    price: "₦2,200",
    image: img5,
  },
  {
    name: "Fried Plantain Chips",
    description: "Crunchy golden plantain chips with a sprinkle of salt",
    price: "₦900",
    image: img6,
  },
];

interface StartersSectionProps {
  bgColor?: "white" | "gray-50";
}

export default function StartersSection({ bgColor = "white" }: StartersSectionProps) {
  return (
    <div className="pt-6">
      <MenuSection title="Starters" items={starters} bgColor={bgColor} />
    </div>
  );
}