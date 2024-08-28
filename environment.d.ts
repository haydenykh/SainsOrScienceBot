declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN: string;
            CLIENT_SECRET: string;
            GITHUB_TOKEN: string;
        }
    }
}

export {};
