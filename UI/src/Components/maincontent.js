import React,{Component} from 'react';
import './maincontent.css';


class MainContent extends Component{
    render(){
        return(
            <div>
                <div className="card full-width">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{this.props.note.title}</h5>
                        </div>
                        <div className="card-text">
                            <p>{this.props.note.note}</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <span><small>CREATED DATE : { this.props.note.createdDate } | </small></span> 
                        <span ><small>LAST MODIFIED : </small></span>
                        <i style={{float:'right'}} className="fa fa-trash del" onClick={event=>{this.props.deleteNote(this.props.note._id)}} aria-hidden="true"></i>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}


export default MainContent;