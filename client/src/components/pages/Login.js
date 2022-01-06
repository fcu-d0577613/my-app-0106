import React,{useState} from 'react';
import '../../App.css';
import '../style/Login.css';
import { useNavigate } from 'react-router-dom';
import AuthService from 'd:/0網頁/last projevt (ok)/client/src/services/auth.service';

export default function Login(props) {
  let {currentUser, setCurrentUser} = props;
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const navigate = useNavigate();
  const handleChangeEmail = (e) =>{
    setEmail(e.target.value);
  }
  const handleChangepassword = (e) =>{
    setPassword(e.target.value);
  }
  
  const handleToLogin = () =>{
    AuthService.login(email, password)
    .then((response) => {
      console.log(response.data);
      if(response.data.token){
        localStorage.setItem("user",JSON.stringify(response.data))
      }
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/");
    })
  }
  const handleToRegister = () => {
    navigate("/signup");
  }
  return (
    <div className='Login-container'>
      <div className='Login-Wrapper'>
        {message && (<div className='alert alert-danger'>{message}</div>)}
        <div>
          <h2>登入 </h2>
     
          <div class="tab"></div>
          <input onChange={handleChangeEmail} type="text" className="useremail" placeholder="信箱"name="useremail" />
          <div class="tab"></div>
          <input onChange={handleChangepassword} type="text" className="password" placeholder="密碼"name="password" />
          
          <div class="tab"></div>
          <input onClick={handleToLogin} type="button" value="登入" className="register"></input>

          <h5 onClick={handleToRegister} className='orRegis'>註冊</h5>
        </div>
        
      </div>
    </div>
  )
}
