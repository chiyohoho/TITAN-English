import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function FeedbackSlider({ feedbackList }) {
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
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper w-[100%] h-[500px] rounded-xl overflow-hidden"
                onSwiper={setSwiper}
            >
                {feedbackList.map((item) => {
                    return (
                        <SwiperSlide key={item.id} className=' w-[100%] bg-[#3a3b3c] overflow-hidden'>
                            <Flex alignItems={'center'} p={5} gap={5}>
                                <Box w={50} rounded={'50%'} overflow={'hidden'} >
                                    <Image w={'100%'} src={item.avatar} alt={item.name} />
                                </Box>

                                <Box textAlign={'left'} >
                                    <Text color={'white'} fontWeight={500}>
                                        {item.name}
                                    </Text>
                                    <Text fontSize={14} color={'gray'} fontStyle={'italic'}>
                                        {item.date}
                                    </Text>
                                </Box>
                            </Flex>

                            <Box className='feedback_scroll' lineHeight={2} fontSize={[14, 15, 16, 17, 18, 19]} maxH={'70%'} overflowY={'auto'} textAlign={'left'} color={'white'} p={5}>
                                {item.description}
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}