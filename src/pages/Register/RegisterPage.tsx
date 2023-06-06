import { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Field from "../../components/Field/Field";
import { FirstEllipse } from "./../../assets/svg";
import { SecondEllipse } from "./../../assets/svg";
import Logo from "./../../assets/snof-logo.png";
import "./RegisterPage.css";

export default function RegisterPage() {
  const ref = useRef(null);
  useEffect(() => {
    const prevBtns = document.querySelectorAll(".btn-prev");
    const nextBtns = document.querySelectorAll(".btn-next");
    const progress: any = document.getElementById("progress");
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");

    const passwordHide = document.querySelector(".password-hide-icon");
    const passwordShow = document.querySelector(".password-show-icon");
    const passwordField = document.querySelector("#orgPasswd");

    //Show and Hide password

    passwordShow?.addEventListener("click", () => {
      passwordShow?.classList.add("password-hide-icon");
      passwordShow?.classList.remove("active");
      passwordField?.removeAttribute("type");
      passwordField?.setAttribute("type", "text");
      passwordHide?.classList.remove("password-hide-icon");
      passwordHide?.classList.add("active");
    });

    passwordHide?.addEventListener("click", () => {
      passwordHide?.classList.add("password-hide-icon");
      passwordHide?.classList.remove("active");
      passwordField?.removeAttribute("type");
      passwordField?.setAttribute("type", "password");
      passwordShow?.classList.remove("password-hide-icon");
      passwordShow?.classList.add("active");
    });

    //Track movement on the progress bar
    let formStepsNum = 0;

    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps(formSteps, formStepsNum);
        updateProgressBar(progressSteps, formStepsNum);
      });
      const progressActive = document.querySelectorAll(".progress-step-active");
      console.log(progressActive);

      progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
      progress.style.backgroundColor = "rgb(67, 110, 122)";
    });

    prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps(formSteps, formStepsNum);
        updateProgressBar(progressSteps, formStepsNum);
      });
    });
  }, []);

  function updateFormSteps(formSteps: any, formStepsNum: any) {
    formSteps.forEach((formStep: any) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
  }

  function updateProgressBar(progressSteps: any, formStepsNum: any) {
    progressSteps.forEach((progressStep: any, i: any) => {
      if (i < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
  }

  const submitButtonValue = "Sign Up";
  const type = "text";
  const orgName = "orgName";
  const id = "orgName";
  const orgLabel = "Organization name";
  const selectLabel = "Organization type";

  const locationNumberLabel = "Number of locations";
  const locationNumberType = "number";
  const locationNumberName = "locationNumber";
  const locationNumberId = "locNumberId";

  const emailLabel = "Email";
  const emailType = "email";
  const emailName = "orgEmail";
  const emailId = "orgEmail";

  const passwdLabel = "Password";
  const passwdType = "password";
  const passwdName = "passwd";
  const passwdId = "orgPasswd";

  return (
    <div className="register">
      <div className="vectors">
        <FirstEllipse />
        <SecondEllipse />
      </div>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="SNoF-logo" />
        </Link>
      </div>
      <h2 className="text-center header">Set up your account</h2>

      <div className="form-outer">
        <form action="#" method="post">
          <div className="page">
            <div className="title">
              <div className="field">
                <div className="label">Organization name</div>
                <input type="text" name="" id="" />
              </div>
              <div className="field">
                <div className="label">Organization type</div>
                <select name="orgTypes" id="orgTypes">
                  <option value=""></option>
                  <option value="one">Schools</option>
                </select>
              </div>
              <div className="field">
                <button>Next</button>
              </div>
            </div>
          </div>

          {/* 2nd page */}

          <div className="page">
            <div className="title">
              <div className="field">
                <div className="label">Number of locations</div>
                <input type="number" name="locations" id="locations" />
              </div>

              <div className="field btns">
                <button className="prev-1 prev">Previous</button>
                <button className="next-1 next">Next</button>
              </div>
            </div>
          </div>

          {/* 3rd page */}

          <div className="page">
            <div className="title">
              <div className="field">
                <div className="label">email</div>
                <input type="email" name="" id="" />
              </div>
              <div className="field">
                <div className="label">password</div>
                <input type="password" name="" id="" />
              </div>
              <div className="field btns">
                <button className="prev-2 prev">Previous</button>
                <button className="next-2 next">Next</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
