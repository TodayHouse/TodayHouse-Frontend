import React, {useState} from 'react'

function LoginChecker({Login, error}) {
    const [details, setDetails] = useState({name : '', email : '', password: ''});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit =  {submitHandler}>
            <div className = "form-upper">
                <img className = "loginLogo" alt = "loginLogo" src = "../img/loginLogo.png"/>
            </div>

            <div className =  "form-inner">
                <h2>Login</h2>
               
                <div className = "form-group">
                    <label htmlFor='name'>이름</label>
                    <input type = "text" name = "name" id = "name"
                    onChange = {e => setDetails({...details, name : e.target.value})}
                    value = {details.name}
                    />
                    
                </div>
                <div className = "form-group">
                    <label htmlFor='email'>이메일</label>
                    <input type = "email" name = "email" id = "email"
                    onChange = {e => setDetails({...details, email : e.target.value})}
                    value = {details.email}
                    />
                </div>
                <div className = "form-group">
                    <label htmlFor = "password">패스워드</label>
                    <input type = "password" name = "password" id = "password"
                    onChange = {e => setDetails({...details, password : e.target.value})}
                    value = {details.password}
                    />
                </div>
                <input type = "submit" value = "LOGIN"/>
            </div>
        </form>
    )
}
export default LoginChecker;