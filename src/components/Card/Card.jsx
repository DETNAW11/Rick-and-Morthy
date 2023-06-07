import styles from './cardesign.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { addFavorites, removeFavorites, removeFavoriteCharacter} from '../../redux/action';

const Card = ({id, name, species, gender, image, onClose, addFavorites, removeFavorites, removeFavoriteCharacter}) => 
{
   const [isFav, setisFav] = useState(false);
   const favorites = useSelector(state => state.myFavorites);
   
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setisFav(true);
         }
      });
   }, [favorites]);
   
   
   const handleFavorite = () => {
      if(isFav) {
         setisFav(false);
         removeFavorites(id);
      }
      else{   
         setisFav(true)
         addFavorites({id, name, species, gender, image})
      }
   }

   return (
      <div className={styles.rotatescaledown}>
      <div className={styles.card}>
         <div>
       { isFav ? (
          <button className={styles.fav} onClick={handleFavorite}>
          
           <span className="material-symbols-outlined">❤️</span>
           </button>) 
           : 
           (<button className={styles.fav} onClick={handleFavorite}>
        
           <span className="material-symbols-outlined">🤍</span>
           </button>)
         }

        <button className={styles.boton} onClick={() => {onClose();removeFavoriteCharacter(id)}} > 
        <span className="material-symbols-outlined">
        cancel</span></button> </div>
 
         <br/>
         <img src={image} alt={name} />
         <br/>
        <h2 className={styles.name}>{name}</h2>
        <hr style={{top:'2.1em'}}/>
        <br/><br/><br/>
           <Link to={`/detail/${id}`} className={styles.link} >
              <h2 className={styles.details}>Details</h2>
           </Link>
        
     </div> </div>
   );
}

 const mapDispatchToProps = (dispatch) => {
      return{
         addFavorites : (character) => {
         dispatch(addFavorites(character));
         },
         removeFavorites : (id) => {
         dispatch(removeFavorites(id));
      },
         removeFavoriteCharacter: (id) => {
         dispatch(removeFavoriteCharacter(id));
     }
    }
}

//Exportación de la función
export default connect(null,mapDispatchToProps)(Card);