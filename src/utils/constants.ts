export const isProduction = __ENV.NODE_ENV === 'production';

export const BASE_URL = isProduction ? 'prod_url' : 'http://localhost:30001';

// TODO - MUST SPECIFY THE BASE_URL FOR PRODUCTION
