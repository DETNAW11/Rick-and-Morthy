import { ADD_FAVORITES, REMOVE_FAVORITES, REMOVE_FAVORITE_CHARACTER, FILTER, ORDER, SHOW_ALERT } from "./types";


export const addFavorites = (character) =>{
  return{
    type : ADD_FAVORITES,
    payload : character,
  }
}


export const removeFavorites = (id) => {
    return {
        type : REMOVE_FAVORITES,
        payload : id,
    }
}

export const removeFavoriteCharacter = (id) => {
  return {  
    type : REMOVE_FAVORITE_CHARACTER,
    payload : id
  };
}


export const filterCards = (gender) => {
  return {
    type : FILTER,
    payload : gender,
  };
}

export const orderCards  = (id) => {
  return {
    type : ORDER, 
    payload : id,
  };
}

/* export const showAlert = (message) => ({
  type: SHOW_ALERT,
  payload: message,
}); */