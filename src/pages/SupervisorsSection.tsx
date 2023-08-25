import React from 'react'
import SidebarContent from '../components/EnterpriseDashboard/SideBar/SideBarContetnt'
import SupervisorCard from '../components/EnterpriseDashboard/SupervisorCard'
import SidebarWithHeader from '../components/EnterpriseDashboard/SideBar/SideBar'

const SupervisorsSection = () => {
  return (
   <SidebarWithHeader>
    <SupervisorCard />
   </SidebarWithHeader> 
  )
}

export default SupervisorsSection