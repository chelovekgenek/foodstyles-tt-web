import * as Yup from "yup";

export const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const initialValues = schema.cast({
  email: "test@example.com",
  password: "password",
});

export type SchemaValues = Yup.InferType<typeof schema>;
