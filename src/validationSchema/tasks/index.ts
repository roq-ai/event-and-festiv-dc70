import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  deadline: yup.date().required(),
  progress: yup.number().integer().required(),
  organizer_id: yup.string().nullable().required(),
});
