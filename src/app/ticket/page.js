'use client'
import React from 'react'
import Link from 'next/link'
import { FaCheck, FaCube, FaEnvelope, FaHome, FaMailBulk, FaPhone, FaTrademark } from 'react-icons/fa';

function page() {
  const location = [
    {place: "Lagos"},
    {
      place: "Port Harcort"
    },
    {
      place: "Uyo"
    },
    {
      place: "Calabar"
    }

  ]


  return (
    <main className='items-center w-[100%] h-[100vh] flex justify-between p-4 md:flex-row flex-col-reverse'>
      {/* Side nav bar section */}
      <section className=' hidden md:w-[5%] h-[100vh] p-5 bg-[#08020f] track-main md:flex flex-col items-center text-[20px] text-white'>
        <ul className='mt-6 flex flex-col gap-8'>
          <li>
            <Link href=""><FaHome /></Link>
          </li>
          <li>
            <Link href=""><FaEnvelope /></Link>
          </li>
          <li>
            <Link href=""><FaTrademark /></Link>
          </li>
          <li>
            <Link href=""><FaCube /></Link>
          </li>
        </ul>
      </section>

      {/* Booking section  */}
      <section className='md:h-[97vh] h-[40vh] overflow-y-auto rounded-2xl package p-4 bg-[#08020f] w-[100%] md:w-[25%]'>
        <h1>Delivery Tracking</h1>
        <div className='rounded-xl flex justify-between bg-[#e0e0e03a] my-2 p-3'>
          <div className=''> 
            <h4 className='text-[15px]'>Package from London</h4>
            <p className='font-light text-[13px]'>Order ID #1773873</p>
          </div>
          <button className='on-btn bg-[#ff0000a2]'>ON THE WAY</button>
        </div>

        <div className='rounded-xl bg-[#ff000096] p-3 my-3'>
          <div className='flex justify-between my-2'>
            <div>
              <h4 className='text-[15px]'>Package from Warsaw</h4>
              <p className='text-[13px]'>Order ID #1773873</p>
            </div>
            <button className='on-btn bg-[white] text-black'>ON THE WAY</button>
          </div>
          <div className='flex text-[12px] justify-between'>
            <div>
              <p>Customer</p>
              <h4>Castroma</h4>
            </div>
            <div>
              <p>Weight</p>
              <h4>2.5Kg</h4>
            </div>
            <div>
              <p>Price</p>
              <h4>$430</h4>
            </div>
            <div>
              <p>Departure</p>
              <h4>22 July</h4>
            </div>
          
          </div>
          <hr className='my-2'/>
            <div>
              <h4>Agent</h4>

              <div className='w-[100%] flex justify-between'>
                    <div className='flex'>
                      <img src="./favicon.ico" alt="Adam"  className='h-[40px] mr-2'/>
                      <div className='flex justify-center flex-col'>
                        <h4 className='text-15px'>Adam Brady</h4>
                        <p className='text-[13px]'>Driver</p>
                      </div>
                    </div>
                  
                    <div className='flex gap-2'>
                      <span className='re-icons bg-[white] text-black text-[13px]'><FaMailBulk/> </span>
                      <span className='re-icons bg-[#ffffff6d]'><FaPhone /> </span>
                      
                    </div>
              </div>

              </div>

            </div>
  
  {/* Sender */}
            <div className='rounded-xl bg-[#ff000096] p-3 my-3'>
              <h4>Sender</h4>
              <div className='w-[100%] flex justify-between'>
                  <div className='flex'>
                    <img src="./favicon.ico" alt="Adam"  className='h-[40px] mr-2'/>
                    <div className='flex justify-center flex-col'>
                      <h4 className='text-15px'>Adam Brady</h4>
                      <p className='text-[13px]'>Driver</p>
                    </div>
                  </div>
                
                  <div className='flex gap-2'>
                    <span className='re-icons bg-[white] text-black text-[13px]'><FaMailBulk/> </span>
                    <span className='re-icons bg-[#ffffff6d]'><FaPhone /> </span>
                    
                  </div>

              </div>
            </div>

     {/* Reciever */}
          <div className='rounded-xl bg-[#ff000096] p-3 my-3'>
              <h4>Reciever</h4>
              <div className='w-[100%] flex justify-between'>
                  <div className='flex'>
                    <img src="./favicon.ico" alt="Adam"  className='h-[40px] mr-2'/>
                    <div className='flex justify-center flex-col'>
                      <h4 className='text-15px'>Adam Brady</h4>
                      <p className='text-[13px]'>Driver</p>
                    </div>
                  </div>
                
                  <div className='flex gap-2'>
                    <span className='re-icons bg-[white] text-black text-[13px]'><FaMailBulk/> </span>
                    <span className='re-icons bg-[#ffffff6d]'><FaPhone /> </span>
                    
                  </div>

              </div>
            </div>


{/* CheckOut */}
    <div className='flex'>

      <div>
        {[...Array(location.length)].map(star =>{
          return(
            <div  className='h-[30px] w-[30px] mb-5 flex justify-center p-1 items-center rounded-[100%] bg-[red]'>
              <FaCheck /> 
            </div>
          )
        })}
      </div>

      <div className='w-[80%]'>

        {location.map(fix =>{
          return(
            <div  className='w-[100%] h-[30px] mb-5 p-1 items-center'>
              <p>{fix.place}</p>
            </div>
          )
        })}
      </div>

         
    </div>


        {/* <div className='px-6 flex'>
          <div className='h-[100] bg-white w-[2px] mt-[3%]'>
           
          </div>

          <ul className='list-del ml-4'>
            <li>
            <li>
              <h1>Johnson Johnson</h1>
              <p>Royal Street, Uyo</p>
            </li>
            </li>
            <li>
              <h4>Order Received</h4>
              <p>Received by</p>
              <div className='bg-[#ffffff40] p-2 my-2 rounded-xl w-[100%] flex justify-between'>
                <div className='flex'>
                  <img src="./favicon.ico" alt="Adam"  className='w-[50px] mr-2'/>
                  <div className='flex justify-center flex-col'>
                    <h4>Adam Brady</h4>
                    <p className='text-[15px]'>Driver</p>
                  </div>
                </div>
              
                <div className='flex gap-2'>
                  <span className='re-icons bg-[white] text-[black] text-'><FaMailBulk/> </span>
                  <span className='re-icons bg-[#ffffff6d]'><FaPhone /> </span>
                  
                </div>

              </div>
            </li>
            <li>
              <h4>Order Picked Up</h4>
              <p>Your order is already picked up</p>
            </li>
            <li>
              <h4>Order on Delivery</h4>
              <p>Your order is on delivery will arrive in 8 mins</p>
            </li>
            <li>
              <h4>My Home</h4>
              <p>Ab Street, Uyo Metro</p>
            </li>
          </ul>

        </div> */}

      </section>

      <section className='md:h-[100vh] h-[60vh] w-[100%] md:w-[68%] bg-gray-700 relative flex justify-center'>
        {/* <img src="./gastronomy-expert-cooking-succulent-beef-patty-hot-pan-while-cooking-gourmet-dish-dinner-service-restaurant-food-industry-worker-preparing-meat-meal-professional-kitchen.jpg" alt="" className="map-img"/> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63592.10208052639!2d7.991986800000001!3d5.021288500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1722966406268!5m2!1sen!2sng" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
        <div className="hidden md:block map-order p-5">
          <div className='flex gap-9 items-center'>
            <h1 className='text-15px'>Order ID #1848483</h1>
            <button className='px-3 py- rounded-lg bg-[red]  text-white text-[13px]'>ON THE WAY</button>
          </div>
          <hr className='mt-3'/>

          <div className='down-foot flex w-[100%] justify-between mt-5'>
            <div>
              <p>From</p>
              <h1>Warsaw, PL</h1>
            </div>
            <div>
              <p>To</p>
              <h1>Berlin, DE</h1>
            </div>
             <div>
              <p>Curreny Location</p>
              <h1>Dresden, DE</h1>
            </div>
             <div>
              <p>Kms Left</p>
              <h1>520</h1>
            </div>
             <div>
              <p>Last Stop</p>
              <h1>3 hours</h1>
            </div>


          </div>
        </div>
      </section>

    </main>
  )
}

export default page