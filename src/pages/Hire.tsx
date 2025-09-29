import Button from '../components/Button';
import SelectField from '../components/SelectField';
import { useState } from 'react';
import Step from './step';

const Hire = () => {
  const [range, setRange] = useState('');
  const [innerValue, setInnerValue] = useState('');

  const nextLink = range === 'unValid' ? '/warn' : '/get-hired';

  return (
    <Step
      breadcrumbs="HIRE US"
      title="Ready To 10X Your Brand Growth?"
      progress={15}
    >
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

      <div className="mt-15 flex gap-4">
        <Button text="PREV STEP" type="outline" link="/" />
        <Button
          text="NEXT STEP"
          type="bulk"
          disabled={range.length === 0 || innerValue.length === 0}
          link={nextLink}
        />
      </div>
    </Step>
  );
};

export default Hire;
