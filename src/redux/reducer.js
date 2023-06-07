import { ADD_FAVORITES, REMOVE_FAVORITES, REMOVE_FAVORITE_CHARACTER, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters : [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],

        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
      };


    case REMOVE_FAVORITE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((favorite) => favorite.id !== action.payload),
        allCharacters: state.allCharacters.filter((personaje) => personaje.id !== action.payload),
      };

      case FILTER :
        let charactersFilters;
        if (action.payload === "All") {
          return {
            ...state,
            myFavorites: state.allCharacters,
          };
        } else {
          charactersFilters = state.allCharacters.filter((character) => character.gender === action.payload);
        }
      return{
      ...state,
       myFavorites: charactersFilters,
      };

      //CON TERNARIOS 
      /*case FILTER:
       const charactersFilters = action.payload === "All" ? state.allCharacters : state.allCharacters.filter((character) => character.gender === action.payload);
      return {
        ...state,
        myFavorites: charactersFilters,
      }; */
      
      /*   const allCharactersFiltered = state.allCharacters.filter(
          (character) => character.gender === action.payload
        );
        return {
          ...state,
          myFavorites:
            action.payload === "ALL"
              /* ? [...state.allCharacters] 
              : allCharactersFiltered,
        }; */

      case ORDER : 
      const charactersOrdeneds = [...state.myFavorites].sort((asc, des) => {
        if(action.payload === "Upward"){
          return asc.id - des.id
        } else if(action.payload === "Falling"){
        return des.id - asc.id
        } else {
          return 0;
        }
      })

      return {
        ...state,
        myFavorites: charactersOrdeneds,
      }

      default:
        return {...state};
    };
};

export default rootReducer;
