import React from "react";
import { TableContainer ,
    Table ,TableHead, 
    TableRow , TableCell , TableBody,
    Button }
     from '@mui/material';
import PopUp from "./PopUp";
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Title:"",
            Discription:"",
            data: [],
            isActive:true
            
        }
    }
    // creating callback function here.............
    callbackFunction = (childData) => {
        // console.log("boolean value",childData)
        let data = JSON.parse(localStorage.getItem("key"));
        data.splice(this.state.id-1,1,childData)
        this.setState({
            data,
        })
        localStorage.setItem("key",JSON.stringify(data));
        this.setState({
            isActive:!this.state.isActive
        })
        
  }

    componentDidMount() {
        let items = JSON.parse(localStorage.getItem("key"));
            this.setState({
            data: items
        })
    }
    delete(id){
        let data = JSON.parse(localStorage.getItem("key"));
        data.splice(id-1,1);
        this.setState({
            data
        })
        localStorage.setItem("key",JSON.stringify(data));
    }
    edit(id){
            this.setState({
            id:id
        })
        
    }
   
    render() {
        console.log(152207, this.state.id)
        return (
            <div className="list">
                {this.state.show}
                <div className="center_wr">
                    <h2>UserList</h2>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="th">Id</TableCell>
                                    <TableCell className="th">Title</TableCell>
                                    <TableCell className="th">Description</TableCell>
                                    <TableCell className="th">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.data.map((item ,id) => (
                                    <TableRow key={id}>
                                        <TableCell>{id+1}</TableCell>
                                        <TableCell>{item.Title}</TableCell>
                                        <TableCell>{item.Discription}</TableCell>
                                        <TableCell>
                                        <Button variant="contained"
                                        onClick={()=>{this.edit(id+1)}}
                                        >Edit</Button>
                                        <Button id="left" 
                                        variant="contained" 
                                        color="error"
                                        onClick={()=>{this.delete(id)}}
                                        >Delete</Button>
                                        </TableCell>
                                      </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                { this.state.id ? <PopUp id={this.state.id} parentCallback = {this.callbackFunction}/> : "" }
            </div>

        )
    }
}
export default UserList;