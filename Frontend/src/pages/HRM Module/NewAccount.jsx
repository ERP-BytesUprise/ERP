import "./styles/NewAccount.css";

const NewAccount = () => {
  return (
    <div className="NewAccountCont">
      <div className="NewAcocuntForm">
        <h1>Welcome to ERP.daily</h1>
        <form className="NewAccountForm">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Choose a password" />
          <input type="password" placeholder="Confirm your password" />
          <p className="password-rules">
            Password must be at least 8 characters. Passwords must match.
          </p>
          <button type="submit" className="activate-btn">
            Activate your account
          </button>
        </form>
      </div>
      <div className="FormCont"></div>
    </div>
  );
};

export default NewAccount;
