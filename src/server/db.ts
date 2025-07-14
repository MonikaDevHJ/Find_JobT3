// ✅ Import PrismaClient class from the generated Prisma package
// 📞 This helps us talk to the database
import { PrismaClient } from "@prisma/client";

// ✅ Import env config (safe version of process.env)
// 📦 It holds things like NODE_ENV, DATABASE_URL
import { env } from "~/env";

// ✅ Create a function to make a new Prisma client
// 👷 In dev, it logs all the DB queries and warnings to help us debug
const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development"
        ? ["query", "error", "warn"]  // 🐞 More logs during development
        : ["error"],                  // 🤫 Less noise in production
  });

// ✅ Use globalThis to store Prisma client (only in dev mode)
// 🧠 So that Hot Reloading in dev doesn't create multiple clients
const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

// ✅ Export our reusable Prisma client as `db`
// 🧪 If already created (in global), use it. Otherwise create a new one
export const db = globalForPrisma.prisma ?? createPrismaClient();

// ✅ Save the client in globalThis — only in dev mode
// 🔁 So it gets reused instead of re-created on every file change
if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
