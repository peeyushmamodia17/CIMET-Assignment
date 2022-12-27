import { post } from "../../apiSetUp/apiMethod";
import { constants } from "../../apiSetUp/constant";

export const getPlanList = () => {
  return post(`${constants.API.PLAN_LIST}`);
};
