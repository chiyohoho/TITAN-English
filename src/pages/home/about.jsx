import { Box, Flex, Text } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import './styles.scss'




function About() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const course = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0%)' : 'translateY(30%)',
        config: { duration: 1000 },
    });

    const title = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(100px)',
        config: { duration: 1000 }
    });

    const description = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(-100px)',
        config: { duration: 1000 }
    });






    return (
        <Box>
            <animated.div style={title}>
                <Box textAlign={'center'} fontWeight={800} color={'#003359'} fontSize={40}>Giới thiệu về trung tâm <Text display={'inline-block'} color={'#dd5c29'}>TITAN ENGLISH</Text></Box>
            </animated.div>

            <animated.div style={description}>
                <Box textAlign={'center'} fontWeight={500} fontSize={24}>Nơi giúp bạn trở nên hoàn hảo nhất theo cách của bạn!</Box>
            </animated.div>

            <animated.div className='mt-[50px]' style={course} ref={ref}>
                <Flex flexDir={['column', 'column', 'row', 'row', 'row', 'row']} maxW={1000} mx={'auto'} justifyContent={'space-between'} gap={1}>
                    <Box className='about_card rounded-full border-2 p-5' textAlign={'center'} w={'100%'}  >
                        <Box className='about_card_c'>
                            <Text fontWeight={700} fontSize={20} color={'#003359'}>Đội ngũ giáo viên chất lượng</Text>
                            <Text fontWeight={500}>Có trên 3 năm kinh nghiệm giảng dạy</Text>
                        </Box>
                    </Box>

                    <Box className='about_card' w={['20px', '20px', '20px', '300px', '300px', '300x']}>

                    </Box>

                    <Box className='about_card rounded-full border-2 p-5' textAlign={'center'} w={'100%'}  >
                        <Box className='about_card_c'>
                            <Text fontWeight={700} fontSize={20} color={'#003359'}>Hơn 500 bài giảng bổ ích</Text>
                            <Text fontWeight={500}>Lộ trình học rõ ràng, không lan man</Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex my={[2, 2, 2, 10, 10, 10]} flexDir={['column', 'column', 'row', 'row', 'row', 'row']} maxW={1000} mx={'auto'} justifyContent={'space-between'} gap={1}>
                    <Box className='about_card rounded-full border-2 p-5' textAlign={'center'} w={'100%'}  >
                        <Box className='about_card_c'>
                            <Text fontWeight={700} fontSize={20} color={'#003359'}>Hệ thống chi nhánh</Text>
                            <Text fontWeight={500}>5 cơ sở trên khắp Thành phố Thủ Đức</Text>
                        </Box>
                    </Box>

                    <Box className='about_card' w={['20px', '20px', '20px', '300px', '300px', '300x']}>

                    </Box>

                    <Box className='about_card rounded-full border-2 p-5' textAlign={'center'} w={'100%'}  >
                        <Box className='about_card_c'>
                            <Text fontWeight={700} fontSize={20} color={'#003359'}>1000+ học viên đã theo học</Text>
                            <Text fontWeight={500}>Cam kết 100% đầu ra với kết quả tốt</Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex flexDir={['column', 'column', 'row', 'row', 'row', 'row']} maxW={1000} mx={'auto'} justifyContent={'space-between'} gap={1}>
                    <Box className='about_card rounded-full border-2 p-5' textAlign={'center'} w={'100%'}  >
                        <Box className='about_card_c'>
                            <Text fontWeight={700} fontSize={20} color={'#003359'}>Luôn đồng hành cùng học viên</Text>
                            <Text fontWeight={500}>Đội ngũ trợ giảng luôn ở bên hỗ trợ cho bạn</Text>
                        </Box>
                    </Box>

                    <Box className='about_card' w={['20px', '20px', '20px', '300px', '300px', '300x']}>

                    </Box>

                    <Box className='about_card rounded-full border-2 p-5' textAlign={'center'} w={'100%'}  >
                        <Box className='about_card_c'>
                            <Text fontWeight={700} fontSize={20} color={'#003359'}>Các bài test định kỳ</Text>
                            <Text fontWeight={500}>Thi thử kiểm tra trình độ thường xuyên</Text>
                        </Box>
                    </Box>
                </Flex>
            </animated.div>
        </Box>
    );
}

export default About;
