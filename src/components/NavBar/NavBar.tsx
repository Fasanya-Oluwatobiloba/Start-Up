import { useState } from "react";
import "./NavBar.css"
import Themes from "../Themes";
const NavBar = () => {
    const [nav, setNav] = useState(true)
    const toggle=()=>{
        setNav(!nav)
    }
  return (
    <div className="transition-all duration-150 z-50 bg-[#dbd8f0] dark:bg-[#121212]">
    <nav id="nav-bar" className={`raleway ${nav ? "w-20" : "w-auto " } bg-[#dbd8f0] dark:bg-[#121212]`} aria-label="Main navigation">
    <input id="nav-toggle" type="checkbox" aria-label="Toggle navigation"/>
    
    {nav ? 
    <div onClick={toggle} className="w-full h-16 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-[#aeaeaf] text-[#2c3e50]" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/></svg>
    </div>
        :
    <div id="nav-header" className="bg-[#dbd8f0] dark:bg-[#121212]">
        <a id="nav-title" className="merriweather"> startUp
        </a>
        <label onClick={toggle} htmlFor="nav-toggle" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/></svg>
        </label>
        <hr className="dark:bg-[#dbd8f0] bg-[#121212]"/>
    </div>}
    
    <div id="nav-content" className="bg-[#dbd8f0] dark:bg-[#121212]">
        <div className="nav-button dark:text-[#d0d0d1] text-[#2c3e50]">
            {nav ? <><svg xmlns="http://www.w3.org/2000/svg" className="m-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></> :  <> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" className="ml-4" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg> <span>Home</span></> }
        </div>
        <div className="nav-button dark:text-[#dadadb] text-[#2c3e50]">
            {nav ? <><svg xmlns="http://www.w3.org/2000/svg" className="m-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg></>:<><svg xmlns="http://www.w3.org/2000/svg" className="ml-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg><span>Courses</span></>}
        </div>
        <div className="nav-button dark:text-[#aeaeaf] text-[#2c3e50]">
            {nav? <svg xmlns="http://www.w3.org/2000/svg" className="m-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-360q17 0 29.5-12.5T602-402q0-17-12.5-29.5T560-444q-17 0-29.5 12.5T518-402q0 17 12.5 29.5T560-360Zm-30-128h60q0-29 6-42.5t28-35.5q30-30 40-48.5t10-43.5q0-45-31.5-73.5T560-760q-41 0-71.5 23T446-676l54 22q9-25 24.5-37.5T560-704q24 0 39 13.5t15 36.5q0 14-8 26.5T578-596q-33 29-40.5 45.5T530-488ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg> : <><svg xmlns="http://www.w3.org/2000/svg" className="ml-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-360q17 0 29.5-12.5T602-402q0-17-12.5-29.5T560-444q-17 0-29.5 12.5T518-402q0 17 12.5 29.5T560-360Zm-30-128h60q0-29 6-42.5t28-35.5q30-30 40-48.5t10-43.5q0-45-31.5-73.5T560-760q-41 0-71.5 23T446-676l54 22q9-25 24.5-37.5T560-704q24 0 39 13.5t15 36.5q0 14-8 26.5T578-596q-33 29-40.5 45.5T530-488ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg><span>CBT</span></>}
        </div>
        <hr className="dark:bg-[#dbd8f0] bg-[#121212]"/>
        
        <div className="nav-button dark:text-[#aeaeaf] text-[#2c3e50]">
            {nav ? <svg xmlns="http://www.w3.org/2000/svg" className="m-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>:<><svg xmlns="http://www.w3.org/2000/svg" className="ml-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg><span>UPDATES</span></>}
        </div>
        <div className="nav-button dark:text-[#aeaeaf] text-[#2c3e50]">
            {nav? <svg xmlns="http://www.w3.org/2000/svg" className="m-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg> :<><svg xmlns="http://www.w3.org/2000/svg" height="24px" className="ml-4" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg><span>MATKET PLACE</span></>}
        </div>
        <div className="nav-button dark:text-[#aeaeaf] text-[#2c3e50]">
            {nav ? <svg xmlns="http://www.w3.org/2000/svg" className="m-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg> :<><svg xmlns="http://www.w3.org/2000/svg" height="24px" className="ml-4" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg><span>MEET</span></>}
        </div>
        <div className="nav-button dark:text-[#aeaeaf] text-[#2c3e50]">
            {nav? <svg xmlns="http://www.w3.org/2000/svg" className="m-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35v-80q0-33 23.5-56.5T240-760h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-680v80q50 0 85 35t35 85q0 50-35 85t-85 35v160q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200v-160Zm200-80q25 0 42.5-17.5T420-500q0-25-17.5-42.5T360-560q-25 0-42.5 17.5T300-500q0 25 17.5 42.5T360-440Zm240 0q25 0 42.5-17.5T660-500q0-25-17.5-42.5T600-560q-25 0-42.5 17.5T540-500q0 25 17.5 42.5T600-440ZM320-280h320v-80H320v80Zm-80 80h480v-480H240v480Zm240-240Z"/></svg>:<><svg xmlns="http://www.w3.org/2000/svg" className="ml-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35v-80q0-33 23.5-56.5T240-760h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-680v80q50 0 85 35t35 85q0 50-35 85t-85 35v160q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200v-160Zm200-80q25 0 42.5-17.5T420-500q0-25-17.5-42.5T360-560q-25 0-42.5 17.5T300-500q0 25 17.5 42.5T360-440Zm240 0q25 0 42.5-17.5T660-500q0-25-17.5-42.5T600-560q-25 0-42.5 17.5T540-500q0 25 17.5 42.5T600-440ZM320-280h320v-80H320v80Zm-80 80h480v-480H240v480Zm240-240Z"/></svg><span>ASK AI</span></>}
        </div>
        <hr className="dark:bg-[#dbd8f0] bg-[#121212]"/>
        
        <div className="nav-button dark:text-[#aeaeaf] text-[#2c3e50]">
            {nav? <svg xmlns="http://www.w3.org/2000/svg" className="m-4" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>:<><svg xmlns="http://www.w3.org/2000/svg" height="24px" className="ml-4" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg><span>SETTINGS</span></>}
        </div>
        
        <div id="nav-content-highlight" className="glass"></div>
    </div>
    
    <input id="nav-footer-toggle" type="checkbox" aria-label="Toggle footer content"/>
    <div id="nav-footer" className={`raleway ${nav ? "w-[]" : "w-[256px]" } bg-[#534e57] dark:bg-[#2f2b35]`}>
        {nav ? 
        <><div className="w-3 h-3 rounded-full bg-lime-600 absolute left-10 z-50 top-3 text-white font-bold transition-all duration-300 hover:bg-green-600 shadow-lg hover:shadow-green-400/50 border-2 border-green-400 neon-button-glow"></div>
            <div id="nav-footer-avatar">
                <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="User avatar"/>
            </div> </>:<div id="nav-footer-heading">
            <div className="w-3 h-3 rounded-full bg-lime-600 absolute left-10 z-50 top-3 text-white font-bold transition-all duration-300 hover:bg-green-600 shadow-lg hover:shadow-green-400/50 border-2 border-green-400 neon-button-glow"></div>
            <div id="nav-footer-avatar">
                <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="User avatar"/>
            </div>
            <div id="nav-footer-titlebox">
                <a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank">Anuga</a>
                <span id="nav-footer-subtitle">Admin_001</span>
            </div>
            <label htmlFor="nav-footer-toggle" aria-label="Toggle footer">
                <Themes />
            </label>
        </div>}
    </div>
</nav>
    </div>
  );
}

export default NavBar;
