import React from 'react'

export default function Heder() {
  return (
    <div>
      {/* Navbar */}
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="/" className="nav-link">𝘏𝘰𝘮𝘦</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="/" className="nav-link">𝘊𝘰𝘯𝘵𝘢𝘤𝘵</a>
    </li>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Navbar Search */}
    <li className="nav-item">
      <a className="nav-link" data-widget="navbar-search" href="#" role="button">
        <i className="fas fa-search" />
      </a>
      <div className="navbar-search-block">
        <form className="form-inline">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    {/* Messages Dropdown Menu */}
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="far fa-comments" />
        <span className="badge badge-danger navbar-badge"> </span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <a href="#" className="dropdown-item">
          {/* Message Start */}
          <div className="media">
            <img src="https://scontent.fbkk9-3.fna.fbcdn.net/v/t39.30808-6/191792503_3076941259220619_1619627825429849925_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFtuuQ9-RArugk7chezMQ_COmo9-JxmD_A6aj34nGYP8Ns3MRhfmq5KixqwDvZLH9rGcO7KHNNYLRavln2UALsC&_nc_ohc=GNlZdfYzNSwAX8qw_2U&_nc_zt=23&_nc_ht=scontent.fbkk9-3.fna&oh=00_AT-n0VAPmkYpKzP8Tqg3Qq9tBfSMh4qEI6oxD70op4VlYg&oe=631F8244" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
            <div className="media-body">
              <h3 className="dropdown-item-title">
                ผศ.ไพฑูรย์ ศรีนิล
                <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
              </h3>
              <p className="text-sm">𝗖𝗮𝗹𝗹 𝗺𝗲 𝘄𝗵𝗲𝗻𝗲𝘃𝗲𝗿 𝘆𝗼𝘂 𝗰𝗮𝗻...</p>
              <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
            </div>
          </div>
          {/* Message End */}
        </a>
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          {/* Message Start */}
          
          {/* Message End */}
        </a>
        <div className="dropdown-divider" />
        
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
      </div>
    </li>
    {/* Notifications Dropdown Menu */}
    
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i className="fas fa-expand-arrows-alt" />
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
        <i className="fas fa-th-large" />
      </a>
    </li>
  </ul>
</nav>
{/* /.navbar */}

    </div>
  )
}
