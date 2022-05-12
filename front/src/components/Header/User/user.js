import React, { useEffect, useState} from 'react';
import axios from 'axios';
import image from '../../../../public/image/connecting.png';
const url="http://localhost:8081/login";
const headers= {
  'Content-Type': 'application/json'
}

const  User = ()=> {
  const [connect, setConnect] = useState(true);
  const [login, setLogin] = useState('');
  const[password, setPassword] = useState('');

const  handleSubmit = async (e) => {
  e.preventDefault();
  const data = {login,password}
console.log(data);
axios
.post(url,data)
.then(function (response) {console.log(response.data)})
}

// const postData = async () => {
// console.log('postData');
// }


  return (
    <div className="connection">
      <form class="form" onSubmit={handleSubmit}>
      <img className="user_logo" onClick={() => setConnect((s) => !s)} src={image} alt="" srcSet="" />
      <input className="connect" id="login" style={{ display: connect ? 'none' : 'flex' }} type="text" placeholder="email ou pseudo" value={login} onChange={(e)=>{setLogin(e.target.value)}} /><input className="connect" id="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}} style={{ display: connect ? 'none' : 'flex' }} type="password" name="password" />
      <button className="connect" id="btn-connect" type='submit' style={{ display: connect ? 'none' : 'flex' }}>Connexion</button>
      </form>
    </div>
  );
};

export default User
