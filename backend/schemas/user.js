import { primaryKey } from "drizzle-orm/gel-core";
import { serial, varchar } from "drizzle-orm/mysql-core";
import { pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user",{
    id:serial("id").primaryKey(),
    username:varchar("username",{length:30}).notNull(),
    email:varchar("email").notNull().unique(),
    password:varchar("password").notNull()
})

