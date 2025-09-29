import Step from './step';

const Book = () => {
  return (
    <Step
      breadcrumbs="Consultation booking"
      title="Book a 30-min consultation with Ahmed Helal to help you identify your business issues and how can you resolve them, and to clear out the path for your brand scaling"
      progress={90}
    >
      {/* ---- Cal.com booking calendar via iframe ---- */}
      <div className="mx-auto mt-15 min-h-[1360px] w-[300px] md:min-h-[1700px] md:w-[750px] lg:min-h-[730px] lg:w-[980px]">
        <iframe
          src="https://cal.com/stelllar.vision/30min?layout=month_view"
          className="mx-auto h-full min-h-[1360px] w-[300px] border-none md:min-h-[1700px] md:w-[750px] lg:min-h-[730px] lg:w-[980px]"
          allowFullScreen
          title="Consultation booking calendar"
        />
      </div>
    </Step>
  );
};

export default Book;
