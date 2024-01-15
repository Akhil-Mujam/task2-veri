import React from 'react'

import calculator from '../Assessts/calculator.webp'
import creditmitra from '../Assessts/Credit mitra (Final design)_page-0001.jpg'
import loan1 from '../Assessts/loan2.png'

import loan from '../Assessts/loan.png'
import growing from '../Assessts/we-are-growing.png'
import f1 from '../Assessts/f-1.png'

import f2 from '../Assessts/f-2.png'

import'./Product.css'
const Product = () => {




   const Res = [
    { id:"1",name: "Application",p:"Take the first step towards financial freedom by filling out our simple and easy online application form. Provide your basic information and let us handle the rest.", link: "#" },
    { id:"2",name: "Documentation and Verification",p:"From the comfort of your home, upload the necessary documents to complete your application. Our secure system ensures the confidentiality of your information.", link: "#"},
    { id:"3",name: "Credit Assessment", p:"Our experienced underwriting team will thoroughly review your application and financial background to determine your creditworthiness.",link: "#" },
    { id:"4",name: "Loan Approval and Disbursement",p:"Upon successful credit assessment, your loan will be promptly approved and disbursed directly into your linked bank account.",link: "#" },
    // { id:"5",name: "Collabaration",p:"We believe in the power of collaboration – with our customers, partners, and stakeholders. By working together, we create synergies that drive positive and sustainable outcomes.",link: {f5} },
    // { id:"6",name: "Agility",p:"In the dynamic landscape of fintech, we value agility and adaptability. We respond quickly to market changes, ensuring that our solutions evolve to meet the evolving needs of our customers.",link: {f6} }
  ];





  
   window.addEventListener('scroll',reveal)
 function reveal(){
  var reveals = document.querySelectorAll('.reveal')

  for(var i=0;i<reveals.length;i++)
  {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint =150;

    if(revealtop  < windowheight -revealpoint)
    {
         reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
 }


  return (
    <div class='bg-[url(https://images.freecreatives.com/wp-content/uploads/2016/04/Solid-Black-Website-Background.jpg)] '>
     {/* <div className='bg-[url(https://mcdn.wallpapersafari.com/medium/13/17/HuRsCE.jpg)] bg-no-repeat bg-cover'> */}
  
      <section class="  text-gray-600 body-font overflow-hidden pb-8 animate__animated animate__fadeInUp  animate__slow  ">
  <div class="container px-5 py-20 mx-auto">   {/*reveal*/}
    <div class="lg:w-3/7 mx-auto flex flex-wrap">
      {/* <img alt="ecommerce" class="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"  src="https://res.cloudinary.com/tapptitude/w_812,h_1024,c_fit,f_auto/web-images/2019/04/olly@2x-812x1024-compressor.png"/> */}
      <img alt="ecommerce" class="lg:w-1/3 w-full lg:h-auto h-72 object-cover object-center rounded"  src={calculator}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-19 mt-6 lg:mt-0">
        <h2 class="text-base title-font text-gray-500 tracking-widest">Credit Mitra</h2>
        <h1 class=" text-black font-bold text-3xl title-font tracking-wider mb-3 text-white">India's <span className='headline1'>#1</span> Personal Loan</h1>
        
        {/* <p class="leading-relaxed ">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p> */}
       <p className='leading-relaxed text-gray-300 text-3xl ml-auto mb-14'>Get Instant loan Upto 10Lakhs <br/></p>
        <div className='flex justify-between '>
        <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 124 124" fill="none">
        <rect width="124" height="124" rx="24" fill="#F97316"/>
        <path d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z" fill="white"/>
        <circle cx="63.2109" cy="37.5391" r="18.1641" fill="black"/>
        <rect opacity="0.4" x="81.1328" y="80.7198" width="17.5687" height="17.3876" rx="4" transform="rotate(-45 81.1328 80.7198)" fill="#FDBA74"/>
        </svg>
          
          </button>
          <span class="title-font font-medium text-lg leading-relaxed text-gray-900 text-white">Get Transered in seconds</span>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 ">
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,9V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V18H19.5a.5.5,0,0,0,.5-.5V8h1A1,1,0,0,1,22,9ZM2,15V5A1,1,0,0,1,3,4H17a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1H3A1,1,0,0,1,2,15Zm11-5a1,1,0,0,0,1,1h1a1,1,0,0,0,0-2H14A1,1,0,0,0,13,10ZM8,10a2,2,0,1,0,2-2A2,2,0,0,0,8,10ZM4,10a1,1,0,0,0,1,1H6A1,1,0,0,0,6,9H5A1,1,0,0,0,4,10Z"/></svg>
          </button>
          <span class="title-font font-medium text-lg leading-relaxed text-gray-900 text-white">Cash Without Collateral</span>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
          <span class="title-font font-medium text-lg leading-relaxed text-gray-900 text-white">spent cash</span>
        </div>
        <div class="flex py-20 ">
          {/* <span class="title-font font-medium text-2xl text-gray-900">$58.00</span> */}
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Get app </button>
          <a href="#" class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Learn more
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
         
        </div>
      </div>
    </div>
  </div>
</section>

{/* ----------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* <div className='flex flex-wrap justify-around animate__animated animate__fadeInUp'>
    <div class="box-content h-20 w-full sm:w-40  
                    border-4 rounded-lg bg-amber-600 mb-4 sm:mb-0"> 
          
          <div className='flex justify-center items-center'>
          <FaRegFaceSmileBeam  size={30}/>
          <p className='text-white font-bold text-xl pt-2'> 1 Lakh+ Users</p>
          </div>
          
    </div> 
    <div class="box-content h-20 w-full sm:w-40  
                    border-4 rounded-lg bg-amber-600 mb-4 sm:mb-0"> 
          
          <div className='flex justify-center items-center'>
          <FaRegFaceSmileBeam  size={30}/>
          <p className='text-white font-bold text-xl pt-2'> 1 Lakh+ Users</p>
          </div>
          
    </div> 
    <div class="box-content h-20 w-full sm:w-40  
                    border-4 rounded-lg bg-amber-600 mb-4 sm:mb-0"> 
          
          <div className='flex justify-center items-center'>
          <FaRegFaceSmileBeam  size={30}/>
          <p className='text-white font-bold text-xl pt-2'> 1 Lakh+ Users</p>
          </div>
          
    </div> 
    <div class="box-content h-20 w-full sm:w-40  
                    border-4 rounded-lg bg-amber-500 mb-4 sm:mb-0"> 
          
          <div className='flex justify-center items-center'>
          <FaRegFaceSmileBeam  size={30}/>
          <p className='text-white font-bold text-xl pt-2'> 1 Lakh+ Users</p>
          </div>
          
    </div> 
</div> */}


{/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */}

<section class="text-gray-600 body-font shadow-md  text-white">
  <div class="container reveal px-5 py-20 mx-auto flex flex-wrap items-center justify-center">
  <h1 class="title-font font-bold text-5xl text-amber-600">CreditMitra: Who We Are</h1>
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
     
      <p class="leading-relaxed mt-4  text-2xl ">Embrace the transformative power of instant financial solutions with CreditMitra, your trusted financial partner for the long term. We are dedicated to empowering individuals across Bharat by providing accessible and affordable lending solutions, bridging the gap left by traditional financial institutions.</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
    <img alt="ecommerce" class="lg:w-5/3 w-full lg:h-auto h-64 object-cover object-center rounded"  src={growing}/>
     
    </div>
  </div>
</section>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
<section className='reveal'>
<h1 class="title-font font-medium text-5xl font-sans py-5 text-amber-600">Explore Our Loan Options</h1>
<div class="flex gap-8 flex-wrap justify-center  py-10">

<div class="p-2 md:w-1/3 transition duration-300 hover:scale-105">
        <div class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">  
        <div class="p-2 flex justify-center">
            <a href="#"><img class="rounded-md" src={loan1} loading="lazy"/> </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="#"><h5 class="text-xl font-semibold tracking-tight  ">
                        Get Instant Cash Loan
                    </h5>
                </a>
                <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                    A card component is a flexible and extensible content container. Card has wide range of uses.
                </p>
            </div>
        </div>
      </div>
      </div>
      <div class="p-2 md:w-1/3  transition duration-300 hover:scale-105">
      <div
        class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
        
        <div class="p-2 flex justify-center">
            <a href="#">
                <img class="rounded-md"
                    src={loan1}
                    loading="lazy"/>
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="#">
                    <h5
                        class="text-xl font-semibold tracking-tight  ">
                        Get Instant Cash Loan
                    </h5>
                </a>
                <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                    A card component is a flexible and extensible content container. Card has wide range of uses.
                </p>
            </div>
        </div>
      </div>
      </div>
    
  
</div>
</section>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}


<div className='bg-white text-dark py-2 reveal scroll-smooth'>
<h1 className='text-3xl '></h1>
<div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-[60px] max-w-[820px] text-center lg:mb-20">
        <h1 class="title-font font-bold text-5xl w-fit text-amber-600 py-2 leading-relaxed">Embark on a Seamless Borrowing Experience with CreditMitra's 4-Step Process</h1>
        </div>
      </div>
    </div>
    </div>
{/* <h1 class="title-font font-bold text-5xl w-fit text-amber-600 py-2 leading-relaxed">Embark on a Seamless Borrowing Experience with CreditMitra's 4-Step Process</h1> */}
        {
          Res.map((data)=>
          (data.id%2)?

    
               
                            <section class="text-gray-600 body-font">
                            <div class="container px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 flex md:flex-row flex-col items-center">
                              <div class="lg:flex-grow md:w-4/6 lg:pr-4 md:pr-2 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                                <h1 class="title-font sm:text-3xl sm:font-bold text-xl text-amber-600 mb-4 font-sen ">{data.name}</h1>
                                <p class="mb-8 leading-relaxed font-sen text-left">{data.p}</p>
                              </div>
                              <div class="lg:max-w-lg lg:w-full md:w-2/6 w-5/6">
                                <img class="object-cover object-center rounded max-w-full h-auto" alt="hero" src={f1}/>
                              </div>
                            </div>
                          </section>
           

        
:

         
        
                      <section class="text-gray-600 body-font mb-2">
                      <div class="container px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 flex md:flex-row flex-col items-center">
                      <div class="lg:max-w-lg lg:w-full md:w-2/6 w-5/6">
                          <img class="object-cover object-center rounded max-w-full h-auto" alt="hero" src={f2} />
                        </div>
                        <div class="lg:flex-grow md:w-4/6 lg:pr-4 md:pr-2 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-3xl sm:font-bold text-xl mb-4 font-sen text-amber-600">{data.name}</h1>
                          <p class="mb-8 leading-relaxed font-sen text-left">{data.p}</p>
                        </div>
                      
                      </div>
                    </section>

    
          )
        }

    </div>
 {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
<section>
  <div class="container reveal mx-auto py-5">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div class="mx-auto mb-8 max-w-2xl text-center lg:mb-20">
          <h1 class="title-font font-bold text-2xl sm:text-3xl text-amber-600 py-2 leading-relaxed">Our Motto Has Always Been Customer Centric Approach. "And Our Numbers Speak Loud And Clear"</h1>
          <div class='flex flex-wrap justify-center -mx-2'>
            <div class='flex flex-col text-white font-bold sm:text-3xl text-xl mx-2 my-2 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4'> 
              <p class='sm:text-3xl text-xl mb-2'>30+</p>
              <p class='text-xl'>Lending Partners</p>
            </div>
            <div class='flex flex-col text-white font-bold sm:text-3xl text-xl mx-2 my-2 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4'> 
              <p class='sm:text-3xl text-xl mb-2'>500 Cr+</p>
              <p class='text-xl'>Total Loan Disbursed</p>
            </div>
            <div class='flex flex-col text-white font-bold sm:text-3xl text-xl mx-2 my-2 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4'> 
              <p class='sm:text-3xl text-xl mb-2'>1200+</p>
              <p class='text-xl'>Satisfied Customers</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


             
    </div>
  )
}

export default Product
