import Logo from '../components/Logo';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import SelectField from '../components/SelectField';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Hire = () => {
  const [range, setRange] = useState('');

  const nextLink = range === 'unValid' ? '/warn' : '/get-hired';

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
            <Breadcrumbs text="HIRE US" />
            <h1 className="h1 mt-4">Ready To 10X Your Brand Growth?</h1>

            <div className="text-body mt-20 space-y-8 space-x-2">
              <span className="inline break-words">
                Hey! My brand generated
              </span>

              <SelectField
                id="main-select"
                label="Select Range"
                value={range}
                onChange={setRange}
                options={[
                  { value: 'unValid', label: 'Below 100K' },
                  { value: 'valid', label: '150K+' },
                  { value: 'valid', label: 'Other' },
                ]}
              />

              <span className="inline break-words">
                in sales in the past month, and we spent
              </span>

              <SelectField
                id="extra-select"
                label="Select Range"
                noValue
                options={[
                  { value: 'valid', label: 'Below 100K' },
                  { value: 'unValid', label: '150K+' },
                  { value: 'valid', label: 'Others' },
                ]}
              />

              <span className="inline break-words">on ad spend.</span>
            </div>
          </div>

          <div className="mt-15 flex gap-4">
            <Button text="PREV STEP" type="outline" link="/" size="md" />
            <Button
              text="NEXT STEP"
              type="bulk"
              disabled={range.length === 0}
              link={nextLink}
              size="md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hire;
