import React from 'react';
import Menu from './Menu';
import {Link} from 'react-router-dom';

const SidebarContainer= () => {
    return (
       <aside className="main-sidebar sidebar-dark-primary elevation-4">
  <Link to={"#"} className="brand-link">
    <span className="brand-text font-weight-light" >DulceriaOnline</span>
  </Link>
  <div className="sidebar">
    <div className="user-panel mt-1 pb-0 mb-1 d-flex">
      <div className="info">
        &nbsp;
      </div>
      <div  className="info">
        &nbsp;
        <Link to={"/home"} >Menu Principal</Link>
      </div>
    </div>
    
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        
      </div>
    </div>
  
     
    </div>
    <Menu></Menu>  
  </aside>
    );
}
export default SidebarContainer;    