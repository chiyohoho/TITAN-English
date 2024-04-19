import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './router'
import layout from './layout/layout'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Routes>
            {publicRoutes.map((item, index) => {
              const Page = item.component
              const Layout = item.layout || layout
              return (
                <Route key={index} path={item.path} element={<Layout><Page /></Layout>} />
              )
            })}
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>

  )
}

export default App
