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
                <h1>This is Lipstick Page</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className='col-md-2'>
                                <FilterPrice/>
                            </div>
                            <div className='col-md-8'>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://cf.shopee.vn/file/47f07d3a190d79ca75ff5c6c79f45929"
                                        title = "Son Romand milk tea velvet tint"
                                        price = "128.000"
                                        links = "/romand-milktea"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://product.hstatic.net/1000006063/product/405778510c03ffc92a86aaa5047184e5_1636a48d116a4de1a063507e83e15a95.jpeg"
                                        title = "Son Merzy the first velvet tint"
                                        price = "148.000"
                                        links = "/merzy-the-first-velvet-tint"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://thegioimyphambd.vn/wp-content/uploads/2019/10/merzy-m1-m2-m3-m4.jpg"
                                        title = "Son Merzy Bite The Beat Mellow Tint"
                                        price = "128.000"
                                        links = "/merzy-bite-the-beat-mellow-tint"
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
                                        image = "https://salt.tikicdn.com/ts/tmp/76/bc/ac/becf1821d2110199e5bf352278fa67ee.jpg"
                                        title = "Son Romand Juicy Lasting Tint"
                                        price = "148.000"
                                        links = "/romand-juicy-lasting-tint"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://product.hstatic.net/1000006063/product/37_c9da9a082d2c479eb1d53f749428c3b8.jpg"
                                        title = "Son Romand Glasting Water Tint"
                                        price = "199.000"  
                                        links = "/romand-glating-water-tint"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://tapchilamdep.com/wp-content/uploads/2020/04/Black-Rouge-Air-Fit-Velvet-Tint-Version-1.jpg"
                                        title = "Son Black Rouge ver 1 Air Fit Velvet Tint"
                                        price = "164.000"
                                        links = "/blackrouge-ver1"
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
                                        image = "https://cf.shopee.vn/file/b5bce0ec26191fed6d23e94a45206b3a"
                                        title = "Son Black Rouge ver 2 Air Fit Velvet Tint"
                                        price = "164.000"
                                        links = "/blackrouge-ver2"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://product.hstatic.net/1000379579/product/52793969-126085785177490-4527932254244165814-n-600x600_c1f86f38db4e4cc9bf811aaeef14fd40_master.jpg"
                                        title = "Son Black Rouge ver 3 Air Fit Velvet Tint"
                                        price = "164.000" 
                                        links = "/blackrouge-ver3" 
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://product.hstatic.net/1000379579/product/110076026_2730133643979349_6504861950547528564_n_30472d66af434efab44ca2958d7f8042_master.jpg"
                                        title = "Son Black Rouge ver 4 Air Fit Velvet Tint"
                                        price = "164.000"
                                        links = "/blackrouge-ver4"
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
                                        image = "https://lh3.googleusercontent.com/proxy/DFsSkI30_mWPVNAiIRZPZLuxWnsTL0XgJVwasG2-a02RllSlym-ivsDj3B3MY8OpG7w_o55SxFSt7mQZHucwYlRdl41Ypf1CyHImpDDzXydGYPvlBTSy3NIf2E7NmFlFyGcetn0ne4isAszMlzpzOKAlMR3f5lNdGWGtkFd4gWxfYdzDZA"
                                        title = "Son Black Rouge ver 5 Air Fit Velvet Tint"
                                        price = "164.000"
                                        links = "/blackrouge-ver5"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://myphamjane.com/wp-content/uploads/2019/08/black-rouge-air-fit-velvet-tint-ver-6-blueming-garden-avarta.jpg"
                                        title = "Son Black Rouge ver 6 Air Fit Velvet Tint"
                                        price = "164.000" 
                                        links = "/blackrouge-ver6" 
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://cf.shopee.vn/file/4f53c46aa5cd3b169879cd4bee5e575b"
                                        title = "Son Black Rouge ver 7 Air Fit Velvet Tint"
                                        price = "164.000"
                                        links = "/blackrouge-ver7"
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