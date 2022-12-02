import { useCallback } from "react";
import { Formik, Form, FormikConfig } from "formik";
import { useAppDispatch } from "../store/hooks";
import { action } from "../store/auth";
import { AppLayout } from "../components/AppLayout";
import { TextLink } from "../components/TextLink";
import { Button, Input } from "../components/form";
import { schema, initialValues, SchemaValues } from "./SignUp.schema";
import { RoutePath } from "../Router";

type HandleSubmit = FormikConfig<SchemaValues>["onSubmit"];

export const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback<HandleSubmit>(
    (values) => {
      dispatch(action.createUser(values));
    },
    [dispatch]
  );

  return (
    <Formik
      initialValues={initialValues as SchemaValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <AppLayout
        title="Welcome!"
        subtitle="Sign up to start using Simpledo today."
      >
        <Form>
          <Input name="name" placeholder="Full Name" />
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" type="password" />
          <TextLink to={RoutePath.LOG_IN}>
            Do have an account? Sign in.
          </TextLink>
          <Button>Sign Up</Button>
        </Form>
      </AppLayout>
    </Formik>
  );
};
