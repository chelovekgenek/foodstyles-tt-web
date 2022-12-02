import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as todoFeature from "../../store/todo";
import { List, ListAction, ListItem } from "./TodoList.styles";
import DeleteIcon from "./DeleteIcon.svg";
import { Checkbox } from "../../components/Checkbox";

export const TodoList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(todoFeature.selector.getFilter);
  const values = useAppSelector(todoFeature.selector.getValues);

  const handleDelete = useCallback(
    (id: number) => () => {
      dispatch(todoFeature.action.deleteById({ id }));
    },
    [dispatch]
  );

  const handleComplete = useCallback(
    (id: number) =>
      (_e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        dispatch(todoFeature.action.updateById({ id, completed: checked }));
      },
    [dispatch]
  );

  useEffect(() => {
    dispatch(todoFeature.action.getAll());
  }, [dispatch, filter]);

  return (
    <List>
      {values.map((value) => (
        <ListItem key={value.id}>
          <Checkbox
            checked={value.completed}
            onChange={handleComplete(value.id)}
          />
          <span>{value.text}</span>
          <ListAction
            src={DeleteIcon}
            alt="delete"
            onClick={handleDelete(value.id)}
          />
        </ListItem>
      ))}
    </List>
  );
};
