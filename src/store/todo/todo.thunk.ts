import { createAsyncThunk } from "@reduxjs/toolkit";
import gqlClient from "../../gql-client";
import { RootState } from "../app";
import {
  CREATE_TODO,
  DELETE_TODO,
  GET_TODOS,
  MARK_TODO_COMPLETED,
  MARK_TODO_INCOMPLETED,
} from "./todo.query";
import { getFilter } from "./todo.selector";
import {
  CreateTodoPayload,
  DeleteTodoPayload,
  Todo,
  UpdateTodoPayload,
} from "./todo.types";

export const getAll = createAsyncThunk(
  "todo/getAll",
  async (_, { getState }): Promise<Todo[]> => {
    const filter = getFilter(getState() as RootState);
    const { data } = await gqlClient.query<{ todos: Todo[] }>({
      query: GET_TODOS,
      variables: { completeness: filter },
    });
    if (data) {
      return data.todos;
    }

    return [];
  }
);

export const create = createAsyncThunk(
  "todo/create",
  async (payload: CreateTodoPayload): Promise<Todo> => {
    const { data } = await gqlClient.mutate<{ createTodo: Todo }>({
      mutation: CREATE_TODO,
      variables: payload,
    });
    if (data) {
      return data.createTodo;
    }

    throw new Error("Validation Failed!");
  }
);

export const deleteById = createAsyncThunk(
  "todo/deleteById",
  async (payload: DeleteTodoPayload): Promise<Pick<Todo, "id">> => {
    const { data } = await gqlClient.mutate<{ deleteTodo: Pick<Todo, "id"> }>({
      mutation: DELETE_TODO,
      variables: payload,
    });
    if (data) {
      return data.deleteTodo;
    }

    throw new Error("Unable to delete!");
  }
);

export const updateById = createAsyncThunk(
  "todo/updateById",
  async (
    payload: UpdateTodoPayload
  ): Promise<Pick<Todo, "id" | "completed">> => {
    let id = payload.id;
    let completed = payload.completed;
    if (completed) {
      const { data } = await gqlClient.mutate<{
        markTodoCompleted: Pick<Todo, "id">;
      }>({
        mutation: MARK_TODO_COMPLETED,
        variables: payload,
      });
      if (data?.markTodoCompleted.id) {
        completed = true;
      }
    } else {
      const { data } = await gqlClient.mutate<{
        markTodoIncompleted: Pick<Todo, "id">;
      }>({
        mutation: MARK_TODO_INCOMPLETED,
        variables: payload,
      });
      if (data?.markTodoIncompleted.id) {
        completed = false;
      }
    }

    return { id, completed };
  }
);
