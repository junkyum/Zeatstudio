import WithHead from "@/components/layout/withHead";
import { useState, useEffect } from "react";
import { motion, spring, useAnimationControls } from "framer-motion";
import Main from "@/components/home/main";
import Popup from "@/components/home/popup";
import styles from "@/styles/main.module.css";

export default function Home() {
  const [page, setPage] = useState(2);
  const [popup, setPopup] = useState(false);
  const popUpBtn = {
    show: {
      opacity: 1,
      display: "block",
      transition: {
        delay: 0.2,
      },
    },
    hide: {
      opacity: 0,
      display: "none",
    },
  };
  const popUpBtnControl = useAnimationControls();
  return (
    <div className={`w-full h-full p-0 bg-white flex justify-center`}>
      <WithHead prop={{ title: "Zeat studio" }} />
      <motion.div
        className={`${page == 0 ? "" : "hidden"} fixed bottom-0 ${
          styles.background
        } z-0`}
        animate={{
          width: ["30%", "40%", "100%"],
          height: ["0%", "100%", "100%"],
          left: ["35%", "30%", "0%"],
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`${
          page != 0 ? "" : "hidden"
        } w-full h-full fixed top-0 left-0 z-10 bg-black`}
        animate={{ opacity: [1, 0.2], transition: { delay: 0.5 } }}
      />
      <video
        className={`z-0 fixed top-0 left-0 ${page != 0 ? "" : "hidden"}`}
        width="100%"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src={`/static/video/${page}.mp4`} type="video/mp4" />
      </video>
      <div className="pt-60 pl-70 pr-60 bg-transparent flex justify-between fixed top-0 left-0 w-full z-30">
        <div>
          <div className="mb-20">
            <img src={`/static/img/Logo.svg`} width="296.57px" alt="Zeat" />
          </div>
          <div>
            <span className="font-poppins text-base text-white">
              Bringing your design to life with heart,
              <br /> creating meaningful connections through code
            </span>
          </div>
        </div>

        <motion.div
          className="w-20 h-20 rounded-lg flex justify-center cursor-pointer bg-[#3333FF] "
          whileHover={{ width: 495 }}
          transition={{ type: "linear" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2, delay: 1.2 } }}
          onHoverStart={(e) => {
            popUpBtnControl.start(popUpBtn.show);
          }}
          onHoverEnd={(e) => {
            popUpBtnControl.start(popUpBtn.hide);
          }}
          onClick={(e) => {
            setPopup(true);
          }}
        >
          <motion.span
            className="h-8 self-center font-poppins_semi text-2xl text-white"
            initial="hide"
            animate={popUpBtnControl}
            variants={popUpBtn}
          >
            Studio Infomation & Contact Details
          </motion.span>
        </motion.div>
      </div>

      <Main page={page} setPage={setPage} />

      <div className="font-poppins text-white flex justify-between absolute inset-x-0 bottom-0 z-10">
        <p className="text-base ml-71 mb-60">© ZEAT Corp.</p>
        <p className={`text-2xl mb-56 mr-[344px] ${page == 0 ? "" : "hidden"}`}>
          Front-end professional team
        </p>
        <div
          className={`flex justify-between w-[430px] mb-56 mr-60 ${
            page == 0 ? "hidden" : ""
          }`}
        >
          <p>Our Philosophy - 0{page}</p>
          <div
            className={`bg-white flex w-[80px] h-0.5 rounded-sm ${
              page == 1
                ? "justify-start"
                : page == 2
                ? "justify-center"
                : "justify-end"
            }`}
          >
            <motion.div
              className="bg-[#3333FF] w-[32px] h-0.5 rounded-sm"
              layout
              transition={{
                type: spring,
                stiffiness: 700,
                damping: 30,
                duration: 0.6,
              }}
            />
          </div>
        </div>
      </div>
      <Popup popup={popup} setPopup={setPopup} />
    </div>
  );
}
