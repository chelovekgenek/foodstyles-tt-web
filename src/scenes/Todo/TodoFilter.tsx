import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as todoFeature from "../../store/todo";
import { TodoCompletenessFilter } from "../../store/todo/todo.types";
import {
  Container,
  Label,
  Option,
  OptionsContainer,
} from "./TodoFilter.styles";

export const TodoFilter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(todoFeature.selector.getFilter);

  const handleChange = useCallback(
    (filter: TodoCompletenessFilter) => () => {
      dispatch(todoFeature.action.setFilter(filter));
    },
    [dispatch]
  );
  return (
    <Container>
      <Label>Show:</Label>
      <OptionsContainer>
        <Option
          checked={filter === TodoCompletenessFilter.ALL}
          onClick={handleChange(TodoCompletenessFilter.ALL)}
        >
          All
        </Option>
        <Option
          checked={filter === TodoCompletenessFilter.COMPLETE}
          onClick={handleChange(TodoCompletenessFilter.COMPLETE)}
        >
          Completed
        </Option>
        <Option
          checked={filter === TodoCompletenessFilter.INCOMPLETE}
          onClick={handleChange(TodoCompletenessFilter.INCOMPLETE)}
        >
          Incompleted
        </Option>
      </OptionsContainer>
    </Container>
  );
};
