import React, {Component} from 'react';
import Burger  from '../../components/Burger/Burger.js'
class BurgerBulider extends React.Component{

render(){

  return(

        <React.Fragment>
          <Burger/>
          <div>Build Controls</div>


        </React.Fragment>
        )

  }
}

export default BurgerBulider;
