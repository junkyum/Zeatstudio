import WithHead from "@/components/layout/withHead";
import { useState, useEffect, useRef } from "react";
import { motion, spring, useAnimationControls } from "framer-motion";
import Main from "@/components/home/main";
import Popup from "@/components/home/popup";
import styles from "@/styles/index.module.css";
import Mobile from "@/components/home/mobile";

export default function Home() {
  const videos = [17000, 19000, 14000];
  const sourceTag = useRef<HTMLVideoElement>(null);
  const [mobile, setMobile] = useState(false);
  const [page, setPage] = useState(0);
  const [popup, setPopup] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const introControl = useAnimationControls();
  const introAni = {
    width: ["30%", "40%", "100%"],
    height: ["0%", "100%", "100%"],
    left: ["35%", "30%", "0%"],
    transition: {
      duration: 1,
      type: "spring",
    },
  };
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
  const progressControl = useAnimationControls();
  const pageIndicatorControl = useAnimationControls();
  const videoControl = useAnimationControls();
  const lBtnControl = useAnimationControls();
  const rBtnControl = useAnimationControls();
  const refTimer = useRef<number | null>(null);
  useEffect(() => {
    if (page) {
      progressControl.set({ width: 0 });
      progressControl.start({
        width: ["0px", "80px"],
        transition: {
          default: {
            duration: videos[page - 1] / 1000,
          },
          scale: {
            type: "spring",
          },
        },
      });
      pageIndicatorControl.start({
        opacity: [0, 1],
        marginLeft: [5, 0],
        transition: { duration: 0.5 },
      });
      videoControl.start({ opacity: [1, 0.2], transition: { delay: 0.5 } });
      setVideoSrc(`/static/video/${page}.mp4`);
      if (refTimer.current !== null) window.clearTimeout(refTimer.current);
      refTimer.current = window.setTimeout(() => {
        let next = page + 1 > 3 ? 1 : page + 1;
        setPage(next);
      }, videos[page - 1] - 1000);
    }
  }, [page]);

  useEffect(() => {
    introControl.start(introAni);
    const updateMobile = () => {
      setMobile(window.innerWidth < 1280 ? true : false);
    };
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
      if (refTimer.current !== null) {
        window.clearTimeout(refTimer.current);
      }
    };
  }, []);

  const MainPage = () => {
    return typeof mobile !== "undefined" ? (
      mobile ? (
        <Mobile />
      ) : (
        <Main page={page} setPage={setPage} />
      )
    ) : null;
  };
  function intro() {
    setPage(0);
    introControl.start(introAni);
    if (refTimer.current !== null) window.clearTimeout(refTimer.current);
  }

  return (
    <div className={styles.body_wrap}>
      <WithHead prop={{ title: "Zeat studio" }} />
      <motion.div
        className={`${page == 0 && !mobile ? "" : "hidden"} ${
          styles.body_back_ground
        }`}
        animate={introControl}
      />
      <motion.div
        className={`${page != 0 && !mobile ? "" : "hidden"} ${
          styles.body_back_ground_cover
        }`}
        animate={videoControl}
      />
      <video
        ref={sourceTag}
        className={`${page != 0 && !mobile ? "" : "hidden"} ${
          styles.back_video
        }`}
        playsInline
        autoPlay
        loop
        muted
        src={videoSrc}
      />
      <div className={styles.top}>
        <div>
          <div className="mb-20" onClick={intro}>
            <img
              src={`/static/img/Logo.svg`}
              className="w-[159px] xl:w-[296px] cursor-pointer"
              alt="Zeat"
            />
          </div>
          <div>
            <span
              className={`font-poppins text-[12px] xl:text-base text-white ${
                mobile && "hidden"
              } `}
            >
              Bringing your design to life with heart,
              <br /> creating meaningful connections through code
            </span>
          </div>
        </div>

        <motion.div
          className={styles.top_btn}
          whileHover={{ width: mobile ? 28 : 495 }}
          transition={{ type: "linear" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.8 } }}
          onHoverStart={(e) => {
            if (!mobile) popUpBtnControl.start(popUpBtn.show);
          }}
          onHoverEnd={(e) => {
            popUpBtnControl.start(popUpBtn.hide);
          }}
          onClick={() => {
            setPopup(!mobile);
          }}
        >
          <motion.span
            className={styles.top_btn_text}
            initial="hide"
            animate={mobile ? "" : popUpBtnControl}
            variants={popUpBtn}
          >
            Studio Infomation & Contact Details
          </motion.span>
        </motion.div>
      </div>
      <MainPage />
      <div
        className={`fixed w-full h-3/6 top-1/4 left-0 flex justify-between z-40 ${
          page == 0 ? "hidden" : ""
        }`}
      >
        <motion.div
          className="w-2/6 h-full opacity-0 "
          whileHover={{ opacity: 1 }}
          onHoverStart={() =>
            lBtnControl.start({
              left: [100, 70],
              transition: { duration: 0.8 },
            })
          }
        >
          <motion.div
            className={`w-[58px] h-[58px] rounded-full bg-[rgba(51,51,255,0.6)] cursor-pointer border border-[rgb(51,51,255)] pt-18 px-16 fixed top-1/2 left-[70px]`}
            onClick={() => {
              setPage(page - 1 < 1 ? 3 : page - 1);
            }}
            animate={lBtnControl}
          >
            <img src="/static/svg/arrow.svg" alt="no img" />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-2/6 h-full opacity-0"
          whileHover={{ opacity: 1 }}
          onHoverStart={() =>
            rBtnControl.start({
              right: [100, 70],
              transition: { duration: 0.8 },
            })
          }
        >
          <motion.div
            className={`w-[58px] h-[58px] rounded-full bg-[rgba(51,51,255,0.6)] cursor-pointer border border-[rgb(51,51,255)] pt-18 px-16 fixed top-1/2 right-[70px]`}
            onClick={() => {
              setPage(page + 1 > 4 ? 1 : page + 1);
            }}
            animate={rBtnControl}
          >
            <img
              src="/static/svg/arrow.svg"
              className="rotate-180"
              alt="no img"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.bottom_wrap}>
        <p className="text-base ml-71 mb-60 z-40">&copy; ZEAT Corp.</p>
        <p className={`${page == 0 ? "text-2xl mb-56 mr-60" : "hidden"}`}>
          We are a front-end professional team.
        </p>
        <div className={`${page == 0 ? "hidden" : styles.bottom_page_info}`}>
          <div>
            <span>Our Philosophy - </span>
            <motion.span className="w-[40px]" animate={pageIndicatorControl}>
              0{page}
            </motion.span>
          </div>
          <div className={styles.bottom_page_indicator}>
            <motion.div
              className="bg-[#3333FF] w-0 h-0.5 rounded-sm"
              layout
              animate={progressControl}
            />
          </div>
        </div>
      </div>
      <Popup popup={popup} setPopup={setPopup} />
    </div>
  );
}
