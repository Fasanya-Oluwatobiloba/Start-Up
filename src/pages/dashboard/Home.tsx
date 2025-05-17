import { Link } from "react-router";
import { useAuth } from "../../stores/Context.js";
import { useEffect, useState, ChangeEvent } from "react";
import airplane from "../../assets/airplane.jpg";
import NavBar from "../../components/NavBar/NavBar.js";
import Slide from "../../components/Slide/Slide.js";
import TypingDeletingText from "../../components/TypingDeletingText.js";
import Disclosures from "../../components/Disclosures/Disclosures.js";
import Items from "../../components/Items.js";
import Updates from "../../data/Updates.js";
import HomeItems from "../../data/HomeData.js";
import Footer from "../../components/Footer/Footer.js";
import LilNav from "../../components/LilNav.js";


const HomePage = () => {
  const {
    name,
    department,
    faculty,
    level,
    setName,
    setDepartment,
    setFaculty,
    setLevel,
  } = useAuth();

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedDepartment = localStorage.getItem("userDepartment");
    const storedFaculty = localStorage.getItem("userFaculty");
    const storedLevel = localStorage.getItem("userLevel");
    const storedImage = localStorage.getItem("userImage");

    if (storedName) setName(storedName);
    if (storedDepartment) setDepartment(storedDepartment);
    if (storedFaculty) setFaculty(storedFaculty);
    if (storedLevel) setLevel(storedLevel);
    if (storedImage) setProfileImage(storedImage);
  }, [setName, setDepartment, setFaculty, setLevel]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setProfileImage(reader.result);
          localStorage.setItem("userImage", reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };



  return (
    <div className="flex w-full gridBackground text-[#121212] dark:text-[#ffffff] h-dvh gap-1 bg-[#bbb3d8] dark:bg-[#121212]">
      {/* Navbar */}
      <NavBar />
      <div className="flex-grow overflow-y-scroll overflow-x-hidden">
        {/*Search bar*/}
        <Slide />
          <div className="flex z-10 items-center gap-4 justify-around flex-wrap">
            <LilNav />
          </div>
            <div className="w-full h-auto flex justify-center items-center">
              <div
                className="w-[500px] h-[200px] relative top-[00px] blur-3xl  bg-[#3f3355]"
              ></div>
            </div>
           <div className="flex z-10 w-auto h-auto flex-wrap gap-5 justify-center items-center">
            {
            Updates.map((data)=>(
              <Disclosures 
                key={data.id}
                {...data}
              />
            ))
            }
            <div 
              className="w-[300px] h-[100px] top-[500px] blur-3xl  bg-violet-800"
            ></div>
           </div>
            <div className="w-full z-10 h-auto p-5 flex flex-wrap items-start justify-center md:justify-start gap-3 ">
          <div className="w-full z-10 text-center p-3 mt-14 rounded-full glass my-10 raleway bg-[#1f1e20] ">
            <h1 className="fluid archivo-black-regular text-bold text-4xl">MARKETPLACE</h1>
          </div>
            {
              HomeItems.map((data)=>(
              <Items
                key={data.id}
                {...data}
              />
            ))
            }
          </div>
          <div className="w-full h-16 my-3 transparent flex justify-end items-center">
            <button className="glass hover:bg-violet-800 px-5 py-3 rounded-lg mx-7 transition-all duration-300 hover:mx-5 hover:px-7 hover:py-5 dark:text-white text-black raleway">See More</button>
          </div>
        {/* Main Content */}
            <Footer />
      </div>
    </div>
  );
};

export default HomePage;
