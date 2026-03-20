import PageHeader from "@/components/PageHeader";
import StartersSection from "../sections/menu/StartersSection";
import MainCourseSection from "../sections/menu/MainCourseSection";
import SeafoodSection from "../sections/menu/SeafoodSection";
import DrinksSection from "../sections/menu/DrinksSection";

export default function MenuPage() {
  return (
    <main>

      {/* Page Header */}
      <PageHeader title="Our Menu" />

      {/* Menu Sections */}
      <section className=" bg-white">
        <div className="">
          <StartersSection />
          <MainCourseSection />          
          <SeafoodSection />
          <DrinksSection />
        </div>
      </section>

    </main>
  );
}