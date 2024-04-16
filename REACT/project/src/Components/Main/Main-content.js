import React, { useState, useEffect} from 'react'
import './Main-content.css'
import UserData from '../../Data.json'

function MainContent() {
  const usersPerPage=4
  const [icon, setIcon] = useState({});
  const [currentPage,setCurrentPage]=useState(1)
  const [searchQuery, setSearchQuery] = useState('');
  const [foundUser, setFoundUser] = useState(null);
  const [error,setError]=useState('')
  const lastUser = currentPage * usersPerPage;
  const FirstUser = lastUser - usersPerPage;
  const currentUsers = UserData.slice(FirstUser, lastUser);

  //pagination
  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  //favourite
  const addToFavor = (userId) => {
    setIcon(prevIcon => ({
      ...prevIcon,
      [userId]: !prevIcon[userId]
    }));
  };

  //search user
  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    const user = UserData.find(user => user.name.toLowerCase()=== query);
    setFoundUser(user);
    if(!user){
      setError('No user Found')
    }
  };

  //error vanishing
  useEffect(()=>{
    if(error){
      setTimeout(()=>{
        setError('')
    },3000)
    }
    return ()=>clearTimeout(setTimeout)
  })
  
  //status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Available':
        return <i className="fa-solid fa-circle-check me-1"></i>
      case 'Do not distrub':
        return <i className="fa-solid fa-circle-minus me-1"></i>
      case 'Be right back':
          return <i className="fa-solid fa-clock me-1"></i>
      case 'Appear  Offline':
        return <i className="fa-solid fa-circle-xmark me-1"></i>
      case 'Appear Away':
        return <i className="fa-solid fa-clock me-1"></i>
      case 'Busy':
          return <i className="fa-solid fa-circle me-1"></i>
      
      default: return null
    }
  };
  
  //refresh
  const refersh=()=>{
    window.location.reload()
  }
  return (
    <>
    {/* main-content */}
     <div className="profiles">
          <li><i className="fa-solid icon2 fa-house ms-5 me-2"></i></li>
          <div className="hr2 ms-2 "></div>
          <li><i className="fa-regular icon2 fa-user ms-3 me-3"></i><h className="Customer">Customer Profile</h></li>
          <div className="hr2 ms-2"></div>
          <li><i className="fa-solid icon2 fa-suitcase ms-3 me-3"></i><h className="Customer">Case</h></li>
          <div className="hr2 ms-2"></div>
          <li><i className="fa-solid icon2 fa-user-group ms-3 me-3"></i><h className="Customer">Teams</h></li>
          <div className="hr2 ms-2"></div>
      </div>
      <div className='hr4'></div>
      <div className="container1">
                <div className="sidebar2">
                    <div><i className="fa-solid fa-bars ms-4 mt-3 icon3"></i></div>
                    <div className="hr5"></div>
                    <div><i className="fa-solid fa-magnifying-glass ms-4 mt-4 icon3"></i></div>
                    <div><i className="fa-regular fa-user ms-4 mt-4 icon4"></i></div>
                    <div><i className="fa-solid fa-gear ms-4 mt-4 icon4"></i></div>
                </div>
                <div className="main-content">
                    <h4 className="search1 ms-4 mt-2">Search</h4>
                    <p className="found-users ms-4">found {UserData.length} users</p>
                    
                    <div className="chat me-5">
                      <div><button className="chat-btn"><i className="fa-regular fa-message ms-1 me-2"></i><h className="chat-option mb-5">chat</h></button></div>
                      <div><button className="call-btn ms-3"><i className="fa-solid fa-phone me-2"></i>call</button></div>
                      <div className="hr6 ms-3"></div>
                      <div><i className="fa-brands favourite fa-gratipay ms-3 mt-1"></i></div>
                      <div><i onClick={refersh} className="fa-solid refresh fa-rotate-right ms-3 mt-1"></i></div>
                    </div>

                    <div className="search-bar">
                        <input className="search-user ms-3" type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <button className="search-btn" onClick={handleSearch}><h className="p1">Search</h></button>
                      </div>
                      
                      <div className='ms-4 errormsg'>{error}</div>
          
                    <button onClick={prevPage} disabled={currentPage === 1} className='prev-btn'><i className="fa-solid fa-angles-left"></i></button>
                    {currentPage}
                    <button onClick={nextPage} disabled={lastUser>= UserData.length} className='next-btn'><i className="fa-solid fa-angles-right"></i></button>
        <table className='me-1'>
          <tr>
            <th><input type='radio'/></th>
            <th>Name <i className="fa-solid fa-caret-down ms-3"></i></th>
            <th>Status <i className="fa-solid fa-caret-down ms-3"></i></th>
            <th>Phone <i className="fa-solid fa-caret-down ms-3"></i></th>
            <th>Email <i className="fa-solid fa-caret-down ms-3"></i></th>
            <th>Favourite <i className="fa-solid fa-caret-down ms-3"></i></th>
          </tr>
          {foundUser ? 
                <tr key={foundUser.id}>
                  <td><input type='radio'/></td>
                  <td>{foundUser.name}</td>
                  <td>{getStatusIcon(foundUser.status)}{foundUser.status}</td>
                  <td>{foundUser.phone}</td>
                  <td>{foundUser.email}</td>
                  <td>
                    <i onClick={() => addToFavor(foundUser.id)} className="fa-regular">
                      {icon[foundUser.id] ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                    </i>
                  </td>
                </tr>
               : 
                currentUsers.map(user => (
                  <tr key={user.id}>
                    <td><input type='radio' /></td>
                    <td>{user.name}</td>
                  <td>{getStatusIcon(user.status)}{user.status}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                      <i onClick={() => addToFavor(user.id)} className="fa-regular">
                        {icon[user.id] ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                      </i>
                    </td>
                  </tr>
                )
              )}
     </table>
      </div>
    </div>
    
    </>
  )
}

export default MainContent
