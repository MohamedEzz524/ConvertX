import Logo from '../components/Logo';
import Breadcrumbs from '../components/Breadcrumbs';
import { motion } from 'framer-motion';

const GetHired = () => {
  return (
    <section className="main-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -40 }} // start slightly below
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6 } }} // move up when leaving
        >
          <Logo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: 40, transition: { duration: 0.6 } }}
        >
          <div className="mt-40">
            <Breadcrumbs text="Consultation booking" />

            <h1 className="h1 mt-4">
              You’re Just One Step Away From Becoming The Next Big Brand In Your
              Market.
            </h1>
          </div>

          {/* ---- Cal.com booking calendar via iframe ---- */}
          <div className="mx-auto mt-15 min-h-[730px] w-[1000px]">
            <iframe
              src="https://cal.com/stelllar.vision/30min?layout=month_view"
              className="mx-auto h-full min-h-[730px] w-[1000px] border-none"
              allowFullScreen
              title="Consultation booking calendar"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetHired;
