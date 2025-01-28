import Contact from "@/components/Contact";
import Header from "@/components/Header";
import React from "react";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="page-background min-h-screen">
      <Header />
      <Contact />
    </div>
  );
}

export default Page;
