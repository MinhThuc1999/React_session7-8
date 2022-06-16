import React from "react";
import styles from "./form.module.css";
import { GrPrevious } from "react-icons/gr";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import Info from "./Info";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "at least 2 characters!")
    .max(50, "no more than 50 characters")
    .required("Required!!!"),
  lastName: Yup.string()
    .min(2, "at least 2 characters!")
    .max(50, "no more than 50 characters")
    .required("Required!!!"),
  email: Yup.string().email("Invalid email!!!").required("Required!!!"),
  passWord: Yup.string()
    .min(2, "at least 2 characters!")
    .max(50, "no more than 50 characters")
    .required("Required!!!"),
});

function Form1() {
  return (
    <div
      style={{
        display: "flex",
        padding: "20px 30px",
        justifyContent: "space-around",
      }}
    >
      <div className={styles.form1}>
        <p style={{ marginBottom: "60px" }}>
          <GrPrevious color="red" />
        </p>
        <h3 style={{ color: "white", marginBottom: "5px" }}>Hi!</h3>
        <div className={styles.form_content}>
          <div className={styles.form_block}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              <Form>
                {/* <p className={styles.fiel_input}>
                  <Field name="firstName" />
                </p>
                <p style={{ color: "red" }}>
                  <ErrorMessage name="firstName" />
                </p>
                <p className={styles.fiel_input}>
                  <Field name="lastName" />
                </p>
                <p style={{ color: "red" }}>
                  <ErrorMessage name="lastName" />
                </p> */}

                <p className={styles.fiel_input}>
                  <Field name="email" type="email" placeholder="Email" />
                </p>
                <p style={{ color: "red" }}>
                  <ErrorMessage name="email" />
                </p>

                <button className={styles.button_submit} type="submit">
                  Continute
                </button>
                <p style={{ textAlign: "center", color: "white" }}>or</p>
                <button className={styles.button_login} type="button">
                  <BsFacebook style={{ marginRight: "7px" }} />
                  Continute with Facebook
                </button>
                <button className={styles.button_login} type="button">
                  <FcGoogle style={{ marginRight: "7px" }} />
                  Continute with Google
                </button>
                <button className={styles.button_login} type="button">
                  <BsApple style={{ marginRight: "7px" }} />
                  Continute with Apple
                </button>
                <div style={{ marginTop: "16px" }}>
                  <p style={{ color: "white" }}>
                    Don't have an account? <a href="#">Sign up</a>
                  </p>
                  <p>
                    <a href="">Forgot your password?</a>
                  </p>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <div className={styles.form1}>
        <p style={{ marginBottom: "60px" }}>
          <GrPrevious style={{ color: "white" }} />
        </p>
        <h3 style={{ color: "white", marginBottom: "5px" }}>Sign up</h3>
        <div className={styles.form_content}>
          <div className={styles.form_block}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                passWord: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              <Form>
                <p style={{ color: "white" }}>
                  Looks like you don't have an account. <br></br>
                  Let's create a new account for{" "}
                  <span style={{ fontWeight: "600" }}>minhthuc@gmail.com</span>
                </p>
                <p className={styles.fiel_input}>
                  <Field name="firstName" placeholder="name" />
                </p>
                <p style={{ color: "red" }}>
                  <ErrorMessage name="firstName" />
                </p>
                <p
                  className={
                    (styles["fiel_input"], styles["fiel_input_password"])
                  }
                >
                  <Field
                    name="passWord"
                    type="password"
                    placeholder="password"
                  />
                </p>
                <p style={{ color: "red" }}>
                  <ErrorMessage name="passWord" />
                </p>

                {/* <p className={styles.fiel_input}>
                  <Field name="email" type="email" placeholder="Email" />
                </p>
                <p style={{ color: "red" }}>
                  <ErrorMessage name="email" />
                </p> */}
                <p style={{ textAlign: "center", color: "white" }}>
                  By selecting Agree and continute below, I gree to{" "}
                  <span style={{ color: "#00C38E" }}>
                    Terms of Service and Privacy Policy
                  </span>
                </p>

                <button className={styles.button_submit} type="submit">
                  Agree and continute
                </button>
                {/* <button className={styles.button_login} type="button">
                  <BsFacebook style={{ marginRight: "7px" }} />
                  Continute with Facebook
                </button>
                <button className={styles.button_login} type="button">
                  <FcGoogle style={{ marginRight: "7px" }} />
                  Continute with Google
                </button>
                <button className={styles.button_login} type="button">
                  <BsApple style={{ marginRight: "7px" }} />
                  Continute with Apple
                </button> 
                <div style={{ marginTop: "16px" }}>
                  <p style={{ color: "white" }}>
                    Don't have an account? <a href="#">Sign up</a>
                  </p>
                  <p>
                    <a href="">Forgot your password?</a>
                  </p>
                </div>*/}
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <div className={styles.form1}>
        <p style={{ marginBottom: "60px" }}>
          <GrPrevious style={{ color: "white" }} />
        </p>
        <h3 style={{ color: "white", marginBottom: "5px" }}>Log in</h3>
        <div className={styles.form_content}>
          <div className={styles.form_block}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                passWord: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              <Form>
                <Info />
                <p className={styles.fiel_input}>
                  <Field
                    name="passWord"
                    type="password"
                    placeholder="password"
                  />
                </p>
                <p style={{ color: "red" }}>
                  <ErrorMessage name="passWord" />
                </p>

                {/* <p className={styles.fiel_input}>
                  <Field name="email" type="email" placeholder="Email" />
                </p>
                <p style={{ color: "red" }}>
                  <ErrorMessage name="email" />
                </p> */}

                <button className={styles.button_submit} type="submit">
                  Continute
                </button>
                <p>
                  <a href="#">Forgot your password?</a>
                </p>
                {/* <button className={styles.button_login} type="button">
                  <BsFacebook style={{ marginRight: "7px" }} />
                  Continute with Facebook
                </button>
                <button className={styles.button_login} type="button">
                  <FcGoogle style={{ marginRight: "7px" }} />
                  Continute with Google
                </button>
                <button className={styles.button_login} type="button">
                  <BsApple style={{ marginRight: "7px" }} />
                  Continute with Apple
                </button> 
                <div style={{ marginTop: "16px" }}>
                  <p style={{ color: "white" }}>
                    Don't have an account? <a href="#">Sign up</a>
                  </p>
                  <p>
                    <a href="">Forgot your password?</a>
                  </p>
                </div>*/}
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form1;
