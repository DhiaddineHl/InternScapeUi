import { Card, CardHeader, CardBody,Text, Box, Heading, Stack, StackDivider, Button, Grid, GridItem, Spinner, Flex, Spacer } from '@chakra-ui/react'
import useTopics from '../../hooks/enterpriseAppHooks/useTopics'
import { DeleteIcon } from '@chakra-ui/icons'
import TopicDescriptionModal from './TopicDescriptionModal';
import TopicModalVisibility from '../../stores/TopicModalVisibility';
import TopicIdSetter from '../../stores/TopicIdSetter';
import TopicAssigningModalVisibility from '../../stores/TopicAssigningModalVisibility';
import TopicAssigningModal from './TopicAssigningModal';
import TopicCreationModalVisibility from '../../stores/TopicCreationModalVisibility';
import TopicCreationModal from './TopicCreationModal';
import useTopicCreation from '../../hooks/enterpriseAppHooks/useTopicCreation';
import { useForm } from 'react-hook-form';
import TopicDeletionConfiramationModalVisibility from '../../stores/TopicDeletionConfirmationModalVisibility';
import TopicDeleteConfiramtionModal from './TopicDeleteConfiramtionModal';

const TopicCard = () => {



  const {data : topics, error, isLoading} = useTopics();
  const createTopic = useTopicCreation();

  const {onOpen, isOpen} = TopicModalVisibility();
  const {isOpenForTopic, onOpenForTopic, onCloseForTopic} = TopicAssigningModalVisibility();
  const {isTopicCreationOpen, onOpenTopicCreation} = TopicCreationModalVisibility();
  const {isDeleteTopicOpen, onCloseForTopicDelete, onOpenForTopicDelete} = TopicDeletionConfiramationModalVisibility();
    
  const {setId, topicId} = TopicIdSetter();


  return (
    <>
    {isLoading && <Spinner />}
    {isOpen && <TopicDescriptionModal />}
    {isOpenForTopic && <TopicAssigningModal />}
    {isTopicCreationOpen && <TopicCreationModal />}
    {isDeleteTopicOpen && <TopicDeleteConfiramtionModal />}
    <Button
                onClick={onOpenTopicCreation}
                flex={1}
                variant={'outline'}
                colorScheme='blue'
                fontSize={'m'}
                _focus={{
                  bg: 'blue.400',
                  color : 'white'
                }}>
                Add topic
              </Button>
    <Grid templateColumns='repeat(2, 1fr)' gap={2} >
    {topics?.map(topic => (
      <GridItem  key={topic.id} >
        <Card m={3} >
          <CardHeader>
        <Flex>
          <Heading size='md'>{topic.title}</Heading>
          <Spacer />
          <Button onClick={() => {
            setId(topic.id);
            onOpenForTopicDelete();
          }} colorScheme='red'>
            <DeleteIcon />
          </Button>
        </Flex>
          </CardHeader>
          <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs'>
              Supervisor :
            </Heading>
            <Text pt='2' fontSize='sm'>
              {topic.supervisorName}
            </Text>
          </Box>
          <Box>
            <Heading size='xs'>
              Intern :
            </Heading>
            <Text pt='2' fontSize='sm'>
              {topic.internName}
            </Text>
          </Box>
          <Box>
            <Heading size='xs'>
              Duration :
            </Heading>
            <Text pt='2' fontSize='sm'>
              {topic.duration}
            </Text>
          </Box>
          
          <Stack mt={8} direction={'row'} spacing={4}>
              <Button
              onClick={() => {
                setId(topic.id)
                onOpenForTopic()
              }
              }
              isDisabled={!topic.isAvailable}
                flex={1}
                variant={'outline'}
                colorScheme='green'
                fontSize={'sm'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Assign
              </Button>
              <Button
              onClick={() => {
                setId(topic.id);
                console.log(topicId);
                onOpen()
              }}
                flex={1}
                variant={'outline'}
                colorScheme='blue'
                fontSize={'sm'}
                _focus={{
                  bg: 'gray.200',
                }}>
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
      </GridItem>
    ))}

    </Grid>
    </>
  )
}

export default TopicCard