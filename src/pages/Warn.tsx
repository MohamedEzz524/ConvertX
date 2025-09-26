import Logo from '../components/Logo';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Warn = () => {
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
          <div className="mt-40">
            <Breadcrumbs text="HIRE US" />

            <h1 className="h1 mt-4">
              Unfortunately you won’t be a good fit for us at your current
              stage, however we can still help you out through a consultation
            </h1>
          </div>

          <div className="mt-15 flex gap-4">
            <Button text="PREV STEP" type="outline" link="/hire" size="md" />
            <Button
              text="BOOK CONSULTATION"
              type="bulk"
              link="/book"
              size="md"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Warn;
