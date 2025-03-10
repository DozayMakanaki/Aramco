import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Benjamin Moore",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    text: "C.E.O.",
  },
  {
    id: 2,
    name: "Mike Chris",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "Manager",
  },
  {
    id: 3,
    name: "Robert Dow",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "Human Resource!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 px-4 max-w-7xl mx-auto">
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-10">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl sm:text-4xl font-bold mb-2"
        >
          Our Team
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600 text-sm sm:text-base">
          Meet the people who make everything possible!
        </motion.p>
      </motion.div>

      <motion.div variants={fadeIn("up", 0.5)} className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="h-full py-4">
              <motion.div
                variants={fadeIn("up", 0.3 * (index + 1))}
                className="text-center bg-white p-6 rounded-lg shadow-md h-full flex flex-col"
              >
                <motion.div
                  variants={fadeIn("down", 0.4 * (index + 1))}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3"
                >
                  <motion.img
                    variants={fadeIn("up", 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.h3
                  variants={textVariant(0.3)}
                  className="font-semibold text-lg sm:text-xl mb-1"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p variants={fadeIn("up", 0.6 * (index + 1))} className="text-gray-600 text-sm sm:text-base">
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div variants={fadeIn("up", 0.7)} className="flex justify-center gap-4 mt-6">
          <motion.button
            variants={fadeIn("right", 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            variants={fadeIn("left", 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
