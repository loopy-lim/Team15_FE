import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import { urlencoded, json } from "express";
import * as env from "dotenv";
env.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["http://localhost:5173", process.env.VITE_FRONT_HOST],
    credentials: true,
  });
  app.use(json({ limit: "50mb" }));
  app.use(urlencoded({ extended: true, limit: "50mb" }));
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
