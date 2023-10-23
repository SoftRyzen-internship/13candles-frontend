import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({ locale }) => ({
    messages : {
   ...(await import(`./dictionaries/${locale}/login.json`)).default,
   ...(await import(`./dictionaries/${locale}/home.json`)).default
 }
 }));