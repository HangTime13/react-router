import React , {useState} from 'react'


// This component represents the Art room.

function ArtRoom() {
  // state
  const [showMessage, setShowMessage] = useState(false)


  const handleMessage = () => {
    if(showMessage){
      setShowMessage(false)
      
    }else{
      setShowMessage(true)
    }
  }


  // Function to handle the button click using traditional if-else
 

  return (

    <div>
    <h2>🎨 Explore the World of Art!</h2>
    <button onClick={handleMessage}>Show story</button>
    {showMessage && <p>Hello</p>}

    

    </div>

  )
}

export default ArtRoom;
