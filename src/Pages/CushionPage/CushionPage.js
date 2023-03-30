import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import FilterPrice from "../../Components/FilterPrice/FilterPrice";

class ForMenPage extends React.Component{
    render() {
        return(
            <div>
                <Navbar/>
                <Header/>
                <h1>This is Cushion Page</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className='col-md-2'>
                                <FilterPrice/>
                            </div>
                            <div className='col-md-8'>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://product.hstatic.net/1000006063/product/black_rouge_triple_layer_eye_palette_1ea_1_shop2_172321_98391ffb438f462f8c78f6585793e6f0_1024x1024.jpg"
                                        title = "Bảng phấn mắt ánh nhũ Black Rouge"
                                        price = "249.000"
                                        links = "/triple-layer-eye-pallete"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://product.hstatic.net/1000006063/product/630_66261b4c7ac4484bb73774044349be36_grande.jpg"
                                        title = "Phấn mắt Peach C Soft Mood Eyeshadow Palette"
                                        price = "299.000"
                                        links = "/peachC-soft-mood"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://cdn.diemnhangroup.com/thegioilamdep/2021/05/3ce-bang-mat-dry-bouquet-1.jpg"
                                        title = "Bảng phấn mắt 3CE Multi Eye Color Palette"
                                        price = "590.000"
                                        links = "/multi-eye-color-palette"
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
                                        image = "https://product.hstatic.net/1000006063/product/d20e7e67358016aff331ce2112db117b_7a1574f2502048f8b4e4e40a80041278_1024x1024.jpeg"
                                        title = "Bảng Phấn Mắt Romand Better Than Eye Palette"
                                        price = "349.000"
                                        links = "/romand-better-than-eye-palette"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://product.hstatic.net/1000006063/product/650_eb92ef56e20b4d0ba6b847362980e807_grande.jpg"
                                        title = "Bảng phấn mắt Peach C Eye Shadow Palette"
                                        price = "189.000"  
                                        links = "/peachC-eyeshadow-palette"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <ProductCard
                                        image = "https://vn-test-11.slatic.net/p/524c4e6db181a6b0c0e7704ffc1ecabd.jpg"
                                        title = "Bảng phấn mắt nhũ Lameila"
                                        price = "89.000"
                                        links = "/lameila"
                                    />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
        );
    }
}

export default ForMenPage