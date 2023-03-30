import React from 'react';
import './newHome.css'
import CategoryItem from '../../Components/CategoryItem/CategoryItem'
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
class NewHome extends React.Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Header />
                <h1>Enjoy your day here, with us!</h1>
                <CategoryItem/>
            </div>                
        )
    }
}

export default NewHome;