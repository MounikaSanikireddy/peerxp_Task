
import { combineReducers } from "redux";
import { CREATE_ITEM, DELETE_ITEM,UPDATE_ITEM ,FILTER_ITEMS_BY_NAME} from './action/actionType';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  formData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      const newItem = {
        ...action.payload,
        id: uuidv4()
      };
      return {
        ...state,
        formData: [...state.formData, newItem]
      };
    case DELETE_ITEM:
      return {
        ...state,
        formData: state.formData.filter(item => item !== action.payload)
      };
      case UPDATE_ITEM:
        const { id, updatedData } = action.payload;
        const updatedFormData = state.formData.map(item => {
          if (item.id === id) {
            return { ...item, ...updatedData };
          }
          return item;
        });
        return {
          ...state,
          formData: updatedFormData
        }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  item: reducer,
});

export default rootReducer;
