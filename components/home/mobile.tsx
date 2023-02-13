import styles from "@/styles/mobile.module.css";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import "@/components/util/language";
export default function Mobile() {
  const [t, i18n] = useTranslation();
  const textControl = useAnimationControls();
  const backControl = useAnimationControls();
  const backCoverControl = useAnimationControls();
  const y = useMotionValue(0);
  const mx = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const my = useMotionValue(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (last) => {
    if (last > 0) {
      textControl.start({ opacity: 0 });
    } else {
      textControl.start({ opacity: 1 });
    }
  });
  let current = 0;
  const bg_list = [
    "/static/img/bg_img_2.png",
    "/static/img/mobile_1.png",
    "/static/img/mobile_2.png",
    "/static/img/mobile_3.png",
    "/static/img/bg_img.png",
  ];
  useMotionValueEvent(y, "change", (last) => {
    mx.set(last / 2);
  });
  useMotionValueEvent(my, "change", (last) => {
    let nextPage = current;
    if (last > 0) nextPage = current + 1 > 4 ? 4 : current + 1;
    if (last < 0) nextPage = current - 1 < 0 ? 0 : current - 1;
    if (current != nextPage) {
      backCoverControl.start({
        backgroundColor: ["rgba(0,0,0,1)", "rgba(0,0,0,0.2)"],
        transition: { duration: 0.8 },
      });
      backControl.start({
        background: [`url('${bg_list[nextPage]}')`],
        backgroundRepeat: ["no-repeat"],
        backgroundSize: ["cover"],
      });
    }

    current = nextPage;
  });

  return (
    <>
      {/* <motion.div className="max-w-screen h-screen overflow-x-scroll top-0 -left-[400px] fixed">
        <motion.div
          className={`w-[1200px] h-screen`}
          style={{ x: mx }}
          initial={{
            background: "url('/static/img/bg_img_2.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          animate={backControl}
        />
      </motion.div> */}
      <div className="w-full h-screen bg-[url('/static/img/bg_img_2.png')] bg-cover bg-no-repeat bg-center fixed top-0 left-0" />
      <motion.div
        className="w-full h-fit scroll-smooth relative bg-[rgba(0,0,0,0.2)]"
        ref={ref}
        animate={backCoverControl}
      >
        <div className="w-full h-[100px] bg-gradient-to-t to-[rgba(0,0,0,0.9)] from-[rgba(0,0,0,0)] fixed top-0 z-10" />

        <motion.p
          className={`w-full h-fit fixed top-[60px] left-[24px] z-10 font-poppins text-[12px] leading-[18px] text-white`}
          animate={textControl}
        >
          Bringing your design to life with heart,
          <br />
          creating meaningful connections through code.
        </motion.p>
        <div className="mt-[229px]">
          <div
            className={`font-poppins_bold text-[48px] leading-[46px] text-white tracking-tighter  ml-24`}
          >
            <p>
              your ideas -<br />
              UX,UI design
            </p>
          </div>
          <div className="w-[164px] h-[164px] my-40 flex flex-col justify-end rotate-90 pb-30">
            <p className="font-poppins_bold text-base text-white">FDX</p>
            <p className="font-poppins text-base text-white">
              Front-end Development
              <br />
              Experience
            </p>
            <motion.div
              className="w-[164px] h-[10px] mt-13 rounded-md bg-gradient-to-r to-[rgba(51,51,255,1)] from-[rgba(51,51,255,0.25)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </div>

          <div>
            <p className="font-poppins_bold text-[48px] leading-[46px] text-white tracking-tighter ml-24">
              Interactive
              <br />
              web, app
            </p>
          </div>
        </div>

        <motion.div className="flex flex-col mt-[357px]">
          <div className="h-2/5 flex justify-end">
            <p className="font-poppins_bold text-4xl text-white mx-24 self-end">
              {t(`page_title_${1}`)}
            </p>
          </div>
          <div className="w-[72px] h-[1px] bg-white mt-32"></div>
          <div className="mx-24 mt-43">
            <p className="font-poppins_semi text-[18px] leading-[24px] text-white whitespace-pre">
              {t(`page_sub_title_${1}`)}
            </p>
          </div>
          <div className="mx-24 my-36">
            <p className="font-poppins text-[14px] leading-[24px] text-white">
              {t(`page_subject_${1}`)}
            </p>
          </div>
          <div className="mx-24">
            <p className="font-poppins text-[14px] leading-[24px] text-white">
              Our Philosophy - 0{1}
            </p>
          </div>
        </motion.div>
        <motion.div className="flex flex-col mt-[200px]" style={{ y }}>
          <div className="h-2/5 flex justify-end">
            <p className="font-poppins_bold text-4xl text-white mx-24 self-end">
              {t(`page_title_${2}`)}
            </p>
          </div>
          <div className="w-[72px] h-[1px] bg-white mt-32"></div>
          <div className="mx-24 mt-43">
            <p className="font-poppins_semi text-[18px] leading-[24px] text-white whitespace-pre">
              {t(`page_sub_title_${2}`)}
            </p>
          </div>
          <div className="mx-24 my-36">
            <p className="font-poppins text-[14px] leading-[24px] text-white">
              {t(`page_subject_${2}`)}
            </p>
          </div>
          <div className="mx-24">
            <p className="font-poppins text-[14px] leading-[24px] text-white">
              Our Philosophy - 0{2}
            </p>
          </div>
        </motion.div>
        <motion.div className="flex flex-col mt-[200px]" style={{ y }}>
          <div className="h-2/5 flex justify-end">
            <p className="font-poppins_bold text-4xl text-white mx-24 self-end">
              {t(`page_title_${3}`)}
            </p>
          </div>
          <div className="w-[72px] h-[1px] bg-white mt-32"></div>
          <div className="mx-24 mt-43">
            <p className="font-poppins_semi text-[18px] leading-[24px] text-white whitespace-pre">
              {t(`page_sub_title_${3}`)}
            </p>
          </div>
          <div className="mx-24 my-36">
            <p className="font-poppins text-[14px] leading-[24px] text-white">
              {t(`page_subject_${3}`)}
            </p>
          </div>
          <div className="mx-24">
            <p className="font-poppins text-[14px] leading-[24px] text-white">
              Our Philosophy - 0{3}
            </p>
          </div>
        </motion.div>
        <motion.div className="mt-[200px] mb-[60px]">
          <motion.div className="flex justify-center" style={{ y }}>
            <div className="self-center ml-24 mr-41 text-white">
              <p className="font-poppins_bold text-[40px] leading-[41px]">
                We are Front-end Development Professionals.
              </p>
              <p className="font-poppins text-[32px] leading-[36px] mt-40">
                Our service domain are
                <span className="font-poppins_bold italic">
                  Interactive Experience Design, Website & App Development, GUI
                  Design, AR-VR Contents Making.
                </span>
              </p>
              <p className="font-poppins text-[24px] leading-[30px] mt-40">
                Send project inquiries to
                <br />
                <span className="font-poppins_bold italic underline">
                  brian@zeat.me
                </span>
                <br />
                Our office is located in
                <br />
                <span className="font-poppins_bold italic">
                  Seoul, South Korea
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
        {/* <motion.div
          className="fixed w-full h-full z-10 left-0 top-0"
          drag="y"
          _dragY={y}
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={(e, i) => {
            pageChange(i.offset.y);
          }}
        /> */}
      </motion.div>
    </>
  );
}
