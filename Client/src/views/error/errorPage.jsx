import React from 'react';
import style from './error.module.css';
import rickError from '../../components/images/rick-error3.png';
import mortyError from '../../components/images/morty-error2.png';


const Error = () => {
 
  return (
       <div className={style.shadowdropleftright}>
    
      <div className={style.errorContainer}>
    
        <h1 style={{fontSize: '6.9em'}} className={style.shadowDrop}>
        
        <img src={rickError} className={style.trackingforwardbottom}/>
        
        <b>Error 4
        <img src={mortyError} style={{ marginBottom: '1.6em', width: '1em', height: '1.2em', marginRight: '0em', marginLeft: '0.1em'}} className={style.rotateCenter}/>4 </b>
        
        <img src={rickError} className={style.trackingforwardbottom}/></h1>
        
        <p style={{ fontSize: '2.4em'}} className={style.rotatehorizontal}> <b><i>The Page Not Found </i></b></p>
       
        </div> 
      </div>
    
  );
}

export default Error;