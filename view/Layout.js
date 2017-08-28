import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import classnames from 'classnames';


import _ from 'lodash';
// iwt8ssc - Fira Sans Typekit

class Layout extends React.Component {

  render () {
  
    return (
      <html>
        <head>
          <title></title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />    
          <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
          <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>        
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          <script dangerouslySetInnerHTML={{
            __html: 'try{Typekit.load({ async: true });}catch(e){}'
          }} />
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
        <link href="./assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="./assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
        <link href="./assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="./assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css" />
        <link href="./assets/global/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
        <link href="./assets/global/plugins/select2/css/select2-bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="./assets/global/css/components.min.css" rel="stylesheet" id="style_components" type="text/css" />
        <link href="./assets/global/css/plugins.min.css" rel="stylesheet" type="text/css" />
        <link href="./assets/pages/css/login.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link href="./style.css" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <div>
              {this.props.children}
          </div>
          <script src='/bundle.js' />
       </body>
      </html>
    );
  }
};

export default connect()(Layout);

