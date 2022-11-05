import React from 'react'
import { Link } from "react-router-dom";
import {SvgIcon} from '../../../Design/SvgIcon'

const DashboardAgentTop = () => {
  return (
    <div className="_dashboard_content_top">
        <div className="_dashboard_content_inner_left">
            <h2 className="_dashboard_content_inner_left_title">Welcome back <span>Manager</span></h2>
        </div>
        <div className="_dashboard_content_inner_right">
            <div className="_dashboard_content_inner_right_icon">
                <span className="_navbar_btn_ic">
                    <SvgIcon iconType={'homeicon'} />
                </span>
                <p className="_dashboard_content_inner_right_icon_para">x350</p>
            </div>
            <div className="_dashboard_content_inner_right_button">
                <Link to="" className="_dashboard_content_inner_right_button_link">
                    Top up Housikoins
                </Link>
            </div>
        </div>
    </div>
  )
}

export default DashboardAgentTop;