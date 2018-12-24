import React, { Component } from 'react';
class TimerForm extends Component {
    state = { 
        titre : this.props.title || '',
        project : this.props.project || '',
        id : this.props.id || ''
     }

formSubmit=(e)=>{
    e.preventDefault()
    const data = {
        id : this.state.id,
        title : this.refs.title.value,
        project : this.refs.project.value
        
    }
    if(data.title !== "" && data.project!=="")
    this.props.onFormSubmit(data)

}

    render() { 
       const buttonTitle= this.props.title ? "Update": "Add"
       const formTitle= this.props.title ? "Edit": "Add"
        return ( 
               
                <div align="center" >
                    <div className="card p-3" style={{width : "20%", boxShadow:"0px 0px 25px rgba(0,0,0,.4)"}} > 

                        <form onSubmit={this.formSubmit} className="form-group" >
                            <h4>{formTitle} Timer</h4>
                            <input type="text" 
                             className="form-control"
                             placeholder="Titre" 
                             defaultValue={this.state.titre} 
                             ref="title"
                            />
                            <br/>
                            <textarea 
                             type="text"
                             className="form-control"
                             placeholder="Tache" 
                             defaultValue={this.state.project}
                             ref="project"
                            />
                            <br/>

                            <div className="input-group">
                                <input type="submit" className="form-control btn btn-danger m-1" value={buttonTitle}/>
                                <input type="button" className="form-control btn btn-danger m-1" 
                                 value="Cancel"
                                 onClick={this.props.cancel}
                                 />
                            </div>
                            
                        </form>
                    </div>
               </div>
           
         );
    }
}
 
export default TimerForm;