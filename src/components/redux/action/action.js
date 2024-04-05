import { CREATE_ITEM,DELETE_ITEM ,UPDATE_ITEM } from "./actionType";

export const setActiondata = (data) => ({
  type: CREATE_ITEM,
  payload: data,
});
export const deleteUser=(data)=>({
  type:DELETE_ITEM,
  payload:data
})
export const editUser=(data)=>({
  type:UPDATE_ITEM,
  payload:data
})
