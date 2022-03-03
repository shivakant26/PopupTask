import { TextField , Button} from "@mui/material";
import React from "react";

class UserForm extends React.Component{
    constructor(){
        super();
        this.state={
            Title:"",
            Discription:"",
            TitleErr:"",
            DiscriptionErr:"",
            data:[]
        }
    }
    valid(){
        if(!this.state.Title && !this.state.Discription){
            this.setState({
                TitleErr:"Required",
                DiscriptionErr:"Required"
            });
        }
        else{
            return true;
        }
    }
    add(e){
        e.preventDefault();
        this.setState({
            TitleErr:"",
            DiscriptionErr:""
        });
        if(this.valid()){
            let items = JSON.parse(localStorage.getItem("key"));
            let data = items ? items : []
            data.push({
                Title:this.state.Title,
                Discription:this.state.Discription
            })
            this.setState({
                data
            })
            localStorage.setItem("key",JSON.stringify(data));
            document.getElementById("myform").reset();
        }
       
    }
    render(){
        return(
            <div className="form">
                <div className="center_wr">
                    <h2>UserForm</h2>
                    <form id="myform">
                    <div className="form-field">
                        <TextField id="outlined-basic"
                         label="Title" 
                         variant="outlined"
                         onChange={(e)=>{this.setState({Title : e.target.value})}}
                          />
                          <span className="error">{this.state.TitleErr}</span>
                    </div>
                    <div className="form-field">
                        <TextField id="outlined-basic"
                         label="Discription"
                          variant="outlined"
                          onChange={(e)=>{this.setState({Discription : e.target.value})}}
                           />
                           <span className="error">{this.state.DiscriptionErr}</span>
                    </div>
                    <div className="form-field">
                    <Button variant="contained"
                    onClick={(e)=>{this.add(e)}}
                    >Add</Button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default UserForm;