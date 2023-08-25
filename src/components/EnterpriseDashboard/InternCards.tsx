
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Divider,
    SimpleGrid,
    Grid,
    GridItem,
    Spinner,
  } from '@chakra-ui/react'
import useInterns from '../../hooks/enterpriseAppHooks/useInterns'
  
  export default function InternCards() {


    const {data : interns, error, isLoading} = useInterns();

    return (

      <>
      {isLoading && <Spinner />}
      <Grid templateColumns='repeat(3, 1fr)' gap={2} >
      {interns?.map((intern) => (
      <GridItem key={intern.id} >
        <Center py={3}>
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
              size={'xl'}
              src='https://bit.ly/broken-link'
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {intern.name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              {intern.email}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}
              m={3}>
              {intern.speciality}
            </Text>
            <Divider />
            <Heading fontSize={'l'} fontFamily={'body'} m={3}>
              Topic : {intern.topicTitle}
            </Heading>
            <Divider />
            <Heading fontSize={'l'} fontFamily={'body'} m={3}>
              Supervisor : {intern.supervisorName}
            </Heading>
            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Contact
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Assign
              </Button>
            </Stack>
          </Box>
        </Center>
      </GridItem>
      ))}
      </Grid>
      </>
    )
  }
  