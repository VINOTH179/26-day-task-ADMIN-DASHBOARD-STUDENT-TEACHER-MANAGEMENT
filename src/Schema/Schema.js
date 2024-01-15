import * as yup from "yup";

export const StudentSchema = yup.object({
  Name: yup.string().required("Please fill the name"),
  Email: yup.string().email().required("Please fill valid mail"),
  Qualification: yup
    .string()
    .required("Please fill the qualification")
    .min(2, "Please fill valid qualification")
    .max(20, "Don't playaround right valid details"),
  Batch: yup
    .string()
    .required("Please fill the batch")
    .min(5, "Invalid batch details"),
  mobile: yup
    .string()
    .required("Please fill mobile number")
    .min(10, "please enter valid number"),
});