import * as thunkActions from "./todo.thunk";
import reducer, * as actions from "./todo.feature";
import * as selectors from "./todo.selector";

export const action = {
  ...actions,
  ...thunkActions,
};

export const selector = {
  ...selectors,
};

export default reducer;
