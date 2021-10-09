import * as Yup from "yup";

export const validationSchemaProfile = Yup.object({
  name: Yup.string().default("").required("Required"),
  age: Yup.string()
    .default("")
    .required("Required")
    .matches(/^\d+$/, "Invalid value")
    .test(
      "Valid integer",
      "Invalid value",
      (val) => parseInt(val) > 0 && parseInt(val) < 120
    ),
  sex: Yup.string(),
  racial: Yup.array().of(Yup.string()).min(1),
  phone: Yup.string()
    .matches(
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
      "Invalid phone number"
    )
    .required("Please enter phone number"),
  address1: Yup.string().required("Required Address"),
  address2: Yup.string().notRequired(),
  city: Yup.string().notRequired(),
  state: Yup.string().notRequired(),
  zip: Yup.string().notRequired(),
  bedShared: Yup.array().of(Yup.string()),
  hand: Yup.string(),
  fitbit: Yup.string(),
});
