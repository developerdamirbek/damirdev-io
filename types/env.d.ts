declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_URL: string
    REACT_APP_DORIM_ENVIRONMENT: 'dev' | 'stage' | 'prod'
  }
}
