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
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper w-[350px]"
                onSwiper={setSwiper}
            >
                {staffs.map((item) => {
                    return (
                        <SwiperSlide key={item.id} className='card_small_p'>
                            <Text className='card_small_name card_small_text absolute block'>{item.name}</Text>
                            <Text w={'100%'} className='card_small_certify card_small_text absolute block'>{item.certify}</Text>
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