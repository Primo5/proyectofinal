import React from "react";
import {MdPersonPin, MdVpnKey,MdEmail} from "react-icons/md"
import {Link} from "react-router-dom"

export const RegisterComponent = () => {
    return (
        <div className="container">
        <div className="d-flex justify-content-center h-100">
            <div className="card">
                <div className="card-header">
                    <h3>Register</h3>
                    <div className="d-flex justify-content-end social_icon">
                        <span><i className="fab fa-facebook-square"></i></span>
                        <span><i className="fab fa-google-plus-square"></i></span>
                        <span><i className="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <MdPersonPin/></span>
                               
                            </div>
                            <input type="text" className="form-control" placeholder="username"/>
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><MdEmail/></span>
                            </div>
                            <input type="text" className="form-control" placeholder="email"/>
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><MdVpnKey/></span>
                            </div>
                            <input type="password" className="form-control" placeholder="password"/>
                        </div>
                    
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn float-right login_btn"/>
                        </div>
                       
                    </form>
                </div>
                <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                            Go back to login?
                            <Link to="/login">Sign In</Link>
                            </div>
                        </div>
            </div>
        </div>
        </div>
    )
}