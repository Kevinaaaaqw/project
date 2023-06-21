import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 0,
        tags : ['zzz','asdsa','powqie','ftghd']
    }
    render() { 
        console.log('aaa')
        return (
        <React.Fragment>
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick={this.pluse} className='btn-lg m-2 btn-outline-success'>這是按鈕</button>
            {this.rendertags()}
        </React.Fragment>
        );
    }

    rendertags (){
        if(this.state.tags.length === 0) return <p>no list!!!!</p> ;
        return  (
            <ul>
            {this.state.tags.map((pika)=> <li key={pika}>{pika}</li>)}
            </ul>
            )
    }

    getBadgeClass = () => {
        let classess = "border p-2 m-2 h2 badge-"
        let {count} =this.state
        count === 0? classess+="warning":classess+="success"
        return classess
    }

    pluse = () => {
        console.log(this.state.count)   
        // this.state.count+=1  
        // this.render()
    }
    
    formatCount=()=>{
        let {count} = this.state
        return count === 0 ? 'zero' : count ;
    }

}
 
export default Counter;

//  {/* .map陣列裡面個別輸出結果 */}
//  <ul>
//  {/* 後面為箭頭函式在右半邊的function外面還可以包html標籤，類似php和ejs的渲染*/}
// {this.state.tags.map((pika)=><li key={pika}>{pika}</li>)}
// </ul>