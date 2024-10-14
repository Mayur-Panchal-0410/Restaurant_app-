import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CardCustom from "../components/CardCustom";
import Home from "../Pages/Home";
import Menupage from "../Pages/Menupage";

function AppRoute(props) {
    return (
        <Router {...props}>
            <Routes>
                <Route exact path="" element={<Home/>} />
                <Route path="Menupage" element={<Menupage/>} />
                <Route path="card" element={<CardCustom />} />

            </Routes>
        </Router>
    );
}
export default AppRoute;