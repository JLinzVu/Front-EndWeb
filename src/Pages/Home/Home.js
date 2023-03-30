import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Explore from "../Explore/Explore";
import NoMatch from "../../Pages/404Page/404Page";
import NewHome from "../NewHome/NewHome";
import CleansingPage from "../CleansingPage/CleansingPage";
import LipstickPage from "../LipstickPage/LipstickPage"
import EyeShadowPage from "../EyeShadowPage/EyeShadowPage"
import CushionPage from "../CushionPage/CushionPage"
import LorealCleansingPage from "../CleansingPage/CleansingItemPage/LorealCleansingPage"
import HealingCleansingPage from "../CleansingPage/CleansingItemPage/HealingCleansingPage"
const Home = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={NewHome} />
        <Route exact path="/explore" component={Explore} />
        <Route path="/cleansing" component={CleansingPage}/>
        <Route path="/lipstick" component={LipstickPage}/>
        <Route path="/eye" component={EyeShadowPage}/>
        <Route path="/cushion" component={CushionPage}/>
        <Route path="/tay-trang-loreal" component={LorealCleansingPage} />
        <Route path="/tay-trang-healing-tea-garden" component={HealingCleansingPage} />
      </Switch>
    </div>
  );
};

export default Home;
