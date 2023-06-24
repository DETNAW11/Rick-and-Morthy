const validation = (userData) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {};

     if(!regexEmail.test(userData.username)){
        errors.username = "El nombre de usuario no coincide";
     }
     if(!userData.username){
        errors.username = "Completa el campo por favor!"
     } 
      if(userData.username.length > 35){
        errors.username = "El usuario no debe superar los 35 caracteres"
      }

    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe tener al menos un número";
    }
    if(userData.password.length < 6 || userData.password.length > 15){
        errors.password = "La contraseña debe tener al menos entre 6 y 15 caracteres";
    }

    return errors;
}

export default validation;