import { Box, Text } from '@chakra-ui/react'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';



const Register = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const title = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-100px)',
        config: { duration: 1000 }
    });

    const form = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 }
    });




    return (
        <Box>
            <animated.div className={'w-[100%]'} style={title} ref={ref}>
                <Box textAlign={'center'} fontWeight={800} color={'#003359'} fontSize={[24, 28, 32, 36, 40]}>Đăng ký khóa học của
                    <Text color={'#dd5c29'}>
                        TITAN ENGLISH
                    </Text>
                </Box>
            </animated.div>

            <animated.div style={form} ref={ref}>

            </animated.div>
        </Box >
    )
}

export default Register
