import postgres from "postgres";

const db = postgres(process.env.NEON_URL,{
    ssl: require,
  });
export default db;