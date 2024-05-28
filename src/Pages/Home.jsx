import React from 'react'
import Logo from "../assets/HabotLogo.png"
import Rectangle from "../assets/Rectangle.png"
import Suitcase from "../assets/suitcase.png"
import Location from "../assets/Location.png"
import Arrow from "../assets/Arrow.png"
import Tick from "../assets/tick.png"
import Img_1 from "../assets/Main_img-1.png"
import Img_2 from "../assets/Main_img-2.png"
import Img_3 from "../assets/Main_img-3.png"
import Img_4 from "../assets/Main_img-4.png"
import Img_5 from "../assets/Main_img-5.png"
import Img_6 from "../assets/Main_img-6.png"
import Logo_white from "../assets/Logo_white.png"
import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"
import LinkedIn from "../assets/LinkedIn.png"
import Twitter from "../assets/Twitter.png"









const Home = () => {
  return (
    <div>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100 z-3">
                <div className="container-fluid p-3">
                    <div>
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="logo" />

                    </a>
                        
                    </div>
              
              
              
              
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                        <li className="nav-item">
                        <a className="nav-link" href="#">Find Suppliers</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Find Service Tags
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <button className="btn btn-outline-success">Login/Signup</button>
                        </li>
                    </ul>
              
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

             
             
                </div>
        </nav>

        <section style={{
            backgroundImage:`url(${Rectangle})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            width:"100%",
            height:"70vh",
           
            

        }}

        className='text-light d-flex align-items-center justify-content-center flex-column gap-2'
        >
            <div className='d-flex align-items-center flex-column text-center'>
            <h1 className='fw-bold'>Are you a Supplier?</h1>
            <h1 className='fw-normal'>Explore Matching Opportunites.</h1>

            </div>

            <div className='d-flex flex-column gap-3 flex-md-row'>
              <div className='position-relative d-flex align-items-center'>
                <img src={Suitcase} alt="" className='position-absolute' id='Suitcase'/>
                <input type="text" placeholder='Search your required service here' style={{width:"20rem"}} className='p-2 rounded border border-0 outline-0' id='Input' />

              </div> 
              <div className='position-relative d-flex align-items-center'>
                <img src={Location} alt="" className='position-absolute' id='Suitcase'/>
                <input type="text" placeholder='Search your desired location here' style={{width:"20rem"}} className='p-2 rounded border border-0 outline-0' id='Input' />

              </div>
              <button className='border border-0 rounded p-2 text-light w-100' style={{backgroundColor:"darkgreen"}}>Search</button>
            </div>
            
            <p className='text-center d-flex gap-2 items-center flex-column flex-md-row'><span className='fw-bold'>Are you a buyer ?</span> <span class="text-decoration-underline">Click here if you are looking to post a requirements</span></p>
        
       
           

        </section>


        <section className='container d-flex p-2 justify-content-between flex-column flex-md-row align-items-center gap-4'>
            <div className='container m-auto'>
                <h1 className='fw-bold text-black'>Ready to dive into <span style={{color:"#271555"}}> HABOT?</span></h1>
                <div style={{width:"70%"}} id='remove-width'>
                    <p>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. 
                    Gain access to a vibrant community of like-minded individuals, unlock valuable resources, 
                    and take the first step towards realizing your entrepreneurial dreams.</p>
                </div>
                <div className='position-relative d-flex align-items-center justify-content-around  p-2' style={{backgroundColor:"darkgreen",width:"15rem",cursor:"pointer"}} id='remove-width'>
                    <span className='text-white fw-bold'>Sign up Today !</span>
                    <div>
                    <img src={Arrow} alt="" style={{width:"30px"}}/>

                    </div>
                 
                 

                </div>

            </div>
            <div className='container m-auto row column-gap-3  row-gap-3'>
                <div className='border border-danger-subtle border-1 d-flex align-items-center justify-content-center col-lg-5'>
                    <p>Abu Dhabi</p>

                </div>
                <div className='border border-danger-subtle border-1 text-center d-flex align-items-center justify-content-center col-lg-5 '>
                    <p>Abu Dhabi</p>

                </div>
                <div className='border border-danger-subtle border-1 text-center col-lg-5  d-flex align-items-center justify-content-center'>
                    <p>Abu Dhabi</p>

                </div>
                <div className='border border-danger-subtle border-1 text-center col-lg-5 d-flex align-items-center justify-content-center'>
                    <p>Abu Dhabi</p>

                </div>

                <div className='border border-danger-subtle border-1 text-center col-lg-5 d-flex align-items-center justify-content-center'>
                    <p>Abu Dhabi</p>

                </div>

                <div className='border border-danger-subtle border-1 text-center col-lg-5 d-flex align-items-center justify-content-center'>
                    <p>Abu Dhabi</p>

                </div>



            </div>
        </section>

        <section style={{backgroundColor:"#072f57",gap:"1rem"}} className='container d-flex  flex-column flex-lg-row align-items-center justify-content-around p-4'  id='youtube'>
            <div>
              <iframe src="https://www.youtube.com/embed/IZLp-TZyDkQ" frameborder="0"
                width="460"
                height="315"
                auto
                title="YouTube video player"
               
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
                
              </iframe>

            </div>
            <div>
                <div className='d-flex justify-content-around' style={{gap:"6rem"}}>
                    <div className='position-relative'>
                    <h1 style={{color:"#EB7150"}}>Buyer</h1>
                    <div style={{backgroundColor:"#EB7150",height:"5px",width:"10rem",left:"-10px"}} className='position-absolute'>
                        


                    </div>
                
                    </div>
                    <div>
                    <h1 className='text-white'>Supplier</h1>

                    </div>
                

                </div>
                <div className='mt-5'>
                    <ul className='list-group text-white' style={{listStyle:"none"}}>
                        <li className='d-flex align-items-center gap-2'>
                            <img src={Tick} alt="" />
                            <span className='fs-5 mb-1'>Post your requirements</span>
                        </li>
                        <li className='d-flex align-items-center gap-2'>
                            <img src={Tick} alt="" />
                            <span className='fs-5 mb-1'>Sit back for multiple suppliers to contact you.</span>
                        </li>
                        <li className='d-flex align-items-center gap-2'>
                            <img src={Tick} alt="" />
                            <span className='fs-5 mb-1'>Choose among the suppliers based on the ratings and reviews.</span>
                        </li>
                    </ul>
                </div>
              

              
            </div>

        </section>

        <section style={{backgroundColor:"#E8FBFF"}} className='mt-5 p-4 d-flex justify-content-around align-items-center'>
            <div className='position-relative'>
                <h1>Let Suppliers Find You</h1>
                <div style={{backgroundColor:"#EB7150",height:"5px",width:"10rem",left:"15rem"}} className='position-absolute' id='section_4'>
                </div>
            </div>
            <div style={{backgroundColor:'#eb7150'}} className='p-3 fw-bolder text-white' id='verified'>
                Get Verified

            </div>

        </section>
        <section className='container' style={{marginTop:"2rem"}}>
            <p className='text-center fw-bold fs-2'>How it Works ?</p>
            <p className='text-center text-break'>Buyers post their needs and review top suppliers, while suppliers complete profiles, 
                connect with potential buyers, and build successful business relationships, 
                sharing valuable feedback.</p>

            <div className='d-flex align-items-center  justify-content-center justify-content-md-between flex-wrap'>
                <img src={Img_1} alt="img-1" style={{width:'20rem'}} />
                <img src={Img_2} alt="img-2" style={{width:'20rem'}} />
                <img src={Img_3} alt="img-3" style={{width:'20rem'}} />
                <img src={Img_4} alt="img-1" style={{width:'20rem'}} />
                <img src={Img_5} alt="img-2" style={{width:'20rem'}} />
                <img src={Img_6} alt="img-3" style={{width:'20rem'}} />
             
            </div>

        </section>

        <footer style={{backgroundColor:"#123557"}} className='p-4'>
            <div className='border border-start-0 border-end-0 border-secondary container d-flex justify-content-around align-items-center flex-column flex-lg-row'>
                <div className='d-flex align-items-center p-4 text-white justify-content-between' style={{gap:"2rem"}} id='footer-content'>
                        <div>
                            <div className='text-white'>
                                <img src={Logo_white}  alt="" />
                            </div>
                            <p className='text-white text-start mt-2' id='footer_text'>© R Singhania</p>

                        </div>
                        <div className='d-flex items-center justify-content-between gap-4'>
                            <div className='d-flex flex-column'> 
                                <span className='fw-bold'>Company</span>
                                <span>About</span>
                                <span>FAQ</span>

                            </div>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold'>Terms</span>
                                <span>Data Privacy</span>
                                <span>Terms</span>
                                <span>Accessiblity</span>
                                
                            </div>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold'>Related</span>
                                <span>Find Buyer</span>
                                <span>Feedback</span>
                                
                            </div>



                        </div>
                       

                </div>
              
                <div id='icons' className='d-flex gap-2 p-2'>
                    <img src={LinkedIn} alt="linkedln" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Instagram} alt="linkedln" />
                    <img src={Facebook} alt="linkedln" />



                </div>


            </div>

        </footer>



    </div>
  )
}

export default Home