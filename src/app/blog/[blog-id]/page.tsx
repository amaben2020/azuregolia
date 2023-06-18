export default function BlogWithId({ params }: any) {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        The folder name becomes the key BLOG PAGE {params["blog-id"]}
      </div>
    </main>
  );
}
