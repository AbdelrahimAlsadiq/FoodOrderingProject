import React from "react";
import Registration from "../components/Registration";
import { signUpBg } from "../assets";
import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { Link, useNavigate } from "react-router-dom";
import { signupValidation } from "../FormValidation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { extractAuthError } from "../utils/customErrors";

export default function SignUp() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(signupValidation());
  const navigate = useNavigate();
  async function onSubmit({ email, password }) {
    const signedUp = await createUserWithEmailAndPassword(email, password);
    if (signedUp) navigate("/");
  }
  return (
    <Registration image={signUpBg}>
      <form
        className="flex flex-col justify-center items-center gap-5 h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          register={register}
          name={"email"}
          type={"email"}
          errorMessage={errors?.email?.message}
        />
        <FormInput
          register={register}
          name={"password"}
          type={"password"}
          errorMessage={errors?.password?.message}
        />
        <FormInput
          register={register}
          name={"confirmPwd"}
          type={"password"}
          errorMessage={errors?.confirmPwd?.message}
        />
        <FormButton text={"Sign up"} loading={loading} />
        <p className="text-sm">
          Already signed up?
          <Link
            className="text-light-yellow text-sm hover:border-b h-full ml-1"
            to={"/login"}
          >
            login
          </Link>
        </p>{" "}
        {error && (
          <p className="text-sm text-red-300 ml-2 h-2">
            {extractAuthError(error.message)}
          </p>
        )}
      </form>
    </Registration>
  );
}
