import React,{useState} from 'react'
import image from '../../../../public/image/connecting.png'

const User = () =>{

 async function postData(){
   const data = {
     "login":"test2",
     "password":"test"
    };

    try {
      let result = await fetch('http:localhost:8081/login',{
        method: 'get',
        mode:"no-cors",
          headers: {
            'Accept' : 'application/json',
            'Content-type':'application/json',
          },
          body: JSON.stringify({
              data
          })
      });
console.log(result.body)
    } catch (error) {
      console.log(error)
    }
  };

 

    const [connect,setConnect]=useState(true)

    return(
      <div className="connection">
      <img className="user_logo" onClick={()=> setConnect((s)=> !s)} src={image} alt="" srcset="" />
      <input className="connect" id="login" style={{display:connect ? "none" : "flex" }} type="text"placeholder="email ou pseudo" /><input className="connect" id="password" style={{display:connect ? "none" : "flex" }}  type="password" name="password" />
      <button className="connect" id="btn-connect" onClick={()=>postData()} style={{display:connect ? "none" : "flex" }}>Connexion</button>
    </div>
    )

  }

  export default User;
