import React,{useEffect, useId, useState} from 'react'
import  Navbar from "react-bootstrap/Navbar"
import  Container from "react-bootstrap/Container"
import  Nav from "react-bootstrap/Nav"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import Table from "react-bootstrap/Table";
import { DELETE } from '../redux/actions';
import img2 from "./imgg/img2.png"

const Header = () => {
  const[price,setPrice]=useState()
  console.log(price)
   
    const allData= useSelector((state)=>state.proReducer.carts)
    console.log(allData)

    const dispatch= useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const deletee=(id)=>{
         dispatch(DELETE(id))
    }
    const calTotal=()=>{
      let price=0;
      allData.map((item,s)=>{
        price=item.price+price
      })
      setPrice(price)
    }
    useEffect(()=>{
      calTotal();
    },[calTotal])
  return (
<>
<Navbar bg="dark" variant="primary" style={{height:"60px"}} className="fixed-top">
        <Container>
          <NavLink to="/" className="text-decoration-none text-dark mx-3">
          <img src={img2} style={{height:"60px" ,width:"90px",marginLeft:"130px"}} alt="logo"  />
          </NavLink>
          
         
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-dark" >Home</NavLink>
           
          </Nav>
          <Badge badgeContent={allData.length} color="primary" id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
          <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer", }}></i>
          </Badge>
        </Container>
        <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                 {
                  allData.length ?
                  <div className='card_details' style={{width:"24rem",padding:10}}>
                     <Table>
                            <thead>
                              <tr>
                                <th>Photo</th>
                                <th>Restaurant</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                allData.map((e)=>{
                                  return(
                                    <>
                                    <tr>
                                      <td>
                                      <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink> 
                                      </td>
                                      <td>
                                      <p>{e.title}</p>
                                                            <p>Price : ₹{e.price }</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} >
                                                                <i className='fas fa-trash smalltrash ' onClick={()=>deletee(e.id)}></i>
                                                            </p>
                                      </td>
                                      <p>{e.title}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} >
                                                                <i className='fas fa-trash ' onClick={()=>deletee(e.id)}></i>
                                                            </p>
                                    </tr>
                                    </>
                                  )
                                })
                              }
                              <p>Total:₹ {price}</p>
                            </tbody>
                     </Table>
                  </div> : <div className='card-details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}} >
                        <i className='fas fa-close' onClick={handleClose} style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                            <p style={{fontSize:22}}>Your Cart Is Empty</p>
                            <img src="https://previews.123rf.com/images/arcady31/arcady311210/arcady31121000045/15589250-oops-smiley.jpg" style={{width:"5rem",padding:10}} alt="ff" />
                    </div>
                 }
                    
                    </Menu>
      </Navbar>
</>
  )
}

export default Header