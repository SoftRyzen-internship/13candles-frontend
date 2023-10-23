import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({ locale }) => ({
    messages : {
   ...(await import(`./dictionaries/${locale}/home_page.json`)).default,
   ...(await import(`./dictionaries/${locale}/offer_contract.json`)).default,
   ...(await import(`./dictionaries/${locale}/delivery_and_payment.json`)).default,
   ...(await import(`./dictionaries/${locale}/rules_of_use.json`)).default,
   ...(await import(`./dictionaries/${locale}/warranties_and_returns.json`)).default,
 }
 }));