import React from 'react'
import './CashB.css'
import phone from '/img/cashPhone.png';

const CashB = () => {
  return (
    <div className="cash w-[100%] h-screen bg-center bg-cover bg-no-repeat relative">
    <div className="text max-w-[300px] absolute z-[20] top-[18%] right-[60%] ">
<h2 className='text-[30px] text-[#00D54B]  ' >
cash Boost
</h2>
<p className='text-[14px] font-thin font-mono leading-none text-[#fff] '>
Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing 
and account number.
</p>
        </div>
    <div className="images w-100% h-100% m-auto pt-[9%]">
    <img src={phone} alt="" srcset="" className='m-auto  max-h-[380px] sm:max-h-[inherit] absolute right-[40%] bottom-[13%] animate-smallRot' />

    </div>

    </div>
  )
}

export default CashB