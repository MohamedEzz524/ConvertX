import Breadcrumbs from '../../components/Breadcrumbs';
import Logo from '../../components/Logo';
import { motion } from 'framer-motion';

interface StepProps {
  breadcrumbs: string;
  title: string;
  children: React.ReactNode;
  progress: number;
}

const Step = ({ breadcrumbs, title, children, progress }: StepProps) => {
  return (
    <section className="main-section">
      <div className="bg-accentPrimary pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full opacity-10 blur-[140px]" />
      <div className="bg-accentPrimary pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-10 blur-[140px]" />

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%`, transition: { duration: 0.6 } }}
        exit={{ width: 0, transition: { duration: 0.6 } }}
        className="bg-accentPrimary fixed top-0 left-0 h-2"
      />

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
            <Breadcrumbs text={breadcrumbs} />

            <h1 className="h1 mt-4">{title}</h1>

            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Step;
