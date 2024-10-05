import "./css/ActivateAccount.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ActivateAccount = () => {
  const Validation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validation), // <-- Using the Yup schema for validation
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="NewAccountCont">
      <div className="NewAccountForm">
        <p className="Gettingtitle">
          Welcome to{" "}
          <span className="Applogo">
            <span className="letterE">E</span>
            <span className="letterR">R</span>
            <span className="letterP">P</span>
            <span className="daily">.daily</span>
          </span>
        </p>
        <form className="ActivateAccount" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="account"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <label>
            Create a password
            <input
              type="password"
              placeholder="Password must be at least 8 characters"
              {...register("password")}
            />
            <p className="Errors">{errors.password?.message}</p>{" "}
            {/* Error message*/}
          </label>
          <label>
            {" "}
            Confirm your password
            <input
              type="password"
              placeholder="Re-enter your password"
              {...register("confirmpassword")}
            />
            {/* Error message*/}
            <p className="Errors">{errors.confirmpassword?.message}</p>{" "}
          </label>
          <button type="submit" className="activatebtn">
            Activate your account
          </button>
        </form>
      </div>
      <div className="FormCont"></div>
    </div>
  );
};

export default ActivateAccount;
