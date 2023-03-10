import { motion, useAnimationControls } from "framer-motion";
import "@/components/util/language";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import styles from "@/styles/main.module.css";
import { useFollowPointer } from "@/components/util/use-follow-pointer";

export default function Main({
  page,
  setPage,
}: {
  page: number;
  setPage(page: number): void;
}) {
  const [t, i18n] = useTranslation();
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [isInMain, setIsInMain] = useState(false);
  const textAppearance = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: [0, 1],
      y: [20, 0],
      transition: {
        delay: 0.5 + i * 0.4,
        duration: 0.5,
      },
    }),
  };
  const barAppearance = {
    opacity: 1,
    left: [0, 1104, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1, delay: 0.3 },
  };

  const textControl = useAnimationControls();
  const barControl = useAnimationControls();

  useEffect(() => {
    if (page) {
      barControl.start(barAppearance);
      textControl.start(textAppearance.visible);
    }
  }, [page]);

  return (
    <>
      <motion.div
        className={`${page == 0 ? styles.main_wrap : "hidden"}`}
        onHoverStart={() => setIsInMain(true)}
        onHoverEnd={() => setIsInMain(false)}
        ref={ref}
      >
        <div className={styles.landing_text}>
          <p>
            your ideas -<br />
            UX,UI design
          </p>
        </div>
        <div className="h-fit mx-70 mb-11 self-end">
          <p className="font-poppins_bold text-2xl">FDX</p>
          <p className="font-poppins text-base">
            Front-end Development
            <br />
            Experience
          </p>
          <motion.div
            className={styles.landing_bar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          />
        </div>
        <div className={styles.landing_text}>
          <p>
            Interactive
            <br />
            web, app
          </p>
        </div>
        <motion.div
          className={`absolute ${page == 0 ? "" : "hidden"}`}
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 100,
            stiffness: 1000,
            restDelta: 0.001,
          }}
          onClick={(e) => {
            if (isInMain) setPage(page + 1);
          }}
        >
          <motion.div
            className={`w-[58px] h-[58px] rounded-full bg-[rgba(51,51,255,0.6)] border border-[rgb(51,51,255)] pt-13 pl-16`}
            initial={{ opacity: 0 }}
            animate={isInMain ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img src="/static/svg/pointer.svg" alt="no img" />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className={`${page == 0 ? "hidden" : styles.main}`}>
        <div
          className={`${styles.main_title} ${
            page == 3 ? "justify-end -mr-[252px]" : ""
          }`}
        >
          <motion.p
            className={`self-end whitespace-pre`}
            initial={{ opacity: 0 }}
            animate={textControl}
            variants={textAppearance}
            custom={1}
          >
            {t(`page_title_${page}`)}
          </motion.p>
        </div>
        <div className={`w-full mt-40 relative`}>
          <motion.div
            className="bg-white w-[152px] h-0.5 rounded absolute"
            layout
            initial={{ opacity: 0 }}
            animate={barControl}
          />
        </div>
        <div className="font-poppins text-2xl text-white">
          <motion.p
            className={`flex-center mt-53 whitespace-pre ${
              page == 3 ? "ml-[109px]" : "ml-[160px]"
            }`}
            initial={{ opacity: 0 }}
            animate={textControl}
            variants={textAppearance}
            custom={1.5}
          >
            {t(`page_sub_title_${page}`)}
          </motion.p>
          <motion.p
            className={styles.main_subject}
            initial={{ opacity: 0 }}
            animate={textControl}
            variants={textAppearance}
            custom={2}
          >
            {t(`page_subject_${page}`)}
          </motion.p>
        </div>
      </div>
    </>
  );
}
