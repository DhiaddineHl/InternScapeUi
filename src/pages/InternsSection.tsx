import React from 'react'
import SidebarWithHeader from '../components/EnterpriseDashboard/SideBar/SideBar'
import InternCard from '../components/EnterpriseDashboard/InternCard'

const InternsSection = () => {
  return (
    <SidebarWithHeader>
        <InternCard />
        <InternCard />
        <InternCard />
        <InternCard />
    </SidebarWithHeader>
  )
}

export default InternsSection