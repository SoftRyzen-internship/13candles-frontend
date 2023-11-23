import { IBusinessInput } from '@/types';
import { object, string } from 'yup';

export function makeSchema(inputs: IBusinessInput[]): any {
  const formSchema: any = object({
    name: string()
      .trim()
      .required(inputs[0].validationData[2].propMessage)
      .matches(
        RegExp(inputs[0].validationData[3].propValue),
        inputs[0].validationData[3].propMessage,
      )
      .min(
        Number(inputs[0].validationData[0].propValue),
        inputs[0].validationData[0].propMessage,
      )
      .matches(
        RegExp(inputs[0].validationData[4].propValue),
        inputs[0].validationData[4].propMessage,
      )
      .max(
        Number(inputs[0].validationData[1].propValue),
        inputs[0].validationData[1].propMessage,
      ),
    phone: string()
      .trim()
      .required(inputs[1].validationData[2].propMessage)
      .matches(
        RegExp(inputs[1].validationData[3].propValue),
        inputs[1].validationData[3].propMessage,
      )
      .min(
        Number(inputs[1].validationData[0].propValue),
        inputs[1].validationData[0].propMessage,
      )
      .matches(
        RegExp(inputs[1].validationData[4].propValue),
        inputs[1].validationData[4].propMessage,
      )
      .max(
        Number(inputs[1].validationData[1].propValue),
        inputs[1].validationData[1].propMessage,
      ),
    email: string().trim().email(inputs[2].validationData[0].propMessage),
  });
  return formSchema;
}

// "inputs": [
//         {
//           "name": "name",
//           "label": "Your name *",
//           "placeholder": "Ivanov Ivan",
//           "type": "text",
//           "validationData": {
//             "minLength": {
//               "propValue": 2,
//               "propMessage": "no less than 2 characters"
//             },
//             "maxLength": {
//               "propValue": 70,
//               "propMessage": "no more than 70 characters"
//             },
//             "required": {
//               "propValue": 0,
//               "propMessage": "required field"
//             },
//             "allowedCharacters": {
//               "propValue": "^[a-zA-Zа-яА-ЯЇїІіЄєҐґ'\\s-]*$",
//               "propMessage": "contains unresolved character"
//             },
//             "notAllowedCombinations": {
//               "propValue": "^(?!.*(\\s-|-\\s|--)).*$",
//               "propMessage": "unresolved combination dash and space"
//             }
//           }
//         },
//         {
//           "name": "phone",
//           "label": "Your phone number *",
//           "placeholder": "+380981234567",
//           "type": "text",
//           "validationData": {
//             "minLength": {
//               "propValue": 12,
//               "propMessage": "no less than 11 numbers "
//             },
//             "maxLength": {
//               "propValue": 13,
//               "propMessage": "no more than 12 numbers "
//             },
//             "required": {
//               "propValue": 0,
//               "propMessage": "required field "
//             },
//             "beginWithPlus": {
//               "propValue": "^\\+.*$",
//               "propMessage": "must begin with + "
//             },
//             "consistsOfNumbers": {
//               "propValue": "^\\+\\d*$",
//               "propMessage": "includes only numbers "
//             }
//           }
//         },
//         {
//           "name": "email",
//           "label": "Your E-mail",
//           "placeholder": "your@mail.com",
//           "type": "email",
//           "validationData": {
//             "yupDefaultEmailRules": {
//               "propValue": 0,
//               "propMessage": "invalid email "
//             }
//           }
//         }
//       ],

// export function makeSchema(arrayInputs: IBusinessInput[]): any {
//   const formSchema = object({
//     name: string()
//       .trim()
//       .min(
//         Number(arrayInputs[0].validationData[0].propValue),
//         arrayInputs[0].validationData[0].propMessage,
//       ),
//     phone: string()
//       .trim()
//       .min(
//         Number(arrayInputs[1].validationData[0].propValue),
//         arrayInputs[1].validationData[0].propMessage,
//       ),
//     email: string().trim().email(arrayInputs[2].validationData[0].propMessage),
//   });
//   return formSchema;
// }
