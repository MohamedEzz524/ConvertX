import Logo from '../components/Logo';
import Breadcrumbs from '../components/Breadcrumbs';
import { motion } from 'framer-motion';

const Book = () => {
  return (
    <motion.section className="main-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6 } }}
        >
          <Logo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: 40, transition: { duration: 0.6 } }}
        >
          <div className="mt-18 sm:mt-40">
            <Breadcrumbs text="Consultation booking" />
            <h1 className="h1 mt-4">
              Book a 30-min consultation with Ahmed Helal to help you identify
              your business issues and how can you resolve them, and to clear
              out the path for your brand scaling
            </h1>
          </div>

          {/* ---- Cal.com booking calendar via iframe ---- */}
          <div className="mx-auto mt-15 min-h-[1360px] w-[300px] md:min-h-[1700px] md:w-[750px] lg:min-h-[730px] lg:w-[980px]">
            <iframe
              src="https://cal.com/stelllar.vision/30min?layout=month_view"
              className="mx-auto h-full min-h-[1360px] w-[300px] border-none md:min-h-[1700px] md:w-[750px] lg:min-h-[730px] lg:w-[980px]"
              allowFullScreen
              title="Consultation booking calendar"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Book;
