// "use client";

// if this file is not a client, you could treat it like an axios function
const Faq = async () => {
  const delayLoad = (ms: number) => new Promise((res) => setTimeout(res, ms));

  await delayLoad(3000);

  return <div>Dynamic Faq 1</div>;
};

export default Faq;
