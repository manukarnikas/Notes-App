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
                        <span><small>CREATED DATE : </small></span>
                        <span style={{float:'right'}}><small>LAST MODIFIED : </small></span>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}


export default MainContent;