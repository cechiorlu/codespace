import {
  Link as ChakraLink,
  Flex,
  Box,
  Text,
  Image,
  Link,
  Button,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Container } from '../components/Container'
import next from 'next'


const Index = () => (
  <Flex
    height='100vh'
    width='80%'
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    bgColor='white'
    mx='auto'
  >
    <Flex
      width='100%'
      justifyContent='flex-start'
      alignItems='center'
    >
      <Text> Logo </Text>
      <Flex width='300px' alignItems='center' justifyContent='flex-start'>
        <Link>Support</Link>
        <Link>Contact us</Link>
        <Link>Features</Link>
      </Flex>
      <Link>SIGN UP</Link>
    </Flex>
    <Flex
      width='100%'
    >
      <Box>
        <Text textStyle='h1'>Practice your coding skills</Text>
        <Text textStyle=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci aperiam deserunt ex dolorum corrupti fuga error. Autem molestias dicta animi totam similique quasi, aliquam facere incidunt voluptatem laudantium culpa.
        </Text>
        <Flex>
          <Button>LOG BACK IN</Button>
          <Button>SIGN UP FOR FREE</Button>
        </Flex>
      </Box>

      <Image src='' />

    </Flex>

  </Flex >
)

export default Index
