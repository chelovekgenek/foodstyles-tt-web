import { useCallback, useEffect } from "react";
import { FormikProvider, Form, FormikConfig, useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { action, selector } from "../store/auth";
import { AppLayout } from "../components/AppLayout";
import { TextLink } from "../components/TextLink";
import { Button, Input } from "../components/form";
import { schema, initialValues, SchemaValues } from "./LogIn.schema";
import { RoutePath } from "../Router";

type HandleSubmit = FormikConfig<SchemaValues>["onSubmit"];

export const LogIn = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selector.getStatus);

  const handleSubmit = useCallback<HandleSubmit>(
    (values, helpers) => {
      helpers.setErrors({});
      dispatch(action.login(values));
    },
    [dispatch]
  );

  const formik = useFormik({
    initialValues: initialValues as SchemaValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (status === "failed") {
      formik.setErrors({ email: "e", password: "e" });
    }
  }, [status, formik]);

  return (
    <FormikProvider value={formik}>
      <AppLayout title="Welcome back!" subtitle="Log in to continue.">
        <Form onSubmit={formik.handleSubmit}>
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" type="password" />
          <TextLink to={RoutePath.SIGN_UP}>
            Don’t have an account? Sign up.
          </TextLink>
          <Button>Log In</Button>
        </Form>
      </AppLayout>
    </FormikProvider>
  );
};
