import React from 'react'
import SidebarWithHeader from '../components/EnterpriseDashboard/SideBar/SideBar'
import TopicCard from '../components/EnterpriseDashboard/TopicCard'

const TopicsSection = () => {
  return (
    <SidebarWithHeader>
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
    </SidebarWithHeader>
  )
}

export default TopicsSection