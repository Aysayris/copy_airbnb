import { useState } from "react";

function Login (){
const [open,setOpen] = useState('open');
return (
    <>
    <div className={"login-bg "+open} onClick={(e)=>{
        setOpen('');
    }}>
    <div className="login" onClick={(e)=>{
        e.stopPropagation();
    }}>
        <h2>Войти</h2>
        <input type="text" placeholder="Логин" />
        <input type="text" placeholder="Пароль" />
        <button onClick={(e)=>{
          setOpen('');
    }}>Войти</button>
    </div>
    </div>
    </>
)
}
export default Login;