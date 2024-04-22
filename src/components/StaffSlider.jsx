import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function StaffSlider({ staffs }) {
    const [swiper, setSwiper] = useState(null);

    const handleMouseEnter = () => {
        if (swiper && swiper.autoplay) {
            swiper.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiper && swiper.autoplay) {
            swiper.autoplay.start();
        }
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper w-[100%] rounded-xl px-0 sm:px-[100px] md:px-100 lg:px-100 xl:px-100 2xl:px-100"
                onSwiper={setSwiper}
            >
                {staffs.map((item) => {
                    return (
                        <SwiperSlide key={item.id} className='card_small_p'>
                            <Text className='card_small_name card_small_text absolute block'>{item.name}</Text>
                            <Text className='card_small_graduate card_small_text absolute block'>{item.graduate}</Text>
                            <Text className='card_small_certify card_small_text absolute block'>{item.certify}</Text>
                            <Text className='card_small_experience absolute card_small_text block'>{item.experience}</Text>
                            <Text className='card_small_student card_small_text absolute block'>{item.students}</Text>
                            <Image src={item.avatar} alt={item.name} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}