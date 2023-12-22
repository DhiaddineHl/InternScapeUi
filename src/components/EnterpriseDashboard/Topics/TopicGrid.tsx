import {Button, Grid, GridItem, Spinner} from '@chakra-ui/react'
import useTopics from '../../../hooks/enterpriseAppHooks/useTopics'
import TopicDescriptionModal from '../TopicDescriptionModal';
import TopicModalVisibility from '../../../stores/TopicModalVisibility';
import TopicIdSetter from '../../../stores/TopicIdSetter';
import TopicAssigningModalVisibility from '../../../stores/TopicAssigningModalVisibility';
import TopicAssigningModal from '../TopicAssigningModal';
import TopicCreationModalVisibility from '../../../stores/TopicCreationModalVisibility';
import TopicCreationModal from '../TopicCreationModal';
import useTopicCreation from '../../../hooks/enterpriseAppHooks/useTopicCreation';
import TopicDeletionConfiramationModalVisibility from '../../../stores/TopicDeletionConfirmationModalVisibility';
import TopicDeleteConfiramtionModal from '../TopicDeleteConfiramtionModal';
import TopicCardElement from './TopicCardElement';
import Test from './Test';
import useTopicDescription from '../../../hooks/enterpriseAppHooks/useTopicDescription';
import TopicDescriptionModalStore from '../../../stores/TopicDescriptionModalStore';

const TopicGrid = () => {



  const {data : topics, error, isLoading} = useTopics();
  const createTopic = useTopicCreation();
  const {isOpenForTopic, onOpenForTopic, onCloseForTopic} = TopicAssigningModalVisibility();
  const {isDeleteTopicOpen, onCloseForTopicDelete, onOpenForTopicDelete} = TopicDeletionConfiramationModalVisibility();
  const topicModalDescription = TopicDescriptionModalStore();



    const setDescription = (topicId : number) => {
      const descriptionContent = topics?.find(topic => topic.id === topicId)?.description;
      descriptionContent ? topicModalDescription.setContent(descriptionContent) : <p>Error loading the topic description</p>
    }

    


  return (
    <>
    {/* {isLoading && <Spinner />}
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
              </Button> */}

    <Grid templateColumns='repeat(2, 1fr)' gap={2} >
    {topics?.map(topic => (
      <GridItem  key={topic.id} >
        <TopicCardElement
        id={topic.id}
        title={topic.title}
        internName={topic.internName}
        supervisorName={topic.supervisorName}
        isAvailable={topic.isAvailable}
        duration={topic.duration}
        setDescription={() => {
          setDescription(topic.id)
          topicModalDescription.onOpen()
        }}
        />
      </GridItem>
    ))}
    </Grid>
    </>
  )
}

export default TopicGrid