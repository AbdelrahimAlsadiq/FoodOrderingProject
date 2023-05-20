import React from "react";
import { freshVegetables } from "../assets";
import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import FormButton from "../components/FormButton";
import Registration from "../components/Registration";
import { loginValidation } from "../FormValidation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { extractAuthError } from "../utils/customErrors";

export default function Login() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(loginValidation());
  const navigate = useNavigate();

  async function onSubmit({ email, password }) {
    const signedIn = await signInWithEmailAndPassword(email, password);
    if (signedIn) navigate("/");
  }
  return (
    <Registration image={freshVegetables}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-5 h-full"
      >
        <FormInput
          name={"email"}
          register={register}
          errorMessage={errors?.email?.message}
        />
        <FormInput
          name={"password"}
          register={register}
          type={"password"}
          errorMessage={errors?.password?.message}
        />
        <FormButton text={"Login"} loading={loading} />
        <p className="text-sm">
          Want to join us?
          <Link
            className="text-light-yellow text-sm hover:border-b h-full ml-1"
            to={"/signup"}
          >
            Sign Up
          </Link>
        </p>
        {error && (
          <p className="text-sm text-red-300 ml-2 h-2">
            {extractAuthError(error.message)}
          </p>
        )}
      </form>
    </Registration>
  );
}
