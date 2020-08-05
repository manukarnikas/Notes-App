import React,{Component} from 'react';
import './nav.css';


class Nav extends Component{
    render(){
        return (
            <div className="flex-container">
                <div>
                    <label className="header">Notes</label>
                </div>
                <div>
                     <i className="fa fa-book header" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}


export default Nav;