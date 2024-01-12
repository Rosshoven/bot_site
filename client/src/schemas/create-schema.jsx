import * as yup from "yup";

const passwordRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$/
// "Must Contain 7 Characters, One Uppercase, One Lowercase, One Number"

// this yup validation function is exported to - imported by create-account.jsx
export const createSchema = yup.object().shape({
    userName: yup.string().min(5).max(20).required("Required"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Must Contain 5 Characters, One Uppercase, One Lowercase & One Number" })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Required"),
});