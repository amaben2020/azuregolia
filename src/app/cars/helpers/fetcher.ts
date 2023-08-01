import axios from "axios";

export const fetchCars = async (searchParam?: string) => {
  try {
    const { data }: { data: Awaited<TCars[]> } = await axios.get(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`,

      {
        params: { model: !searchParam ? "camry" : searchParam },
        headers: {
          // "X-RapidAPI-Key": process.env.RAPID_CAR_API_KEY,
          "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
      },
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
