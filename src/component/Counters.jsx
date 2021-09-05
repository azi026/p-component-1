import React from 'react';
import './Counters.css'

class Counters extends React.Component {
 
    render() { 
        
        return (
            <div>                      
                <img  style={{marginBottom:5,borderRadius:10}} src={this.props.url } alt={this.props.alt}/>
                <span className={this.getClasses()} >{this.formatCount()} </span>             
                <button onClick={()=>this.props.onIncrement(this.props.counter)}
                 className="btn btn-secondary btn-sm m-2">+</button>
                <button onClick={()=>this.props.onDecrement(this.props.counter)}className="btn btn-danger btn-sm m-2">-</button>
                <button  onClick={()=>this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delet</button>
            </div>
        );
       
    }
    formatCount(){
       
        return this.props.value ===0 ?"Zero" : this.props.value;
     }
     getClasses(){
         
         let classes=this.props.value===0 ? "warning" :"primary";
         return classes;
     }
}
 
export default Counters;