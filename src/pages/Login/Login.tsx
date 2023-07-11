import "./login.css";

import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import Field from "../../components/Field/Field";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

import Logo from "../../assets/snof-logo.png";
import { FirstEllipse } from "./../../assets/svg";
import { SecondEllipse } from "./../../assets/svg";
import { toast } from "react-toastify";

export default function Login() {
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
  const emailType = "email"
  const emailName = "email";
  const emailId = "email";

  const passwdLabel = "Password";
  const passwdType = "password";
  const passwdName = "password";
  const passwdId = "password";

  const loginButtonValue = "Login";
  const navigate = useNavigate()

  const [formData, setFormData] = useState({email: "", password: ""})
  

  const handleFormSubmit = async (e:any)=>{
    e.preventDefault()

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {"Content-Type": "application/json"}
    })

    const data = await res.json()

    if(data.data) {
      return navigate("/dashboard")
    }
    if(data.message === "Invalid Email or Password") {
      toast.error("Login failed")
    }

  }
  
  const handleChange = (e: any) => {
    const {name, value} = e.target

    setFormData((oldData: any) => {
      return {
        ...oldData,
        [name] : value
      }
    })
  }

  return (
    <div className="login">
      <div className="vectors">
        <FirstEllipse />
        <SecondEllipse />
      </div>

      <div className="logo">
        <img src={Logo} alt="SNoF-logo" />
      </div>
      <h2>Login into your Organisation account</h2>
      <form onSubmit={handleFormSubmit}>
        <Field
          labelName={emailLabel}
          type={emailType}
          name={emailName}
          id={emailId}
          value={formData.email}
          onChange={handleChange}
        />
        <Field
          labelName={passwdLabel}
          type={passwdType}
          name={passwdName}
          id={passwdId}
          value={formData.password}
          onChange={handleChange}
        />
        <div className="logi">
          <SubmitButton buttonValue={loginButtonValue} />
        </div>
      </form>
    </div>
  );
}