

import "./App.css"

import React, { useState, useEffect } from "react";
import { useRef } from "react"
import logo from "./logo.jpg"
import phone from "./img/p1.svg"
import phone1 from "./img/phone01.svg"
import phone2 from "./img/phone02.svg"
import tophone from "./img/tophone.png"
import art1 from "./img/Arti1.png"
import art2 from "./img/Arti2.png"
import art3 from "./img/Arti3.png"
import logo01 from "./img/Dextonlogo.png"
import img01 from "./img/img01.jpg"
import img02 from "./img/img02.png"
import img03 from "./img/img03.png"
import img04 from "./img/img04.png"
import img05 from "./img/img05.png"
import img06 from "./img/img06.png"





import ScrollToTop from "react-scroll-to-top";








function App() {


  const initialData = {
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    message: ""
  };

  const [data, setData] = useState(initialData);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      data.firstname === "" ||
      data.lastname === "" ||
      data.email === "" ||
      data.message === ""
    ) {
      alert("Please Enter your information Data ");
      return;
    }

    const oldData = JSON.parse(localStorage.getItem("user")) || [];
    localStorage.setItem("user", JSON.stringify([...oldData, data]));

    alert("Form submitted successfully");
    setData(initialData);
  };

  // localStorage and Validation code demo

  //   const userDetail ={
  //     firstname:"",
  //     lastname:"",
  //     email:"",
  //     number:"",
  //     message:""

  //   }

  //   const [data ,setData] =useState(userDetail

  //   ) 

  //    const handleInput =(event) =>{
  //     console.log(event.target.value);
  //     console.log(event.target.name);
  //     const name = event.target.name;
  //     const value = event.target.value;

  //     setData({...setData,[name]:value})

  //   }

  //   const handleSubmit = (event) =>{
  //     event.preventDefault();

  //     if(data.firstname == "" || data.lastname == "" ||data.email == "" || data.message == "" )
  // {
  //   alert("please Enter Detail !")
  // }
  // else{
  //     const getData =  JSON.parse(localStorage.getItem("user") || "[]");
  //     let arr = [];
  //     arr = [...getData];
  //     arr.push(data)

  //     lacolStorage.setItem("user",JSON.stringify(data))
  // alert("succestion")
  // }
  //   }


  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('theme-dark');
    } else {
      document.documentElement.classList.remove('theme-dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleClick() {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }


  //   const handleToggle = () => {
  //    setIsToggled(!isToggled);
  // };


  const featureRef = useRef(null)
  const AboutRef = useRef(null)
  const pricingRef = useRef(null)
  const ReviewsRef = useRef(null)
  const ContactRef = useRef(null)

  return (
    <div>




      <div className="main-body1">


        <div className="nav1" >

          <div className="logo01">
            <img src={logo01} alt="Dexton" className="logoimg"></img>


          </div>
          <div className="logo02
        ">



            <h1 onClick={() => featureRef.current.scrollIntoView({ behavior: "smooth" })} >Features</h1>
            {/* <button  onClick={()=>inputRef.current.focus()}>Fdsafdfw</button> */}
            <h1 onClick={() => AboutRef.current.scrollIntoView({ behavior: "smooth" })}>About</h1>
            <h1 onClick={() => pricingRef.current.scrollIntoView({ behavior: "smooth" })}> Pricing</h1>
            <h1 onClick={() => ReviewsRef.current.scrollIntoView({ behavior: "smooth" })}>Reviews</h1>
            <h1 onClick={() => ContactRef.current.scrollIntoView({ behavior: "smooth" })}>Context</h1>
            <h1 >page</h1>


          </div>

          <div className="logo03">
            <button className="btn1" >Downloand</button>
            <button className="btn2" onClick={handleClick}>{theme === 'dark' ? '🌙' : '☀️'}</button>


          </div>

        </div>


        <div className="top1">
          <div className="csstop">

            <table className="tbl" >

              <div className="t1">
                <h2 className="h">
                  Dexton technology <br /> Template for Apps <br /> and Software
                </h2>

                <p className="p1">All in one Tailwind CSS site template for - App and Software <br /> sites. Comes with all essential components, clean design and  <br /> everything you can expect from a complete app landing page.</p>

                {/* <button className="but1">Explore</button> */}
                <button class="button" data-text="Awesome">
                  <span class="actual-text">&nbsp;Explore&nbsp;</span>
                  <span aria-hidden="true" class="hover-text">&nbsp;Explore&nbsp;</span>
                </button>

              </div>
              <div className="t2">

                <img src={phone} alt="" className="phone" />

              </div>
            </table>
          </div>


        </div>









        {/* ref={inputRef} */}

        {/* <div className="div2"  > */}
        <div className="Our">
          <div className="d1" >
            <h1 className="divh1"  >Our Recent Awards</h1>

            <p className="p11">There are many variations of passages of Lorem Ipsum available <br />
              but the majority have suffered alteration in some form.</p>

          </div>

        </div>

        <br />
        <br />
        <div className="our" ref={featureRef}>
          
          <div className="our1">
            <h1>*4.5 Rating</h1>
            <h2>+195 raters</h2>
            <br />
            <p>Lorem ipsum dolor sit amet, consec <br />
              adipiscing elit In   vulputate   vitae massa  &nbsp;&nbsp;&nbsp;  <br />
              eu dapibus ligula.</p>
            <br />

            <h3>Rate of Application  </h3>
          </div>
          <div className="our2">
            <h1>Awwwards</h1>

            <h2>
              Best of trendy design in 2024 on  Awwwards
            </h2>
            <br />
            <p>Lorem ipsum dolor sit amet, consec
              adipiscing elit In vulputate vitae massa<br />
              eu dapibus ligula.</p>
            <br />
            <h3>Go to Awards</h3>
          </div>
          <div className="our3" >
            <h1>Appwind.</h1>
            <h2>Appwind is the best app for online payment</h2> <br />
            <p>Lorem ipsum dolor sit amet, consec
              adipiscing elit In vulputate vitae massa
              eudapibus ligula.

            </p>
            <br />
            <h3> Know more</h3>
          </div>


        </div>

        <div className="div3">



        </div>



        <div className="div03" ref={AboutRef}>

          <div className="phon1" >
            <img src={phone1} alt="" className="phone01" />
          </div>

          <div className="phon2">
            <h2 className="phone1h01">About Application</h2>

            <h1 className="phon1h1">
              Instant Payment Transfer <br /> SavesYou Time
            </h1>

            <p className="phon1h2">Schedule your posts for times when your audience is most active.<br /> Choose from our best-time predictions, or create <br /> your own publishing schedule.</p>

            <br />
            <br />
            <h2 className="phon1h3">Know More About App</h2>

          </div>

        </div>


        <div className="phone2">

          <div className="ph1">
            <h1 className="ph01">Easy to Manage Appwind</h1>
            <h1 className="ph02">
              Manage your online wallet <br />
              with Appwind.
            </h1>
            <p className="ph03">
              Schedule your posts for times when your audience is most <br /> active. Choose from our best-time predictions, or create <br /> your own publishing schedule.
            </p>

            <h3 className="ph04">Get the App Now!</h3>

          </div>
          <div className="ph2">
            <img src={phone2} alt="" className="phon2" />
          </div>
        </div>


        <div className="box4">
          <div>
            <h1 className="box41">How it Works?</h1>
            <p className="box42">There are many variations of passages of Lorem Ipsum available <br />
              &nbsp;&nbsp;&nbsp;&nbsp; but the majority have suffered alteration in some form.</p>
            <p></p>
          </div>
        </div>
        <div className="tbl5">
          <div >


            <h1 className="tbl51">Download for Free</h1>
            <p className="tbl52">Lorem ipsum dolor sit amet, consectetur
              <br />&nbsp;&nbsp;&nbsp;&nbsp; adipiscing elit lectus non ipsum.</p>
          </div>
          <div>

            <h1 className="tbl51">Open an Account</h1>
            <p className="tbl52">Lorem ipsum dolor sit amet, consectetur
              <br />&nbsp;&nbsp;&nbsp;&nbsp; adipiscing elit lectus non ipsum.</p>
          </div>
          <div>

            <h1 className="tbl51">Enjoy our App</h1>
            <p className="tbl52">Lorem ipsum dolor sit amet, consectetur
              <br />&nbsp;&nbsp;&nbsp;&nbsp; adipiscing elit lectus non ipsum.</p>
          </div>
        </div>



        <div className="tbl6">


          <table border={2} className="tabl6">

            <div className="tbl6001">

              <h3 className="tbl601">Downloand Now!</h3>

              <h1 className="tbl602">Downloand our mobile <br /> application.</h1>

              <br />
              <p className="tbl603">Download Appwind mobile banking app for IOS & <br />
                Android to manage your online money.</p>


              <div className="btnga">
                <button className="tblbtn1">Google Play</button>
                <button className="tblbtn2">App store</button>
              </div>

            </div>

            <div>
              <img src={tophone} alt="" className="tophone" />
            </div>


          </table>




        </div>


        <div className="Flexible " ref={pricingRef}>
          <div className="F1">
            <h1 className="F01">Flexible Plans</h1>
            <p className="F02">There are many variations of passages of Lorem Ipsum available  <br />but the majority have suffered alteration in some form.</p>
          </div>
        </div>

        <div className="Fdiv">

          <table border={3} className="Ftbl">
            <div>
              <h1 className="F1">Basic Plane</h1>
              <h2 className="F2">$35  <span className="F01">/month</span> </h2>

              <ul className="F3">
                <li>Life time free update </li>
                <li>Unlimited transactions</li>
                <li> Free credit-card</li>
                <li>1 year premium support</li>
              </ul>

              <button className="btnF"> Choose Basic plan</button>
            </div>
          </table>

          <table border={3} className="Ftbl1">
            <div>
              <h1 className="F1">Popular Plane</h1>
              <h2 className="F2">$99  <span className="F01">/month</span> </h2>

              <ul className="F3">
                <li>Life time free update </li>
                <li>Unlimited transactions</li>
                <li> Free credit-card</li>
                <li>1 year premium support</li>
              </ul>

              <button className="btnF"> Choose Popular plan</button>
            </div>
          </table>
          <table border={3} className="Ftbl">
            <div>
              <h1 className="F1">Golden Plane</h1>
              <h2 className="F2">$159  <span className="F01">/month</span> </h2>

              <ul className="F3">
                <li>Life time free update </li>
                <li>Unlimited transactions</li>
                <li> Free credit-card</li>
                <li>1 year premium support</li>
              </ul>

              <button className="btnF"> Choose Golden plan</button>
            </div>
          </table>

        </div>
        <br />
        <br />








        <div className="saytop" ref={ReviewsRef}>
          <div class="container">

            <h2>What Clients Say?</h2>
            <p class="subtitle">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>




            <div class="testimonials">

              <div class="card">
                <div class="profile">
                  {/* <img src="https://i.pravatar.cc/100?img=1"> */}
                  <img src={img01} alt="" />

                  <h4>Mahfuz Chowdhury</h4>
                  <span>UI/UX Designer</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque dignissim nisi a odio laoreet luctus.
                  </p>



                </div>



              </div>





              <div class="card">
                <div class="profile">
                  {/* <img src="https://i.pravatar.cc/100?img=2"> */}
                  <img src={img02} alt="" />
                  <h4>Alex Gilroy</h4>
                  <span>Web Developer</span>


                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque dignissim nisi a odio laoreet luctus.
                  </p>
                </div>




              </div>

              <div class="card">
                <div class="profile">
                  {/* <img src="https://i.pravatar.cc/100?img=3"> */}
                  <img src={img03} alt="" />
                  <h4>Jonathan Smith</h4>
                  <span>Product Manager</span>


                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque dignissim nisi a odio laoreet luctus.
                  </p>
                </div>
              </div>

              <div class="card">
                <div class="profile">
                  {/* <img src="https://i.pravatar.cc/100?img=4"> */}
                  <img src={img04} alt="" />

                  <h4>David Miller</h4>
                  <span>Marketing Lead</span>


                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque dignissim nisi a odio laoreet luctus.
                  </p>
                </div>
              </div>

              <div class="card">
                <div class="profile">
                  {/* <img src="https://i.pravatar.cc/100?img=5"> */}
                  <img src={img05} alt="" />
                  <h4>Adam William</h4>
                  <span>SEO Specialist</span>


                  <p className="smap">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque dignissim nisi a odio laoreet luctus.
                  </p>
                </div>
              </div>

              <div class="card">
                <div class="profile">
                  {/* <img src="https://i.pravatar.cc/100?img=6"> */}
                  <img src={img06} alt="" />
                  <h4>Kevin Brown</h4>
                  <span>Business Analyst</span>


                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque dignissim nisi a odio laoreet luctus.
                  </p>
                </div>
              </div>

            </div>


          </div>
        </div>






        <div class="faq">
          <h2>Frequently Asked Questions</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.
          </p>
        </div>

        <div className="faqtbl">

          <div className="faqtbl1">
            <img src={img01.png} alt="" />
            <h1>Which plan is suitable for me?</h1>
            <samp> Sed tempor mi at nunc commodo, quis tincidunt turpis finibus. Pellentesque congue neque justo.</samp>
            <br />
            <h1>Will i get free future update</h1>
            <samp>
              Maecenas tincidunt risus et interdum lobortis. Nunc nec eros mattis diam suscipit tristique at sit amet elit.
            </samp>

            <h1>Do you provide suppoer?</h1>
            <samp>
              Maecenas tincidunt risus et interdum lobortis. Nunc nec eros mattis diam suscipit tristique.
            </samp>

          </div>


          <div className="faqtbl2">
            <h1>Which plan is suitable for me?</h1>
            <samp>Sed tempor mi at nunc commodo, quis tincidunt turpis finibus. Pellentesque congue neque justo.</samp>

            <h1>
              Will I get free future updates</h1>


            <samp>
              Maecenas tincidunt risus et interdum lobortis. Nunc nec eros mattis diam suscipit tristique at sit amet elit.
            </samp>

            <h1> Do you provide support?</h1>
            <samp>Maecenas tincidunt risus et interdum lobortis. Nunc nec eros mattis diam suscipit tristique.
            </samp>


          </div>

        </div>


        <div className="Articles">
          <h1 className="Arth1">  Recent Articles</h1>
          <p className="Atrsamp">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>


        </div>

        <div className="artpage">
          <div className="artpage1">

            <div className="page1">

              <a href="https://app-tailwind.preview.uideck.com/blog-details">
                <img src={art1} alt="" className="img1" />
              </a>




            </div>
            <div className="page2">
              <a href="https://app-tailwind.preview.uideck.com/blog-details">
                <img src={art2} alt="" className="img2" />
              </a>


            </div>

          </div>

          <div className="artpage2">
            <a href="https://app-tailwind.preview.uideck.com/blog-details">
              <img src={art3} alt="" className="img3" />
            </a>

          </div>
        </div>

        <div className="blticon">
          <div className="ican">
            <a href="https://uideck.com/" >  <h1>Uideck</h1> </a>
            <a href="https://tailgrids.com/"><h1>tail Grids</h1></a>
            <a href="https://lineicons.com/"><h1>Lineicons</h1></a>
            <a href="https://ayroui.com/" ><h1>Ayro UI</h1></a>
            <a href="https://plainadmin.com/"><h1>PlainAdmin</h1></a>

          </div>
        </div>

        <div className="help">
          <h1>Need Any Help</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>




        <div className="contact-section1" ref={ContactRef}>
          <form onSubmit={handleSubmit} >

            <div className="from-grid1">


              <div >
                <label >First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={data.firstname}
                  onChange={handleInput}
                  required="enter fist name"
                />

              </div>
              <div >
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={data.lastname}
                  onChange={handleInput}
                  required
                />

              </div>
              <div >
                <label>Business Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={handleInput}
                  required
                />

              </div>
              <div >
                <label>Phone Number</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Phone"
                  value={data.number}
                  onChange={handleInput}
                  required
                />
              </div>



            </div>

            <div className="wodth01">
              <label>What are you looking for?</label>
              <textarea

                name="message"
                placeholder="Message"
                value={data.message}
                onChange={handleInput}
                required
              ></textarea>


            </div>
            <div className="form-btn1">
              <button type="submit">Submit</button>
            </div>



          </form>
        </div>






        <div className="last2">
          <div>
            <h1 > Appwind </h1>
            <p  >
              Lorem ipsum dolor sit amet, consectetur<br />
              adipiscing elit. Nulla feugiat et sem at<br />
              Etiam in lobortis dui. Praesent .
            </p>

          </div>
          <div className="li1">
            <h1>Quick Links</h1>
            <p>Out Blog</p>

            <p>Check pricing</p>
            <p>About Us</p>
            <p>Help & Support</p>


          </div>
          <div className="li2">
            <h1>App information</h1>
            <p>style guideline</p>
            <p>Getting Started</p>
            <p>changelog</p>
            <p>Update Details</p>
          </div>
          <div>
            <h1>join Our newsletter</h1>
            <p>Larem ipsum dolor sit amet.<br />
              consectetur adipiscing elit nulla feugiat

            </p>

            <input placeholder="Enter your email --|>" className="input1"></input>
          </div>
        </div>

        <div className="last">
          <h1>
            Copyright by Appwind 2024, All rights reserved.
          </h1>
          {/* <!-- From Uiverse.io by satyamchaudharydev -->  */}
          <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;uiverse&nbsp;</span>
            <span aria-hidden="true" class="hover-text">&nbsp;uiverse&nbsp;</span>
          </button>

          <h1></h1>


        </div>










        {/* </div> */}
        <div className="window">
          {/* <ScrollToTop>top</ScrollToTop> */}
        </div>

























      </div>

      <div>




      </div>

    </div>







  )
}


export default App;

