import "./login.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import Field from "../../components/Field/Field";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

import Logo from "../../assets/snof-logo.png";
import { FirstEllipse } from "./../../assets/svg";
import { SecondEllipse } from "./../../assets/svg";

export default function Login() {
  const ref = useRef(null);
  useEffect(() => {
    const passwordHide = document.querySelector(".password-hide-icon");
    const passwordShow = document.querySelector(".password-show-icon");
    const passwordField = document.querySelector("#orgPasswd");

    //Show and Hide password

    passwordShow?.addEventListener("click", () => {
      passwordShow.classList.add("password-hide-icon");
      passwordShow?.classList.remove("active");
      passwordField?.removeAttribute("type");
      passwordField?.setAttribute("type", "text");
      passwordHide?.classList.remove("password-hide-icon");
      passwordHide?.classList.add("active");
    });

    passwordHide?.addEventListener("click", () => {
      passwordHide.classList.add("password-hide-icon");
      passwordHide?.classList.remove("active");
      passwordField?.removeAttribute("type");
      passwordField?.setAttribute("type", "password");
      passwordShow?.classList.remove("password-hide-icon");
      passwordShow?.classList.add("active");
    });
  }, []);

  const emailLabel = "Email";
  const emailType = "email";
  const emailName = "orgEmail";
  const emailId = "orgEmail";

  const passwdLabel = "Password";
  const passwdType = "password";
  const passwdName = "passwd";
  const passwdId = "orgPasswd";

  const loginButtonValue = "Login";
  return (
    <div className="login">
      <div className="vectors">
        <FirstEllipse />
        <SecondEllipse />
      </div>

      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="SNoF-logo" />
        </Link>
      </div>
      <h2>Login into your Organisation account</h2>
      <form action="#" method="post">
        <Field
          labelName={emailLabel}
          type={emailType}
          name={emailName}
          id={emailId}
        />
        <Field
          labelName={passwdLabel}
          type={passwdType}
          name={passwdName}
          id={passwdId}
        />
        <div className="password-hide">
          <FontAwesomeIcon className="password-show-icon active" icon={faEye} />
          <FontAwesomeIcon className="password-hide-icon" icon={faEyeSlash} />
        </div>
        <div className="">
          <SubmitButton buttonValue={loginButtonValue} />
        </div>
      </form>
    </div>
  );
}
