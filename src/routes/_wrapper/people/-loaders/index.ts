import {PaginatedPeople} from "../../../../types/people.ts";

export const peopleLoader = async (page: number, size: number) => {
  const response = await fetch(`http://localhost:3000/people?_page=${page}&_per_page=${size}`);
  return response.json() as Promise<PaginatedPeople>;
}