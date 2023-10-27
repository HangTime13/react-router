import React , {useState} from 'react'


const Button = () => {
    // state
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
        <button onClick={handleMessage}>Learn More</button>
       
    </div>
  )
}

export default Button