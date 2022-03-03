import * as yup from 'yup';

export const userFormSchema = yup.object().shape({
  name: yup.string().required('nome é obrigatorio'),
  code: yup.string().required('código é obrigatorio'),
  birthDate: yup.date().required('idade é obrigatorio'),
});
