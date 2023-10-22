import { setupWorker } from "msw";
import { handler } from "./handlers/index.js";

export const worker = setupWorker(...handler);
