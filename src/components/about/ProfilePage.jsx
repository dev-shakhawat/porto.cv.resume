
import React from "react";
import ContactHeader from "./ContactHeader";
import AboutSection from "./AboutSection";

function ProfilePage() {
  return (
    <main className="flex flex-col items-center w-full">
      <ContactHeader />
      <AboutSection />
    </main>
  );
}

export default ProfilePage;
