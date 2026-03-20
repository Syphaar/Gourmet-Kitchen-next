'use client';

import AboutPreview from "./sections/home/AboutPreview";
import Hero from "./sections/home/hero";
import MenuPreview from "./sections/home/MenuPreview";
import Testimonials from "./sections/home/Testimonials";
import FeaturedMenuCTA from "./sections/home/featuredMenuItems";
import HighlightsSection from "./sections/home/highlightsSection";
import ReservationCTA from "./sections/home/reservationCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HighlightsSection />
      <AboutPreview />
      <MenuPreview />
      <Testimonials />
      <FeaturedMenuCTA />
      <ReservationCTA />
    </>
  );
}