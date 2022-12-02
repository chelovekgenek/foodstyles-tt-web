import * as Yup from "yup";

export const schema = Yup.object().shape({
  text: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const initialValues = schema.cast({
  text: "",
});

export type SchemaValues = Yup.InferType<typeof schema>;
