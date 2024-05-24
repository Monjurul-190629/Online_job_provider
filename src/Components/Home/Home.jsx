import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useEffect, useRef, useState } from 'react';
import './App.css'

// framer -motion
import { motion } from 'framer-motion'




const Home = () => {
    const [swiper, setSwiper] = useState(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiper !== null) {
            const interval = setInterval(() => {
                if (swiper.isEnd) {
                    swiper.slideTo(0); // If it's the last slide, go back to the first one
                } else {
                    swiper.slideNext(); // Go to the next slide
                }
            }, 3000);

            // Clear the interval when the component unmounts
            return () => clearInterval(interval);
        }
    }, [swiper]);
    return (
        <div className="">
            <Swiper
                ref={swiperRef}
                onSwiper={setSwiper}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false // To ensure autoplay continues after user interaction
                }}
            >
                <SwiperSlide className='banner-slide'><img src="https://i.ibb.co/3FwFn6W/job-posting-website-900x500.jpg" className='w-screen h-[600px] banner-image ' />
                    <div className="banner-content">
                        <h1 className='text-white font-bold text-2xl md:text-4xl mb-5'>Welcome to Our Job-Website</h1>
                        <p className='text-white font-bold md:text-xl text-justify'>Find your dream job today! Browse thousands of job listings, explore various industries, and apply online effortlessly. Whether you're a seasoned professional or just starting your career journey, our platform offers opportunities for everyone. Join us today and take the next step towards your future success!</p>
                    </div>
                    <div className="banner-overlay"></div>
                </SwiperSlide>

                <SwiperSlide className='banner-slide'><img src="https://pod-people.co.uk/wp-content/uploads/2016/05/commercial-jobs-industry.jpg" className='w-screen h-[600px] banner-image ' />
                    <div className="banner-content">
                        <h1 className='text-white font-bold text-2xl md:text-4xl mb-5'>Welcome to Our Job-Website</h1>
                        <p className='text-white font-bold  md:text-xl text-justify'>Find your dream job today! Browse thousands of job listings, explore various industries, and apply online effortlessly. Whether you're a seasoned professional or just starting your career journey, our platform offers opportunities for everyone. Join us today and take the next step towards your future success!</p>
                    </div>
                    <div className="banner-overlay"></div>
                </SwiperSlide>

                <SwiperSlide className='banner-slide'><img src="https://s3.amazonaws.com/fjwp/blog/wp-content/uploads/2017/08/07073632/bigstock-part-time-job-D-rendering-t-174023476.jpg" className='w-screen h-[600px] banner-image ' />
                    <div className="banner-content">
                        <h1 className='text-white font-bold text-2xl md:text-4xl mb-5'>Welcome to Our Job-Website</h1>
                        <p className='text-white font-bold  md:text-xl text-justify'>Find your dream job today! Browse thousands of job listings, explore various industries, and apply online effortlessly. Whether you're a seasoned professional or just starting your career journey, our platform offers opportunities for everyone. Join us today and take the next step towards your future success!</p>
                    </div>
                    <div className="banner-overlay"></div>
                </SwiperSlide>

                <SwiperSlide className='banner-slide'><img src="https://i.pinimg.com/originals/ab/f9/86/abf98643d2b2ec0f43a1ca926312ed13.jpg" className='w-screen h-[600px] banner-image ' />
                    <div className="banner-content">
                        <h1 className='text-white font-bold text-2xl md:text-4xl mb-5'>Welcome to Our Job-Website</h1>
                        <p className='text-white font-bold md:text-xl text-justify'>Find your dream job today! Browse thousands of job listings, explore various industries, and apply online effortlessly. Whether you're a seasoned professional or just starting your career journey, our platform offers opportunities for everyone. Join us today and take the next step towards your future success!</p>
                    </div>
                    <div className="banner-overlay"></div>
                </SwiperSlide>


            </Swiper>

            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="p-8  rounded-lg shadow-lg"
                >
                    <div className='font-bold text-center text-4xl underline py-10'>
                        About SkillTrackers
                    </div>
                    <div className="md:px-20 px-4 py-10 bg-purple-600 rounded-xl text-white text-justify">

                        <div className="flex flex-col lg:flex-row-reverse gap-5 md:gap-10 md:justify-center">
                            <div className='md:flex-1'>
                                <img src="https://www.dice.com/binaries/large/content/gallery/dice/insights/2022/09/shutterstock_2079730714.jpg" className="max-w-full rounded-lg shadow-2xl" />
                            </div>
                            <div className='md:flex-1'>

                                <p className="py-6">
                                    <span className='text-3xl font-bold text-red-300'>SkillTrackers</span> is an innovative job-seeking website designed to connect
                                    job seekers with potential employers efficiently and effectively.
                                    The platform offers a comprehensive range of tools to enhance the job search experience,
                                    including personalized job recommendations, resume building assistance, and skill assessments
                                    to highlight candidates' strengths. With an intuitive interface and advanced search filters,
                                    users can easily navigate through various job listings tailored to their career goals and expertise.
                                    SkillTrackers also provides valuable resources such as interview preparation tips and career advice articles,
                                    making it a one-stop solution for individuals striving to advance their professional journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div>
                <div className='font-bold text-center text-4xl underline pt-10'>
                    Our Advisors
                </div>
                <div className='flex justify-center flex-col md:flex-row gap-5 md:gap-10 mx-5'>
                    <div className="card w-96 shadow-xl bg-slate-700 my-10 text-white">
                        <figure className="px-5 md:px-10 pt-10">
                            <img src="https://assets.mycast.io/actor_images/actor-johnny-depp-163036_large.jpg?1610216546" alt="" className="rounded-full max-w-32" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><span className='text-2xl'>Broad Member,</span> <small>SkillTrackers</small></h2>
                            <p className='text-justify'>
                                Dep's leadership is marked by his proactive approach and his ability to motivate
                                and inspire his team. He fosters an environment of open communication, encouraging
                                creativity and innovation among team members. His knack for identifying.

                            </p>
                        </div>
                    </div>
                    <div className="card w-96 shadow-xl bg-slate-700 my-10 text-white">
                        <figure className="px-5 md:px-10 pt-10">
                            <img src="https://i.pinimg.com/736x/44/9e/3e/449e3e0d23bd1a33e448cc95ea44a598.jpg" alt="" className="rounded-full max-w-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><span className='text-2xl'>Broad Member,</span> <small>SkillTrackers</small></h2>
                            <p className='text-justify'>Brad Pitt is a visionary leader with a passion for innovation and
                                a deep commitment to transforming the job-seeking landscape.
                                His strategic thinking and ability to build
                                strong partnerships have been instrumental in expanding the platform's reach and impact.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;