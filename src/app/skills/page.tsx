import React from "react";

interface Props {}
import Skills from "@/components/skills";
import Header from "@/components/Header";
function Page(props: Props) {
  const {} = props;

  return (
    <div className="page-background min-h-screen">
      <Header />
      
      <Skills />
    </div>
  );
}

export default Page;
