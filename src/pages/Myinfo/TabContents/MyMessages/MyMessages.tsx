import React, { useState } from 'react'
import { Tabs } from 'antd'
import ReceiveTab from '../MyMessageTab/ReceiveTab';
import SentTab from '../MyMessageTab/SentTab';
const MyMessages = () => {
    const [isAgent, setIsAgent] = useState(false);

    return (
        <>
            <div className="_housiko_myads_search_line _housiko_mymessage_search_wrapper"></div>
                       
            <div className='_housiko_mymessage_cards'>
                <Tabs className='_housiko_mymessage_tabs_btn' defaultActiveKey="1">
                    <Tabs.TabPane className='_housiko_mymessage_received_btn' tab="Recieved" key="1">
                        <ReceiveTab/>
                    </Tabs.TabPane>
                    <Tabs.TabPane className='_housiko_mymessage_sent_btn' tab="Sent" key="2">
                        <SentTab/>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>
    )
}

export default MyMessages