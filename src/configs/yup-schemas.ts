import * as Yup from 'yup';

export const emptySchema = Yup.object();

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
});

export const ProfileEditModalSchema = Yup.object().shape({
  fullName: Yup.string().required('Please enter your full name'),
});

export const messagesSchema = Yup.object().shape({
  message: Yup.string().min(2, 'Too Short!').max(1000, 'Too Long!').required('Required'),
});
