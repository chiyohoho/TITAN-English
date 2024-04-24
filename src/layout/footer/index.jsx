import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react"
import './styles.scss'
import { CiFacebook, CiYoutube } from "react-icons/ci"

const Footer = () => {
  return (
    <Box className="footer py-[10px] bg-[#c0c0c3]" >
      <Flex alignItems={'center'} justifyContent={'space-between'} pr={10} >
        <Flex alignItems={'center'}>
          <Box>
            <Image minW={'100px'} w={'100px'} transform={'scale(1.5)'} src="https://i.imgur.com/jQz0CwD.png" alt="Titan English" />
          </Box>
          <Text fontSize={[16, 18, 20, 22, 24, 26]} fontWeight={800} color={'#dd5c29'}>
            Anh Ngữ Titan
          </Text>
        </Flex>

        <Flex>
          <Flex fontSize={26} justifyContent={'flex-end'} gap={5}>
            <Box color='black' fontSize={30} _hover={{ transform: 'scale(1.5)' }} transition={'transform 0.3s ease-in-out'}>
              <a href="https://www.youtube.com/channel/UCEhCtvC5bTnuoG6GI4dr3Fg" target="_blank">
                <CiYoutube />
              </a>
            </Box>

            <Box color={'black'} fontSize={30} _hover={{ transform: 'scale(1.5)' }} transition={'transform 0.3s ease-in-out'} >
              <a href="https://www.facebook.com/EnglishWithTITAN" target="_blank">
                <CiFacebook />
              </a>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex mb={10} px={10} justifyContent={'space-between'} >
        <Box>
          <Text className="address">
            CEO : Nguyễn Thế Thanh
          </Text>

          <Text className="address">Update info</Text>

          <Text className="address">Update info</Text>


          <Text className="address">Update info</Text>

        </Box>

        <Stack color={'#003359'} fontSize={[12, 13, 14, 15, 16, 17]}>
          <Text className="address">Cơ sở 1: 135/1, Đường 14, Phường Tăng Nhơn Phú B, Quận 9</Text>
          <Text className="address">Cơ sở 2: số 24, đường 21, Phường Linh Chiểu, Thủ Đức </Text>
          <Text className="address">Cơ sở 3: 38, đường 7, Phường Linh Trung, Thủ Đức</Text>
          <Text className="address">Cơ sở 4: Tòa nhà Papaya - Quận Bình Thạnh</Text>
          <Text className="address">Cơ sở 5: 447K, Lê Văn Việt, Phường Tăng Nhơn Phú A, Quận 9 </Text>
        </Stack>
      </Flex>

    </Box>
  )
}

export default Footer
