import React from "react";

type TChildren = {
  children: React.ReactNode;
};

const BlogLayout = ({ children }: TChildren) => {
  return <div className="w-full p-6 border">{children}</div>;
};

export default BlogLayout;
