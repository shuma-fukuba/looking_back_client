/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_BASE_URI: string
    readonly VITE_APP_FAST_API_URI: string
    readonly VITE_APP_FAST_API_URI: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
