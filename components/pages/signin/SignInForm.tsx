
import LoginForm from "@/components/auth/LoginForm";

const SignInForm = () => {
  return (
    <section className="signin__section pr-24 pl-24 pb-80">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6">
            <div className="event__createcover checkout__wrapper">
              <h3 className="white white text-center mb-30">Iniciar Sesión</h3>
                <LoginForm></LoginForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
