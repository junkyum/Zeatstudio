import styles from "@/styles/mobile.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@/components/util/language";

export default function Mobile() {
  const [t, i18n] = useTranslation();

  function Page({ id }: { id: number }) {
    return (
      <div className="h-screen flex flex-col snap-center">
        <div className="h-2/5 flex justify-end">
          <p className="font-poppins_bold text-4xl text-white mx-24 self-end">
            {t(`page_title_${id}`)}
          </p>
        </div>
        <div className="w-[72px] h-[1px] bg-white mt-32"></div>
        <div className="mx-24 mt-43">
          <p className="font-poppins_semi text-[18px] leading-[24px] text-white whitespace-pre">
            {t(`page_sub_title_${id}`)}
          </p>
        </div>
        <div className="mx-24 my-36">
          <p className="font-poppins text-[14px] leading-[24px] text-white">
            {t(`page_subject_${id}`)}
          </p>
        </div>
        <div className="mx-24">
          <p className="font-poppins text-[14px] leading-[24px] text-white">
            Our Philosophy - 0{id}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-h-screen overflow-y-scroll snap snap-y snap-mandatory bg-black bg-cover bg-no-repeat bg-center">
        <div className="w-full h-[100px] bg-gradient-to-t to-[rgba(0,0,0,0.9)] from-[rgba(0,0,0,0)] fixed top-0 z-10" />
        <div className="h-screen flex flex-col justify-center snap-center ">
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
            <p className="font-poppins_bold text-[48px] leading-[46px] text-white tracking-tighter ml-24">
              Interactive
              <br />
              web, app
            </p>
          </div>
        </div>
        {[1, 2, 3].map((page) => (
          <Page key={page} id={page} />
        ))}
      </div>
    </>
  );
}
