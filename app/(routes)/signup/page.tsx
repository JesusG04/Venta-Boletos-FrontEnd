import SignUpForm from "../../../components/pages/signup/SignUpForm";
import BreadCrumSingle from "../../../components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Niteo - Sign up",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const signUp = () => {
  return (
    <>
      <BreadCrumSingle page="Sign up" />
      <SignUpForm />
    </>
  );
};

export default signUp;
