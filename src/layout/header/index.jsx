import './styles.scss'

import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { CiFacebook, CiYoutube } from "react-icons/ci";
import DrawerSide from "../../components/drawer";
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  return (
    <Box zIndex={100} bg={scrollY > 20 ? 'white' : 'transparent'} transition={'background 0.3s ease-in-out'} pos={"fixed"} w={'100%'} maxH={'100px'} height={'100%'} className='header_nav' >
      <Box className='header_nav_margin' height={'100px'} maxW={'100vw'} m={'0 auto'} mt={scrollY > 20 ? 0 : 3} px={[2, 4, 6, 8, 10, 10]} boxShadow={scrollY > 20 ? 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px' : 'none'} >
        <Flex pos={'relative'} height={'100px'} justifyContent={'center'} alignItems={'center'}>

          <Flex className="cursor-pointer header_logo_left" alignItems={'center'} pos={'absolute'} left={-5} top={'50%'} transform={['scale(0.8)', 'scale(0.85)', 'scale(0.9)', 'scale(0.95)', 'scale(1)', 'scale(1)']}   >
            <Image minW={'100px'} w={'100px'} transform={'scale(1.5)'} src="https://i.imgur.com/jQz0CwD.png" alt="Wibu Food" />

            <Box zIndex={100} className="text-white text-center" lineHeight={1}>
              <Text className="text-[#dd5c29]" fontWeight={800} fontSize={20}>TITAN ENGLISH</Text>
              <Text className='text_logo' color={scrollY > 20 ? 'black' : 'white'} letterSpacing={0.3} fontWeight={500}>BE YOUR OWN HERO</Text>
            </Box>
          </Flex>

          <Box display={['none', 'none', 'none', 'none', 'block', 'block']} >
            <Flex justifyContent={'center'} alignItems={'center'}>

              <Box className="header_nav_option" color={scrollY > 20 ? 'black' : 'white'} pos={'relative'}>
                <Text>Giới thiệu</Text>

                <Flex className='header_nav_option_droplist_p' flexDir={'column'} pos={'absolute'} textAlign={'center'} >
                  <Text className='header_nav_option_droplist_c'>Tiểu sử</Text>
                  <Text className='header_nav_option_droplist_c'>Giảng viên</Text>
                  <Text className='header_nav_option_droplist_c'>Mục tiêu tương lai</Text>
                </Flex>
              </Box>

              <Box className="header_nav_option " color={scrollY > 20 ? 'black' : 'white'} pos={'relative'}>
                <Text>Chương trình</Text>

                <Flex className='header_nav_option_droplist_p' flexDir={'column'} pos={'absolute'} textAlign={'center'} >
                  <Text className='header_nav_option_droplist_c'>Cấp độ</Text>
                  <Text className='header_nav_option_droplist_c'>Sách giáo khoa</Text>
                  <Text className='header_nav_option_droplist_c'>Bài tập về nhà</Text>
                  <Text className='header_nav_option_droplist_c'>Đánh giá</Text>
                  <Text className='header_nav_option_droplist_c'>Tiếp động lực</Text>
                </Flex>
              </Box>

              <Box className="header_nav_option " color={scrollY > 20 ? 'black' : 'white'} pos={'relative'}>
                <Text>Hướng dẫn tuyển sinh</Text>

                <Flex className='header_nav_option_droplist_p' flexDir={'column'} pos={'absolute'} textAlign={'center'} >
                  <Text className='header_nav_option_droplist_c'>Quy trình nhập học</Text>
                  <Text className='header_nav_option_droplist_c'>Giới thiệu bài kiểm tra trình độ</Text>
                  <Text className='header_nav_option_droplist_c'>Đăng ký kiểm tra trình độ</Text>
                  <Text className='header_nav_option_droplist_c'>Đăng ký lớp học</Text>

                </Flex>
              </Box>

              {/* <Box className="header_nav_option " color={scrollY > 50 ? 'black' : 'white'} pos={'relative'}>
                <Text>Tin tức</Text>

                <Flex className='header_nav_option_droplist_p' flexDir={'column'} pos={'absolute'} textAlign={'center'} >
                  <Text className='header_nav_option_droplist_c'>Bài viết mới</Text>
                  <Text className='header_nav_option_droplist_c'>Thông tin tuyển dụng</Text>
                  <Text className='header_nav_option_droplist_c'>Chương trình khuyến mãi</Text>
                </Flex>
              </Box> */}

              <Box className="header_nav_option " color={scrollY > 20 ? 'black' : 'white'} pos={'relative'}>
                <Text>Liên hệ</Text>

                <Flex className='header_nav_option_droplist_p' flexDir={'column'} pos={'absolute'} textAlign={'center'} >
                  <Text className='header_nav_option_droplist_c'>Fanpage</Text>
                  <Text className='header_nav_option_droplist_c'>Zalo</Text>
                  <Text className='header_nav_option_droplist_c'>Hotline</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box pos={'absolute'} right={0} >
            <Box display={['none', 'none', 'none', 'none', 'block', 'block']}>
              <Flex fontSize={26} justifyContent={'flex-end'} gap={5}>
                <Box className="header_nav_right_option" color={scrollY > 20 ? 'black' : 'white'}>
                  <a href="https://www.youtube.com/channel/UCEhCtvC5bTnuoG6GI4dr3Fg" target="_blank">
                    <CiYoutube />
                  </a>
                </Box>

                <Box className="header_nav_right_option" color={scrollY > 20 ? 'black' : 'white'}>
                  <a href="https://www.facebook.com/EnglishWithTITAN" target="_blank">
                    <CiFacebook />
                  </a>
                </Box>
              </Flex>
            </Box>

            <Box display={['block', 'block', 'block', 'block', 'none', 'none']} float={'right'}>
              <DrawerSide />
            </Box>
          </Box>

        </Flex>
      </Box>
    </Box>
  )
}

export default Header
