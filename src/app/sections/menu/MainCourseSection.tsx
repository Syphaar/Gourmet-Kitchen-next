import MenuSection from "./MenuSection";

// CLOUDINARY IMAGES
const img = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005204/jollof_rice_oodehb.jpg";
const img2 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005205/fried_rice_wncrfv.jpg";
const img3 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005203/coconut_rice_r1znsr.jpg";
const image = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005231/rice_and_stew_ehg4c0.jpg";
const img4 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005206/melonsoup_shsqfo.jpg";
const img5 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005202/afang_eonmvd.jpg";
const img6 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005205/fried_fish_bhffqt.jpg";
const img7 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005203/chicken_ujlz7c.jpg";
const img8 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005202/beef_cbept1.jpg";
const img9 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005203/eba_iml82g.jpg";
const img10 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005201/fufu_exafor.jpg";
const img11 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005202/goatmeat_pepper_soup_b86ijs.jpg";

const mains = [
  {
    name: "Jollof Rice",
    description: "Classic Nigerian jollof rice served with spicy grilled chicken",
    price: "₦3,500",
    image: img,
  },
  {
    name: "Fried Rice",
    description: "Golden fried rice with mixed vegetables and diced fried chicken",
    price: "₦3,200",
    image: img2,
  },
  {
    name: "Coconut Rice",
    description: "Golden fried rice with mixed vegetables and diced fried chicken",
    price: "₦3,200",
    image: img3,
  },
  {
    name: "Rice and Stew",
    description: "Golden fried rice with mixed vegetables and diced fried chicken",
    price: "₦3,500",
    image: image,
  },
  {
    name: "Egusi Soup",
    description: "Traditional egusi soup served with smooth pounded yam",
    price: "₦4,500",
    image: img4,
  },
  {
    name: "Afang Soup",
    description: "Rich ogbono soup with assorted meats and fufu",
    price: "₦4,500",
    image: img5,
  },
  {
    name: "Goatmeat Pepper Soup",
    description: "Spicy crayfish soup served with yam or plantain",
    price: "₦4,700",
    image: img11
  },
  {
    name: "Fried Fish",
    description: "Golden fried plantains served with seasoned pan-fried tilapia",
    price: "₦2,000",
    image: img6,
  },
  {
    name: "chicken",
    description: "Soft yam cubes cooked in a savory tomato and palm oil sauce",
    price: "₦2,800",
    image: img7,
  },
  {
    name: "Beef",
    description: "Soft yam cubes cooked in a savory tomato and palm oil sauce",
    price: "₦2,800",
    image: img8,
  },
  {
    name: "Eba",
    description: "Soft yam cubes cooked in a savory tomato and palm oil sauce",
    price: "₦1,500",
    image: img9,
  },
   {
    name: "Fufu",
    description: "Soft yam cubes cooked in a savory tomato and palm oil sauce",
    price: "₦1,500",
    image: img10,
  },
];

interface MainCoursesSectionProps { bgColor?: "white" | "gray-50" | "bg-[#1A1A1A]"; }

export default function MainCoursesSection({ bgColor = "white" }: MainCoursesSectionProps) {
  return (
    <MenuSection title="Main Courses" items={mains} bgColor={bgColor} />
  );
}
