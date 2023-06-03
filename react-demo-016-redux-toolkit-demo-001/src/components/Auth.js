import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useRef } from "react";

const Auth = () => {
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    // check for form validation
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (
      !email.includes("@") ||
      email.trim().length < 5 ||
      password.trim().length < 5
    ) {
      alert("Enter Valid Email and Password");
      return;
    }
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailInputRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={passwordInputRef} type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
