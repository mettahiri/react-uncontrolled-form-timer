import React, { Component } from 'react';
class Timer extends Component {
    state = {  
        date : "",
        time : ""
    }

    handleDelete = ()=>{
        
      const r=  window.confirm("vous etes sure?")
       if(r == true){
        this.props.delete(this.props.id)
       }
    }
    componentWillMount(){
       
            let date= new Date();
            let day = date.getDay();
            let month = date.getMonth()+1;
            let year = date.getYear();
            day < 10 ? day='0'+day : day;
            month < 10 ? month='0'+month : month;


                let hour = date.getHours();
                let minute = date.getMinutes();
                let second = date.getSeconds();
                hour < 10 ? hour='0'+hour : hour;
                minute < 10 ? minute='0'+minute : minute;
                second < 10 ? second='0'+second : second;
            
                this.setState({ date:  day+'/'+month+'/'+year , time : hour+':'+minute+':'+second });
                
    }
    
    
    render() { 
        const date= this.state.date
        const time= this.state.time
        return ( 
        <div align="center">
            <div className="card " style={{width:"20%",boxShadow:"0 0 5px rgba(0,0,0,.7)"}} >
                <div className="card-body">
                    <h1 className="card-title">{this.props.title}</h1>
                    <h4 align="justify" className="list-group-item" >{this.props.project}</h4>
                    <div align="right" style={{fontSize:"20px"}} >
                        <i onClick={this.handleDelete} className="fa fa-trash m-1" ></i> 
                        <i onClick={this.props.update} className="fa fa-edit m-1" ></i>
                    </div>
                    <h5 className="list-group-item  ">{date+" "+time}</h5>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Timer;