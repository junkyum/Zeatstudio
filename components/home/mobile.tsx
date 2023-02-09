import styles from "@/styles/mobile.module.css";
import { motion } from "framer-motion";

export default function Mobile() {
  return (
    <>
      <div className="w-full h-screen bg-black bg-cover bg-no-repeat bg-center">
        <div className="h-full flex flex-col justify-center">
          <div
            className={`font-poppins_bold text-[48px] leading-[46px] text-white tracking-tighter ml-24`}
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
            <p className="font-poppins_bold text-[48px] leading-[46px] text-white tracking-tighter  ml-24">
              Interactive
              <br />
              web, app
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
