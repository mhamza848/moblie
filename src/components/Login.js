import React, { Component } from 'react';
import {Routes, Route,Link} from 'react-router-dom';

class Login extends Component {
  constructor()
  {
    super();
    this.state={
      email:null,
      password:null,
      login:false
    }
  }
  componentDidMount()
  {
    this.storeCollector();
  }
  storeCollector()
  {
    console.warn("Hello from storeCollector");
    let store=JSON.parse(localStorage.getItem('login'));
      this.setState({store:store});
      if (store && store.login)
      {
        this.setState({login:true})
      }
  }

  login()
  {
    fetch('https://staging.blacktieskis.com/api/auth/login', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(this.state)
  }).then((resp)=>{
    resp.json().then((result)=>{
      console.warn("result",result);
      localStorage.setItem('login',JSON.stringify({
        login:true,
        token:result.token
      }))
      this.setState({login:true})
      this.storeCollector();
    })
  })
  }

  render() {
    return (
        <div>
            <div className="login-one">
        <div className="main-1">
          <header className="header">
            <p className="p">4:12</p>
            <i className="fa fa-folder"></i>
            <i className="fa fa-buysellads"></i>
          </header>

          <section className="sec-one">
              <img src="../acid/img/bt-img.png" className="img-1" />
              <p className="p-1">WELCOME TO</p>
              <h4 className="head">BTMOBILE</h4>


              <div className="container-aws">
                <div className="fill">
                  <img src="../acid/img/email_icon.png" alt="" />
                  <input type="text" value={this.state.email} name="email" onChange={(event)=>{this.setState({email:event.target.value})}} />
                </div>
                  <div className="password">
                    <img src="../acid/img/password_icon.png" alt="" />
                    <input type="password" value={this.state.password} name="passowrd" onChange={(event)=>{this.setState({password:event.target.value})}} />
                  </div>
                  <Link to="/three"><button className="btn btn-pink" onClick={()=>{this.login()}} >Sign In</button></Link>
              </div>

              <h3 className="eno"><span>Environment:</span>Staging<br />Version 4.66</h3>
          </section>

        </div>
        </div>
        </div>
    );
  }
}
export default Login;