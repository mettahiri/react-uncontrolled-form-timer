import React, { Component } from 'react';
import EditableTimer from "./EditableTimer"
class EditableTimerList extends Component {
 
    render() { 
        return ( 
                this.props.tache.map(tache=>
                   <EditableTimer 
                    title = {tache.title}
                    project = { tache.project }
                    id={tache.id}
                    delete={this.props.delete}
                    formSubmit = {this.props.formSubmit}
                   />
                 )
         );
    }
}
 
export default EditableTimerList;