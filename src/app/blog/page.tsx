import BlogLayout from "./Layout";

export default function Blog() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <BlogLayout> ALL BLOG PAGE</BlogLayout>
      </div>
    </main>
  );
}
