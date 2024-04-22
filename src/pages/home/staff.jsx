import { Box, Button, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import StaffSlider from '../../components/StaffSlider';
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

const Staff = () => {
    const staffs = [
        {
            id: 1,
            avatar: 'https://i.imgur.com/iR80MvA.png',
            name: 'Mr. Thanh',
            graduate: 'Founder & CEO Trung tâm anh ngữ Titan',
            certify: 'Chứng chỉ IELTS 7.5, TOEIC 900+',
            experience: '7 năm kinh nghiệm giảng dạy TOEIC và IELTS',
            students: '3000+ học viên đã theo học'
        },
        {
            id: 2,
            avatar: 'https://i.imgur.com/dAS6RhM.jpeg',
            name: 'Ms. Ái Duyên',
            graduate: 'Cử nhân ngôn ngữ Anh - ĐH FPT TP.HCM',
            certify: 'Chứng chỉ TOEIC 900+',
            experience: '2 năm kinh nghiệm giảng dạy TOEIC và giao tiếp quốc tế',
            students: '100+ học viên đã theo học'
        },
        {
            id: 3,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Mai Hương',
            graduate: 'Cử nhân ngôn ngữ Anh - ĐH Ngân Hàng TP.HCM',
            certify: 'Chứng chỉ TOEIC 900+',
            experience: '4 năm kinh nghiệm giảng dạy TOEIC 4 kỹ năng và giao tiếp quốc tế',
            students: '100+ học viên đã theo học'
        },
        {
            id: 4,
            avatar: 'https://i.imgur.com/JdeFlkl.jpeg',
            name: 'Mr. Quang Minh',
            graduate: 'Cử nhân ngôn ngữ Anh - ĐH Ngân Hàng TP.HCM',
            certify: 'Chứng chỉ TOEIC 900+',
            experience: '7 năm kinh nghiệm giảng dạy TOEIC 4 kỹ năng và giao tiếp quốc tế',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 5,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Minh Tâm',
            graduate: 'Giảng viên khoa tiếng anh trường ĐH Bách Khoa TP.HCM',
            certify: 'Chứng chỉ C1 - HCMUTE, C1-Kettering University',
            experience: '4 năm kinh nghiệm giảng dạy',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 6,
            avatar: 'https://i.imgur.com/93Qan0O.jpeg',
            name: 'Ms. Ngọc Trang',
            graduate: 'Thạc sĩ giáo dục liên kết ECU-Úc',
            certify: 'Chứng chỉ IELTS 7.5, TOEIC 990',
            experience: '6 năm kinh nghiệm giảng dạy',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 7,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Huyền Trang',
            graduate: 'Cử nhân chuyên ngành ngôn ngữ Anh - UTE',
            certify: 'Chứng chỉ TOEIC 900+',
            experience: '5 năm kinh nghiệm giảng dạy và giao tiếp quốc tế',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 8,
            avatar: 'https://i.imgur.com/7ma3WGm.jpeg',
            name: 'Ms. Mộng Cầm',
            graduate: 'Cử nhân kinh tế ĐH Tài chính & Marketing',
            certify: 'Chứng chỉ TOEIC 900+',
            experience: '2 năm kinh nghiệm giảng dạy',
            students: '150+ học viên đã theo học'
        },
        {
            id: 9,
            avatar: 'https://i.imgur.com/NwOhcW7.jpeg',
            name: 'Ms. Ly Ngô',
            graduate: 'Cử nhân chuyên ngành ngôn ngữ anh - UTE',
            certify: 'Chứng chỉ TOEIC 900+, TOEIC S&W 350+, C1-HCMUTE',
            experience: '4 năm kinh nghiệm giảng dạy',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 10,
            avatar: 'https://i.imgur.com/has23Bj.png',
            name: 'Ms. Thiên Kim',
            graduate: 'Cử nhân chuyên ngành ngôn ngữ anh - ĐH XH&NV TP.HCM',
            certify: 'Chứng chỉ TOEIC 900+, IELTS tương đương C1',
            experience: '3 năm kinh nghiệm giảng dạy TOEIC và giao tiếp',
            students: '300+ học viên đã theo học'
        },
        {
            id: 11,
            avatar: 'https://i.imgur.com/Ty2dNEs.jpeg',
            name: 'Mr. Thành Đạt',
            graduate: 'Cử nhân chuyên ngành Kinh Tế',
            certify: 'Chứng chỉ TOEIC 900+',
            experience: '4 năm kinh nghiệm giảng dạy TOEIC',
            students: '500+ học viên đã theo học'
        },
        {
            id: 12,
            avatar: 'https://i.imgur.com/tGXHrd2.jpeg',
            name: 'Mr. Sơn Lâm',
            graduate: 'Cử nhân chuyên ngành Kinh Tế - ĐH Luật TP.HCM',
            certify: 'Chứng chỉ TOEIC 900+',
            experience: '4 năm kinh nghiệm giảng dạy TOEIC',
            students: '500+ học viên đã theo học'
        },
        {
            id: 13,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Kim Ngân',
            graduate: 'Cử nhân ngôn ngữ anh - ĐH HUTECH TP.HCM',
            certify: 'Chứng chỉ TOEIC 900+',
            experience: '4 năm kinh nghiệm giảng dạy TOEIC',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 14,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Nhi',
            graduate: 'Cử nhân kinh tế - UTE',
            certify: 'Chứng chỉ TOEIC 900+',
            experience: '1 năm kinh nghiệm giảng dạy TOEIC',
            students: '100+ học viên đã theo học'
        },
    ]

    const [showStaff, setShowStaff] = useState(null)
    const [isHovered, setIsHovered] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()


    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const title = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-100px)',
        config: { duration: 1000 }
    });

    const circle = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 }
    });

    const card = useSpring({
        from: { transform: 'scale(0)' },
        to: { transform: 'scale(1)' },
        config: { duration: 300 },
        reset: true,
    });



    return (
        <Box>
            <animated.div className={'w-[100%]'} style={title} ref={ref}>
                <Box textAlign={'center'} fontWeight={800} color={'#003359'} fontSize={[24, 28, 32, 36, 40]}>Đội ngũ giáo viên của
                    <Text color={'#dd5c29'}>TITAN ENGLISH</Text>
                </Box>
            </animated.div>

            <animated.div style={circle} ref={ref}>
                <Box display={['none', 'none', 'block', 'block', 'block', 'block']}>
                    <Flex className='staff_container' w={500} height={500} >
                        {staffs.map((item) => {
                            return (
                                <Box cursor={'pointer'} onClick={() => {
                                    onOpen()
                                    setShowStaff(item)
                                }}
                                    onMouseEnter={() => {
                                        setShowStaff(item)
                                        setIsHovered(true)
                                    }}

                                    className='staff_list' key={item.id}>
                                    <Image className='staff_list_img' src={item.avatar} alt={item.name} />
                                </Box>
                            )
                        })}

                        <animated.div style={card}>
                            {showStaff &&
                                <Box onClick={onOpen} zIndex={100} className={`staff_card ${isHovered ? 'hovered' : ''}`} overflow={'hidden'} >
                                    <Box border={'2px solid #dd5c29'} w={150} height={150} overflow={'hidden'} rounded={'50%'} >
                                        <Image objectFit={'cover'} w={'100%'} height={'100%'} src={showStaff.avatar} alt={showStaff.name} />
                                    </Box >
                                    <Box textAlign={'center'}>
                                        <Text fontWeight={700} color={'#003359'}>{showStaff.name}</Text>
                                    </Box>
                                </Box>}
                        </animated.div>

                        <Box className='line1'></Box>
                        <Box className='line2'></Box>
                    </Flex>
                </Box>

                <Box px={5} mt={10} display={['block', 'block', 'none', 'none', 'none', 'none']} rounded={10} overflow={'hidden'} w={'100%'} >
                    <StaffSlider staffs={staffs} />
                </Box>
            </animated.div>

            {showStaff &&
                <Modal size={'sm'} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{showStaff.name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Image height={300} w={'100%'} objectFit={'cover'} rounded={10} src={showStaff.avatar} alt={showStaff.name} />

                            <Flex my={2} fontWeight={500} gap={5}>
                                <Box fontSize={30}>
                                    <CiStar />
                                </Box>
                                <Text fontSize={16}>{showStaff.graduate}</Text>
                            </Flex>

                            <Flex my={2} fontWeight={500} gap={5}>
                                <Box fontSize={30}>
                                    <CiStar />
                                </Box>
                                <Text fontSize={16}>{showStaff.certify}</Text>
                            </Flex>

                            <Flex my={2} fontWeight={500} gap={5}>
                                <Box fontSize={30}>
                                    <CiStar />
                                </Box>
                                <Text fontSize={16}>{showStaff.experience}</Text>
                            </Flex>

                            <Flex my={2} fontWeight={500} gap={5}>
                                <Box fontSize={30}>
                                    <CiStar />
                                </Box>
                                <Text fontSize={16}>{showStaff.students}</Text>
                            </Flex>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost'>Đăng ký lớp của {showStaff.name}</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            }

        </Box >
    )
}

export default Staff
