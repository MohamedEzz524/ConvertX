import { motion } from 'framer-motion';
import Announcement from '../../components/Announcement';
import Header from '../../components/Header';

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
        className="z-1 container flex h-full min-h-screen justify-between gap-4"
        initial={{ opacity: 0, y: 40 }} // start slightly above
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        exit={{ opacity: 0, y: 40, transition: { duration: 0.6 } }} // move down when leaving
      >
        {/* Left Side */}
        <div className="relative w-[50.5%] pt-20">
          <Header />
          <div className="relative inline-flex items-center rounded-full bg-[#0D0B0B] px-4 py-2">
            <div className="animate-gradientMove absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#DF1124] to-transparent p-[1px]">
              <div className="h-full w-full rounded-full bg-[#0D0B0B]"></div>
            </div>

            <div className="relative flex items-center gap-2 text-sm text-white">
              <div className="flex text-[#EDDB17]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.169L12 18.897l-7.336 3.87 
                 1.402-8.169L.132 9.211l8.2-1.193z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.169L12 18.897l-7.336 3.87 
                 1.402-8.169L.132 9.211l8.2-1.193z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.169L12 18.897l-7.336 3.87 
                 1.402-8.169L.132 9.211l8.2-1.193z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.169L12 18.897l-7.336 3.87 
                 1.402-8.169L.132 9.211l8.2-1.193z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.169L12 18.897l-7.336 3.87 
                 1.402-8.169L.132 9.211l8.2-1.193z"
                  />
                </svg>
              </div>

              <span>4.7/5.0 Rating Based on 68 Reviews</span>
            </div>
          </div>
        </div>

        {/* Right Video */}
        <div className="absolute top-[13%] left-[65.5%] flex w-[410px] items-center justify-center">
          <video
            className="z-[1] block h-auto w-full object-cover [clip-path:polygon(83.377%_0%,83.377%_0%,85.933%_0.102%,88.357%_0.398%,90.618%_0.872%,92.683%_1.508%,94.519%_2.289%,96.094%_3.199%,97.375%_4.223%,98.331%_5.344%,98.928%_6.546%,99.134%_7.813%,99.134%_25.547%,99.711%_25.547%,99.711%_25.551%,99.998%_25.707%,99.998%_25.707%,99.958%_26.313%,99.929%_27.297%,99.908%_28.566%,99.895%_30.023%,99.892%_31.576%,99.897%_33.128%,99.91%_34.586%,99.931%_35.854%,99.961%_36.838%,99.998%_37.443%,99.711%_37.598%,99.711%_37.598%,99.134%_37.598%,99.134%_92.179%,99.134%_92.179%,98.928%_93.446%,98.331%_94.648%,97.375%_95.77%,96.094%_96.793%,94.519%_97.704%,92.683%_98.485%,90.618%_99.12%,88.357%_99.594%,85.933%_99.89%,83.377%_99.992%,16.602%_99.992%,16.602%_99.992%,14.046%_99.89%,11.622%_99.594%,9.361%_99.12%,7.296%_98.485%,5.46%_97.704%,3.885%_96.793%,2.604%_95.77%,1.648%_94.648%,1.051%_93.446%,0.845%_92.179%,0.845%_40.252%,0.493%_40.252%,0.493%_40.25%,0.164%_40.25%,0.164%_40.252%,0%_40.152%,0%_40.152%,0.021%_39.769%,0.037%_39.146%,0.049%_38.342%,0.057%_37.419%,0.06%_36.436%,0.058%_35.452%,0.051%_34.529%,0.04%_33.725%,0.023%_33.102%,0%_32.718%,0.164%_32.618%,0.164%_32.615%,0.493%_32.615%,0.493%_32.618%,0.845%_32.618%,0.845%_30.646%,0.164%_30.646%,0.164%_30.649%,0%_30.549%,0%_30.549%,0.021%_30.166%,0.037%_29.542%,0.049%_28.739%,0.057%_27.816%,0.06%_26.832%,0.058%_25.849%,0.051%_24.925%,0.04%_24.122%,0.023%_23.498%,0%_23.114%,0.164%_23.014%,0.164%_23.012%,0.845%_23.012%,0.845%_19.719%,0.164%_19.719%,0.164%_19.714%,0%_19.621%,0%_19.621%,0.021%_19.351%,0.037%_19.013%,0.049%_18.623%,0.057%_18.199%,0.06%_17.757%,0.058%_17.316%,0.051%_16.892%,0.04%_16.501%,0.023%_16.163%,0%_15.892%,0.164%_15.799%,0.164%_15.799%,0.845%_15.799%,0.845%_7.813%,0.845%_7.813%,1.051%_6.546%,1.648%_5.344%,2.604%_4.223%,3.885%_3.199%,5.46%_2.289%,7.296%_1.508%,9.361%_0.872%,11.622%_0.398%,14.046%_0.102%,16.602%_0%,83.377%_0%)]"
            src="https://res.cloudinary.com/dzw9sp2g3/video/upload/v1758907880/Phone_co41wz.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <img
            src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758912903/Phone_Bg_kohjvz.svg"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2.45]"
            alt=""
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
