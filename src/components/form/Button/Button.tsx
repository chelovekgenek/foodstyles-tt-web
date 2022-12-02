import { PropsWithChildren } from "react";
import { Button as StyledButton } from "./Button.styles";

export type Props = PropsWithChildren;

export const Button = (props: Props): JSX.Element => {
  return (
    <StyledButton fullWidth variant="contained" type="submit">
      {props.children}
    </StyledButton>
  );
};
