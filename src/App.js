import React, { Component } from 'react';
import Counters from './component/Counters';
import NavBar from './component/Navbar';
class App extends Component{
    state={
        counters:[{id:1,value:4,img:{url:"https://picsum.photos/200",alt:"dd"}}
        ,{id:2,value:0,img:{url:"https://picsum.photos/201"},alt:"dd"},
        {id:3,value:0,img:{url:"https://picsum.photos/205",alt:"s"}}],
        
    };
        
    render(){
        return(
           <div>
              <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}sum={this.state.counters.reduce((a,c)=>a+c.value,0)}totalCounters={this.state.counters.filter(c=> c.value >0).length}  /> 
              <button onClick={this.handelReset} className="btn btn-primary m-2"> Reset</button>                 
              <main className="container">              
                    {this.state.counters.map(counter=>
                        <Counters key={counter.id} 
                        value={counter.value} url={counter.img.url}
                        counter={counter}
                        onIncrement={this.handelIncrement}
                        onDecrement={this.handelDecrement}
                        onDelete={this.handelDelet}
                      
                       
                        
                        />                 
                    )}   
                                   
             </main>                         
           </div>
        );
    }
    handelIncrement=counter=>{
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter); 
        counters[index]={...counter};
        counters[index].value ++;
        this.setState({counters});
    }; 
    handelDecrement=counter=>{
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter); 
        counters[index]={...counter};
        counters[index].value --;
        this.setState({counters});
    }; 
    handelDelet=conterId=>{
        const conters =this.state.counters.filter(c=>c.id!==conterId)
        this.setState({counters:conters})
    };
    handelReset=()=>{
        const counters =this.state.counters.map(c=>{
            c.value=0;
            return c;
        })
        this.setState({counters})
    }
    // handelSum=()=>{
    //     this.state.counters.reduce((a,c)=>{
    //         const sum= a+c.value;
            
           
    //     });    
      
        
    // }
    

}
export default App;
