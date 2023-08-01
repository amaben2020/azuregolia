import Link from "next/link";
import { fetchCars } from "./helpers/fetcher";

const Cars = async () => {
  const cars = await fetchCars("", 12);
  return (
    <div className=" flex">
      {cars?.map((e: TCars) => (
        <Link
          href={`/cars/${e.model}`}
          key={e.class}
          className="shadow-md border ml-0 m-5 p-6 align-middle cursor-pointer"
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

export default Cars;
