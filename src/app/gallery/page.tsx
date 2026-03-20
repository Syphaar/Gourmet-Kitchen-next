import PageHeader from "@/components/PageHeader";
import GalleryGrid from "../sections/gallery/galleryGrid";
import FeaturedEvent from "../sections/gallery/featuredEvent";
import GalleryGridAlt from "../sections/gallery/galleryGridAlt";

export default function GalleryPage() {
  return (
    <main>

      {/* Page Header */}
      <PageHeader title="Gallery" />

      <GalleryGrid />
      {/* <GalleryHighlights /> */}
      <FeaturedEvent />
      <GalleryGridAlt />
    </main>
  );
}