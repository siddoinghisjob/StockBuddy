import Image from "next/image";
import { Roboto } from "next/font/google";
import { m, LazyMotion, domAnimation, spring } from "framer-motion";

const font = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Card({ src, data, count }) {
  const squareVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: count * 1 },
    },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={squareVariants}
        whileHover={{ scale: 1.3 }}
        transition={{ type: spring }}
        className="p-6 text-xl max-w-[20rem] min-h-[20rem] px-10 flex shadow-fourSideShadow flex-col gap-5 items-center justify-between rounded-3xl bg-white w-fit"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <Image
            src={src}
            width="0"
            height="0"
            sizes="100vw"
            placeholder="blur"
            className="h-auto rounded-2xl w-40"
            alt="Piggy Bank"
          />
        </div>
        <p className="flex w-full h-full justify-center font-sans items-center">
          <span className={font.className}>{data}</span>
        </p>
      </m.div>
    </LazyMotion>
  );
}
