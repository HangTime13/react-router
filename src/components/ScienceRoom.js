// src/components/ScienceRoom.js

import React , {useState} from 'react'
import './ScienceRoom.css'




// Here, we highlight the Science segment of our museum.

function ScienceRoom() {

    const [showMessage, setShowMessage] = useState(false)


    const handleMessage = () => {
      if(showMessage){
        setShowMessage(false)
        
      }else{
        setShowMessage(true)
      }
    }


    return (
        <div>
            <div className='div01'>
            <h2>🔭 Dive into the Wonders of Science!</h2>
            <button onClick={handleMessage}>Show story</button>
            </div>

            {showMessage && <p>Cry me a river</p>} 
            <button>Hello</button>
            
        </div>
    
        

    )
  }
  
  export default ScienceRoom;
  