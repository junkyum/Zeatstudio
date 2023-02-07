import {
  motion,
  animationControls,
  useAnimation,
  useAnimationControls,
} from "framer-motion";

export default function Main({
  page,
  setPage,
}: {
  page: number;
  setPage(page: number): void;
}) {
  const textAppearance = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
  };
  const textControl = useAnimationControls();
  return (
    <>
      <div
        className={`self-center text-white flex justify-between z-20 ${
          page == 0 ? "" : "hidden"
        }`}
      >
        <div className="font-poppins_bold text-[86px] leading-[82px] tracking-[-.06em] self-center">
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
            className="w-[325px] h-[20px] mt-13 rounded-lg bg-gradient-to-r to-indigo-400 from-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </div>
        <div className="font-poppins_bold text-[86px] leading-[82px] tracking-[-.06em] self-center shrink">
          <p>
            Interactive
            <br />
            web, app
          </p>
        </div>
      </div>
      <div
        className={`w-[1256px] h-screen self-center flex flex-col  z-20 ${
          page == 0 ? "hidden" : ""
        }`}
      >
        <div
          className={`ml-[106px] h-3/6 flex items-stretch font-poppins_bold text-[72px] leading-[62px] text-white  ${
            page == 3 ? "justify-end -mr-[252px]" : ""
          }`}
        >
          <motion.p
            className={`self-end ${page == 1 ? "visible" : "hidden"}`}
            initial="hidden"
          >
            We create a never-ending
            <br />
            new waves of interactive.
          </motion.p>
          <motion.p className={`self-end ${page == 2 ? "visible" : "hidden"}`}>
            Create design harmony
            <br />
            between objects with code.
          </motion.p>
          <motion.p className={`self-end ${page == 3 ? "visible" : "hidden"}`}>
            We will move forward
            <br />
            together as your reliable
            <br />
            development partner.
          </motion.p>
        </div>
        <div className={`w-full mt-40 flex`}>
          <motion.div
            className="bg-white w-[152px] h-0.5 rounded"
            layout
            transition={{}}
          />
        </div>
        <div className="font-poppins text-2xl text-white">
          <p
            className={` flex-center mt-53 ml-[160px] ${
              page == 1 ? "visible" : "hidden"
            }`}
          >
            Never stop
            <br />
            for creation.
          </p>
          <p
            className={`flex-center mt-53 ml-[160px] ${
              page == 2 ? "visible" : "hidden"
            }`}
          >
            Rhythmic
            <br />
            Objects Harmony
          </p>
          <p
            className={`flex-center mt-53 ml-[109px] ${
              page == 3 ? "visible" : "hidden"
            }`}
          >
            Hope to be
            <br />
            your partner
          </p>
          <p
            className={`text-base flex-center mt-40 ml-[109px] ${
              page == 1 ? "visible" : "hidden"
            }`}
          >
            We are a team of front-end developers fueled by passion and driven
            by the desire to create beautiful
            <br />
            and functional digital experiences.
            <br />
            Our love for technology and design come together to bring your
            vision to life, making your digital
            <br />
            dreams a reality.
          </p>
          <p
            className={`text-base flex-center mt-40 ml-[109px] ${
              page == 2 ? "visible" : "hidden"
            }`}
          >
            With each project we undertake, we strive to not just meet but
            exceed your expectations.
            <br />
            We believe that a website or app is more than just code and pixels;
            it&apos;s a reflection of who you are,
            <br />
            what you stand for, and the emotions you want to evoke in your
            audience.
          </p>
          <p
            className={`text-base flex-center mt-40 ml-[109px] ${
              page == 3 ? "visible" : "hidden"
            }`}
          >
            We pour our hearts into every line of code, every pixel, and every
            interaction, because we want your
            <br />
            users to feel a connection to your brand, to feel understood, and to
            have a sense of joy every time
            <br />
            they interact with your website or app.
            <br />
            <br />
            Join us on this exciting journey, and let&apos;s create something
            truly amazing together.
          </p>
        </div>
      </div>
    </>
  );
}
