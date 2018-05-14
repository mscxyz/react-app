import React from 'react';

export class Products extends React.Component {

    constructor(props){
        super();
        this.state={
            name:0
        }

  

    }
    
    printNumber(){
       
    }

    handleName(event){

        let val=parseInt(event.target.value);
        this.setState({
            name:(val>0) ? val : 0 
        })

    }

    render() {

        return (

            <div>
                <h1 className="text-center">Products</h1>

                <div className="form-group">
                    <input type="text" onChange={this.handleName.bind(this)} className="form-control"/>
                </div>

                 <div className="form-group">
                    <button className="btn btn-primary" onClick={this.printNumber}>
                        Add
                    </button>
                 </div>

                <h3>
                    
                {this.state.name}</h3>

            </div>

        )

    }

}