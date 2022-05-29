import { FiUser } from "react-icons/fi";
import { FiCloud } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import './secondHome.css'

const SecondHome = () => {
    return (  
      <header>
        <div className="secondhome">
          <div className="text">
            <h3 className="text-first">We craft Websites</h3>
              <h3 className="text-second">We Build Stunning Artboards and viewport and We have passionate Team with Creative Thoughts</h3>
              <hr />
            </div>
            <div className="iconSection">

              <div className="iconrow">
              <FiUser style= {{height: '100px',width: '100px', padding: "15px", backgroundColor: "blue", borderRadius: "50%"}}/>
              <p className="iconheads">Clients</p>
              <p>104+</p>
              </div>

            <div className="iconrow">
            <FiCloud style= {{height: '100px',width: '100px', padding: "15px", backgroundColor: "blue", borderRadius: "50%"}}/>
              <p className="iconheads">Projects Completed</p>
              <p>974+</p>

            </div >

            <div className="iconrow">
            <FiAward style= {{height: '100px',width: '100px', padding: "15px", backgroundColor: "blue", borderRadius: "50%"}}/>
              <p className="iconheads">Awards</p>
              <p>256+</p>

              
            </div>
           

      
            </div>

           
           
        </div>
        
       
      </header>
      
    );
  }


export default SecondHome;
