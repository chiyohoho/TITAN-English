import { Box } from '@chakra-ui/react'
import './styles.scss'
import Header from './header'
import Footer from './footer'

const layout = ({ children }) => {

    return (
        <Box>
            <Header />

            <Box>
                {children}
            </Box>

            <Footer />
        </Box>
    )
}

export default layout
