import WithHead from "@/components/layout/withHead";
import { useState, useEffect, useRef } from "react";
import { motion, spring, useAnimationControls } from "framer-motion";
import Main from "@/components/home/main";
import Popup from "@/components/home/popup";
import styles from "@/styles/index.module.css";
import Mobile from "@/components/home/mobile";

export default function Home() {
  const videos = [18, 19, 14];
  const sourceTag = useRef<HTMLVideoElement>(null);
  const [mobile, setMobile] = useState(false);
  const [page, setPage] = useState(0);
  const [popup, setPopup] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
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
  useEffect(() => {
    if (page) {
      progressControl.set({ width: 0 });
      progressControl.start({
        width: ["0px", "80px"],
        transition: {
          default: {
            duration: videos[page - 1],
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
      if (page < 3) {
        setTimeout(() => {
          setPage(page + 1);
        }, videos[page - 1] * 1000 - 1000);
      }
    }
  }, [page]);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 1280 ? true : false);
    };
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
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

  return (
    <div className={styles.body_wrap}>
      <WithHead prop={{ title: "Zeat studio" }} />
      <motion.div
        className={`${page == 0 && !mobile ? "" : "hidden"} ${
          styles.body_back_ground
        }`}
        animate={{
          width: ["30%", "40%", "100%"],
          height: ["0%", "100%", "100%"],
          left: ["35%", "30%", "0%"],
        }}
        transition={{
          duration: 1,
          type: "spring",
        }}
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
        width="100%"
        playsInline
        autoPlay
        loop
        muted
        src={videoSrc}
      />
      <div className={styles.top}>
        <div>
          <div className="mb-20">
            <img
              src={`/static/img/Logo.svg`}
              className="w-[159px] xl:w-[296px]"
              alt="Zeat"
            />
          </div>
          <div>
            <span className="font-poppins text-[12px] xl:text-base text-white">
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
          animate={{ opacity: 1, transition: { duration: 0.2, delay: 1.2 } }}
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
      <div className={styles.bottom_wrap}>
        <p className="text-base ml-71 mb-60 z-40">&copy; ZEAT Corp.</p>
        <p className={`${page == 0 ? "text-2xl mb-56 mr-[344px]" : "hidden"}`}>
          Front-end professional team
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
