import React, { Component } from 'react'
import EditableTimerList from "./EditableTimerList"
import ToggleableTimerForm from "./ToggleableTimerForm"
import uuid4 from "uuid4"


class TimerDashBord extends Component {
    state = { 
        toggle : false,
        tache : []
     }

     handleToggleForm = ()=>{
         this.setState({ toggle : true });
     }
     handleCancel=()=>{
         this.setState({ toggle :false  });
     }
     handleDelete=(id)=>{
       const deleting = this.state.tache.filter(tache => tache.id !== id)
      this.setState({ tache :deleting });
    }
    handleFormSubmit = data =>{
        data.id= uuid4()
        this.setState({ tache : [...this.state.tache, data], toggle:false });
    }
    handleFormUpdate= data =>{

      const dataArray = this.state.tache.map(tache => {
        if(tache.id === data.id){
            return Object.assign({},tache,{
                title : data.title,
                project : data.project
            })

           
        }else{
            return tache
        }
    }

    )
    this.setState({ tache : dataArray });
    
    console.log(dataArray)
 
    }
    render() { 
        return ( 
        <div>
            <br/>
            <EditableTimerList 
                 tache = {this.state.tache}
                 formSubmit = {this.handleFormUpdate}
                delete={this.handleDelete}

            />
            
            <br/>
            <ToggleableTimerForm 
             isOpen={this.state.toggle} 
             toggleForm={this.handleToggleForm} 
             cancel={this.handleCancel}
             onFormSubmit = {this.handleFormSubmit}
            />
        </div>
           
         );
    }
}
 
export default TimerDashBord;