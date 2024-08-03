import Link from "next/link";
import {FaShieldAlt} from "react-icons/fa"

export default function Home() {

  return (
    <main className="">
      <nav className="flex justify-between px-[7%] items-center">
        <h1>Delivro</h1>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Features</Link>
          </li>
          <li>
            <Link href="/">Price Plans</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
        </ul>
        <button className="contact"> Contact Us</button>
      </nav>

      
      <section className="welcome h-[570px] w-[100%] bg-[#f2f2ff] p-[7%] flex items-center">
        <div className="w-[60%] flex flex-col">
          <h1 className="text-[45px] font-semibold">Smart Shipping that grows your Business</h1>
          <p className="my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum in voluptates ipsum aliquam deleniti, aperiam eaque eum maxime accusamus nemo doloremque architecto pariatur veniam quas vel qui dolore dolorum. Recusandae?</p>
          <div className="mt-3 h-auto w-[100%]">
            <button className="welcome-btn welcome-btn1">Start Free Trial</button>
            <button className="welcome-btn">Learn more</button>
          </div>
        </div>
      </section>


      <section className="h-[560px] w-[100%] flex px-[7%] py-14 justify-between">
        <div className="w-[48%]">
          <h1 className="text-[30px] font-bold">Fully integrated with 10 Buy Shipping tools</h1>
          <p>Automation tools that simplify your shipping</p>
          <img src="/favicon.ico" alt="Icon" />
        </div>
        <div className="w-[48%] p-6">
          <div className="fully-div">
            <FaShieldAlt className="shield"/>
            <div>
              <h3 className="fully-int"> The same guaratees offered</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid unde, aut ipsam eos asperiores voluptate sapiente quae eius placeat autem laboriosam obcaecati maxime ex atque, cupiditate commodi saepe. Dolore.</p>
            </div>
          </div>
          <div className="fully-div">
          <FaShieldAlt className="shield"/>
            <div>
              <h3  className="fully-int">Amazon-discounted rates</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid unde, aut ipsam eos asperiores voluptate sapiente quae eius placeat autem laboriosam obcaecati maxime ex atque, cupiditate commodi saepe. Dolore.</p>
            </div>
          </div>
          <div className="fully-div">
          <FaShieldAlt className="shield"/>
            <div>
              <h3  className="fully-int"> 100% Valid Tracking Rates</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid unde, aut ipsam eos asperiores voluptate sapiente quae eius placeat autem laboriosam obcaecati maxime ex atque, cupiditate commodi saepe. Dolore.</p>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section className="py-14">
        <div className="my-14 flex justify-between px-[7%] ">
          <h1 className="text-[30px] w-[48%">Get immediate discounted rates with all four major carrier </h1>
          <p className="w-[45%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cum perspiciatis. Quaerat vero ex, doloribus odit praesentium explicabo, quis ipsum ea pariatur quo harum assumenda recusandae. Fugiat distinctio quasi a.</p>
        </div>
        <img src="./gastronomy-expert-cooking-succulent-beef-patty-hot-pan-while-cooking-gourmet-dish-dinner-service-restaurant-food-industry-worker-preparing-meat-meal-professional-kitchen.jpg" alt="" className="my-image"/>
      </section>

      {/* Footer  */}
      <footer>
        <div className="w-[35%]">
          <h1>DELIVERO</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni nostrum soluta id, officiis officia, cumque facere possimus, illum dicta quo doloribus consequatur rem molestiae? Delectus eos debitis animi accusamus!</p>
        </div>
        <div className="w-[35%] flex flex-col justify-between items-center">
          <Link href="">Home</Link>
          <Link href="">Contact Us</Link>
          <Link href="">About Us</Link>
          <Link href="">Services</Link>
        </div>
        <div className="w-[35%] flex flex-col justify-between items-center">
          <Link href="">Home</Link>
          <Link href="">Contact Us</Link>
          <Link href="">About Us</Link>
          <Link href="">Services</Link>
        </div>
      </footer>

    </main>
  );
}
