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
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Ngân',
            certify: 'Cử nhân khoa ABC trường XYZ',
            experience: '3 năm kinh nghiệm',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 2,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Ngân 1',
            certify: 'Cử nhân khoa ABC trường XYZ',
            experience: '3 năm kinh nghiệm',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 3,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Ngân 2',
            certify: 'Cử nhân khoa ABC trường XYZ',
            experience: '3 năm kinh nghiệm',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 4,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Ngân 3',
            certify: 'Cử nhân khoa ABC trường XYZ',
            experience: '3 năm kinh nghiệm',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 5,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Ngân 4',
            certify: 'Cử nhân khoa ABC trường XYZ',
            experience: '3 năm kinh nghiệm',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 6,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Ngân 5',
            certify: 'Cử nhân khoa ABC trường XYZ',
            experience: '3 năm kinh nghiệm',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 7,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Ngân 6',
            certify: 'Cử nhân khoa ABC trường XYZ',
            experience: '3 năm kinh nghiệm',
            students: '1000+ học viên đã theo học'
        },
        {
            id: 8,
            avatar: 'https://i.imgur.com/P7RNUp3.jpeg',
            name: 'Ms. Ngân 7',
            certify: 'Cử nhân khoa ABC trường XYZ',
            experience: '3 năm kinh nghiệm',
            students: '1000+ học viên đã theo học'
        },
    ]

    const [showStaff, setShowStaff] = useState(null)
    const [isHovered, setIsHovered] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()


    const [ref, inView] = useInView({
        triggerOnce: false,
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
                <Flex className='staff_container' display={['none', 'flex', 'flex', 'flex', 'flex', 'flex']} w={[250, 370, 450, 500, 500, 500]} h={[250, 370, 450, 500, 500, 500]} >
                    {staffs.map((item) => (
                        <Box cursor={'pointer'} onClick={() => {
                            onOpen()
                            setShowStaff(item)
                        }}
                            onMouseEnter={() => {
                                setShowStaff(item)
                                setIsHovered(true)
                            }}

                            className='staff_list w-[100px] h-[100px]' key={item.id}>
                            <Image className='staff_list_img' src={item.avatar} alt={item.name} />
                        </Box>
                    ))}

                    <animated.div style={card}>
                        {showStaff &&
                            <Box onClick={onOpen} zIndex={100} className={`staff_card ${isHovered ? 'hovered' : ''}`} overflow={'hidden'} >
                                <Box w={150} height={150} overflow={'hidden'} rounded={'50%'} >
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

                <Box mt={10} display={['block', 'none', 'none', 'none', 'none', 'none']} rounded={10} overflow={'hidden'} w={'100%'} >
                    <StaffSlider staffs={staffs} />
                </Box>
            </animated.div>

            {showStaff &&
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{showStaff.name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Image rounded={10} src={showStaff.avatar} alt={showStaff.name} />

                            <Flex mt={5} fontSize={20} fontWeight={500} alignItems={'center'} gap={1}>
                                <CiStar size={30} />
                                <Text>{showStaff.certify}</Text>
                            </Flex>
                            <Flex mt={5} fontSize={20} fontWeight={500} alignItems={'center'} gap={1}>
                                <CiStar size={30} />
                                <Text>{showStaff.experience}</Text>
                            </Flex><Flex mt={5} fontSize={20} fontWeight={500} alignItems={'center'} gap={1}>
                                <CiStar size={30} />
                                <Text>{showStaff.students}</Text>
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
