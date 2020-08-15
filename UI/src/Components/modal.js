import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import './modal.css';
import gql from 'graphql-tag';
import client from '../environment/environment'; 

//save
const saveNotesMutation = gql`
mutation addNote($title: String!,$note: String!, $createdDate: String!) {
  addNote (title:$title,note:$note,createdDate: $createdDate) {
    _id
    title
    note
    createdDate
  }
}`;

   

class NoteModal extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            note: ''
        }
    }

    handleForm(event){
        this.setState({
            [event.target.id]:  event.target.value
        })
    }

   async saveChanges(){
        await client.mutate({
            mutation: saveNotesMutation,
            variables: {
                title: this.state.title,
                note: this.state.note,
                createdDate: new Date()
            }
        }).then(res=>{
            this.props.reload(res.data.addNote);
        })
    }

   validation(){
       for(var key in this.state){
           if(!this.state[key] ){
                return true;
           }
       }
       return false;
   }

    render(){
        return (

            <Modal  show={this.props.show} onHide={this.props.close} backdrop="static" keyboard={false}  >
                <Modal.Dialog className="center">
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Note</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                            <Form>
                                <Form.Group>
                                <Row>
                                    <Col md={12}>
                                        <label >Title</label>
                                        <input type="text" id="title" className="form-control" placeholder="Title" onChange={(event)=>{this.handleForm(event)}}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <label>Note</label>
                                        <textarea id="note" className="form-control" rows="3" placeholder="Note" onChange={(event)=>{this.handleForm(event)}}></textarea>
                                    </Col>
                                </Row>
                                </Form.Group>
                            </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>Close</Button>
                        <Button variant="primary"  onClick={(event)=>{this.saveChanges();this.props.close()}}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        );
       
    }
}

export default NoteModal;