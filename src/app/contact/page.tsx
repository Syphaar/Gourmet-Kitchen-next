import PageHeader from "@/components/PageHeader";
import ContactInfo from "../sections/contact/contactInfo";
import OpeningHours from "../sections/contact/openingHours";
import ContactMap from "../sections/contact/contactMap";
import ContactForm from "../sections/contact/contactForm";
import ForQuestions from "../sections/contact/forQuestions";

export default function ContactPage() {
  return (
    <main>
        {/* Page Header */}
        <PageHeader title="Contact Us" />

        <ContactInfo />
        <OpeningHours />
        <ContactMap />
        <ForQuestions />
        <ContactForm />
    </main>
  );
}