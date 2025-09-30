import Frame from '../components/Frame';
import Step from './step';

const GetHired = () => {
  return (
    <Step
      breadcrumbs="Consultation booking"
      title="You’re Just One Step Away From Becoming The Next Big Brand In Your Market."
      progress={90}
    >
      <Frame />
    </Step>
  );
};

export default GetHired;
