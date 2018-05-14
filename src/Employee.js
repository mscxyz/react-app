import React from 'react';
import './employee.css';
export class Employee extends React.Component {

    constructor(props) {

        super();


        this.state={
            age:5
        }
       

    }

    incrementAge() {

        if (this.state.age==56){
            alert("error");
        }
        this.setState({
            age:this.state.age+3
        })

    }

    handle(event) {

        this.setState({
            title: event.target.value
        })

    }

    render() {

        let title = "React App";

        let employees = [
            { name: 'mike', age: 15 },
            { name: '231', age: 167 },
            { name: 'mik14e', age: 22 },
            { name: 'sdad', age: 25 },
            { name: '61', age: 19 }
        ];
        return (

            <div>

                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" onChange={this.handle.bind(this)} />

                </div>



                    <h3>{this.state.age}</h3>

                <button className="btn btn-primary" type="button" onClick={this.incrementAge.bind(this)} >Send Message</button>

      
            </div>

        )

    }

}

export default Employee