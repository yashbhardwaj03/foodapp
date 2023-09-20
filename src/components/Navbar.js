import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../Screens/Cart'
import { useCart } from './ContextReducer';



export default function Navbar() {
  const [cartView, setCartView] = useState(false)
  const data = useCart();
  const navigate= useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">goFood</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto ">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/">My Orders</Link>
                </li>
                :""}

            </ul>
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex'>
                <Link class="btn btn-success mx-1" to="/login">Login</Link>
                <Link class="btn btn-success mx-1" to="/signup">SignUp</Link>
              </div>
              : 
              <div>
              <div className='btn btn-success mx-2' onClick={()=>{setCartView(true)}}>
                My Cart{" "}
                <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
              <div className='btn btn-danger mx-2'onClick={handleLogout}>Logout</div>
              </div>
              
              }


          </div>
        </div>
      </nav>


    </div>
  )
}
