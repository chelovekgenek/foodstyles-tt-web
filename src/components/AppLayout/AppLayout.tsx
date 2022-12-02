import { Fragment } from "react";
import {
  PaperBox,
  RootContainer,
  Logo,
  Title,
  Subtitle,
} from "./AppLayout.styles";
import LogoIcon from "./logo.svg";

type Props = React.PropsWithChildren & {
  title: string;
  subtitle?: string;
};

export const AppLayout = (props: Props): JSX.Element => {
  return (
    <RootContainer>
      <PaperBox>
        <Logo src={LogoIcon} alt="logo" />
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <Fragment>{props.children}</Fragment>
      </PaperBox>
    </RootContainer>
  );
};
