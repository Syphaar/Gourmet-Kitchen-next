import PageHeader from "@/components/PageHeader";
import SignatureExperience from "../sections/about/signatureExperience";
import OurStory from "../sections/about/ourStory";
import OurTeam from "../sections/about/ourTeam";
import BookCTA from "../sections/about/bookCTA";

export default function AboutPage() {
  return (
    <main>

      {/* Page Header */}
      <PageHeader title="About Gourmet" />

      <SignatureExperience />
      <OurStory />
      <OurTeam />
      <BookCTA />
    </main>
  );
}