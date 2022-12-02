import { Formik, Form } from "formik";
import { useCallback } from "react";
import { AppLayout } from "../components/AppLayout";
import { Button, Input } from "../components/form";
import { TextLink } from "../components/TextLink";
import { schema, initialValues, SchemaValues } from "./SignUp.schema";

export const SignUp = (): JSX.Element => {
  const handleSubmit = useCallback((values: SchemaValues) => {
    console.log(values);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
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
          <Input name="password" placeholder="Password" />
          <TextLink href="sign-in">Do have an account? Sign in.</TextLink>
          <Button>Sign Up</Button>
        </Form>
      </AppLayout>
    </Formik>
  );
};
