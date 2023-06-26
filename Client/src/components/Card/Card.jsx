import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {useState, useEffect} from "react";
import {addFavorite, removeFavorite} from "../../redux/actions";
import style from "./card.module.css";

function Card(props) {
  const navigate = useNavigate();
  const {character, onClose, addFavorite, removeFavorite, favorites} = props;
  const {image, name, species, gender, id} = character;

  const [closeBtn, setCloseBtn] = useState(true);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [favorites]);

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  function handleFavorite(character) {
    if (!fav) {
      addFavorite(character);
      setFav(true);
    } else {
      removeFavorite(character);
      setFav(false);
    }
  }

  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.characterImage}
          src={image}
          alt={name}
          onClick={navigateHandler}
        />

        <h2 className={style.name}>{name}</h2>

        <div className={style.cornerContainer}>
        {fav ? (
          <button className={style.favoriteButton} onClick={() => handleFavorite(character.id)}>❤️</button>
        ) : (
          <button className={style.favoriteButton} onClick={() => handleFavorite(character)}>🤍</button>
        )}
        {closeBtn && (
          <button
            className={style.closeButton}
            onClick={() => {
              onClose(id);
            }}
          >
            X
          </button>
        )}
        </div>
      </div>

      <div className={style.atributes}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),

    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
