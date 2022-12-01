import { PaperBox, RootContainer, Logo, Title } from "./AppLayout.styles";
import LogoIcon from "./logo.svg";

type Props = React.PropsWithChildren & {
  title: string;
};

export const AppLayout = (props: Props): JSX.Element => {
  return (
    <RootContainer>
      <PaperBox>
        <Logo src={LogoIcon} alt="logo" />
        <Title>{props.title}</Title>
        {props.children}
      </PaperBox>
    </RootContainer>
  );
};
