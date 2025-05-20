// import { PrismaClient } from "@prisma/client";

// export const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = db;
// }

// lib/prisma.js

let prisma;

export function getDb() {
  if (!prisma) {
    const { PrismaClient } = require("@prisma/client");
    prisma = globalThis.prisma || new PrismaClient();

    if (process.env.NODE_ENV !== "production") {
      globalThis.prisma = prisma;
    }
  }
  return prisma;
}

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.
