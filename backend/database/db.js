import {Pool} from "pg"
import {drizzle} from "drizzle-orm/node-postgres"
import dotenv from "dotenv"
dotenv.config()
const pool = new Pool({
    dbcredentials:process.env.DB_CREDENTIALS
})

export default db = drizzle(pool)