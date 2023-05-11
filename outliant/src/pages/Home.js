import React from "react";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
export default function Home() {
  return (
    <div className="bg-white">
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  );
}
