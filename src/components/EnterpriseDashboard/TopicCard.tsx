import { Card, CardHeader, CardBody,Text, CardFooter, Box, Heading, Stack, StackDivider, Button, Grid, GridItem } from '@chakra-ui/react'
import useTopics from '../../hooks/enterpriseAppHooks/useTopics'


const TopicCard = () => {


  const {data : topics, error, isLoading} = useTopics();


  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={2} >

    {topics?.map(topic => (



      <GridItem>
        <Card m={3} >
          <CardHeader>
        <Heading size='md'>{topic.title}</Heading>
          </CardHeader>
          <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Discription :
            </Heading>
            <Text pt='2' fontSize='sm'>
              {topic.description}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Supervisor :
            </Heading>
            <Text pt='2' fontSize='sm'>

            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Intern :
            </Heading>
            <Text pt='2' fontSize='sm'>

            </Text>
          </Box>
          <Stack mt={8} direction={'row'} spacing={4}>
              <Button
              isDisabled={!topic.isAvailable}
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Assign
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
                Edit
              </Button>
            </Stack>
        </Stack>
          </CardBody>
        </Card>
      </GridItem>
    ))}

    </Grid>
  )
}

export default TopicCard