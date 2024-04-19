import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Text,
    Box,
    DrawerOverlay,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Flex,
    Image,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { CiFacebook, CiMenuBurger, CiYoutube } from "react-icons/ci";

const DrawerSide = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const handleResize = () => {
        onClose();
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (index) => {
        setCurrentIndex(currentIndex === index ? null : index);
    };



    return (
        <>
            <Box ref={btnRef} onClick={onOpen} fontSize={40} color={'#dd5c29'}>
                <CiMenuBurger />
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'full'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Flex className="cursor-pointer" alignItems={'center'} height={50} >
                            <Image minW={'100px'} w={'100px'} transform={'scale(1.1)'} src="https://i.imgur.com/jQz0CwD.png" alt="Wibu Food" />

                            <Box className="text-white text-center" lineHeight={1}>
                                <Text className="text-[#dd5c29]" fontWeight={800} fontSize={20}>TITAN ENGLISH</Text>
                                <Text color={'black'} fontSize={14} letterSpacing={1.3} fontWeight={500}>BE YOUR OWN HERO</Text>
                            </Box>
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <Accordion allowToggle>
                            <AccordionItem onClick={() => handleClick(0)}>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' fontSize={24} fontWeight={500} flex='1' textAlign='left'
                                            color={currentIndex === 0 ? '#dc5b28' : 'black'} transition={'color 0.3s ease-in-out'}>
                                            Giới thiệu về TITAN ENGLISH
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} fontWeight={500} bg={'#3d4f78'} color={'gray'}>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Tiểu Sử</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Giảng Viên</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Mục Tiêu Của Chúng Tôi</Text>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem onClick={() => handleClick(1)}>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' fontSize={24} fontWeight={500} flex='1' textAlign='left'
                                            color={currentIndex === 1 ? '#dc5b28' : 'black'} transition={'color 0.3s ease-in-out'}>
                                            Chương trình
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} fontWeight={500} bg={'#3d4f78'} color={'gray'}>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Cấp độ</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Sách giáo khoa</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Bài tập về nhà</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Đánh giá năng lực</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Tiếp thêm động lực</Text>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem onClick={() => handleClick(2)}>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' fontSize={24} fontWeight={500} flex='1' textAlign='left'
                                            color={currentIndex === 2 ? '#dc5b28' : 'black'} transition={'color 0.3s ease-in-out'}>
                                            Hướng dẫn tuyển sinh
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} fontWeight={500} bg={'#3d4f78'} color={'gray'}>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Quy trình nhập học</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Giới thiệu bài kiểm tra trình độ</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Đăng ký kiểm tra trình độ</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Đăng ký lớp học</Text>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem onClick={() => handleClick(3)}>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' fontSize={24} fontWeight={500} flex='1' textAlign='left'
                                            color={currentIndex === 3 ? '#dc5b28' : 'black'} transition={'color 0.3s ease-in-out'}>
                                            Liên hệ với chúng tôi
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} fontWeight={500} bg={'#3d4f78'} color={'gray'}>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Fanpage</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Zalo</Text>
                                    <Text cursor={'pointer'} _hover={{ color: 'white' }} py={2}>Hotline</Text>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </DrawerBody>

                    <DrawerFooter display={'flex'} justifyContent={'center'}>
                        <Flex fontSize={36} alignItems={'center'} gap={10}>
                            <Box className="header_nav_right_option" color={'black'}>
                                <a href="https://www.youtube.com/channel/UCEhCtvC5bTnuoG6GI4dr3Fg" target="_blank">
                                    <CiYoutube />
                                </a>
                            </Box>

                            <Box className="header_nav_right_option" color={'black'}>
                                <a href="https://www.facebook.com/EnglishWithTITAN" target="_blank">
                                    <CiFacebook />
                                </a>
                            </Box>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer >
        </>
    )
}

export default DrawerSide