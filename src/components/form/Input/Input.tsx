import { ChangeEvent, useCallback, useMemo } from "react";
import { useFormikContext } from "formik";
import get from "lodash.get";
import { Input as StyledInput } from "./Input.styles";

interface Props {
  name: string;
  placeholder: string;
}

export const Input = ({ name, placeholder }: Props): JSX.Element => {
  const { values, setFieldValue, errors } =
    useFormikContext<Record<string, string>>();

  const fieldValue = useMemo(() => get(values, name), [values, name]);
  const fieldError = useMemo(() => get(errors, name), [errors, name]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setFieldValue(name, e.target.value),
    [setFieldValue, name]
  );

  return (
    <StyledInput
      name={name}
      error={!!fieldError}
      fullWidth
      variant="standard"
      placeholder={placeholder}
      onChange={handleChange}
      value={fieldValue}
    />
  );
};
