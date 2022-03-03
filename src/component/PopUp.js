import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';

class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Discription: "",
            data:[],
            show:true,
            hide:true,
            isUpdate:true
        } 
    }

    componentDidMount(){
        // console.log("id is:",this.props.id)
        let data = JSON.parse(localStorage.getItem("key"));
        let object = data[this.props.id-1];
        this.setState({
            Title:object.Title,
            Discription:object.Discription,
            id:this.props.id
        })
    }
    Update(){
        let record = {
            Title:this.state.Title,
            Discription:this.state.Discription,
            isUpdate:this.state.isUpdate
        }
        this.props.parentCallback(record)
        this.setState({
            show:false,
        })       
    }
    cancel(){
            this.setState({
                show:!this.state.show,
            })            
   }
    render() {
        
        return (
            <div className="popup">
                <div className="center_wr">
                    <Modal show={
                        this.props.id ? this.state.show : this.state.hide 
                    }>
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Update Record</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <div className="form-field">
                                    <TextField id="outlined-basic"
                                        label="Title"
                                        variant="outlined"
                                        value={this.state.Title}
                                        onChange={(e) => { this.setState({ Title: e.target.value }) }}
                                    />
                                </div>
                                <div className="form-field">
                                    <TextField id="outlined-basic"
                                        label="Discription"
                                        variant="outlined"
                                        value={this.state.Discription}
                                        onChange={(e) => { this.setState({ Discription: e.target.value }) }}
                                    />
                                </div>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="primary"
                                onClick={()=>{this.Update()}}
                                >Save</Button>
                                <Button variant="secondary"
                                onClick={()=>{this.cancel()}}
                                >Cancel</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default PopUp;