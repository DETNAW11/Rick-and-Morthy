import { useState } from 'react';
import styles from './search-style.module.css'

const SearchBar = ({onSearch}) => {
   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value);
   }

  
   return (
   <div className={styles.scaleupcenter}>
      
      <div className={styles.search}>
         <input className={styles.buscador} type='search' placeholder='CHARACTER...' value={character} onChange={handleChange}></input> 
      </div> 
      
      <button className={styles.agrega} onClick={() => onSearch(character, setCharacter(''))}>
            <span className="material-symbols-outlined">
            search
            </span> 
      </button> 
    
      </div>
   );
}


//Exportación de la función
export default SearchBar;