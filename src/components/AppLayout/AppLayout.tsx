import { Fragment, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as authFeature from "../../store/auth";
import * as routerFeature from "../../store/router";
import {
  PaperBox,
  RootContainer,
  Logo,
  Title,
  Subtitle,
  LogoutButton,
} from "./AppLayout.styles";
import LogoIcon from "./logo.svg";

type Props = React.PropsWithChildren & {
  title: string;
  subtitle?: string;
};

export const AppLayout = (props: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authenticated = useAppSelector(authFeature.selector.getAuthenticated);
  const redirectTo = useAppSelector(routerFeature.selector.getRedirectTo);

  const handleLogout = useCallback(() => {
    dispatch(authFeature.action.logout());
  }, [dispatch]);

  useEffect(() => {
    if (typeof redirectTo === "string") {
      navigate(redirectTo);
      dispatch(routerFeature.action.reset());
    }
  }, [redirectTo, navigate, dispatch]);

  return (
    <RootContainer>
      <PaperBox>
        <Logo src={LogoIcon} alt="logo" />
        <Title>{props.title}</Title>
        {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
        <Fragment>{props.children}</Fragment>
      </PaperBox>
      {authenticated && (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      )}
    </RootContainer>
  );
};
