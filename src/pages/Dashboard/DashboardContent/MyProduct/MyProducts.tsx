import React from 'react'
import { Tabs } from 'antd';
import Buy from '../TabContent/Buy';

function MyProducts() {
    return(
        <div className="_dashboard_myproduct_area">
            <div className="_dashboard_myproduct_area_tab">
                <Tabs className="_dashboard_myproduct_area_tab_list" defaultActiveKey="1">
                    <Tabs.TabPane className="_tab_link" tab="Buy" key="1">
                        <Buy />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Rent" key="2">
                    Content of Tab Pane 2
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Share" key="3">
                    Content of Tab Pane 3
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default MyProducts