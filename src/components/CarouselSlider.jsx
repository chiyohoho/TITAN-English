import { Box, Image, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useSpring, animated } from '@react-spring/web';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import '../pages/home/styles.scss';

const arrImages = [
    'https://i.imgur.com/iG8INoh.jpeg',
    'https://i.imgur.com/IARoRvV.jpeg',
]

function CarouselSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [springs, api] = useSpring(() => ({
        from: { top: '70%', opacity: 0 },
        to: { top: '55%', opacity: 1 },
        config: { mass: 1, tension: 170, friction: 26, duration: 700, bounce: 1 },
        reset: false,
    }));

    useEffect(() => {
        const swiper = document.querySelector('.mySwiper').swiper;

        const handleSlideChange = () => {
            setCurrentIndex(swiper.activeIndex);
            api.start({
                from: { top: '70%', opacity: 0 },
                to: { top: '55%', opacity: 1 },
                config: { mass: 1, tension: 170, friction: 26, duration: 700, bounce: 1 },
                reset: true,
            });
        };

        if (swiper) {
            swiper.on('slideChange', handleSlideChange);
        }

        return () => {
            if (swiper) {
                swiper.off('slideChange', handleSlideChange);
            }
        };
    }, [api]);

    return (
        <Box w={'100%'} height={'100%'}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 4000, disableOnInteraction: true }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            >
                {arrImages.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image src={item} alt="image" />
                        <animated.div
                            style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translate(-50%,-50%)',
                                zIndex: 10,
                                ...springs,
                            }}
                        >
                            {index === 0 ?
                                <Box w={'100%'}>
                                    <Text w={'100%'} textAlign={'center'} fontSize={[12, 14, 24, 28, 32, 36]} fontWeight={500} color={'white'} textShadow={'0px 0px 3px black'}>
                                        Bạn lo lắng vì các kỳ thi Tiếng Anh?
                                    </Text>
                                    <Box w={'100%'} textAlign={'center'} fontSize={[16, 20, 30, 42, 48, 54]} fontWeight={800} color={'tomato'} textShadow={'0px 0px 3px white'}>
                                        TITAN ENGLISH
                                        <Text textShadow={'0px 0px 3px black'} fontWeight={500} color={'white'}>
                                            có giải pháp giúp bạn vượt qua mọi khó khăn.
                                        </Text>
                                    </Box>
                                </Box>
                                :
                                <Box w={'100%'}>
                                    <Text w={'100%'} textAlign={'center'} fontSize={[12, 14, 24, 28, 32, 36]} fontWeight={500} color={'white'} textShadow={'0px 0px 3px black'}>
                                        Với đội ngũ giảng viên chất lượng?
                                    </Text>
                                    <Box w={'100%'} textAlign={'center'} fontSize={[16, 20, 30, 42, 48, 54]} fontWeight={800} color={'tomato'} textShadow={'0px 0px 3px white'}>
                                        TITAN ENGLISH
                                        <Text textShadow={'0px 0px 3px black'} fontWeight={500} color={'white'}>
                                            sẽ đảm bảo cho bạn những kiến thức đầy đủ, trước khi bước vào phòng thi.
                                        </Text>
                                    </Box>
                                </Box>
                            }

                        </animated.div>
                    </SwiperSlide>
                ))}


                <Box
                    className="scroll_loop"
                    zIndex={1}
                    pos={'absolute'}
                    w={100}
                >
                    <Image w={'100%'} src='https://i.imgur.com/xYEd9ni.png' alt='' />
                </Box>
            </Swiper>
        </Box>
    );
}

export default CarouselSlider;
