import {SingleUser} from "../types/user.ts";

export const useUsers = () => {
  const getUsers = (): SingleUser[] => [
    {id: 1, name: 'Alex', lastName: 'John', age: 15},
    {id: 2, name: 'John', lastName: 'Smith', age: 25},
    {id: 3, name: 'Maria', lastName: 'Carry', age: 40},
    {id: 4, name: 'Anna', lastName: 'Newton', age: 33},
  ];

  return {
    getUsers,
  }
}