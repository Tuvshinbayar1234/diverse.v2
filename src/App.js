import React, {useRef, useEffect, useState} from "react";
import Nav from "./Components/Nav/Nav";
import Home from './assets/Home.png'
import We from "./Components/We/We";
import WeWork from "./Components/weWork/WeWork";
import Team from "./Components/Team/Team";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import AlertSuccess from "./Components/alert/Alert";
import TeamSlider from "./Components/Team/TeamSlider";
import ProjectAccordion from "./Components/Projects/ProjectAccordion";
import ProjectSlider from "./Components/Projects/ProjectSlider";
import Style from './styles.module.css'
import background from './assets/bg-1.png'
import Cursor from "./Components/Cursor/Cursor";

function App(){


  const SuccessData = {
    title: "Амжилттай",
    type: "Амжилттай",
    text: "Таны захиа амжилттай илгээгдлээ",
    footer: ""
  };

  return (
    <div className="w-full overflow-x-hidden" style={{backgroundColor: 'white'}}>
      
      
      <Nav />
      {/* <Cursor /> */}
      <div className="container mx-auto py-32 px-5 hidden lg:block">
        <div className="flex justify-evenly" style={{fontFamily: 'Magistral'}}>
          <div className="w-full ">
            <div className="">
              <h1 className="text-8xl leading-snug w-full">Simple Solutions For</h1>
            </div>
            <div className="flex flex-col justify-end w-4/5">
              <h1 className="text-8xl text-right">Complex</h1>
              <h1 className="text-8xl">Cases</h1>
            </div>
          </div>
          <div className="w-full flex justify-end">
          {/* ref={chainSvg} */}
          <ChainSvg /> 
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex justify-center items-center">
      <div className="container block lg:hidden px-5">
        
        <div className="flex justify-evenly">
          <div className="w-6/12 sm:pt-24" style={{fontFamily: 'Magistral'}}>
            <div className="">
              <h1 className="text-2xl sm:text-4xl leading-snug w-full sm:w-9/12">Simple Solutions For</h1>
            </div>
            <div className="flex flex-col justify-end w-full sm:w-9/12">
              <h1 className="text-2xl sm:text-4xl text-right">Complex</h1>
              <h1 className="text-2xl sm:text-4xl">Conundrum</h1>
            </div>
          </div>
          <div className="  w-6/12 flex justify-center items-center">
            <img className="" src={Home} alt="Home" />
          </div>
        </div>
        </div>
      </div>
      <We />
      
      <WeWork />
      
      <Team />
      <Projects />
      <ProjectSlider />
      <TeamSlider />
      <ProjectAccordion />
      
      <div className="container mx-auto py-20 hidden xl:block">
        <div className="">
          <h1 className="text-5xl text-center" style={{fontFamily: 'Magistral'}}>Холбоо барих</h1>
        </div>
        <div className="w-full py-10">
          <div className="flex w-full justify-center items-center">
            <div className="flex items-center justify-center flex-wrap w-3/4 space-x-5">
                <div className="flex flex-col">
                  <h1 className="text-xs font-bold" style={{fontFamily:'MagistralRegular'}}>Нэр</h1>
                  <input className=" w-72 py-4 outline-none border-b ml-3" placeholder="Нэр" style={{backgroundColor: '#f7f7f9'}} />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xs font-bold" style={{fontFamily:'MagistralRegular'}}>Цахим шуудан</h1>
                  <input className="  w-72 py-4 outline-none border-b ml-3" placeholder="Цахим шуудан" style={{backgroundColor: '#f7f7f9'}} />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xs font-bold" style={{fontFamily:'MagistralRegular'}}>Утас</h1>
                  <input className="  w-72 py-4 outline-none border-b" placeholder="Утас" style={{backgroundColor: '#f7f7f9'}} />
                </div>
                <div className="flex justify-center space-x-9 w-full">
                <div className="flex flex-col py-5">
                  <h1 className="text-xs font-bold" style={{fontFamily:'MagistralRegular'}}>Дэлгэрэнгүй</h1>
                  <textarea id="message" className="h-14 lg:w-132 sm:w-80 py-4 outline-none border-b ml-3" style={{backgroundColor: '#f7f7f9'}} placeholder="Бичих..."></textarea>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <AlertSuccess {...SuccessData}  />
                </div>
                </div>
            </div>
          </div>  
        </div>
      </div>
      {/* mobile */}
      <div className="container mx-auto py-20 block xl:hidden">
        <div className="">
          <h1 className=" text-4xl text-center" style={{fontFamily: 'Magistral'}}>Холбоо барих</h1>
        </div>
        <div className="flex flex-col justify-center items-center mx-12 py-10">
          <div className="w-full flex flex-col justify-center items-center">
             <div className="flex flex-col pb-3">
               <h1 className=" text-xs font-bold" style={{fontFamily:'MagistralRegular'}}>Нэр</h1>
               <input className=" w-72 pt-2 outline-none border-b" placeholder="Нэр" style={{backgroundColor: '#f7f7f9'}} />
             </div>
             <div className="flex flex-col pb-3">
               <h1 className="text-xs font-bold" style={{fontFamily:'MagistralRegular'}}>Цахим шуудан</h1>
               <input className=" w-72 pt-2 outline-none border-b" placeholder="Цахим шуудан" style={{backgroundColor: '#f7f7f9'}} />
             </div>
             <div className="flex flex-col pb-3">
               <h1 className="text-xs font-bold" style={{fontFamily:'MagistralRegular'}}>Утас</h1>
               <input className=" w-72 pt-2 outline-none border-b" placeholder="Утас" style={{backgroundColor: '#f7f7f9'}} />
             </div>
             <div className="flex flex-col justify-evenly space-x-6">
              <div className="flex flex-col">
                <h1 className="text-xs font-bold" style={{fontFamily:'MagistralRegular'}}>Дэлгэрэнгүй</h1>
                <textarea id="message" rows="4" className="w-72 pt-2 outline-none border-b" style={{backgroundColor: '#f7f7f9'}} placeholder="Бичих..."></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center py-5">
            <AlertSuccess {...SuccessData}  />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
  
}

function ChainSvg () {
  const chainSvg = useRef(null);
  let [svgTickFlag, setSvgTickFlag] = useState(true);
  
  useEffect(() => {
    if (chainSvg.current) {
      let svgChildren =  chainSvg.current.children;
      for (let i in svgChildren) {
        if (svgChildren[i].style) {
          if (svgTickFlag) {
            svgChildren[i].style = 'animation-iteration-count:unset'
          } else {
            svgChildren[i].style = 'animation-iteration-count:infinte'
          }
        }  
      }
      let timer;
      if (svgTickFlag) {
         timer = setTimeout(() => setSvgTickFlag(false), 3000)
      } else {
         timer = setTimeout(() => setSvgTickFlag(true), 950)
      }

      return () => clearTimeout(timer);
    }
  }, [svgTickFlag, chainSvg])
  
  return (
    <svg ref={chainSvg} width="559" height="608" viewBox="0 0 559 608" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M275.011 295.5C272.011 294.833 262.711 296.7 249.511 309.5C233.011 325.5 234.511 326 229.511 331C229.511 333 244.511 350.833 252.011 359.5C261.011 370.096 287.611 391.03 322.011 390C365.011 388.712 395.511 380.5 412.511 362C426.111 347.2 465.844 290.5 484.011 264C499.177 242 529.711 197.7 530.511 196.5C531.511 195 552.511 158 553.011 145.5C553.511 133 560.511 113.5 546.011 79C531.511 44.5 502.011 12.5 457.011 6C412.011 -0.5 376.511 8 345.511 44C320.711 72.8 262.844 159.333 237.011 199L220.011 235V237.939M220.011 237.939C207.194 246.573 197.269 256.047 192.511 261.5C164.511 301.833 104.611 388.3 89.0108 411.5C69.5108 440.5 52.0108 480.5 71.5108 528C87.1108 566 118.677 587.5 132.511 593.5C137.844 597.167 157.111 604.5 191.511 604.5C225.911 604.5 260.177 578.5 273.011 565.5L399.511 373C386.344 379.167 359.111 391.7 355.511 392.5C351.911 393.3 326.677 393.833 314.511 394C294.511 424.333 250.011 489.7 232.011 508.5C209.511 532 185.511 531 168.011 524.5C150.511 518 140.511 502 137.011 485C134.211 471.4 140.177 454 143.511 447C156.844 429.833 190.011 384.1 216.011 338.5C248.511 281.5 295.011 294.5 304.511 295.5C312.111 296.3 321.677 307.5 325.511 313C356.311 315.4 381.344 291.667 390.011 279.5C387.511 271.333 375.211 250.8 346.011 234C309.511 213 282.511 212 249.511 223C238.814 226.566 228.741 232.057 220.011 237.939Z" stroke="black" stroke-width="7" className={Style.svgelem1}></path>
      <path d="M302.512 217C305.712 213.4 355.512 140.833 380.012 105C387.512 94.3333 409.712 74.2 438.512 79C474.512 85 482.012 113.5 482.012 118.5C482.012 123.5 479.012 154.5 475.512 162C472.712 168 426.012 237.167 403.012 271L380.012 298.5L358.012 311C352.178 312.667 340.012 316.1 338.012 316.5C336.012 316.9 320.845 314.667 313.512 313.5C310.012 311.667 301.512 305.7 295.512 296.5" stroke="black" stroke-width="7" className={Style.svgelem2}></path>
      <circle cx="492" cy="333" r="10" fill="black" className={Style.svgelem3}></circle>
      <circle cx="261" cy="408" r="10" fill="#0085FF" className={Style.svgelem4}></circle>
      <circle cx="183" cy="94" r="10" fill="#6486FF" className={Style.svgelem5}></circle>
      <circle cx="10" cy="513" r="10" fill="black" className={Style.svgelem6}></circle>
      <circle cx="48" cy="408" r="4" fill="black" className={Style.svgelem7}></circle>
      <circle cx="337" cy="210" r="4" fill="black" className={Style.svgelem8}></circle>
      <circle cx="393" cy="252" r="4" fill="black" className={Style.svgelem9}></circle>
      <circle cx="224" cy="347" r="4" fill="black" className={Style.svgelem10}></circle>
      <circle cx="109" cy="313" r="4" fill="#00A3FF" className={Style.svgelem11}></circle>
      <circle cx="205" cy="478" r="4" fill="black" className={Style.svgelem12}></circle>
      <circle cx="415" cy="182" r="4" fill="#BDD0FF" className={Style.svgelem13}></circle>
      <circle cx="271" cy="84" r="4" fill="black" className={Style.svgelem14}></circle>
      <circle cx="354" cy="550" r="4" fill="black" className={Style.svgelem15}></circle>
      <circle cx="415" cy="386" r="4" fill="black" className={Style.svgelem16}></circle>
    </svg>
  )
}

export default App;