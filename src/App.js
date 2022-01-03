import React from "react";
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

function App(){

  const SuccessData = {
    title: "Амжилттай",
    type: "Амжилттай",
    text: "Таны захиа амжилттай илгээгдлээ",
    footer: ""
  };

  return (
    <div className="bg-white w-full overflow-x-hidden">
      <Nav />
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
            <img src={Home} alt="Home" />
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
      <div className="container mx-auto py-20 hidden sm:block">
        <div className="">
          <h1 className="text-5xl text-center" style={{fontFamily: 'Magistral'}}>Холбоо барих</h1>
        </div>
        <div className="flex flex-col justify-center items-center py-10">
          <div className="w-6/12 flex justify-evenly space-x-5">
             <div className="flex flex-col">
               <h1 className="text-xs font-bold">Нэр</h1>
               <input className="w-44 py-4 outline-none border-b" placeholder="Нэр" />
             </div>
             <div className="flex flex-col">
               <h1 className="text-xs font-bold">Цахим шуудан</h1>
               <input className=" w-44 py-4 outline-none border-b" placeholder="Цахим шуудан" />
             </div>
             <div className="flex flex-col">
               <h1 className="text-xs font-bold">Утас</h1>
               <input className=" w-44 py-4 outline-none border-b" placeholder="Утас" />
             </div>
          </div>
          <div className="w-6/12 py-5">
            <div className="flex justify-evenly lg:space-x-14 xl:space-x-12 sm:space-x-20">
              <div className="flex flex-col">
                <h1 className="text-xs font-bold">Дэлгэрэнгүй</h1>
                <textarea id="message" className="h-14 lg:w-96 sm:w-80 py-4 outline-none border-b" placeholder="Бичих..."></textarea>
              </div>
              
              <div className="flex flex-col items-center justify-center">
              <AlertSuccess {...SuccessData}  />
             </div>
             
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="container mx-auto py-20 block sm:hidden">
        <div className="">
          <h1 className=" text-4xl text-center">Холбоо барих</h1>
        </div>
        <div className="flex flex-col justify-start items-start mx-12 py-10">
          <div className="w-6/12 flex flex-col justify-start">
             <div className="flex flex-col pb-3">
               <h1 className=" text-xs font-bold">Нэр</h1>
               <input className=" w-72 pt-2 outline-none border-b" placeholder="Нэр" />
             </div>
             <div className="flex flex-col pb-3">
               <h1 className="text-xs font-bold">Цахим шуудан</h1>
               <input className=" w-72 pt-2 outline-none border-b" placeholder="Цахим шуудан" />
             </div>
             <div className="flex flex-col pb-3">
               <h1 className="text-xs font-bold">Утас</h1>
               <input className=" w-72 pt-2 outline-none border-b" placeholder="Утас" />
             </div>
             <div className="flex flex-col justify-evenly space-x-6">
              <div className="flex flex-col">
                <h1 className="text-xs font-bold">Дэлгэрэнгүй</h1>
                <textarea id="message" rows="4" className="w-72 pt-2 outline-none border-b" placeholder="Бичих..."></textarea>
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

export default App;