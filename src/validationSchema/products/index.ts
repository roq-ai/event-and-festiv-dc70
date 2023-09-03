import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().integer().required(),
  availability: yup.number().integer().required(),
  organizer_id: yup.string().nullable().required(),
});
