import Link from "next/link";
import { fetchCars } from "../helpers/fetcher";

const Car = async ({ params }: { params: { make: string } }) => {
  const cars = await fetchCars(params.make);
  console.log(params);
  return (
    <div className=" flex">
      {cars?.map((e: TCars) => (
        <Link
          href={`/cars/${e.make}`}
          key={e.class}
          className="shadow-md border ml-0 m-5 p-10 align-middle cursor-pointer"
        >
          <h1>{e.model}</h1>
          <p>{e.city_mpg}</p>
          <p>{e.cylinders}</p>
          <p>{e.displacement}</p>
          <p>{e.fuel_type}</p>
        </Link>
      ))}
    </div>
  );
};

export default Car;
