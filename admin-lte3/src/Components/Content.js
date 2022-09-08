import React from 'react'

export default function Content() {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div  className="col-sm-6">
          <h1 className="m-0">𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝑷𝒓𝒐𝒋𝒆𝒄𝒕 𝑴𝒆</h1>
          
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Mosto</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>𝙋𝙤𝙧𝙩𝙛𝙤𝙡𝙞𝙤</h3>
              
            </div>
            
            <a href="//https://ammarin6034.github.io/#/dashboard" className="small-box-footer">𝘔𝘰𝘳𝘦 𝘪𝘯𝘧𝘰 <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        
        {/* ./col */}
       
        {/* ./col */}
        
        {/* ./col */}
      </div>
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section className="col-lg-7 connectedSortable">
          {/* Custom tabs (Charts with tabs)*/}
          
          {/* /.card */}
          {/* DIRECT CHAT */}
          
          {/*/.direct-chat */}
          {/* TO DO List */}
          <div className="card">
            <div className="card-header">
              
              <div className="card-tools">
                <ul className="pagination pagination-sm">
                  <li className="page-item"><a href="#" className="page-link">«</a></li>
                  <li className="page-item"><a href="https://ammarin6034.github.io/admin-lte3-github/#/dashboard" className="page-link">1</a></li>
                  <li className="page-item"><a href="/https://ammarin6034.github.io/admin-lte3-github/#/report" className="page-link">2</a></li>
                  <li className="page-item"><a href="https://ammarin6034.github.io/admin-lte3-github/#/Port" className="page-link">3</a></li>
                  <li className="page-item"><a href="#" className="page-link">»</a></li>
                </ul>
              </div>
            </div>
            {/* /.card-header */}
            
            {/* /.card-body */}
            
          </div>
          {/* /.card */}
        </section>
        {/* /.Left col */}
        {/* right col (We are only adding the ID to make the widgets sortable)*/}
        <section className="col-lg-5 connectedSortable">
          {/* Map card */}
          
          {/* /.card */}
          {/* solid sales graph */}
         
          {/* /.card */}
          {/* Calendar */}
          
          {/* /.card */}
        </section>
        {/* right col */}
      </div>
      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

    </div>
  )
}
