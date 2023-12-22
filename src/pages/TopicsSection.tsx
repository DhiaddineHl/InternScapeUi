import SidebarWithHeader from '../components/EnterpriseDashboard/SideBar/SideBar'
import TopicGrid from '../components/EnterpriseDashboard/Topics/TopicGrid'
import { Button } from '@chakra-ui/react'
import TopicCreationModalVisibility from '../stores/TopicCreationModalVisibility';
import TopicCreationModal from '../components/EnterpriseDashboard/TopicCreationModal';
import TopicDescriptionModalStore from '../stores/TopicDescriptionModalStore';
import TopicDescriptionModal from '../components/EnterpriseDashboard/TopicDescriptionModal';

const TopicsSection = () => {

  const createTopic = TopicCreationModalVisibility();
  // const topicDescription = TopicDescriptionModalStore();


  return (
    <SidebarWithHeader>
    <TopicCreationModal />
    <TopicDescriptionModal />
          <Button
                onClick={createTopic.onOpenTopicCreation}
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
      <TopicGrid />
    </SidebarWithHeader>
  )
}

export default TopicsSection