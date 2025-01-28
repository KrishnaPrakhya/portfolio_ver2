import React from "react";
import About from "@/components/About";
import Header from "@/components/Header";
interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="page-background min-h-screen">
      <Header />
      <About />
    </div>
  );
}

export default Page;
