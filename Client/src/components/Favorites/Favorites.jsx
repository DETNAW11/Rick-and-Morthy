import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {filterCards, orderCards} from '../../redux/action'
import styles from './favoriteStyle.module.css'

const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    const dispatch = useDispatch();

    const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    }

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }

    return(
        <div className={styles.nav}>
                <div>
                <div className={styles.rotateverticalcenter}><h2 className={styles.titleFav}> <span className="material-symbols-outlined" style={{ width: '1.2em', height: '1.2em', marginRight: '0.6em', marginLeft: '0.2em' }}>
                style
                </span>YOUR FAVORITES CARDS!
                
                <span className="material-symbols-outlined" style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '0.6em' }}>
                style
                </span></h2></div> 
                
                <div className={styles.scaleupverticalcenter}>
                <select className={styles.select} onChange={handleOrder}>
                <option value="order" style={{color:'black'}}>Order By</option>
                <option value="Upward" style={{color:'black'}} >Upward</option>
                <option value="Falling" style={{color:'black'}} >Falling</option>
                </select>

                <select className={styles.filter} onChange={handleFilter}>
                <option value="filter" style={{color:'black'}}>Filter By</option>
                <option value="All" style={{color:'black'}} >All</option>
               <option value="Male" style={{color:'black'}} >Male</option>
               <option value="Female" style={{color:'black'}} >Female</option>
               <option value="Genderless" style={{color:'black'}} >Genderless</option>
               <option value="unknown" style={{color:'black'}} >unknown</option>
                </select> </div></div>

                <div className={styles.rotatecenter}>
             <div className={styles.container}>
            { myFavorites.map((character) => {
                return(
                    <div className={styles.card} key={character.id} >
                    
                    <br/> 
                    <img src={character.image} alt={character.name} />
                    <Link to={`/detail/${character.id}`} className={styles.link} >
                    <img src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png" alt="favorite" className={styles.favoriteImg}/>
                    </Link>
                    <h2 className={styles.name}>{character.name}</h2>
            
         
                </div>
                    )
                })    
            }
           </div>
           </div>
     </div>
    )
}

export default Favorites;