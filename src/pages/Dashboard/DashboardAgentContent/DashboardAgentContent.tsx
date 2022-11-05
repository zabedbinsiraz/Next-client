import React from 'react'
import DashboardAgentTop from './DashboardAgentTop/DashboardAgentTop';
import DashboardMyAgent from './DashboardMyAgent/DashboardMyAgent';

const DashboardAgentContent = () => {
  return (
    <div className='_dashboard_agent_content_inner'>
        <DashboardAgentTop/>
        <DashboardMyAgent/>
    </div>
  )
}

export default DashboardAgentContent;