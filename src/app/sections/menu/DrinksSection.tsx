import MenuSection from "./MenuSection";

// CLOUDINARY IMAGES
const img = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005241/zobo_drink_a4ajsg.jpg";
const img2 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005240/Tigernut_c7oouw.jpg";
const img3 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005208/pineapple-juice_ovggil.jpg";
const img4 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005240/watermelon_juice_mixwah.jpg";
const img5 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005207/orange_juice_xddffj.jpg";
const img6 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005206/mango-smoothie_hq97ye.jpg";
const img7 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005232/smoothies_tmtskx.jpg";

const drinks = [
  {
    name: "Zobo Drink",
    description: "Refreshing hibiscus drink infused with pineapple, ginger and cloves",
    price: "₦2,200",
    image: img,
  },
  {
    name: "Kunu Aya (Tiger Nut Drink)",
    description: "Creamy tiger nut milk blended with dates and coconut",
    price: "₦2,500",
    image: img2,
  },
  {
    name: "Fresh Pineapple Juice",
    description: "Freshly blended pineapple juice served chilled",
    price: "₦2,500",
    image: img3,
  },
  {
    name: "Fresh Watermelon Juice",
    description: "Naturally sweet watermelon juice blended fresh",
    price: "₦2,500",
    image: img4,
  },
  {
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice full of citrus flavor",
    price: "₦2,500",
    image: img5,
  },
  {
    name: "Mango Juice",
    description: "Rich tropical mango juice made from ripe mangoes",
    price: "₦2,500",
    image: img6,
  },
  {
    name: "Fresh Fruit Smoothies",
    description:
      "Available flavors: Mango Banana Smoothie, Pineapple Coconut Smoothie, Strawberry Banana Smoothie, Watermelon Mint Smoothie",
    price: "₦3,500",
    image: img7,
  },
];

interface DrinksSectionProps {
  bgColor?: "white" | "gray-50";
}

export default function DrinksSection({ bgColor = "white" }: DrinksSectionProps) {
  return <MenuSection title="Nigerian Drinks" items={drinks} bgColor={bgColor} />;
}
