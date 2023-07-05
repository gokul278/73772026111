import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export const Register = () => {

    const [userData, setUserData] = useState({
        companyName:'',
        ownerName:'',
        rollNo:'',
        ownerEmail:'',
        accessCode:''
    })

    const [errorMessage1,setErrorMessage1] = useState({
        style:'',
        error:''
    })

    const [errorMessage2,setErrorMessage2] = useState({
        style:'',
        error:''
    })

    const [errorMessage3,setErrorMessage3] = useState({
        style:'',
        error:''
    })
    const [errorMessage4,setErrorMessage4] = useState({
        style:'',
        error:''
    })
    const [errorMessage5,setErrorMessage5] = useState({
        style:'',
        error:''
    })

    const handlechange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })
        if(event.target.name === "companyName"){
            setErrorMessage1({
                style:'',
                error:''
            })
        }else if(event.target.name === "ownerName"){
            setErrorMessage2({
                style:'',
                error:''
            })
        }else if(event.target.name === "rollNo"){
            setErrorMessage3({
                style:'',
                error:''
            })
        }else if(event.target.name === "ownerEmail"){
            setErrorMessage4({
                style:'',
                error:''
            })
        }else if(event.target.name === "accessCode"){
            setErrorMessage5({
                style:'',
                error:''
            })
        }
    }

    let count = 0;

    const submitform = (event) =>{
        event.preventDefault();
        if(userData.companyName){
            count +=1;
        }else{
            setErrorMessage1({
                style:'pt-2 pb-1',
                error:'Enter the Comapany Name'
            })
        }

        if(userData.ownerName){
            count +=1;
        }else{
            setErrorMessage2({
                style:'pt-2 pb-1',
                error:'Enter the Owner Name'
            })
        }

        if(userData.rollNo){
            count +=1;
        }else{
            setErrorMessage3({
                style:'pt-2 pb-1',
                error:'Enter the Roll No'
            })
        }

        if(userData.ownerEmail){
            count +=1;
        }else{
            setErrorMessage4({
                style:"pt-2 pb-1",
                error:"Enter the Owner Email"
            })
        }
        
        if(userData.accessCode){
            count +=1;
        }else{
            setErrorMessage5({
                style:'pt-2 pb-1',
                error:'Enter the Access Code'
            })
        }

        if(count === 5){
            axios.post("http://104.211.219.98/train/register",{companyName:userData.companyName,ownerName:userData.ownerName,rollNo:userData.rollNo,ownerEmail:userData.ownerEmail,accessCode:userData.accessCode})
            .then(res=>{
                console.log(res.data);
            })
        }


    }
  return (
    <div className='container-fluid mt-4'>
        <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4' style={{backgroundColor:"#3C486B",borderRadius:"10px"}}>
            <form onSubmit={submitform}>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-10'>
                        <div className='row mt-3'>
                            <div className='col-lg-12' align="center">
                                <h1 style={{color:"white",fontWeight:700}}>Create Accounts</h1>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-12'  align="start">
                                <label style={{color:'white',fontWeight:600}} htmlFor="companyName">Comapany Name</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <input id='companyName' name="companyName" onChange={handlechange} value={userData.companyName} className='form-control' type="text" />
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-lg-12'>
                                <div className={errorMessage1.style} align="center" style={{background:"red",borderRadius:"5px"}}>
                                    <h5>{errorMessage1.error}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg-12' align="start">
                                <label style={{color:'white',fontWeight:600}} htmlFor="ownername">Owner Name</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <input id='ownername' name="ownerName" onChange={handlechange} value={userData.ownerName} className='form-control' type="text" />
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-lg-12'>
                                <div className={errorMessage2.style} align="center" style={{background:"red",borderRadius:"5px"}}>
                                    <h5>{errorMessage2.error}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3' align="start">
                            <div className='col-lg-12'>
                                <label style={{color:'white',fontWeight:600}} htmlFor="rollNo">Roll No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <input id='rollNo' name="rollNo" onChange={handlechange} value={userData.rollNo} className='form-control' type="number" />
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-lg-12'>
                                <div className={errorMessage3.style} align="center" style={{background:"red",borderRadius:"5px"}}>
                                    <h5>{errorMessage3.error}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3' align="start">
                            <div className='col-lg-12'>
                                <label style={{color:'white',fontWeight:600}} htmlFor="repass">Owner Email</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <input id='repass' name="ownerEmail" onChange={handlechange} value={userData.ownerEmail} className='form-control' type="email"/>
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-lg-12'>
                                <div className={errorMessage4.style} align="center" style={{background:"red",borderRadius:"5px"}}>
                                    <h5>{errorMessage4.error}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3' align="start">
                            <div className='col-lg-12'>
                                <label style={{color:'white',fontWeight:600}} htmlFor="accessCode">Access Code</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <input id='accessCode' name="accessCode" onChange={handlechange} value={userData.accessCode} className='form-control' type="text" />
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-lg-12'>
                                <div className={errorMessage5.style} align="center" style={{background:"red",borderRadius:"5px"}}>
                                    <h5>{errorMessage5.error}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-lg-12' align="center">
                                <button value="submit" className='btn btn-success'>Submit</button>
                            </div>
                        </div>
                        <div className='row mt-3 mb-3'>
                            <div className='col-lg-12' align="center">
                                <Link to='/' style={{textDecoration:"none"}}>Already have an Account ? Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            <div className='col-lg-4'></div>
        </div>
    </div>
  )
}
