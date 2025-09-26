import Announcement from '../../components/Announcement';
import Header from '../../components/Header';

const Home = () => {
  return (
    <section className="relative min-h-screen">
      <div className="bg-accentPrimary absolute -top-20 -left-20 h-80 w-80 rounded-full opacity-10 blur-[140px]" />

      <Announcement>
        Only{' '}
        <span className="text-accentPrimary text-shadow-accentPrimary">1</span>{' '}
        spot is available this month
      </Announcement>

      <div className="z-1 container flex h-full min-h-screen justify-between gap-4">
        {/* Left Side */}
        <div className="relative w-[52.5%] pt-25">
          <Header />
        </div>

        {/* Right Video */}
        <div className="flex-center w-[45%]">
          <video
            className="clipped-video max-w-sm"
            src="https://res.cloudinary.com/dzw9sp2g3/video/upload/v1758907880/Phone_co41wz.mp4"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Home;
