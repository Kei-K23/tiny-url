import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

config({ path: ".env.local" });

const sql = neon(process.env.DB_CONNECTION_URL!);
const db = drizzle(sql);

const main = async () => {
  try {
    // Your database seeding
  } catch (error) {
    console.error("Error during seed:", error);
    process.exit(1);
  }
};

main();
