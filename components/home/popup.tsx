import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "@/styles/popup.module.css";

export default function Popup({
  popup,
  setPopup,
}: {
  popup: boolean;
  setPopup(page: boolean): void;
}) {
  const pathDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 0.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  };
  const menuDraw = {
    hidden: { y: "100%" },
    visible: { y: "0%" },
  };
  const [moreOpen, setMoreOpen] = useState(false);
  const textAppearance = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: [0, 1],
      y: [20, 0],
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
  };
  const textControl = useAnimationControls();
  const btnControl = useAnimationControls();
  useEffect(() => {
    if (popup) {
      textControl.set(textAppearance.hidden);
      textControl.start(textAppearance.visible);
      btnControl.start({
        height: [0, 80],
        y: [80, 0],
        transition: { type: "spring", delay: 1, duration: 1 },
      });
    }
  }, [popup]);
  return (
    <>
      <motion.div
        className={styles.popup_wrap}
        initial="hidden"
        animate={`${popup ? "visible" : "hidden"}`}
        variants={menuDraw}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0,
        }}
      >
        <div className={styles.popup_back}>
          <div className={styles.popup_cover}>
            <div className="flex justify-between z-30 ">
              <motion.p
                className="font-poppins_bold text-[72px] leading-[72px]"
                initial={"hidden"}
                animate={textControl}
                variants={textAppearance}
                custom={1}
              >
                We are Front-end Development
                <br />
                Professionals.
              </motion.p>
              <motion.div
                className={styles.popup_close_btn}
                onHoverStart={(e) => setMoreOpen(true)}
                onHoverEnd={(e) => setMoreOpen(false)}
                onClick={(e) => setPopup(false)}
                animate={btnControl}
              >
                <motion.svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  animate={`${moreOpen ? "visible" : "hidden"}`}
                >
                  <motion.line
                    x1="0"
                    y1="0"
                    x2="32"
                    y2="32"
                    stroke="#000000"
                    strokeWidth={2}
                    variants={pathDraw}
                  />
                  <motion.line
                    x1="0"
                    y1="32"
                    x2="32"
                    y2="0"
                    strokeWidth={2}
                    stroke="#000000"
                    variants={pathDraw}
                  />
                </motion.svg>
              </motion.div>
            </div>
            <motion.p
              className="font-poppins text-[54px] leading-[64px] mt-46"
              initial={"hidden"}
              animate={textControl}
              variants={textAppearance}
              custom={1.5}
            >
              Our service domain are <span>Interactive Experience Design,</span>
              <br />
              <span className="font-poppins_bold italic">
                Website & App Development, GUI Design,
              </span>
              <br />
              <span className="font-poppins_bold italic">
                AR-VR Contents Making.
              </span>
            </motion.p>
            <motion.p
              className="font-poppins text-[54px] leading-[64px] mt-46"
              initial={"hidden"}
              animate={textControl}
              variants={textAppearance}
              custom={2}
            >
              Send project inquiries to 📩{" "}
              <span className={styles.email}>brian@zeat.me</span> <br />
              Our office is located in 🏢{" "}
              <span className="font-poppins_bold italic">
                Seoul, South Korea
              </span>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
