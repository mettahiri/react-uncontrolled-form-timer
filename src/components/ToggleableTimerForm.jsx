import React, { Component } from 'react';
import TimerForm from "./TimerForm";
class ToggleableTimerForm extends Component {
    state = {  }
   

    render() { 
        
        if(this.props.isOpen){
           return (
            <TimerForm
             cancel={this.props.cancel}
             onFormSubmit={this.props.onFormSubmit}
            />
           );
        }else{
            return ( 
                <div>
                    <span 
                     className="btn badge btn-danger" 
                     style={{fontSize:"25px"}}
                     onClick={this.props.toggleForm}
                    >+
                    </span>
                </div>
               
             );
        }
       
    }
}
 
export default ToggleableTimerForm;