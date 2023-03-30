import React from "react";

class ProductName extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}