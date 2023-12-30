import SidebarWithHeader from '../components/EnterpriseDashboard/SideBar/SideBar'
import TopicGrid from '../components/EnterpriseDashboard/Topics/TopicGrid'
import TopicDescriptionModal from '../components/EnterpriseDashboard/Topics/TopicDescriptionModal';
import TopicCreationButton from '../components/EnterpriseDashboard/Topics/TopicCreationButton';

const TopicsSection = () => {

  return (
    <SidebarWithHeader>
    <TopicCreationButton />
    <TopicDescriptionModal />
      <TopicGrid />
    </SidebarWithHeader>
  )
}

export default TopicsSection