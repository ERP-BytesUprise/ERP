import "./css/CreateNewPassword.css";

const NewPassword = () => {
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
        <form className="ActivateAccount">
          <label>
            Email
            <input type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Password must be at least 8 characters"
            />
          </label>
          <label>
            {" "}
            New Password
            <input type="password" placeholder="Enter your new password" />
          </label>
          <label>
            {" "}
            Confirm New Password
            <input type="password" placeholder="Re-enter your new password" />
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

export default NewPassword;
