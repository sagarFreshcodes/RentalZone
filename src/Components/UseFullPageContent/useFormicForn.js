import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";

const AddListing = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      // Simulate API call for login (replace with your actual API call)
      setTimeout(() => {
        if (
          values.email === "example@email.com" &&
          values.password === "password"
        ) {
          // On successful login, you might redirect or perform other actions
          alert("Login successful");
        } else {
          // If login fails, set error message
          setErrors({ password: "Invalid email or password" });
        }
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <ContentBox>
      <br />
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button>
      </form>
    </ContentBox>
  );
};

export { AddListing };
