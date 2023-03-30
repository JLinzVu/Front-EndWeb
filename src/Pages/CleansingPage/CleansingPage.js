import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import FilterPrice from "../../Components/FilterPrice/FilterPrice";

class CleansingPage extends React.Component{
    render() {
        return(
            <div>
                <Navbar/>
                <Header/>
                <h1>This is Cleansing Page</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className='col-md-2'>
                                <FilterPrice/>
                            </div>
                            <div className='col-md-8'>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://catscanman.net/wp-content/uploads/2020/09/nuoc-tay-trang-loreal.jpg"
                                        title = "Nước tẩy trang Loreal làm sạch và tươi mát"
                                        price = "128.000"
                                        links = "/tay-trang-loreal"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://dotobjyajpegd.cloudfront.net/photo/5d8b74819bcefa36d6d32510"
                                        title = "Nước tẩy trang Healing Tea Garden chiết xuất từ hoa cúc"
                                        price = "139.000"
                                        links = "/tay-trang-healing-tea-garden"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://tapchilamdep.com/wp-content/uploads/2021/02/Nuoc-tay-trang-Senka.jpg"
                                        title = "Nước tẩy trang Senka"
                                        price = "68.000"
                                        links = "tay-trang-senka"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-2'>
                                {/* <FilterPrice/> */}
                            </div>
                            <div className='col-md-8'>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://product.hstatic.net/1000173712/product/nuoc-tay-trang-bioderma-h2o-500ml-2_7838f6cd5c8c48178147d26db95986f5_master.jpg"
                                        title = "Nước tẩy trang Bioderma"
                                        price = "396.000"
                                        links = "tay-trang-bioderma"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://tudienlamdep.org/wp-content/uploads/2020/03/nuoc-tay-trang-eucerin.jpg"
                                        title = "Nước tẩy trang Eucerin"
                                        price = "350.000"  
                                        links = "tay-trang-bioderma"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://dncosmetics.vn/wp-content/uploads/2020/04/nuoc-tay-trang-la-roche-posay-400ml-mau-xanh-duong.jpg"
                                        title = "Nước tẩy trang Laroche Posay"
                                        price = "405.000"
                                        links = "tay-trang-laroche-posay"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-2'>
                                {/* <FilterPrice/> */}
                            </div>
                            <div className='col-md-8'>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://ibeautyshop.vn/wp-content/uploads/2020/06/k3-3.jpg"
                                        title = "Sữa rửa mặt Corsx"
                                        price = "169.000"
                                        links = "rua-mat-corsx"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://vnwriter.net/wp-content/uploads/2018/11/sua-rua-mat-innisfree-han-quoc-640x405.jpg"
                                        title = "Sữa rửa mặt Innisfree"
                                        price = "185.000" 
                                        links = "rua-mat-innisfree" 
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://media.hasaki.vn/wysiwyg/ThuyHao/sua-rua-mat-chiet-xuat-rau-ma-diu-nhe-lam-sach-sau-da-skin1004-madagascar-centella-ampoule-foam-125ml-5.jpg"
                                        title = "Sữa rửa mặt Centella"
                                        price = "214.000"
                                        links = "rua-mat-centella"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-2'>
                                {/* <FilterPrice/> */}
                            </div>
                            <div className='col-md-8'>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://www.cetaphil.com.vn/sites/default/files/styles/zoom_image_style/public/19_-_gentle_skin_cleanser_16oz_-_front.png"
                                        title = "Sữa rửa mặt centaphill"
                                        price = "215.000"
                                        links = "rua-mat-centaphill"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://media.hasaki.vn/wysiwyg/nhphuong/PhuongSmall/sua-rua-mat-dang-bot-duong-am-da-klairs-100ml-2.jpg"
                                        title = "Sửa rửa mặt Klairs"
                                        price = "243.000" 
                                        links = "rua-mat-klairs" 
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://img.watsonsvn.com/ecommerce/ecom/LRP/200483-extra1.png"
                                        title = "Sữa rửa mặt Laroche Posay"
                                        price = "348.000"
                                        links = "rua-mat-laroche"
                                    />
                                </div>
                        </div>
                            </div> 
                        </div>
                    </div>
        );
    }
}

export default CleansingPage