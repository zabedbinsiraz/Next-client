import React from 'react'
import DashboardTop from './DashboardTop/DashboardTop';
import MyProducts from './MyProduct/MyProducts';

function DashboardContent() {
    return(
        <div className="_dashboard_content_inner">
            <DashboardTop />
            <MyProducts />
        </div>
    )
}
export default DashboardContent;