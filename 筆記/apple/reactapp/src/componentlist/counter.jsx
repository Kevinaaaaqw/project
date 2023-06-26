import React, { Component } from 'react';
class Counter extends Component {
    // state = {
    //     tags : ['zzz','asdsa','powqie','ftghd'],
    //     location:{
    //         x:100,
    //         y:200
    //     }
    // }
    render() { 
        return (
        <React.Fragment>
            <div style={{display:'flex'}}>           
            <div className={this.getBadgeClass()}>{this.formatCount()}</div>
            <button onClick={()=>{this.props.plus()}} className='btn-lg m-2 btn-outline-success'>+</button><br/>
            <button onClick={()=>{this.props.onDelete()}} className='btn-lg m-2 btn-outline-danger'>delete</button><br/>
            </div>
            {/* {this.rendertags()}
            <p>x:{this.state.location.x},y:{this.state.location.y}</p> */}
        </React.Fragment>
        );
    }

    // rendertags (){
    //     if(this.state.tags.length === 0) return <p>no list!!!!</p> ;
    //     return  (
    //         <ul>
    //         {this.state.tags.map((pika)=> <li key={pika}>{pika}</li>)}
    //         </ul>
    //         )
    // }

    getBadgeClass = () => {
        let classess = "border p-2 m-2 h2 badge-"
        // let {count} =this.state
        this.props.value === 0? classess+="warning":classess+="success"
        return classess
    }

    // pluse = () => {
    //     // this.change()
        
    // }

    // change = () => {
    //     let newstate = {...this.state}
    //     newstate.location.x +=100 
    //     this.setState(newstate)
    //     // console.log(newstate)
    // }
    
    formatCount=()=>{
        return this.props.value === 0 ? 'zero' : this.props.value ;
    }

}
 
export default Counter;

//  {/* .map陣列裡面個別輸出結果 */}
//  <ul>
//  {/* 後面為箭頭函式在右半邊的function外面還可以包html標籤，類似php和ejs的渲染*/}
// {this.state.tags.map((pika)=><li key={pika}>{pika}</li>)}
// </ul>