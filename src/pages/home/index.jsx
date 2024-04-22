import { Box, Center } from '@chakra-ui/react'
import './styles.scss'

import CarouselSlider from '../../components/CarouselSlider'
import ScrollAnimationComponent from './courses'
import VideoModal from '../../components/modalWelcome'
import About from './about'
import Staff from './staff'
import Register from './register'


const Homepage = () => {

  return (
    <Box className='min-h-[100vh]'>
      <Box className='carousel_slider' width={'100%'} zIndex={1}  >
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

      <Box className='register min-h-[100vh] overflow-hidden mt-[40px]'>
        <Register />
      </Box>

      <VideoModal />
    </Box>
  )
}

export default Homepage
