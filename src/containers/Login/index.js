import { useState } from 'react';
import './index.css';


const Login = () => {
  const [name, setName] = useState();
  const [pwd, setPwd] = useState();

  const clickHandler = () => {
    alert("Login successfully!" + name + ", " + pwd);
  }
  const onChangeHandler = (e) => {
    setName(e.target.value);
  }
  const onChangeHandlerPwd = (e) => {
    setPwd(e.target.value);
  }

  return (
    <div className="login">
      {/* <p>This is Your username {name}</p>
      <p>This is Your password {pwd}</p> */}
      <div>User Name: <input onChange={onChangeHandler}/></div>
      <div>Password: <input type = "password" onChange={onChangeHandlerPwd}/></div>
      <div><button onClick={clickHandler}>Log in</button></div>
    </div>
  );
}

export default Login;
