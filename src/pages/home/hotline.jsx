import { Box, Flex, Text, } from '@chakra-ui/react'
import { useSpring, animated } from '@react-spring/web';
import { CiCircleCheck } from 'react-icons/ci';
import { useInView } from 'react-intersection-observer';


const Hotline = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const title = useSpring({
        opacity: inView ? 1 : 0,
        // transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000 }
    });

    const title1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000 },
        delay: 100
    });

    const title2 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000 },
        delay: 300
    });

    const title3 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000, },
        delay: 500

    });

    const form = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(50px)',
        config: { duration: 1000 },
        delay: 700
    });

    const subText = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000 },
        delay: 900
    });




    return (
        <Box px={5} overflow={'hidden'}>
            <animated.div style={title} ref={ref}>
                <Flex justifyContent={'center'}>
                    <Flex flexDir={['column', 'column', 'row', 'row', 'row', 'row']} justifyContent={'center'} fontWeight={600} color={'#003359'} gap={[2, 2, 20, 20, 20, 20]} >
                        <animated.div style={title1} ref={ref} className='flex items-center gap-1'>
                            <Box fontSize={30}>
                                <CiCircleCheck />
                            </Box>

                            <Text>
                                Tư vấn khóa học
                            </Text>
                        </animated.div>

                        <animated.div style={title2} ref={ref} className='flex items-center gap-1'>
                            <Box fontSize={30}>
                                <CiCircleCheck />
                            </Box>

                            <Text>
                                Lộ trình và học phí
                            </Text>
                        </animated.div>

                        <animated.div style={title3} ref={ref} className='flex items-center gap-1'>
                            <Box fontSize={30}>
                                <CiCircleCheck />
                            </Box>

                            <Text>
                                Hợp tác & tài trợ
                            </Text>
                        </animated.div>
                    </Flex>
                </Flex>
            </animated.div>

            <animated.div style={form} ref={ref}>
                <Box textAlign={'center'} fontWeight={800} fontSize={[45, 50, 55, 60, 65, 70]} color={'#dd5c29'} >
                    0395 994 976
                </Box>
            </animated.div>

            <animated.div style={subText} ref={ref}>
                <Text textAlign={'center'} fontSize={[15, 16, 17, 18, 19, 20]} fontWeight={500}>
                    từ 08:00 đến 22:00 các ngày trong tuần
                </Text>
            </animated.div>
        </Box >
    )
}

export default Hotline
