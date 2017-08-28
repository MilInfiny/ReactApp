import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';



class Index extends React.Component{
 constructor (props) {
   super(props);
   this.state = {

   };

 }
 processLogin(e)
 {
   if(this.refs.email.value == "")
   {
    this.setState({errorAlert:true,errorMessage:"email is required"})
     return;
   }
   if(this.refs.password.value == "")
   {
    this.setState({errorAlert:true,errorMessage:"password is required"})
      return;
   }  
 }
   componentWillReceiveProps(nextProps){

   }

 render(){
   return(
             <div className="login">
                 <div className="logo">
                  <img src="./assets/pages/img/logo-big-white.png" style={{height: 17}} alt="" /> 
                 </div>
                 <div className="content">
                    <form className="login-form" >
                      <div className="form-title">
                        <span className="form-title">Welcome.</span>
                        <span className="form-subtitle">Please login.</span>
                      </div>
                      {(this.state.errorAlert)?
                       <div className="alert alert-danger">
                        <button className="close" onClick={(e)=>{e.preventDefault();this.setState({errorAlert:false})}} data-close="alert"></button>
                        <span> {this.state.errorMessage} </span>
                      </div>:null}
                      
                      <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9">email</label>
                        <input className="form-control form-control-solid placeholder-no-fix" type="text" autocomplete="off" placeholder="email" ref="email" name="email" />
                      </div>
                      <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9">Password</label>
                        <input className="form-control form-control-solid placeholder-no-fix" type="password" autocomplete="off" placeholder="Password" ref="password" name="password" /> 
                      </div>
                      <div className="form-actions">
                       <button type="button" onClick={(e)=>{e.preventDefault(); this.processLogin()}} className="btn red btn-block uppercase">Login</button>
                      </div>
                      <div className="form-actions">
                        <div className="pull-left">
                          <label className="rememberme mt-checkbox mt-checkbox-outline">
                          <input type="checkbox" name="remember" value="1" /> Remember me
                          <span></span>
                          </label>
                        </div>
                        <div className="pull-right forget-password-block">
                         <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
                        </div>
                      </div>
                      <div className="login-options">
                        <h4 className="pull-left">Or login with</h4>
                        <ul className="social-icons pull-right">
                        <li>
                        <a className="social-icon-color facebook" data-original-title="facebook" href="javascript:;"></a>
                        </li>
                        <li>
                        <a className="social-icon-color twitter" data-original-title="Twitter" href="javascript:;"></a>
                        </li>
                        <li>
                        <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;"></a>
                        </li>
                        <li>
                        <a className="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;"></a>
                        </li>
                        </ul>
                      </div>
                      <div className="create-account">
                        <p>
                         <a href="javascript:;" className="btn-primary btn" id="register-btn">Create an account</a>
                        </p>
                      </div>
                    </form> 
                 </div>
             </div>     
           
   );
 }


}
export default connect()(Index);
