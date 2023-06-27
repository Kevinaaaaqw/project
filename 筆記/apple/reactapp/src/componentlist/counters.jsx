import React, { Component } from "react";
import Counter from './counter';
class Counters extends Component{
    state =
    {
        counters:
        [
            {
                id:0,
                value:0
            },
            {
                id:1,
                value:1
            },
            {
                id:2,
                value:2
            },
            {
                id:3,
                value:3
            }
        ]
    }

    render(){
        // console.log(Counter)
        return<React.Fragment>
            {this.state.counters.map((item,index)=>{
                return <Counter key={item.id} plus={()=>{this.plus(item.id)}} value={item.value} onDelete={()=>{this.doDelete(item.id)}}/>
            })}
        </React.Fragment>
    }

    doDelete = (order) =>{
        //菜鳥(笑)當order=index
        // let newState = {...this.state}
        // newState.counters.splice(order,1)
        // console.log(order)
        // this.setState(newState)

        //使用filter找出key值移除order=item.id
        let newState = {...this.state};
        newState.counters = newState.counters.filter((e)=>{
            return e.id !== order
        })
        console.log(newState)
        this.setState(newState)
        
    }
    
    plus = (order)=>{
        let newState = {...this.state};
        for (let i = 0; i < this.state.counters.length; i++) {
            let id = this.state.counters[i].id;
            if(order === id){
                newState.counters[i].value +=1
                this.setState(newState)
            }
            
        }
    }
}
export default Counters;