import Header from "@/components/Header";
import Services from "@/components/services";
import React from "react";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="page-background min-h-screen pb-[100px]">
      <Header />
      <Services />
    </div>
  );
}

export default Page;
