import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams ,useNavigate} from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import "./style.css";
import { DELETE ,ADD,REMOVE} from "../redux/actions";

const CardDetail = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const[datas,setDatas]=useState([])
  const { id } = useParams();
  const allData = useSelector((state) => state.proReducer.carts);

  const compareId=()=>{
    let comparedId = allData.filter((e)=>{
      return e.id == id
    })
    setDatas(comparedId)
  }
  useEffect(()=>{
     compareId()
  },[id])

  //TO DELETE FROM DETAIL PAGE
  const deletee=(id)=>{
    dispatch(DELETE(id))
    navigate("/")
}
const dlt = (id)=>{
  dispatch(DELETE(id));
  navigate("/");
}

// remove one
const remove = (item)=>{
dispatch(REMOVE(item))
}

const send = (e)=>{
  // console.log(e);
  dispatch(ADD(e));
}

  return (
    <>
      <div className="container mt-2" >
        <h2 className="text-center">Item Details </h2>
        <section className="container mt-3 ">
          <div className="foodItems">
            {
              datas.map((s)=>{
                return(
                  <>
                   <div className="imgg">
              <img
                className="mt-2 mb-2"
                src={s.imgdata}
                style={{ height: "300px" }}
              />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong>:{s.title}
                    </p>
                    <p>
                      <strong>Price</strong>:{s.price}
                    </p>
                    <p>
                      <strong>Dishes</strong>:{s.address  }
                    </p>
                    <p>
                      <strong>Total</strong>: ₹ {s.price * s.qnty}
                    </p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={s.qnty <=1 ? ()=>dlt(s.id) : ()=>remove(s)}>-</span>
                    <span style={{fontSize:22}}>{s.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(s)}>+</span>

                    </div>
                  </td>
                  <td>
                    <p>
                      <strong>Rating:</strong>
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                      {s.rating} ★
                      </span>
                    </p>
                    <p>
                      <strong>{s.somedata}</strong>
                      <span>4 ★</span>
                    </p>
                    <p>
                      <strong>Remove :</strong>{" "}
                      <span>
                        <i
                          className="fas fa-trash"
                          onClick={()=>deletee(s.id)}
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                        ></i>{" "}
                      </span>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
                  </>
                )
              })
            }
           
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetail;
