import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'

function Counter() {
  //increment by amount 
  const [amount,setAmount] = useState(0)

  //useDispatch hook to give button functions
  const dispatch = useDispatch()

  const count = useSelector(state=>state.counterReducer.count)

  const handleIncrementByAmount = () =>{
    if(amount){
      dispatch(incrementByAmount(amount))
    }else{
      alert("Enter a valid amount")
    }
  }
  return (
    <>
        <div style={{width:'100%', height:'100vh'}} className="d-flex justify-content-center align-items-center bg-dark">
            <div style={{width:'700px'}} className="container bg-dark rounded p-5 text-center border">
            

                <h1 style={{fontSize:'100px'}} className='fw-bolder text-light'>{count}</h1>
                <div className='mt-5'>
                <button onClick={()=>dispatch(decrement())} type="button" class="btn btn-warning ms-5">Decrement</button>
                <button onClick={()=>dispatch(reset())} type="button" class="btn btn-danger ms-5">Reset</button>
                <button onClick={()=>dispatch(increment())} type="button" class="btn btn-success ms-5">Increment</button>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <input onChange={(e)=>setAmount(e.target.value)} className='form-control' type="text" name="" id="" placeholder='Enter the amount to be incremented!!!'/>
                    <button onClick={handleIncrementByAmount} type="button" class="btn btn-primary ms-5">Increment By Amount</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter