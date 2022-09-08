import React from 'react'

export default function SideBar() {
  return (
    <div>
       {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="pic/13.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Portfolio</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="pic/IMG_0667.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="/" className="d-block">𝘼𝙈𝙈𝘼𝙍𝙄𝙉 𝙎𝘼𝙀𝘽𝙊𝙊𝙉</a>
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
              <a href="/#/dashboard" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>𝙃𝙤𝙢𝙚</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#/report" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>𝘼𝙗𝙤𝙪𝙩 𝙪𝙨</p>
                <span className="right badge badge-danger">New</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#/Port" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>𝙋𝙤𝙧𝙩𝙛𝙤𝙡𝙞𝙤</p>
                <span className="badge badge-info right">6</span>
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
