import { Box } from '@chakra-ui/react'
import './styles.scss'

import CarouselSlider from '../../components/CarouselSlider'
import ScrollAnimationComponent from './courses'
import VideoModal from '../../components/modalWelcome'
import About from './about'


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

      <VideoModal />
    </Box>
  )
}

export default Homepage
