import * as thunkActions from "./auth.thunk";
import reducer, * as actions from "./auth.feature";
import * as selectors from "./auth.selector";

export const action = {
  ...actions,
  ...thunkActions,
};

export const selector = {
  ...selectors,
};

export default reducer;
