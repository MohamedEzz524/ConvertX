import Logo from '../components/Logo';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import SelectField from '../components/SelectField';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Hire = () => {
  const [range, setRange] = useState('');
  const [innerValue, setInnerValue] = useState('');

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
          <div className="mt-18 sm:mt-40">
            <Breadcrumbs text="HIRE US" />
            <h1 className="h1 mt-4">Ready To 10X Your Brand Growth?</h1>

            <div className="text-body mt-20 leading-10 lg:leading-20">
              <span className="mr-2 mb-4 break-words md:mb-8">
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

              <span className="mr-2 break-words">
                in sales in the past month, and we spent
              </span>

              <SelectField
                id="extra-select"
                label="Select Range"
                value={innerValue}
                onChange={setInnerValue}
                options={[
                  { value: 'valid', label: 'Below 100K' },
                  { value: 'unValid', label: '150K+' },
                  { value: 'valid', label: 'Others' },
                ]}
              />

              <span className="mr-2 break-words">on ad spend.</span>
            </div>
          </div>

          <div className="mt-15 flex gap-4">
            <Button text="PREV STEP" type="outline" link="/" />
            <Button
              text="NEXT STEP"
              type="bulk"
              disabled={range.length === 0 || innerValue.length === 0}
              link={nextLink}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hire;
