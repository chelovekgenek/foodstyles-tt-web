import { login, createUser } from "./auth.thunk";
import reducer, { logout } from "./auth.feature";
import * as selectors from "./auth.selector";

const action = {
  login,
  logout,
  createUser,
};

const selector = {
  ...selectors,
};

export { action, selector };

export default reducer;
