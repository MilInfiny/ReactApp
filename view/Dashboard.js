import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


 class Dashboard extends React.Component{
 constructor (props) {
   super(props);
   this.state = {

   };

 }
 render(){
 	return(
              <div className="row">
                            <div className="col-md-12">
                                <div className="portlet light portlet-fit bordered">
                                    <div className="portlet-title">
                                        <div className="caption">
                                            <i className=" icon-layers font-green"></i>
                                            <span className="caption-subject font-green bold uppercase">Client List </span>
                                        </div>
                                    </div>
                                    <div className="portlet-body">
                                        <div className="mt-element-card mt-card-round mt-element-overlay">
                                            <div className="row" style={{height:'30%'}}>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" onClick={(e)=>{browserHistory.push('/client_info')}}>
                                                    <div className="mt-card-item">
                                                        <div className="mt-card-avatar mt-overlay-1">
                                                            <img style={{height:'100%'}} src="../assets/pages/img/avatars/team5.jpg" />
                                                            <div className="mt-overlay">                                                              
                                                            </div>
                                                        </div>
                                                        <div className="mt-card-content">
                                                            <h3 className="mt-card-name">Jennifer Lawrence</h3>
                                                            <p className="mt-card-desc font-grey-mint">Creative Director</p>                                                       
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="mt-card-item">
                                                        <div className="mt-card-avatar mt-overlay-1 mt-scroll-down">
                                                            <img style={{height:'100%'}} src="../assets/pages/img/avatars/team6.jpg" />
                                                            <div className="mt-overlay mt-top">
                                                              
                                                            </div>
                                                        </div>
                                                        <div className="mt-card-content">
                                                            <h3 className="mt-card-name">Kate Beck</h3>
                                                            <p className="mt-card-desc font-grey-mint">Executive Manager</p>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="mt-card-item">
                                                        <div className="mt-card-avatar mt-overlay-1 mt-scroll-up">
                                                            <img  style={{height:'100%'}} src="../assets/pages/img/avatars/team7.jpg" />
                                                            <div className="mt-overlay">                           
                                                            </div>
                                                        </div>
                                                        <div className="mt-card-content">
                                                            <h3 className="mt-card-name">Hugh Jackman</h3>
                                                            <p className="mt-card-desc font-grey-mint">Human Resource</p>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="mt-card-item">
                                                        <div className="mt-card-avatar mt-overlay-1 mt-scroll-left">
                                                            <img style={{height:'100%'}} src="../assets/pages/img/avatars/team8.jpg" />
                                                            <div className="mt-overlay">                                                               
                                                            </div>
                                                        </div>
                                                        <div className="mt-card-content">
                                                            <h3 className="mt-card-name">Gwen Parker</h3>
                                                            <p className="mt-card-desc font-grey-mint">Finance Manager</p>                                                      
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
 		)
 }

}
export default connect()(Dashboard);
