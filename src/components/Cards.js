  import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardData from "./CardData";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/index';
import { Link, NavLink } from "react-router-dom";

const Cards = () => {
    const dispatch=useDispatch()
  const [data, setData] = useState(CardData);
  const [searchData,setSearchData] = useState([]);
  console.log("fdsf",data)
  const[searchTerm,setSearchTerm]=useState(CardData)
 

  const UpdateCart=(e)=>{
    dispatch(ADD(e));
  }
  const handleClick =()=>{
    alert("hello")
    
  
  }
 useEffect(()=>{
  setSearchData(data)
 },[])
 var abc  =[]
 const searchDataDisplay = (e)=> {
     console.log(e.target.value)
     setSearchTerm(e.target.value)
   abc = data.filter((val,i)=>{
          if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
     }
    })
    setSearchData(abc)
 }
  return (
    <div className="container mt-3 ">
     <form >
     <input onChange={searchDataDisplay} placeholder="Search food .... " style={{marginTop:"80px",height:"50px",width:"500px",borderRadius:"5px",justifyContent:"center",alignItems:"center",marginLeft:"480px",border:"5px solid black"}} />
      {/* <button style={{marginLeft:"20px",height:"50px",width:"140px",backgroundColor:"#F52828 " ,borderRadius:"5px",borderStyle:"none"}}>Submit</button> */}
     </form>
      <h2 className="text-center text-dark " style={{marginTop:"53px"}}>Redux Add To Cart Project</h2>

      <div className="row d-flex justify-content-center align-item-center">
        {searchData.map((datas, id) => {
          return (
            <>
              <Card style={{ width: "20rem" ,margin:"15px", border:"none",boxShadow:" 5px 7px 5px 5px #888888",backgroundColor:"black",color:"#fff"}}>
                <Card.Img
                  variant="top"
                  src={datas.imgdata}
                  style={{height:"15rem",borderRadius:"5px",marginTop:"10px"}}
                  onClick={handleClick}
                />
                <Card.Body>
                  <Card.Title>{datas.title}</Card.Title>
                  <Card.Text>
                   Price:₹ {datas.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button variant="primary" onClick={()=>UpdateCart(datas)} className="col-lg-12">Add To  Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
