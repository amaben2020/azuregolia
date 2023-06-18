"use client";

import { useRouter } from "next/navigation";

const Faq = () => {
  const route = useRouter();

  console.log(route);
  return <div>Dynamic Faq 1</div>;
};

export default Faq;
