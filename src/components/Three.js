import React, { Component } from 'react';
import {Routes, Route,Link} from 'react-router-dom';


class Three extends Component{
    render(){
        return(
            <div>
               <div className="page-1">
                <div className="main-1">
                <header className="header">
                    <p className="p">4:21</p>
                    <i className="fa fa-folder"></i>
                    <i className="fa fa-buysellads"></i>
                    <p className="p-2">Sync</p>
                    <p className="p-3">BTMobile</p>
                </header>


                <div className="sec-1">
                <div className="container-fluid">
                <div className="pack">
                <Link to="/four">
                <div className="box-1">
                    <div className="play">
                    <a><i className="fa fa-archive" aria-hidden="true"></i></a>
                    <p>Pack</p>
                    </div>
                </div>
                </Link>

                <Link to="/two">
                <div className="box-2">
                    <div className="play">
                    <a><i className="fa fa-truck" aria-hidden="true"></i></a>
                    <p>Deliveries</p>
                    </div>
                </div>
                </Link>
                </div>
                </div>


                <div className="container-fluid">
                <div className="pack pack-2">
                <Link to="/five">
                    <div className="box-1">
                        <div className="play">
                        <a><i className="fa fa-buysellads"></i></a>
                        <p>Return</p>
                        </div>
                    </div>
                </Link>

                <Link to="/page-one">
                <div className="box-2">
                    <div className="play">
                    <a><i className="fa fa-volume-up" aria-hidden="true"></i></a>
                    <p>Inventory Mangement</p>
                    </div>
                </div>
                </Link>
                </div>
                </div>


                <div className="container-fluid">
                <div className="pack pack-2">
                <div className="box-1">
                    <div className="play">
                    <p>Tranfer Gear</p>
                    </div>
                </div>

                <div className="box-2">
                    <div className="play">
                    <p>Inventory Count</p>
                    </div>
                </div>
                </div>
                <Link to="/six">
                <div className="logout-div">
                <div className="main-logout">
                    <a><i className="fa fa-sign-out" aria-hidden="true"></i></a>
                    <p>Logout</p>
                </div>
                </div>
                </Link>
                </div>


                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Three;