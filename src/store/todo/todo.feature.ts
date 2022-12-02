import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create, deleteById, getAll, updateById } from "./todo.thunk";
import { Todo, TodoCompletenessFilter } from "./todo.types";

export type TodoState = {
  values: Todo[];
  filter: TodoCompletenessFilter;
  status: "idle" | "loading" | "failed";
};

const initialState: TodoState = {
  values: [],
  filter: TodoCompletenessFilter.ALL,
  status: "idle",
};

export const authSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<TodoCompletenessFilter>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.status = "idle";
        state.values = action.payload;
      })
      .addCase(getAll.rejected, (state) => {
        state.status = "failed";
      });

    builder.addCase(create.fulfilled, (state, action) => {
      state.values = state.values.concat(action.payload);
    });

    builder.addCase(deleteById.fulfilled, (state, action) => {
      state.values = state.values.filter(
        (value) => value.id !== action.payload.id
      );
    });

    builder.addCase(updateById.fulfilled, (state, action) => {
      state.values = state.values.map((value) => {
        if (action.payload.id === value.id) {
          return { ...value, completed: action.payload.completed };
        }
        return value;
      });
    });
  },
});

export const { setFilter } = authSlice.actions;

export default authSlice.reducer;
