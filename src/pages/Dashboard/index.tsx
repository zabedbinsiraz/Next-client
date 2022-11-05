import React from 'react'
import DashboardContent from './DashboardContent/DashboardContent'
import DashboardSidebar from './DashboardSidebar'

const Dashboard = () => {
  return (
    <div className="_dashboard_wrapper_area">
        <div className="_dashboard_wrap">
            <div className="_dashboard_row">
                <DashboardSidebar />
                <DashboardContent />
            </div>
        </div>
    </div>
  )
}

export default Dashboard