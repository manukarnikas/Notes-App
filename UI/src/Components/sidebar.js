import React,{Component} from 'react';
import './sidebar.css';


class Sidebar extends Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-primary full-width">Add Note <span style={{float:'right'}}><i className="fa fa-plus" aria-hidden="true"></i></span></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>SEARCH</p>
                        <input className="full-width" type="text"/>
                    </div>
                </div>
                <hr className="section"/>
                <div className="row">
                    <div className="col-md-12">
                        <div  data-toggle="collapse" data-target="#sort" aria-expanded="true" aria-controls="sort">
                            <span >
                            <i className="fa fa-sort" aria-hidden="true"></i>
                            </span> &ensp;
                            <label>SORT</label>
                            <span style={{float:'right'}}>
                                <i className="fa fa-caret-down" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="vertical-menu collapse show"  id="sort">
                            <a href="#"><span><i className="fa fa-calendar-o" aria-hidden="true"></i></span> &ensp; CREATED DATE</a>
                            <a href="#"><span><i className="fa fa-calendar-o" aria-hidden="true"></i></span> &ensp; MODIFIED DATE</a>
                            <a href="#"><span><i className="fa fa-sort-alpha-asc" aria-hidden="true"></i></span> &ensp; NAME</a>
                        </div>
                    </div>
                </div>
                <hr className="section"/>
                <div className="row">
                    <div className="col-md-12">
                        <div  data-toggle="collapse" data-target="#share" aria-expanded="true" aria-controls="share">
                            <span>
                                <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </span> &ensp;
                            <label>SHARE</label>
                            <span style={{float:'right'}}>
                                <i className="fa fa-caret-down" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="vertical-menu collapse show"  id="share">
                            <a href="#" ><span><i className="fa fa-whatsapp" aria-hidden="true"></i></span> &ensp; WHATSAPP</a>
                            <a href="#"><span><i className="fa fa-envelope" aria-hidden="true"></i></span> &ensp; MAIL</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Sidebar;