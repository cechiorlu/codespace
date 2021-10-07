import {
  Flex,
  Box,
  Text,
  Image,
  Link,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import next from 'next'


const Index = () => {
  const router = useRouter()

  return (
    <Flex
      height='100vh'
      width='85%'
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bgColor='white'
      mx='auto'
    >
      {/* Header */}
      <Flex
        width='100%'
        justifyContent='space-between'
        pt="30px"
        alignItems='center'
      >
        <Flex width='400px' alignItems='center' justifyContent='space-between'>
          <Text> Logo </Text>
          <NextLink href="/support"><Link textStyle='link' _hover={{ color: "rgba(0, 0, 0, 1)" }}>Support</Link></NextLink>
          <NextLink href="/contact"><Link textStyle='link' _hover={{ color: "rgba(0, 0, 0, 1)" }}>Contact us</Link></NextLink>
          <NextLink href="/features"><Link textStyle='link' _hover={{ color: "rgba(0, 0, 0, 1)" }}>Features</Link></NextLink>
        </Flex>
        <Button onClick={() => {router.push('/register')}}>SIGN UP</Button>
      </Flex>
      {/* Header ends */}

      {/* Body */}
      <Flex
        width='100%'
        height='366px'
        my='auto'
        justifyContent="space-between"
      >
        <Box w="400px">
          <Text textStyle='h1'>Practice your coding skills</Text>
          <Text textStyle='' py="20px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci aperiam deserunt ex dolorum corrupti fuga error. Autem molestias dicta animi totam similique quasi, aliquam facere incidunt voluptatem laudantium culpa.
          </Text>
          <Flex justifyContent="space-between" >
            <Button variant="box-outline" w="48%" onClick={() => {router.push('/login')}}>LOG BACK IN</Button>
            <Button w="48%" onClick={() => {router.push('/register')}}>SIGN UP FOR FREE</Button>
          </Flex>
        </Box>

        <Image src='images/man-at-desk.png' width='462px' height='354px' />

      </Flex>

    </Flex >
  )
}

export default Index
