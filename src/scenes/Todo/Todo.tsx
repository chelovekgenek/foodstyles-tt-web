import { useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { AppLayout } from "../../components/AppLayout";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as authFeature from "../../store/auth";
import * as routerFeature from "../../store/router";
import { RoutePath } from "../../Router";
import { TodoFilter } from "./TodoFilter";

export const Todo = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector(authFeature.selector.getAuthenticated);
  const status = useAppSelector(authFeature.selector.getStatus);

  useEffect(() => {
    if (status === "idle" && !authenticated) {
      dispatch(routerFeature.action.redirect(RoutePath.LOG_IN));
    }
  }, [authenticated, status, dispatch]);

  return (
    <AppLayout title="Todo List">
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </AppLayout>
  );
};
