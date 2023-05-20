import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
export function signupValidation() {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Please enter your email"),
    password: Yup.string()
      .required("Password is mendatory")
      .min(6, "Password must be at 6 char long"),
    confirmPwd: Yup.string().required("Confirm password is mendatory").oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });
  return { resolver: yupResolver(formSchema) };
}
export function loginValidation() {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Please enter your email"),
    password: Yup.string()
      .required("Password is mendatory")
      .min(6, "Password must be at 6 char long"),
  });
  return { resolver: yupResolver(formSchema) };
}
