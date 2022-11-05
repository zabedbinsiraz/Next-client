import React from 'react'
import DashboardAgentContent from './DashboardAgentContent/DashboardAgentContent';
import DashboardAgentSidebar from './DashboardAgentSidebar';

const DashboardAgent = () => {
  return (
    <div className="_dashboardAgent_wrapper_area">
        <div className="_dashboardAgent_wrap">
            <div className="_dashboardAgent_row">
                <DashboardAgentSidebar />
                <DashboardAgentContent />
            </div>
        </div>
    </div>
  )
}

export default DashboardAgent;
