import { atom } from "jotai";
import { nanoid } from "nanoid";

type CatType = {
  name: string;
  age: string;
  id: string;
};

const catList = [
  {
    name: "Snowball",
    age: "3",
    id: nanoid(),
  },
  {
    name: "Cotton",
    age: "2",
    id: nanoid(),
  },
  {
    name: "Purrfect",
    age: "1",
    id: nanoid(),
  },
  {
    name: "Garfield",
    age: "1",
    id: nanoid(),
  },
];

export const catAtom = atom(catList);
export const updatedCat = atom<CatType | null>(null);
export const catLengthAtom = atom((get) => get(catAtom).length);
