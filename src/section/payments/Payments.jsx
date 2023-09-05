import React, { useRef } from 'react'
import './Payments.css'
import bg from '/img/paymentsBg.png';
import phone from '/img/payment-phone.png'
import { useInView } from 'framer-motion'

const Payments = () => {
  const myRef = useRef(null);
  const myView = useInView(myRef);
  return (
    <div className="payments bg-white relative h-[100%] pt-[80px]" ref={myRef}>
        <div className="text max-w-[300px] absolute z-[20] top-[110px] right-[55%] ">
<h2 className='text-[30px] text-[#00D54B] ' >
Payments
</h2>
<p className='text-[14px] font-thin font-mono leading-none'>
Send and receive money with anyone, donate  to an important cause, or tip professionals. 
Just enter a $cashtag, phone number, or 
scan their  QR code to pay.
</p>
        </div>

           <div className="images bg-white h-[80vh] relative">
        <div className="phone absolute z-[0] h-[40vh] w-[100%] b">
           <img src={phone} alt="" className={myView ? "max-h-[50vh] m-auto animate-slideReveal" : "hidden"} srcset="" />
        </div>
        <div className="background ">
<img src={bg} alt='payments Pillars ' className='paymentPillars hidden w-[100vw] bottom-0 absolute z-10 sm:block'/>
        </div>
        </div>
    </div>
  )
}

export default Payments