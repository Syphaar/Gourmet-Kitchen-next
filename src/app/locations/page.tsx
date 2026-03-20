import PageHeader from "@/components/PageHeader";
import LocationDetails from "../sections/location/locationDetails";

export default function ContactPage() {
  return (
    <main>

        {/* Page Header */}
        <PageHeader title="Location" />
        <LocationDetails />
    </main>
  );
}