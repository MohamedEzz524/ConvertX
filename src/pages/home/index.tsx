import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Announcement from '../../components/Announcement';
import Header from '../../components/Header';
import Stars from '../../components/Stars';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import video from '../../assets/Phone.mp4';
import videoBg from '../../assets/Phone Bg.svg';
import svgBg from '../../assets/bg.svg';
import reviewsData from '../../data/reviews.json';
import Screenshots from '../../components/Screenshots';

// Wistia Player Component
const WistiaPlayer = ({
  mediaId,
  aspect = '0.5660377358490566',
  className = '',
}: {
  mediaId: string;
  aspect?: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear existing content
      containerRef.current.innerHTML = '';

      // Create and append Wistia player element
      const player = document.createElement('wistia-player');
      player.setAttribute('media-id', mediaId);
      player.setAttribute('aspect', aspect);
      containerRef.current.appendChild(player);
    }
  }, [mediaId, aspect]);

  return <div ref={containerRef} className={className} />;
};

interface Review {
  review_title: string;
  brand_image: string;
  brand_name: string;
  brand_followers: string;
  brand_id: string;
  review_description: string;
  tags: string[];
  review_video_id: string;
}

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const reviews = reviewsData as Review[];

  // Fallback in case the onLoadedData never fires
  useEffect(() => {
    const timeout = setTimeout(() => setVideoLoaded(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentReviewIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length,
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <>
      <section className="relative min-h-screen">
        <div className="bg-accentPrimary pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full opacity-10 blur-[140px]" />
        <div className="bg-accentPrimary pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-10 blur-[140px]" />

        {/* fade UP on exit / DOWN on enter */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6 } }}
        >
          <Announcement>
            Only{' '}
            <span className="text-accentPrimary text-shadow-accentPrimary">
              5
            </span>{' '}
            spot is available this month
          </Announcement>
        </motion.div>

        <motion.div
          className="home-container z-1 flex h-full min-h-screen flex-col justify-between gap-4 pb-25 lg:flex-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: 40, transition: { duration: 0.6 } }}
        >
          {/* Left Side */}
          <div className="relative w-full pt-13 sm:pt-20 lg:w-[55%] 2xl:w-[50.5%]">
            <div className="mb-8 block md:hidden">
              <Logo />
            </div>
            <Header />

            <div className="bg-bgPrimary relative mt-0 inline-flex items-center rounded-full px-4 py-2 sm:mt-38 sm:px-8">
              <div className="animate-gradientMove via-accentPrimary absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-transparent bg-[length:60%_60%] p-[1px]">
                <div className="bg-bgPrimary h-full w-full rounded-full"></div>
              </div>

              <div className="relative flex items-center gap-2 text-[11.5px] text-white sm:text-sm">
                <Stars />
                <span>4.7/5.0 Rating Based on 68 Reviews</span>
              </div>
            </div>

            <h1 className="h1 mt-6 leading-snug text-balance sm:mt-8">
              We Generated +300M In Sales For +200 Ecom Brands
            </h1>

            <p className="mt-5 text-[12px] font-normal text-white opacity-70 sm:mt-7 sm:text-lg lg:text-base">
              We scale e-commerce brands not only through ads, but by analyzing
              the business thoroughly to identify all the gaps that are
              hindering the business growth. So, a mix of performance marketing,
              business consulting, and ads we get your brand to be the next big
              thing in your market
            </p>

            <div className="mt-6 flex gap-4 sm:hidden">
              <Button
                text="BOOK A CONSULTATION"
                link="/book-consultation"
                type="outline"
              />
              <Button text="START NOW" link="/getting-started" type="bulk" />
            </div>

            {/* Auto-Rotate */}
            <div className="relative mt-10 h-14 sm:mt-42 sm:h-22">
              <span className="bg-bgPrimary absolute top-0 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 px-3 text-[12px] whitespace-nowrap text-white sm:text-base">
                WE WORK ONLY WITH THE BEST
              </span>
              <div className="mask-fade relative flex h-full w-full items-center overflow-hidden border-t border-b border-white">
                <div className="marquee flex shrink-0">
                  {[1, 2].map((setIndex) => (
                    <div
                      key={setIndex}
                      className="flex h-full w-max shrink-0 items-center [&>img]:mr-16 [&>img]:h-4 [&>img]:sm:h-7"
                    >
                      {[image1, image2, image3, image4, image5].map(
                        (image, i) => (
                          <img key={i} src={image} alt="pic" />
                        ),
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="relative z-0 mx-auto mt-8 flex aspect-[1/2] w-7/10 items-center justify-center sm:mt-28 md:w-7/10 lg:mt-28 lg:mr-10 lg:ml-10 lg:w-[350px] xl:mr-30 xl:w-[410px] 2xl:mr-38 2xl:w-[470px]">
            {/* Loading Overlay */}
            <motion.div
              className="bg-bgPrimary video-clip absolute inset-0 flex items-center justify-center rounded-md"
              animate={{
                opacity: videoLoaded ? 0 : 1,
                scale: videoLoaded ? 0.98 : 1,
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {!videoLoaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="border-t-accentPrimary h-8 w-8 rounded-full border-2 border-white/30"
                />
              )}
            </motion.div>

            <motion.video
              className="video-clip z-[1] block h-auto w-full object-cover"
              src={video}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: videoLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />

            <img
              src={videoBg}
              className="pointer-events-none absolute top-1/2 left-1/2 -z-5 -translate-x-1/2 -translate-y-1/2 scale-[2.45]"
              alt=""
            />
          </div>
        </motion.div>
      </section>

      <section className="main-section relative flex min-h-screen">
        <div className="relative container flex-1 pb-30 lg:pb-0">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
            {/* Column 1: Content */}
            <div className="flex-1 pb-0 lg:relative lg:pb-30">
              {/* Row 1: Title */}
              <h1 className="h2 md:h1 max-w-3xl leading-tight">
                Real Success Stories From Our Clients
              </h1>

              {/* Row 2: Review Title */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`review-title-${currentReviewIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mt-12 min-h-[1.5rem] text-sm text-white opacity-80 md:min-h-[1.75rem] md:text-base lg:mt-16 2xl:mt-20"
                >
                  {reviews[currentReviewIndex].review_title}
                </motion.p>
              </AnimatePresence>

              {/* Row 3: Brand Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`brand-info-${currentReviewIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-8 flex items-center gap-4 lg:mt-16 2xl:mt-24"
                >
                  <motion.img
                    src={reviews[currentReviewIndex].brand_image}
                    alt={reviews[currentReviewIndex].brand_name}
                    className="h-16 w-16 rounded-full bg-gray-400 object-cover md:h-20 md:w-20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  />
                  <div className="flex flex-col">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.35 }}
                      className="text-textPrimary font-medium md:text-lg"
                    >
                      {reviews[currentReviewIndex].brand_name}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="text-sm text-white opacity-70"
                    >
                      {reviews[currentReviewIndex].brand_followers}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.45 }}
                      className="text-sm text-white opacity-70"
                    >
                      {reviews[currentReviewIndex].brand_id}
                    </motion.span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Row 4: Review Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`review-desc-${currentReviewIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8 min-h-[80px] text-sm leading-relaxed text-white opacity-80 md:min-h-[100px] md:text-base lg:mt-16 2xl:mt-24"
                >
                  &ldquo;{reviews[currentReviewIndex].review_description}&rdquo;
                </motion.p>
              </AnimatePresence>

              {/* Row 5: Tags */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`tags-${currentReviewIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="mt-2 flex min-h-[2.5rem] flex-wrap items-center gap-2"
                >
                  {reviews[currentReviewIndex].tags.map((tag, index) => (
                    <motion.span
                      key={`${currentReviewIndex}-${tag}-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="rounded-full border border-white px-4 py-2 text-xs text-white md:text-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Row 6: Navigation Arrows */}
              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2 lg:left-0 lg:translate-x-0">
                <button
                  onClick={() => handlePrevious()}
                  disabled={isAnimating}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Previous review"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 12H4M4 12L10 18M4 12L10 6"
                      stroke="black"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleNext()}
                  disabled={isAnimating}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Next review"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="black"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Column 2: Video */}
            <div className="video-border-container relative z-1 mx-auto box-content aspect-[0.6] h-fit w-full md:w-[38%] 2xl:w-[30%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`video-wrapper-${currentReviewIndex}`}
                  className="relative h-full w-full"
                >
                  <div className="h-full w-full">
                    <WistiaPlayer
                      mediaId={reviews[currentReviewIndex].review_video_id}
                      aspect="0.6"
                      className="h-full w-full rounded-none"
                    />
                  </div>
                  {/* Overlay layer that covers and reveals */}
                  <motion.div
                    className="bg-bgPrimary absolute inset-0 z-10"
                    initial={{ height: '100%', top: 0 }}
                    animate={{
                      height: '0%',
                      transition: {
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: 0.3,
                      },
                    }}
                    exit={{
                      height: '100%',
                      transition: {
                        duration: 0.3,
                        ease: 'easeInOut',
                      },
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <img
            src={svgBg}
            alt="bg"
            className="pointer-events-none absolute top-6/10 right-0 z-0 h-6/10 w-full -translate-y-1/2 object-contain"
          />
        </div>
      </section>

      <Screenshots />
    </>
  );
};

export default Home;
