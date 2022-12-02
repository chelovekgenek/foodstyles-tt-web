import reducer, * as actions from "./router.feature";
import * as selectors from "./router.selector";

export const action = {
  ...actions,
};

export const selector = {
  ...selectors,
};

export default reducer;
