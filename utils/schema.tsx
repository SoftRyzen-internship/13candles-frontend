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
      )
      .matches(
        RegExp(inputs[0].validationData[5].propValue),
        inputs[0].validationData[5].propMessage,
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
