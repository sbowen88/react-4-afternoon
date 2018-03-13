import React, { Component } from 'react';
import axios from 'axios';



export default class Student extends Component {
  constructor() {
    super()
    this.state ={
      studentInfo: {}
    }

  }

  componentDidMount(){
    console.log(this.props.match.params.id)
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(results=> {
      this.setState({
        studentInfo: results.data
      })
    })
  }


  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>Grade: {this.state.studentInfo.grade}</h1>
        <h3>Email: {this.state.studentInfo.emial}</h3>
      </div>
    )
  }
}