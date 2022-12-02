import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GetTodos($completeness: TodoCompletenessFilter!) {
    todos(filter: { completeness: $completeness }) {
      id
      text
      completed
    }
  }
`;

export const CREATE_TODO = gql`
  mutation CreateTodo($text: String!) {
    createTodo(input: { text: $text }) {
      id
      text
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(todoId: $id) {
      id
    }
  }
`;

export const MARK_TODO_COMPLETED = gql`
  mutation MarkTodoCompleted($id: Int!) {
    markTodoCompleted(todoId: $id) {
      id
    }
  }
`;

export const MARK_TODO_INCOMPLETED = gql`
  mutation MarkTodoIncompleted($id: Int!) {
    markTodoIncompleted(todoId: $id) {
      id
    }
  }
`;
