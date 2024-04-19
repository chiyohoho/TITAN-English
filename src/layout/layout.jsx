import { Box } from '@chakra-ui/react'
import './styles.scss'
import Header from './header'
import { Fragment } from 'react'
import Footer from './footer'

const layout = ({ children }) => {

    return (
        <Box>
            <Header />

            <Fragment>
                {children}
            </Fragment>

            <Footer />
        </Box>
    )
}

export default layout
