import React from 'react';
import Monitor from "../components/monitor";
import Home from "../components/home";
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const location = useLocation();
        return (
            <>
                <div id="div-box">
                <table>
                    <tr>
                    <td><div className="menu-item"><Link to="/">home</Link></div></td>
                    <td><div className="menu-item"><Link to="/monitor">monitor</Link></div></td>
                    </tr>
                </table>
                </div>  
                <AnimatePresence mode="wait" initial={false}>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/monitor" element={<Monitor />} />
                    </Routes>
                </AnimatePresence>
            </>
        );
    };
export default Navbar;