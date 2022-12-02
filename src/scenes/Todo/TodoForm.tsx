import { useCallback } from "react";
import { Formik, Form, FormikConfig } from "formik";
import { Input } from "../../components/form";
import { schema, initialValues, SchemaValues } from "./TodoForm.schema";
import { useAppDispatch } from "../../store/hooks";
import * as todoFeature from "../../store/todo";

type HandleSubmit = FormikConfig<SchemaValues>["onSubmit"];

export const TodoForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleSubmit = useCallback<HandleSubmit>(
    (values, { resetForm }) => {
      dispatch(todoFeature.action.create(values));
      resetForm();
    },
    [dispatch]
  );
  return (
    <Formik
      initialValues={initialValues as SchemaValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Input name="text" placeholder="Add a new todo" />
      </Form>
    </Formik>
  );
};
