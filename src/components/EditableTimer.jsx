import React, { Component } from 'react';
import TimerForm from "./TimerForm"
import Timer from "./Timer"
class EditableTimer  extends Component {
    state = { 
        editFormOpen : false
     }

 handleCancel = ()=>{
     this.setState({ editFormOpen: false });
 }
 handleUpdate = ()=>{
    this.setState({ editFormOpen: true });
}
formSubmit = (data)=>{
    this.props.formSubmit(data)
    this.setState({ editFormOpen :false  });
}
    render() { 
        if(this.state.editFormOpen){
            return ( 
              <TimerForm
                title = {this.props.title}
                project ={this.props.project}
                id ={this.props.id}
                cancel={this.handleCancel}
                editFormOpen = {this.state.editFormOpen}
                onFormSubmit={this.formSubmit}
               />
            );
        }else{
            return ( 
              <Timer 
                title = {this.props.title}
                project ={this.props.project}
                update={this.handleUpdate}
                delete={this.props.delete}
                id ={this.props.id}
               />
            );
        }
       
    }
}
 
export default EditableTimer ;