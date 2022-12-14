import React from 'react'

export default function SideBar() {
  return (
    <div>
       {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="https://www.seekpng.com/png/detail/111-1112824_picture-my-portfolio-logo-png.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Portfolio</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/301960841_5361219333963312_1731173679147266749_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGwgYbyTN5GVFzI2jqFvhuegfpPdbYfojOB-k91th-iM5YcWmpNeecrk3ix4bZ1dSyN_w9neAIF2wnW4nBW0kuV&_nc_ohc=mzy_mJtRnkQAX8cVVKQ&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&oh=00_AT93FX1_6v4Y5EQTY58qGS6hy3XYIIX-sNaVbB4YdnJYIw&oe=631FC461" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="/" className="d-block">πΌπππΌπππ ππΌππ½πππ</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/dashboard" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>ππ€π’π</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/report" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>πΌππ€πͺπ© πͺπ¨</p>
                <span className="right badge badge-danger">New</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/Port" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>ππ€π§π©ππ€π‘ππ€</p>
                <span className="badge badge-info right">12</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          
        </li>

        
        
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    </div>
  )
}
