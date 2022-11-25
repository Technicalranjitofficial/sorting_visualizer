import React, { Component } from "react";
import Custom from "./Bar";
import { generateArray } from "../Functions/GenerateArray";
import Header from "./Header";
import SpeedSlider from "./SpeedSlider";
import PopUpMenu from "./PopUpMenu";
import GenerateSlider2 from "./GenerateSlider2";

export default class Homepage extends Component {
  state = {
    arr: [],
    sorted:false,
    isSorting:false,
    stop:false,
    time:5,
    algorithm:0,
    genVal:60,
  };

 



  componentDidMount() {
    generateArray(this.updateArray,this.setSorted,200,this.setisSorting);
  }

  setSorted=(cond)=>{
    this.setState({sorted:cond});
  }

  setisSorting=async(cond)=>{
    this.setState({isSorting:cond});
  }
   updateArray=(arr)=> {
    this.setState({ arr: arr });
  }

  setGenVal=(value)=>{
    this.setState({genVal:value});
  }
  setStop=(cond)=>{
    this.setState({stop:cond});
  }


  setTime=(tm)=>{
    this.setState({time:tm});
  }

  setAlgorithm=(algorithmNum)=>{
    this.setState({algorithm:algorithmNum});
  }
  
  render() {
    return (
      <div className="main_container">
        <Header updateArray={this.updateArray} array={this.state.arr} sorted={this.state.sorted} setSorted={this.setSorted} isSorting={this.state.isSorting} 
        
        setisSorting={this.setisSorting} stop={this.state.stop} setStop={this.setStop} time={this.state.time} setTime={this.setTime} genVal= {this.state.genVal} setGenVal={this.setGenVal}
        />
        <div className="container">
        
          {this.state.arr.map((val, index) => {
            return (
              <Custom
                arr={this.state.arr}
                val={val}
                index={index}
                key={index}
              />
            );
          })}
        </div>
<div className="pc_version_slider">
<SpeedSlider time={this.state.time} setTime ={this.setTime} isSorting={this.state.isSorting}/>
</div>
      <div className="slider_section">
      <SpeedSlider time={this.state.time} setTime ={this.setTime} isSorting={this.state.isSorting}/>
        <GenerateSlider2 val={this.state.genVal} setVal={this.setGenVal} updateArray={this.updateArray} setSorted = {this.setSorted} setisSorting={this.setisSorting} isSorting={this.state.isSorting}/>
     
        </div>
       <PopUpMenu algorithm={this.state.algorithm} setAlgorithm={this.setAlgorithm} sorted={this.state.sorted} array={this.state.arr} time={this.state.time} updateArray = {this.updateArray} setSorted={this.setSorted} setisSorting={this.setisSorting} genVal={this.state.genVal}
       isSorting={this.state.isSorting} stopSort={this.setStop}
       />
       
      </div>
    );
  }
}
