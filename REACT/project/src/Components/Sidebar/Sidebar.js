import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (

    <div className="sidebar">
      <div className="hr3"></div>
      <div className="mt-4 ms-4"><h6>Welcome Nikki Wolf!</h6></div>
      <div className='ms-4'><img src='/1713079587206.png' width={'160px'} height={'80px'}/></div>
      <div className="contact mt-2 ms-3"><i className="fa-solid icon1 fa-users-viewfinder ms-4 me-2"></i><h className="mail">Quick connect</h></div>
      <div className="contact mt-4 ms-3"><i className="fa-solid icon1 fa-list ms-4 me-2"></i><h className="mail">Quick connect</h></div>
      <div className="contact mt-4 ms-3"><i className="fa-regular icon1 fa-circle-check ms-4 me-2"></i><h className="mail">Create task</h></div>
      <div className="contact mt-4 ms-3"><i className="fa-regular icon1 fa-envelope ms-4 me-2"></i><h className="mail">Compose email</h></div>
    </div>

  )
}

export default Sidebar
