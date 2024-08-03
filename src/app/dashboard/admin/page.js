import React from 'react'
import { FaBell, FaCalendar, FaClock, FaCompressAlt, FaEnvelope, FaFilter, FaGamepad, FaHome, FaPallet, FaPaperclip, FaPeopleArrows, FaPeopleCarry, FaSearch, FaSort, FaStepForward, FaTablet, FaTypo3 } from 'react-icons/fa';
import Link from 'next/link';

function page() {
  return (
   <main className='flex p-8'>
    <section className='w-[20%] bg-[whitesmoke] p-7 relative'>
      <div>
      <div className='flex mb-9'>
        <img src="../../favicon.ico" alt="" className='w-[50px] mr-1' />
        <div>
          <h1 className='font-semibold text-[19px]'>Venom</h1>
          <p>Management</p>
        </div>
      </div>

      <ul>
        <li className='dash-nav'>
          <Link href=""><span><FaHome /></span> Dashboard </Link>    
        </li>
        <li className='dash-nav'>
          <Link href=""><span><FaPeopleCarry /></span> Employee </Link>    
        </li>
        <li className='dash-nav'>
          <Link href=""><span><FaPaperclip /></span> Payroll </Link>    
        </li>
        <li className='dash-nav'>
          <Link href=""><span><FaTablet /></span> Attendance </Link>    
        </li>
        <li className='dash-nav'>
          <Link href=""><span><FaPallet /></span> Permision </Link>    
        </li>
        <li className='dash-nav'>
          <Link href=""><span><FaCompressAlt /></span> Company </Link>    
        </li>
      </ul>
     </div>

     
      <div className='absolute bottom-6 dash-nav' >
        <div className='settings'>
          <span> <FaGamepad /></span>
          <p>Setting</p>
        </div>
        <div className='settings'>
          <span> <FaGamepad /></span>
          <p>Logout</p>
        </div>
      </div>
    </section>

    <section className='w-[80%] p-8 over-aut'>
      <div className='flex justify-between'>
        
        <div className='rounded-xl search-dash p-2 w-[50%] flex items-center '>
          <span className='mr-1'><FaSearch /></span>
          <input type="text" placeholder='Search Anything' />
        </div>
        <div className='flex'>
          <span className='search-icon'><FaBell /></span>
          <span className='search-icon'><FaEnvelope /></span>
          <img src="../../favicon.ico" alt="" className='h-[50px] mr-1' />
          <div>
            <h3 className='font-semibold'>David Brendi</h3>
            <p>HR and People Lead</p>
          </div>
        </div>

      </div>
        <h1 className='text-[30px] mt-8 font-semibold'>Employee Attendance</h1>

        <div className='perm-btn'>
          <button>Permision Request</button>
          <button>Timesheet</button>
          <button>Activity Log</button>
        </div>
        <div className=' mt-4 flex justify-between'>
          <h1 className='text-[30px] font-semibold'>132 Permission Request</h1>
          <div className='flex gap-2 btn-sort w-[30%] justify-end'>
            <button className='flex'><FaSort  className='mr-1'/> Sort</button>
            <button className='flex'><FaFilter className='mr-1' /> Filter</button>
          </div>
        </div>


        <div className= 'mt-7 p-4 w-[100%] h-[550px] bg-[whitesmoke] rounded-2xl tab-col'>
          <div className='flex justify-between'>
              <div className='tab-row'>
                <span><FaPeopleCarry /></span>
                <h4>Number</h4>
              </div>

              <div className='tab-row'>
                <span><FaPeopleArrows /></span>
                <h4>Person</h4>
              </div>
              <div className='tab-row'>
                <span><FaCalendar /></span>
                <h4>Date</h4>
              </div>
              <div className='tab-row'>
                <span><FaClock /></span>
                <h4>Duration</h4>
              </div>
              <div className='tab-row'>
                <span><FaTypo3 /></span>
                <h4>Type</h4>
              </div>
              <div className='tab-row'>
                <span><FaStepForward /></span>
                <h4>Status</h4>
              </div>
          </div>

          <div className='flex justify-between border-t-2 tab-col'>
            <p className='tab-row'>13</p>
            <div className='tab-row'>
              <img src="../../favicon.ico" alt="" className='person-img' />
              <p>Dianne Russell</p>
            </div>
            <p className='tab-row'>22-28 August 2024</p>
            <p className='tab-row'>7 days</p>
            <p className='tab-row'>WFHLeave</p>
            <select name="" id="" className='tab-row'>
              <option value="">Pending</option>
              <option value="">Delivered</option>
            </select>
          </div>
          <div className='flex justify-between border-t-2 tab-col'>
            <p className='tab-row'>13</p>
            <div className='tab-row'>
              <img src="../../favicon.ico" alt="" className='person-img' />
              <p>Dianne Russell</p>
            </div>
            <p className='tab-row'>22-28 August 2024</p>
            <p className='tab-row'>7 days</p>
            <p className='tab-row'>WFHLeave</p>
            <select name="" id="" className='tab-row'>
              <option value="">Pending</option>
              <option value="">Delivered</option>
            </select>
          </div>
          <div className='flex justify-between border-t-2 tab-col'>
            <p className='tab-row'>13</p>
            <div className='tab-row'>
              <img src="../../favicon.ico" alt="" className='person-img' />
              <p>Dianne Russell</p>
            </div>
            <p className='tab-row'>22-28 August 2024</p>
            <p className='tab-row'>7 days</p>
            <p className='tab-row'>WFHLeave</p>
            <select name="" id="" className='tab-row'>
              <option value="">Pending</option>
              <option value="">Delivered</option>
            </select>
          </div>
          <div className='flex justify-between border-t-2 tab-col'>
            <p className='tab-row'>13</p>
            <div className='tab-row'>
              <img src="../../favicon.ico" alt="" className='person-img' />
              <p>Dianne Russell</p>
            </div>
            <p className='tab-row'>22-28 August 2024</p>
            <p className='tab-row'>7 days</p>
            <p className='tab-row'>WFHLeave</p>
            <select name="" id="" className='tab-row'>
              <option value="">Pending</option>
              <option value="">Delivered</option>
            </select>
          </div>
          <div className='flex justify-between border-t-2 tab-col'>
            <p className='tab-row'>13</p>
            <div className='tab-row'>
              <img src="../../favicon.ico" alt="" className='person-img' />
              <p>Dianne Russell</p>
            </div>
            <p className='tab-row'>22-28 August 2024</p>
            <p className='tab-row'>7 days</p>
            <p className='tab-row'>WFHLeave</p>
            <select name="" id="" className='tab-row'>
              <option value="">Pending</option>
              <option value="">Delivered</option>
            </select>
          </div>
          
        </div>
        <hr />
    </section>
   </main>
  )
}

export default page