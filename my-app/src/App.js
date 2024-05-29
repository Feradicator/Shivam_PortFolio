import logo from './logo.svg';

import  NavBar  from "./Components/NavBar/NavBar";
import Hero from './Components/Hero';
import About from './Components/About/About';
import Technologies from './Components/Technologies/Technologies';

import TimeLine1 from './Components/TimeLine1/TimeLine1';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import GetInTouchCard from './Components/GetInTouch/GetInTouchCard';


function App() {
  return (
    
    <div className='overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900'  >
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
      rgba(255,255,255,0))]"></div>
     
     
      </div>
      <div className='container mx-auto px-8'>
        
      <NavBar />
      <div className="pt-32 md:pt-80">
      <Hero/>
        <About/>
        <TimeLine1 />
        <Project/>
        <Technologies/>
        
        <GetInTouchCard/>
     
      </div>
     
      </div>
     
     
    </div>
  );
}

export default App;
