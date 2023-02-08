import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import "@/components/util/language";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import styles from "@/styles/main.module.css";

export default function Main({
  page,
  setPage,
}: {
  page: number;
  setPage(page: number): void;
}) {
  const [t, i18n] = useTranslation();
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
    left: [0, 1104, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
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
      <div
        className={`${page == 0 ? styles.main_wrap : "hidden"}`}
        onClick={(e) => {
          setPage(page + 1);
        }}
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
            transition={{ delay: 0.5 }}
          />
        </div>
        <div className={styles.landing_text}>
          <p>
            Interactive
            <br />
            web, app
          </p>
        </div>
      </div>
      <div className={`${page == 0 ? "hidden" : styles.main}`}>
        <div
          className={`${styles.main_title} ${
            page == 3 ? "justify-end -mr-[252px]" : ""
          }`}
        >
          <motion.p
            className={`self-end whitespace-pre`}
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
            animate={barControl}
          />
        </div>
        <div className="font-poppins text-2xl text-white">
          <motion.p
            className={`flex-center mt-53 whitespace-pre ${
              page == 3 ? "ml-[109px]" : "ml-[160px]"
            }`}
            animate={textControl}
            variants={textAppearance}
            custom={1.5}
          >
            {t(`page_sub_title_${page}`)}
          </motion.p>
          <motion.p
            className={styles.main_subject}
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
