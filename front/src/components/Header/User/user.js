import React, { useEffect, useState} from 'react';
import axios from 'axios';
import image from '../../../../public/image/connecting.png';
import { Link } from 'react-router-dom';
const url="http://localhost:8081/login";
const headers= {
  'Content-Type': 'application/json'
};

const  User = ()=> {
  const [connect, setConnect] = useState(true);
  const [login, setLogin] = useState('');
  const[password, setPassword] = useState('');
  const [token,setToken]=useState('');
  const [welcome,setWelcome]=useState('');
  


const  handleSubmit = async (e) => {
  e.preventDefault();
  const data = {login,password};
axios
.post(url,data)
.then(function (response) {setToken(response.data.accessToken)
  if(response){ 
  setWelcome('Bienvenue sur Netflex  '+response.data.pseudo);
  setConnect(false);
}},console.log(token)
)

.catch(function (error) {console.log(error)});
}



// const postData = async () => {
// console.log('postData');
// }


  return (
    <div className="connection">
      <form class="form" onSubmit={handleSubmit}>
      <img className="user_logo" onClick={() => setConnect((s) => !s)} src={image} alt="" srcSet="" />< Link to={'/signup'} >S'inscrire </Link>
      <input className="connect" id="login" style={{ display: connect ? 'none' : 'flex' }} type="text" placeholder="email ou pseudo" value={login} onChange={(e)=>{setLogin(e.target.value)}} /><input className="connect" id="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}} style={{ display: connect ? 'none' : 'flex' }} type="password" name="password" />
      <button className="connect" id="btn-connect" type='submit' style={{ display: connect ? 'none' : 'flex' }}>Connexion</button>
      <p id='welcome' className='welcome'>{welcome} </p>
      </form>
      
    </div>
  );
};

export default User
