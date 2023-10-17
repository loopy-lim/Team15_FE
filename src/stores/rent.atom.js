import { atom } from "jotai";

/** @type {import("jotai").PrimitiveAtom<import('react-day-picker').DateRange | undefined>} */
export const rentDateAtom = atom({
  from: new Date(),
  to: null,
});
