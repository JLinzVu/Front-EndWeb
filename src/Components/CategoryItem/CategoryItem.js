import React from "react";
import './card.css'
import { Link } from "react-router-dom"; 

class CategoryItem extends React.Component{
    render(){
        return (
            <div>
                <section>
                    <div className="container-fluid">
                        <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="card card_red text-center">
                                <div className="title">
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                <h2>Tẩy Trang và Sữa Rửa Mặt</h2>
                                </div>
                                <div className="option">
                                <ul>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lovely bracelets</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>3 Suitable for pretty girls</li>
                                    </ul>
                                </div>
                                <Link to="/cleansing">Explore Now</Link>
                            </div>
                            </div>
                            
                            <div className="col-sm-12">
                            <div className="card card_violet text-center">
                                <div className="title">
                                <i className="fa fa-plane" aria-hidden="true"></i>
                                <h2>Son Môi</h2>
                                </div>
                                <div className="option">
                                <ul>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Handmade necklaces</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Emphasize the beauty of women</li>
                                    </ul>
                                </div>
                                <Link to="/lipstick">Explore Now</Link>
                            </div>
                            </div>

                            <div className="col-sm-12">
                            <div className="card card_four text-center">
                                <div className="title">
                                <i className="fa fa-rocket" aria-hidden="true"></i>
                                <h2>Trang điểm mắt</h2>
                                </div>
                                <div className="option">
                                <ul>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Slender hands</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Your hands need to be taken care of</li>
                                    </ul>
                                </div>
                                <Link to="/eye">Explore Now</Link>
                            </div>
                            </div>

                            <div className="col-sm-12">
                            <div className="card card_three text-center">
                                <div className="title">
                                <i className="fa fa-rocket" aria-hidden="true"></i>
                                <h2>Phấn nền, Cushion các loại</h2>
                                </div>
                                <div className="option">
                                <ul>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Men's bracelets</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Love of unique and strange bracelets</li>
                                    </ul>
                                </div>
                                <Link to="/cushion">Explore Now</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default CategoryItem;