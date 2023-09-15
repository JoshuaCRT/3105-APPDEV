import * as yup from "yup";

export const userSchema = yup.object().shape({
    Username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required(),
    city: yup.string().required(),
    Firstname: yup.string().required(),
    Lastname: yup.string().required(),
    Birthday: yup.date().required(),
    Age: yup.number().positive().integer().required(),
  });
  