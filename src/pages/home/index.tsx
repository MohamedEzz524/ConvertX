import { motion } from 'framer-motion';
import Announcement from '../../components/Announcement';
import Header from '../../components/Header';
import Stars from '../../components/Stars';
import Logo from '../../components/Logo';

const Home = () => {
  return (
    <section className="relative min-h-screen">
      <div className="bg-accentPrimary absolute -top-20 -left-20 h-80 w-80 rounded-full opacity-10 blur-[140px]" />

      {/* fade UP on exit / DOWN on enter */}
      <motion.div
        initial={{ opacity: 0, y: -40 }} // start slightly below
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        exit={{ opacity: 0, y: -40, transition: { duration: 0.6 } }} // move up when leaving
      >
        <Announcement>
          Only{' '}
          <span className="text-accentPrimary text-shadow-accentPrimary">
            1
          </span>{' '}
          spot is available this month
        </Announcement>
      </motion.div>

      <motion.div
        className="home-container z-1 flex h-full min-h-screen flex-col justify-between gap-4 pb-25 lg:flex-row"
        initial={{ opacity: 0, y: 40 }} // start slightly above
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        exit={{ opacity: 0, y: 40, transition: { duration: 0.6 } }} // move down when leaving
      >
        {/* Left Side */}
        <div className="relative w-full pt-20 lg:w-[55%] 2xl:w-[50.5%]">
          <div className="mb-8 block md:hidden">
            <Logo />
          </div>
          <Header />

          <div className="bg-bgPrimary relative mt-18 inline-flex items-center rounded-full px-4 py-2 sm:mt-38 sm:px-8">
            <div className="animate-gradientMove via-accentPrimary absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-transparent bg-[length:60%_60%] p-[1px]">
              <div className="bg-bgPrimary h-full w-full rounded-full"></div>
            </div>

            <div className="relative flex items-center gap-2 text-[12px] text-white sm:text-sm">
              <Stars />
              <span>4.7/5.0 Rating Based on 68 Reviews</span>
            </div>
          </div>

          <h1 className="h1 mt-8 leading-snug">
            We Generated +200M In Sales For +100 Ecom Brands
          </h1>

          <p className="mt-7 text-[12px] font-normal text-white opacity-70 sm:text-lg lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            eligendi, possimus placeat deleniti, in dignissimos necessitatibus,
            eaque saepe repellendus nostrum maiores voluptate vero mollitia
            adipisci modi iste ea id? Dicta.
          </p>

          {/* Auto-Rotate */}
          <div className="relative mt-18 h-14 border-t border-b border-white sm:mt-42 sm:h-22">
            <span className="bg-bgPrimary absolute top-0 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 px-3 text-[12px] whitespace-nowrap text-white sm:text-base">
              WE WORK ONLY WITH THE BEST
            </span>
            <div className="relative flex h-full w-full items-center overflow-hidden">
              <div className="marquee flex shrink-0">
                <div className="flex h-full w-max shrink-0 items-center [&>img]:mr-16 [&>img]:h-4 [&>img]:sm:h-7">
                  <img
                    src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908849/1_ww5vmk.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908849/2_rmcnpy.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908849/3_t06r5v.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908849/4_guetqw.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908849/5_jzrctq.png"
                    alt=""
                  />
                </div>
                <div className="flex h-full w-max shrink-0 items-center [&>img]:mr-16 [&>img]:h-4 [&>img]:sm:h-7">
                  <img
                    src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908849/1_ww5vmk.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908849/2_rmcnpy.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908849/3_t06r5v.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908849/4_guetqw.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908849/5_jzrctq.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative z-0 mx-auto mt-18 flex w-7/10 items-center justify-center sm:mt-28 md:w-7/10 lg:mt-28 lg:mr-10 lg:ml-10 lg:w-[350px] xl:mr-30 xl:w-[410px] 2xl:mr-38 2xl:w-[470px]">
          <video
            className="video-clip z-[1] block h-auto w-full object-cover"
            src="https://res.cloudinary.com/dzw9sp2g3/video/upload/v1758907880/Phone_co41wz.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <img
            src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758912903/Phone_Bg_kohjvz.svg"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2.45]"
            alt=""
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
