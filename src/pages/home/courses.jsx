import { Box, Button, Flex, Grid, Image, Text, useDisclosure } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import './styles.scss'
import { useEffect, useState } from 'react';
import { CiStar } from 'react-icons/ci';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

function ScrollAnimationComponent() {
    const courses = [
        {
            id: 1,
            name: 'Khóa học dành cho người đi làm.',
            description: 'Bạn là người đã có công việc nhưng vẫn muốn học thêm tiếng anh để phát triển bản thân và thăng tiến trong công việc ?',
            time: '6 tháng',
            benefits: ['Được thực hành với người bản xứ',
                'Cố vấn học tập lên kế hoạch học tập dựa trên mục tiêu nghề nghiệp của bạn để giúp bạn luôn đi đúng hướng và có động lực học tiếng Anh.',
                'Phương pháp học tiếng Anh đã được chứng minh hiệu quả dành cho người bận rộn.'],
            image: 'https://i.imgur.com/nKp8D4O.jpeg'
        },
        {
            id: 2,
            name: 'Khóa học dành cho sinh viên.',
            description: 'Bạn là sinh viên và đang muốn cải thiện khả năng tiếng anh để thuận tiện hơn trong việc học và tương lai?',
            time: '6 tháng',
            benefits: ['Các hoạt động giúp kết nối các học viên và tối đa việc thực hành tiếng Anh với đa dạng chủ đề. Các hoạt động sẽ giúp bạn vừa học vừa chơi, tiếp thu hiệu quả, tối đa vận dụng tiếng Anh vào cuộc sống.',
                'Kết quả được đảm bảo với một khóa học tiếng Anh linh hoạt mà bạn có thể bắt đầu ngay khi bạn muốn.',
                'Sự kết hợp giữa các buổi tự học và học với đội ngũ giảng viên sẽ cung cấp giải pháp hỗ trợ và phản hồi khi bạn cần.'],
            image: 'https://i.imgur.com/V3uudj6.jpeg'
        },
        {
            id: 3,
            name: 'Khóa học Tiếng Anh giao tiếp',
            description: 'Bạn là người mất gốc hoặc muốn giao tiếp nhưng vẫn ngần ngại?',
            time: '6 tháng',
            benefits: ['Các lớp học nhỏ để tối ưu hóa sự hỗ trợ cá nhân và thời gian học cùng giáo viên.',
                'Cố vấn học tập sẽ đặt ra các mục tiêu học tập mang tính cá nhân hóa để giúp bạn có thêm nhiều đồng lực học tập và nhanh chóng đạt được mục tiêu đề ra.',
                'Phương pháp học tiếng Anh đã được chứng minh hiệu quả dành cho người bận rộn.'],
            image: 'https://i.imgur.com/41Vw5xq.jpeg'
        },
        {
            id: 4,
            name: 'Khóa học Tiếng Anh Online.',
            description: 'Vị trí địa lý khiến bạn gặp khó khăn trong con đường học tập? Titan English đã có sự lựa chọn dành riêng cho bạn.',
            time: '6 tháng',
            benefits: ['Các lớp học sĩ số nhỏ giúp bạn tối đa thực hành với giáo viên bản xứ',
                'Các cố vấn học tập giúp bạn thiết lập lộ trình học được cá nhân hóa, tiếp thêm động lực giúp bạn học tập đúng lộ trình.',
                'Phương pháp học giúp bạn đạt mục tiêu đề ra thông qua các lớp học trực tuyến và thói quen chủ động học tập.'],
            image: 'https://i.imgur.com/aVyZ9UU.jpeg'

        },
    ]
    const [showMore, setShowMore] = useState(false)
    const [contentShowMore, setContentShowMore] = useState(courses[0])
    const { isOpen, onOpen, onClose } = useDisclosure()


    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 }
    });

    const title = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(-100px)',
        config: { duration: 500 }
    });

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', updateScreenWidth);

        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, [])

    const handleShowMore = (item) => {
        setShowMore(true)
        setContentShowMore(item)

        if (screenWidth < 992) {
            onOpen()
        }
    }


    return (
        <Box>
            <animated.div style={title}>
                <Box textAlign={'center'} fontWeight={800} color={'#003359'} fontSize={40}>Các khóa học của chúng tôi</Box>
            </animated.div>
            <animated.div style={props} ref={ref}>
                <Box mt={20}>
                    <Flex maxW={1000} justifyContent={'center'} gap={10} m={'0 auto'} >
                        <Grid className='courses_left' minW={'50%'}
                            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']} gap={1} >
                            {courses.map((item) => {
                                return (
                                    <Box onClick={() => handleShowMore(item)} key={item.id} minW={'220px'} w={'100%'} className='relative overflow-hidden rounded-md'>
                                        <Image className='courses_img' objectFit={'cover'} w={'100%'} height={'100%'} src={item.image} alt='4' />
                                        <Box px={10} textAlign={'center'} bg={'rgba(0,0,0,0.5)'} w={'100%'} height={'20%'} className='absolute bottom-0 left-0 font-bold text-white flex justify-center items-center'>
                                            <Text >{item.name}</Text>
                                        </Box>
                                    </Box>
                                )
                            })}
                        </Grid>

                        {!showMore ?
                            <Box display={['none', 'none', 'none', 'block', 'block', 'block']} px={5} fontSize={[20, 22, 24, 26, 28, 30]} fontWeight={500} color={'#003359'} minW={'50%'} >
                                <Text>Với phương pháp học đã được kiểm chứng, chúng tôi đã giúp hàng triệu học viên thông thạo tiếng Anh kể từ năm 1972. Bất kể mục tiêu của bạn là làm việc, học tập, du lịch hay bất kì mục tiêu nào khác, chúng tôi sẽ giúp bạn đạt được kết quả mong muốn.</Text>
                            </Box>
                            :
                            <Box display={['none', 'none', 'none', 'block', 'block', 'block']} minH={400} minW={'50%'} >
                                <Text textAlign={'center'} color={'#003359'} fontWeight={800} fontSize={[18, 20, 22, 24, 26, 28]}>{contentShowMore.name}</Text>
                                <Text mt={10} fontWeight={500}>{contentShowMore.description}</Text>

                                {contentShowMore.benefits.map((item, index) => {
                                    return (
                                        <Flex my={5} key={index} fontWeight={500} gap={2}>
                                            <Box fontSize={30}>
                                                <CiStar />
                                            </Box>
                                            <Text>
                                                {item}
                                            </Text>
                                        </Flex>
                                    )
                                })}
                                <Box mt={10} fontSize={24} fontWeight={500}>Thời gian khóa học: {contentShowMore.time}</Box>
                            </Box>
                        }
                    </Flex>
                </Box>
            </animated.div>

            <Modal size={'3xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{contentShowMore.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{contentShowMore.description}</Text>

                        {contentShowMore.benefits.map((item, index) => {
                            return (
                                <Flex my={5} key={index} fontWeight={500} gap={2}>
                                    <Box fontSize={30}>
                                        <CiStar />
                                    </Box>
                                    <Text>
                                        {item}
                                    </Text>
                                </Flex>
                            )
                        })}

                        <Box mt={10} fontSize={24} fontWeight={500}>Thời gian khóa học: {contentShowMore.time}</Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Đóng
                        </Button>
                        <Button variant='ghost'>Tư vấn khóa học</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default ScrollAnimationComponent;
