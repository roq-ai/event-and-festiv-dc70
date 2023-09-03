import * as yup from 'yup';

export const festivalValidationSchema = yup.object().shape({
  title: yup.string().required(),
  date: yup.date().required(),
  location: yup.string().required(),
  description: yup.string().required(),
  organizer_id: yup.string().nullable().required(),
});
