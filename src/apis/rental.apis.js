import { https } from "../functions/axios.js";
import { RentalDto } from "./dtos/rental.dto.js";

export const getAllRental = async () => {
  const rentals = await https.get("/rental");
  if (rentals.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return rentals.response.map((rental) => new RentalDto(rental));
};
