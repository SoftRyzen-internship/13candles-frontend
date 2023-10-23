import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({ locale }) => ({
    messages : {
   ...(await import(`./messages/${locale}/login.json`)).default,
   ...(await import(`./messages/${locale}/home.json`)).default
 }
 }));