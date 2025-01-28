import Header from "@/components/Header";
import SmoothLandingPage from "@/components/SmoothScroll";
import React from "react";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div>
      <Header />
      <div className="w-screen h-screen text-8xl text-center flex justify-center items-center">
        <h1>My Works</h1>
      </div>
      <SmoothLandingPage />
    </div>
  );
}

export default Page;
