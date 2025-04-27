
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";
import RegisterFormData from "@/components/pages/form-register/RegisterDataForm";
import PublicRouter from "@/components/protected/PublicRouter";

export const metadata: Metadata = {
  title:
    "Register",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const foromRegister = () => {
  return (
    <>
      <PublicRouter>
        <BreadCrumSingle page="Register" />
        <RegisterFormData />
      </PublicRouter>
    </>
  );
};

export default foromRegister;
