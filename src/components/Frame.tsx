const Frame = () => {
  return (
    <div className="mx-auto mt-15 min-h-[1330px] w-full max-w-[320px] sm:min-h-[1520px] sm:max-w-[600px] md:min-h-[1580px] md:max-w-[680px] lg:min-h-[730px] lg:max-w-[980px]">
      <iframe
        src="https://cal.com/stelllar.vision/30min?layout=month_view"
        className="mx-auto h-full min-h-[1330px] w-full max-w-[320px] border-none sm:min-h-[1520px] sm:max-w-[600px] md:min-h-[1580px] md:max-w-[680px] lg:min-h-[730px] lg:max-w-[980px]"
        allowFullScreen
        title="Consultation booking calendar"
      />
    </div>
  );
};

export default Frame;
