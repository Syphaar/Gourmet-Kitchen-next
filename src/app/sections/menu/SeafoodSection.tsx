import MenuSection from "./MenuSection";

// CLOUDINARY IMAGES
const img = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005208/peppered_shrimp_q7akl1.jpg";
const img2 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005232/seafood-okrasoup_kwexs7.jpg";
const img3 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005202/grilled_catfish_rflmor.jpg";

const seafood = [
  {
    name: "Peppered Grilled Shrimp",
    description: "Succulent shrimp grilled over open flame and tossed in a rich pepper sauce with garlic butter and herbs.",
    price: "₦3,800",
    image: img,
  },
  {
    name: "Seafood Okra Soup",
    description: "Okra soup with prawns, crab, and smoked fish, served with fufu",
    price: "₦4,500",
    image: img2,
  },
  {
    name: "Grilled Catfish",
    description: "Smoky grilled catfish served with pepper sauce and onions",
    price: "₦3,900",
    image: img3,
  },
  
];

interface SeafoodSpecialtiesSectionProps { bgColor?: "white" | "gray-50"; }

export default function SeafoodSpecialtiesSection({ bgColor = "white" }: SeafoodSpecialtiesSectionProps) {
  return (
    <div className="pb-6">
      <MenuSection title="Seafood Specialties" items={seafood} bgColor={bgColor} />
    </div>
  );
}