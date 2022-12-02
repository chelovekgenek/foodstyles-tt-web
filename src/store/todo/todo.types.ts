export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export enum TodoCompletenessFilter {
  ALL = "ALL",
  COMPLETE = "COMPLETE",
  INCOMPLETE = "INCOMPLETE",
}

export type CreateTodoPayload = Pick<Todo, "text">;
export type DeleteTodoPayload = Pick<Todo, "id">;
export type UpdateTodoPayload = Pick<Todo, "id" | "completed">;
