import { betterAuth, BetterAuthError } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import Database from "better-sqlite3";
import path from "path";


const dbPath = path.join(process.cwd(), "pocketbase", "pb_data", "data.db");
 
export const auth = betterAuth({
    user: {
        modelName: 'better_users'
    },
    emailAndPassword: { enabled: false },
    rateLimit: { enabled: false },
    database: new Database(dbPath),
    rejectUnauthenticated: false,
    account: {
        accountLinking: {
            enabled: true,
            allowDifferentEmails: true,
            trustedProviders: ["credential", "microsoft"]
        }
    },
    advanced: {
        "useSecureCookies" : false, // Set to true in production
        "defaultCookieAttributes": {
            "secure": false, // Set to true in production
            "sameSite": "lax",
            "httpOnly": false,
        }
    },
    trustedOrigins: [
        "https://10.20.200.95:91",
        "http://localhost:3000",
        "https://localhost:3000",
        "http://172.25.21.21:3000",
        "http://127.0.0.1:3000"
    ],
    plugins: [
        nextCookies(),
    ],
    socialProviders: {
        microsoft: { 
            clientId: process.env.MICROSOFT_CLIENT_ID as string, 
            clientSecret: process.env.MICROSOFT_SECRET_VALUE as string, 
            tenantId: process.env.MICROSOFT_TENANT_ID, 
            prompt: "select_account",
        }, 
    },
});