import './App.css';
import SideMenu from "./components/header/sideMenu";
import React from "react";
import Product from "./components/customers/product";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Sales from "./components/product/sales";
import Income from "./components/income/income";
import Promote from "./components/promote/promote";
import Help from "./components/help/help";

function App() {
    return (
        <BrowserRouter>
            <section className="app-wraper">
                <SideMenu/>
                <Product/>
                <div className="app-wraper-items">
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard/>}></Route>
                        <Route path='/product' element={<Sales/>}></Route>
                        <Route path='/customers' element={<Product/>}></Route>
                        <Route path='/income' element={<Income/>}></Route>
                        <Route path='/promote' element={<Promote/>}></Route>
                        <Route path='/help' element={<Help/>}></Route>
                    </Routes>
                </div>
            </section>
        </BrowserRouter>
    );
}

export default App;
