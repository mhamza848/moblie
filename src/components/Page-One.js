import React, { Component } from 'react';

class Page extends Component{
    render(){
        return(
            <div>
               <div className="main-1">
                  <header className="header">
                     <p className="p">4:24</p>
                     <i className="fa fa-folder"></i>
                     <i className="fa fa-buysellads"></i>
                     <p className="p-3"><i className="fa fa-arrow-left" aria-hidden="true"></i> Inventory Management</p>
                  </header>
                  <div className="container-aws">
                     <div className="contact">
                        <div className="input">
                           <i className="fa fa-search"></i>
                           <p>Enter Code...</p>
                        </div>
                     </div>
                     <div className="helmet">
                        <input type="checkbox" /> 
                        <p>Helmet</p>
                     </div>
                     <button className="btn sub">Submit</button>
                     <div className="model-form">
                        <div className="container-aws">
                           <p>Package Name :</p>
                           <hr className="hr-1" />
                           <p>Type :</p>
                           <hr className="hr-2" />
                           <p>Manufacture :</p>
                           <hr className="hr-3" />
                           <p>Model :</p>
                           <hr className="hr-4" />
                           <p>Size :</p>
                           <hr className="hr-5" />
                           <p>Lenght :</p>
                           <hr className="hr-6" />
                           <p>Location :</p>
                           <hr className="hr-7" />
                           <p>Status :</p>
                           <hr className="hr-8" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
                
        );
    }
}

export default Page;
