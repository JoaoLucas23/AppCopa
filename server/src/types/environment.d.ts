export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB: string
            DB_USER: string
            DB_PASSWORD:string
            DB_HOST:string
            SECRET_KEY:string
            JWT_EXPIRATION:string
            NODE_ENV:string
            APP_URL:string
        }
    }
}