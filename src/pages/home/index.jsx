import { Box, Center } from '@chakra-ui/react'
import './styles.scss'

import CarouselSlider from '../../components/CarouselSlider'
import ScrollAnimationComponent from './courses'
import VideoModal from '../../components/modalWelcome'
import About from './about'
import Staff from './staff'
import Register from './register'
import Feedback from './feedback'
import Hotline from './hotline'


const Homepage = () => {

  return (
    <Box>
      <Box className='carousel_slider' width={'100%'}  >
        <CarouselSlider />
      </Box>

      <Box zIndex={10} className='khoa_hoc bg-white min-h-[100vh] relative top-[-50px] rounded-t-[50px]' overflow={'hidden'}>
        <Box p={5} mt={20} >
          <About />
        </Box>

        <Box p={5} mt={40} >
          <ScrollAnimationComponent />
        </Box>
      </Box>

      <Center className='staff bg-[#f3f3f7]'>
        <Staff />
      </Center>

      <Box className='register mt-[50px] mb-[100px]'>
        <Register />
      </Box>

      <Center className='feedback bg-[#f3f3f7]'>
        <Feedback />
      </Center>

      <Box className='my-[50px]'>
        <Hotline />
      </Box>

      <VideoModal />
    </Box>
  )
}

export default Homepage
