import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


 class Client_info extends React.Component{
 constructor (props) {
   super(props);
   this.state = {

   };

 }
 render(){
 	return(
             <div className="page-content-wrapper">                   
              <div className="page-content">
				<h1 className="page-title"> Admin Dashboard
				   <small>statistics, charts, recent events and reports</small>
				</h1>                       
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<a className="dashboard-stat dashboard-stat-v2 blue" href="#">
							<div className="visual">
							 <i className="fa fa-comments"></i>
							</div>
							<div className="details">
								<div className="number">
								  <span>1349</span>
								</div>
								<div className="desc"> New Feedbacks </div>
							</div>
							</a>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<a className="dashboard-stat dashboard-stat-v2 red" href="#">
								<div className="visual">
								 <i className="fa fa-bar-chart-o"></i>
								</div>
								<div className="details">
									<div className="number">
										<span>12.5</span>M$ </div>
										<div className="desc"> Total Profit </div>
								</div>
							</a>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<a className="dashboard-stat dashboard-stat-v2 green" href="#">
								<div className="visual">
								  <i className="fa fa-shopping-cart"></i>
								</div>
								<div className="details">
									<div className="number">
									  <span>549</span>
									</div>
									<div className="desc"> New Orders </div>
								</div>
							</a>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<a className="dashboard-stat dashboard-stat-v2 purple" href="#">
								<div className="visual">
								  <i className="fa fa-globe"></i>
								</div>
								<div className="details">
									<div className="number"> +
									<span>89</span>% </div>
									<div className="desc"> Brand Popularity </div>
								</div>
							</a>
						</div>
					</div>					
				</div>
             </div> 
 		)
 }
}
export default connect()(Client_info);