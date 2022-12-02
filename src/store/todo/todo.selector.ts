import { RootState } from "../app";

export const getValues = (state: RootState) => state.todo.values;
export const getFilter = (state: RootState) => state.todo.filter;
