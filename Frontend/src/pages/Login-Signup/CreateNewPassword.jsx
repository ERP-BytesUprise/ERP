import "./css/CreateNewPassword.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const CreateNewPassword = () => {
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
      <div className="ResetForm">
        <p className="Resettitle">
          Welcome to{" "}
          <span className="Applogo">
            <span className="letterE">E</span>
            <span className="letterR">R</span>
            <span className="letterP">P</span>
            <span className="daily">.daily</span>
          </span>
        </p>
        <form className="ActivateAccount" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email
            <input type="email" placeholder="Email" {...register("email")} />
            <p className="Errors">{errors.email?.message}</p>{" "}
          </label>
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
            Confirm New Password
            <input
              type="password"
              placeholder="Re-enter your new password"
              {...register("confirmpassword")}
            />
            <p className="Errors">{errors.confirmpassword?.message}</p>{" "}
            {/* Error message*/}
          </label>
          <button type="submit" className="activatebtn">
            Reset Password
          </button>
        </form>
      </div>
      <div className="FormCont"></div>
    </div>
  );
};

export default CreateNewPassword;
