import { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from "../action/ActionType";
const initialstate=[];

export const HandleFavourite=(state=initialstate,action)=>{
      switch (action.type) {
        case ADD_TO_WISHLIST:return [...state,action.payload]
        case REMOVE_FROM_WISHLIST:return [...state,state.filter(item=>item.id!=action.payload)]
        default:return state
      } 
}