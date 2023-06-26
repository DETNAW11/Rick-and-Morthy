import style from './about.module.css';
import myImage from '../../components/images/IMG_20211206_094023.jpg'

        const About = () => {
            return (
              <div className={style.aboutwrapper}>
              
              <div className={style.aboutleft}>
                
                <div className={style.aboutleftcontent}>
                  
                  <div>
                    
                      <div className={style.rotateverticalcenter}>
                      
                      <div className={style.aboutimg}>
                        <img src={myImage} alt = "LAPT" />
                      </div>
                      
                      </div>
                    

                    <br/>
                    <div className={style.trackingExpand}><h2>LUIS ALEJANDRO<br/>PRIETO TORRES</h2></div>
                    
                    <div className={style.trackinginexpandCenter}><h3>Web Developer</h3><br/></div>
                  
                  </div>
        
                  <br/><div className={style.trackinginexpand}><h4 className={style.fontH4}>CONTACT ME:</h4></div>
                    
                  <div className={style.blurinexpand}> <ul className={style.icons}>
                    <li>
                      <a href="https://github.com/DETNAW11" target="_blank">
                      <i className="fab fa-github"></i>
                      </a>
                      </li>

                    <li>
                      <a href="#" target='_blank'>
                      <i className="fab fa-linkedin"></i>
                      </a>
                      </li>

                    <li>
                    <a href="https://www.instagram.com/alejandro_prieto_11/" target='_blank'>
                    <i className="fab fa-instagram"></i>
                    </a>
                    </li>

                  </ul>
                  
                  </div>
                
                </div>
             
              </div>
        
              <div className={style.aboutright}>
             
              <div className={style.trackingExpand}><h1>MODULE 2<span>!</span></h1> </div>
               
               <div className={style.trackingincontract}> <h2><strong>PROJECT RICK AND MORTY</strong></h2></div>
                
                
               <div className={style.blurinexpand}><img src='https://media.tenor.com/5mQ6UldmCQ4AAAAC/rickand-morty-rick.gif' alt='Rick si sabe' className={style.aboutimg} style={{width:'9em', height:'7.5em', borderRadius:'50%'}}/></div>
                  


                <br/><br/> <span>Hello everyone, these were the technologies that were worked on during the project</span> 
                
                <div className = {style.aboutpara}>
                <br/>
                <div className={style.trackinginexpandCenter}>
                  <span style={{color: '#dd5c2d'}}><i>Tools:</i></span>
                  </div>
              
                  <div className={style.js}>
                  <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' className={style.aboutimg} style={{width:'6.9em', height:'5.2em', borderRadius:'50%'}}  alt='JAVASCRIPT'/>
                  <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' className={style.aboutimg} style={{width:'6em', height:'5.2em', borderRadius:'50%'}} alt='REACT'/>
                  <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' className={style.aboutimg} style={{width:'6em', height:'5.2em', borderRadius:'50%'}} alt='REDUX'/></div>
                  </div>
               
        
                <div className = {style.aboutpara}>
                  
                <br/><br/><span>I am studying the M2 module of the Henry Bootcamp, this time I am developing the APP of the Rick & Morty integration project, which is based on consuming an API and allows us to add and close the cards with the characters of said series, they can be marked as favorites, in turn save them in a global state, to later render them in a certain component of favorites... I have focused on giving it a very striking appearance (to my liking) and well I hope you like what I have done, thanks for visit.</span>
                
                </div>
              
              </div>
            
            </div>

    );
}
        
export default About;