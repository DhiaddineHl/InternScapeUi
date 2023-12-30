import { Card, CardHeader, Flex, Heading, Spacer, Button, CardBody, Stack, StackDivider, Text, Box } from '@chakra-ui/react';
import TopicDeleteButton from '../TopicDeleteButton';



interface TopicCardElementProps {

    id : number,
    title : string,
    internName : string,
    supervisorName : string,
    isAvailable : boolean,
    duration : string,
    setDescription : () => void

}

const TopicCardElement = ({id, title, internName, supervisorName, isAvailable, duration, setDescription} : TopicCardElementProps) => {
  return (
    <>
    <Card m={3} id={id.toString()} >
          <CardHeader>
        <Flex>
          <Heading size='md'>{title}</Heading>
          <Spacer />
          <TopicDeleteButton topicId={id} />
        </Flex>
          </CardHeader>
          <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs'>
              Supervisor : {supervisorName}
            </Heading>
            <Text pt='2' fontSize='sm'>
            </Text>
          </Box>
          <Box>
            <Heading size='xs'>
              Intern : {internName}
            </Heading>
            <Text pt='2' fontSize='sm'>
            </Text>
          </Box>
          <Box>
            <Heading size='xs'>
              Duration : {duration}
            </Heading>
            <Text pt='2' fontSize='sm'>
            </Text>
          </Box>
          
          <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                variant={'outline'}
                colorScheme='green'
                fontSize={'sm'}
                _focus={{
                  bg: 'gray.200',
                }}
                isDisabled={!isAvailable}
                >
                Assign
              </Button>
              <Button
                flex={1}
                variant={'outline'}
                colorScheme='blue'
                fontSize={'sm'}
                _focus={{
                  bg: 'gray.200',
                }}
                onClick={() => {
                    setDescription();
                }}
                >
                Description
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                variant={'outline'}
                colorScheme='purple'
                _focus={{
                  bg: 'gray.200',
                }}>
                Edit
              </Button>
            </Stack>
        </Stack>
          </CardBody>
        </Card> 
    </>
  )
}

export default TopicCardElement