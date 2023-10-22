import { atom } from "jotai";

export const rentDateAtom = atom({
  from: new Date(),
  to: null,
});
