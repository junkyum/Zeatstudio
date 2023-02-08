import { motion } from "framer-motion";
import { useState } from "react";
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
  return (
    <>
      <motion.div
        className="w-full h-screen fixed top-0 left-0 z-30 bg-[#BDD3D6] text-white"
        initial="hidden"
        animate={`${popup ? "visible" : "hidden"}`}
        variants={menuDraw}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0,
        }}
      >
        <div className={` w-full h-full fixed top-0 left-0 z`} />
        <div
          className={`w-full h-screen pt-80 pl-100 pr-60 ${styles.background}`}
        >
          <div className="flex justify-between z-30">
            <p className="font-poppins_bold text-[72px] leading-[72px]">
              We are Front-end Development
              <br />
              Professionals.
            </p>
            <motion.div
              className="w-20 h-20 rounded-lg bg-white flex justify-center items-center cursor-pointer"
              onHoverStart={(e) => setMoreOpen(true)}
              onHoverEnd={(e) => setMoreOpen(false)}
              onClick={(e) => setPopup(false)}
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
          <p className="font-poppins text-[54px] leading-[64px] mt-46">
            Our service domain are <span>Interactive Experience Design,</span>
            <br />
            <span className="font-poppins_bold italic">
              Website & App Development, GUI Design,
            </span>
            <br />
            <span className="font-poppins_bold italic">
              AR-VR Contents Making.
            </span>
          </p>
          <p className="font-poppins text-[54px] leading-[64px] mt-46">
            Send project inquiries to 📩{" "}
            <span className="font-poppins_bold italic underline underline-offset-4">
              brian@zeat.me
            </span>{" "}
            <br />
            Our office is located in 🏢{" "}
            <span className="font-poppins_bold italic">Seoul, South Korea</span>
          </p>
        </div>
      </motion.div>
    </>
  );
}
