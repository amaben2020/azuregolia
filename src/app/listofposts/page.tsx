import Image from "next/image";

//@ts-nocheck
const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  return res.json();
};

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  return res.json();
};

const getDogsData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
  });

  return res.json();
};

// make react compt async
// retrieve the data
export default async function ListOfPosts() {
  const [posts, dogs, users] = await Promise.all([
    getPostsData(),
    getDogsData(),
    getUsersData(),
  ]);
  console.log(dogs);

  return (
    <div>
      {posts.map((p: any) => (
        <>{p.title}</>
      ))}

      <div>
        <Image alt="i" src={dogs.message} width={900} height={300} />
      </div>

      {users.map((u: any) => (
        <div key={u.name}>{u.name}</div>
      ))}
    </div>
  );
}

// SERVER
// rules: you can't import server component in client
// 2: use when passing sensitive info i.e tokens, api keys etc
// 3: accessing backend services and resources
// 4: large dependencies

// CLIENT
// 1. you use react hooks
// 2. you use event listeners
// 3. custom hooks that depend on state or effects
