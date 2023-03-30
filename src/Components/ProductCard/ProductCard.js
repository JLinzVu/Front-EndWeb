import React from "react";
import { Link } from "react-router-dom";
import './card.css'

class ProductCard extends React.Component{
    render(){
        return (
                    <div>
                        <div className="card" >
                            <div>
                                <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="text-box">{this.props.title}</h5>
                                <p className="text-price">{this.props.price}</p>
                                <Link to={this.props.links}> Detail </Link>
                            </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default ProductCard;