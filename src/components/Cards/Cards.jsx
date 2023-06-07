import Card from '../Card/Card';
import styles from './cards-style.module.css'

const Cards = ({ characters, onClose }) => {

   return (

      <div className={styles.container}>

      {characters.map(({id,name,species,gender, image}) => {
         return (
            <Card
             key= {id}
             name = {name}
             species = {species}
             gender = {gender}
             image = {image}
             id = {id}
             onClose = {() => onClose(id)}
            />  
         )
      })}
   </div>
   
   )
}

//Exportación de la función
export default Cards;