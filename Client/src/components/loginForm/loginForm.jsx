import {useState} from "react";
import style from './formStyle.module.css'
// import style from "./loginForm.module.css";

function validate(user) {
  let errors = {};

  if (!user.email) {
    errors.email = "Enter your email";
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
    errors.email = "Invalid email";
  }
  if (user.email.length >= 35) {
    errors.email = "Invalid email";
  }

  if (!/\d/.test(user.password)) {
    errors.password = "Password must contain a letter";
  }

  if (user.password.length < 6 || user.password.length > 10) {
    errors.password = "Password must be between 6 and 10 characters";
  }

  return errors;
}

function LoginForm({login}) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({email: "", password: ""});

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault(user);

    if (!errors.email && !errors.password) {
      login(user);
    } else {
      alert("Incorrect data");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.loginContain} autoComplete="off">
          <div className={style.blurIn}>
          <div className={style.topContainer}>
            <div className={style.wobblehorizontalTop}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png'alt='Login' /></div>
          
          <label htmlFor='username' className={style.usernameLabel}>
          <div className={style.trackinginexpandforwardbottom}>
          USERNAME:
        
          <img src="https://w0.peakpx.com/wallpaper/843/785/HD-wallpaper-rick-rick-rick-and-morty-cartoons-tv-shows-animated-tv-series-artist-artwork.jpg" 
          style={{ width: '1.8em', height: '1.9em', marginLeft: '0.5em', position: 'relative', marginBottom: '0.5em'}} /> 
      </div>
          </label>
          
          <input
             type="text"
             placeholder="usuario@flarg.com"
             name="email"
             value={user.email}
             onChange={handleChange}
           />
            {errors.username && <p className={style.validacion}>{errors.username}</p>}
          
          <label htmlFor='password' className={style.passwordLabel}>
          <div className={style.scaleupbottom}>
            PASSWORD:<img src='https://w0.peakpx.com/wallpaper/598/926/HD-wallpaper-crying-morty-digital-art-rick-and-morty-cartoons-tv-shows-morty-animated-tv-series.jpg' style={{width: '1.5em', height: '1.7em', marginLeft: '0.5em', position: 'relative', marginBottom: '0.5em'}}/>
          </div>
          
          </label>
         
          <input
             type="password"
             placeholder="**************"
             name="password"
             value={user.password}
             onChange={handleChange}
           />
          {errors.password && <p className={style.validacion}>{errors.password}</p>}

        <div className={style.bottomContainer}>
          <div className={style.rotatehorizontalcenter}>
          <button className={style.loginButton}>LOGIN
          <span class="material-symbols-outlined">
          login
        </span></button>
        </div>
        </div>
      </div>
    </div>
  </form>
    );
}

export default LoginForm;
