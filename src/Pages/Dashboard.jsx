import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import {CheckValue} from '../features/Check'

export const Dashboard = () => {

  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const [trainData, setTrainData] = useState([]);
    const id = useSelector(state => state.token.value.token);
    useEffect(()=>{
        const headers = { "Authorization": 'Bearer ' + id};
        axios.get("http://104.211.219.98:80/train/trains",{ headers })
        .then(res =>{
            setTrainData(res.data);
        })
    },[])

    const checkid = useSelector(state =>state.check.value.id)
    if(checkid){
      Navigate("/check");
    }


    const DataView = trainData.map((element) => {
      return (
        <tr key={element.trainName}>
          <th>{element.trainName}</th>
          <td>{element.trainNumber}</td>
          <td>{element.departureTime.Hours}:{element.departureTime.Minutes}</td>
          <td>sleeper:{element.seatsAvailable.sleeper}<br></br>Ac:{element.seatsAvailable.AC}</td>
          <td>sleeper: {element.price.sleeper} rs<br></br>Ac: {element.price.AC} rs</td>
          <td>{element.delayedBy}</td>
          <td><button onClick={()=>{dispatch(CheckValue({id:element.trainNumber}))}} className='btn btn-success'>Check</button></td>
        </tr>
      );
    })
    
    return (
      <div className="dashboard">
        <div className="row mt-3">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>TrainName</th>
                  <th>Train Number</th>
                  <th>Departure Time</th>
                  <th>Seat Available</th>
                  <th>Price</th>
                  <th>Delayed By</th>
                  <th>Check</th>
                </tr>
              </thead>
              <tbody>
            {DataView}
          </tbody>
            </table>
          </div>
        </div>
      </div>
    );}
