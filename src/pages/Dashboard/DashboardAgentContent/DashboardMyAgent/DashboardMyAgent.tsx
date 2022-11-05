import React from 'react'
import { Select } from 'antd';
import { SvgIcon } from '../../../Design/SvgIcon';
const { Option } = Select;

const DashboardMyAgent = () => {
  return (
    <div className='_dashboard_myagent_wrap'>
        <div className="_dashboard_myagent_inner_cont">
            <div className="_dashboard_myagent_inner_top">
                <div className="_dashboard_myagent_inner_top_select _last_list">
                    <p className="_dashboard_myagent_inner_top_select_txt">
                        Sort by: 
                    </p>
                    <div className="_dashboard_myagent_inner_select_rate">
                        <Select defaultValue="Rating" suffixIcon={<SvgIcon iconType={'myadsSelect'} />}>
                            <Option value="Rating 1">Rating1</Option>
                            <Option value="Rating 2">Rating2</Option>
                        </Select>
                    </div>
                </div>

                <div className="_dashboard_myagent_inner_lists">
                    <ul className='_dashboard_myagent_inner_list'> 
                        <li className='_dashboard_myagent_inner_list_item'>
                            <span className='_dashboard_myagent_inner_list_item_first_span'>All agents</span>
                        </li>
                        <li className='_dashboard_myagent_inner_list_item'>
                            <span className='_dashboard_myagent_inner_list_item_span'>Properties: 12</span>
                        </li>
                        <li className='_dashboard_myagent_inner_list_item'>
                            <span className='_dashboard_myagent_inner_list_item_span'>Views: 2548</span>
                        </li>
                        <li className='_dashboard_myagent_inner_list_item'>
                            <span className='_dashboard_myagent_inner_list_item_span'>Interactions: 458</span>
                        </li>
                        <li className='_dashboard_myagent_inner_list_item'>
                            <span className='_dashboard_myagent_inner_list_item_span'>Contacts: 6</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="_dashboard_myagent_inner_card_wrap">
                <div className="_dashboard_myagent_inner_card">
                    <div className="_dashboard_myagent_inner_card_left">
                        <div className="_dashboard_myagent_inner_card_left_img">
                            <img src="assets/images/dashboard-agent-profile-img.png" 
                            alt="icon" className='_dashboard_myagent_inner_card_left_prof_img' />
                            <button className='_dashboard_myagent_inner_card_left_img_btn'>
                                <SvgIcon iconType={'myadsSelect'} />
                            </button>
                        </div>
                        <div className="_dashboard_myagent_inner_card_left_prof_info">
                            <h6 className='_dashboard_myagent_inner_card_left_prof_info_txt'>
                                Jakob Stanton
                            </h6>
                            <ul className='_dashboard_myagent_inner_card_left_prof_rating'>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                                        <path fill="#FFBF00" d="M4.763 2.418C5.287 1.111 5.549.457 6 .457c.45 0 .713.654 1.238 1.961l.024.06c.296.74.444 1.109.746 1.333.302.225.698.26 1.491.331l.143.013c1.298.116 1.946.174 2.085.587s-.343.85-1.306 1.727l-.322.293c-.488.443-.731.665-.845.956-.021.054-.039.11-.053.166-.074.303-.003.625.14 1.269l.044.2c.263 1.183.394 1.775.165 2.03a.667.667 0 0 1-.32.198c-.332.09-.801-.293-1.74-1.058-.617-.503-.926-.754-1.28-.81a1.333 1.333 0 0 0-.42 0c-.354.056-.663.307-1.28.81-.939.765-1.408 1.148-1.74 1.058a.667.667 0 0 1-.32-.198c-.229-.255-.098-.847.165-2.03l.044-.2c.143-.644.215-.966.14-1.269a1.334 1.334 0 0 0-.053-.166c-.114-.29-.357-.513-.845-.956l-.322-.293C.616 5.593.134 5.155.273 4.742c.139-.413.787-.47 2.085-.587l.143-.013c.793-.07 1.189-.106 1.49-.33.303-.225.45-.595.747-1.333l.025-.061Z"/>
                                    </svg>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                                        <path fill="#FFBF00" d="M4.763 2.418C5.287 1.111 5.549.457 6 .457c.45 0 .713.654 1.238 1.961l.024.06c.296.74.444 1.109.746 1.333.302.225.698.26 1.491.331l.143.013c1.298.116 1.946.174 2.085.587s-.343.85-1.306 1.727l-.322.293c-.488.443-.731.665-.845.956-.021.054-.039.11-.053.166-.074.303-.003.625.14 1.269l.044.2c.263 1.183.394 1.775.165 2.03a.667.667 0 0 1-.32.198c-.332.09-.801-.293-1.74-1.058-.617-.503-.926-.754-1.28-.81a1.333 1.333 0 0 0-.42 0c-.354.056-.663.307-1.28.81-.939.765-1.408 1.148-1.74 1.058a.667.667 0 0 1-.32-.198c-.229-.255-.098-.847.165-2.03l.044-.2c.143-.644.215-.966.14-1.269a1.334 1.334 0 0 0-.053-.166c-.114-.29-.357-.513-.845-.956l-.322-.293C.616 5.593.134 5.155.273 4.742c.139-.413.787-.47 2.085-.587l.143-.013c.793-.07 1.189-.106 1.49-.33.303-.225.45-.595.747-1.333l.025-.061Z"/>
                                    </svg>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                                        <path fill="#FFBF00" d="M4.763 2.418C5.287 1.111 5.549.457 6 .457c.45 0 .713.654 1.238 1.961l.024.06c.296.74.444 1.109.746 1.333.302.225.698.26 1.491.331l.143.013c1.298.116 1.946.174 2.085.587s-.343.85-1.306 1.727l-.322.293c-.488.443-.731.665-.845.956-.021.054-.039.11-.053.166-.074.303-.003.625.14 1.269l.044.2c.263 1.183.394 1.775.165 2.03a.667.667 0 0 1-.32.198c-.332.09-.801-.293-1.74-1.058-.617-.503-.926-.754-1.28-.81a1.333 1.333 0 0 0-.42 0c-.354.056-.663.307-1.28.81-.939.765-1.408 1.148-1.74 1.058a.667.667 0 0 1-.32-.198c-.229-.255-.098-.847.165-2.03l.044-.2c.143-.644.215-.966.14-1.269a1.334 1.334 0 0 0-.053-.166c-.114-.29-.357-.513-.845-.956l-.322-.293C.616 5.593.134 5.155.273 4.742c.139-.413.787-.47 2.085-.587l.143-.013c.793-.07 1.189-.106 1.49-.33.303-.225.45-.595.747-1.333l.025-.061Z"/>
                                    </svg>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                                        <path fill="#FFBF00" d="M4.763 2.418C5.287 1.111 5.549.457 6 .457c.45 0 .713.654 1.238 1.961l.024.06c.296.74.444 1.109.746 1.333.302.225.698.26 1.491.331l.143.013c1.298.116 1.946.174 2.085.587s-.343.85-1.306 1.727l-.322.293c-.488.443-.731.665-.845.956-.021.054-.039.11-.053.166-.074.303-.003.625.14 1.269l.044.2c.263 1.183.394 1.775.165 2.03a.667.667 0 0 1-.32.198c-.332.09-.801-.293-1.74-1.058-.617-.503-.926-.754-1.28-.81a1.333 1.333 0 0 0-.42 0c-.354.056-.663.307-1.28.81-.939.765-1.408 1.148-1.74 1.058a.667.667 0 0 1-.32-.198c-.229-.255-.098-.847.165-2.03l.044-.2c.143-.644.215-.966.14-1.269a1.334 1.334 0 0 0-.053-.166c-.114-.29-.357-.513-.845-.956l-.322-.293C.616 5.593.134 5.155.273 4.742c.139-.413.787-.47 2.085-.587l.143-.013c.793-.07 1.189-.106 1.49-.33.303-.225.45-.595.747-1.333l.025-.061Z"/>
                                    </svg>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                        <path stroke="#FFBF00" d="M6.763 4.418C7.287 3.111 7.549 2.457 8 2.457c.45 0 .713.654 1.238 1.961l.024.06c.296.74.444 1.109.746 1.333.302.225.698.26 1.491.331l.143.013c1.298.116 1.946.174 2.085.587s-.343.85-1.306 1.727l-.322.293c-.488.443-.731.665-.845.956-.021.054-.039.11-.053.166-.075.303-.003.625.14 1.269l.044.2c.263 1.183.394 1.775.165 2.03a.667.667 0 0 1-.32.198c-.332.09-.801-.293-1.74-1.058-.617-.503-.926-.754-1.28-.81a1.336 1.336 0 0 0-.42 0c-.354.056-.663.307-1.28.81-.939.765-1.408 1.148-1.74 1.058a.667.667 0 0 1-.32-.198c-.229-.255-.098-.847.165-2.03l.044-.2c.143-.644.215-.966.14-1.269a1.334 1.334 0 0 0-.053-.166c-.114-.29-.357-.513-.845-.956l-.322-.293c-.963-.876-1.445-1.314-1.306-1.727.139-.413.788-.47 2.085-.587l.143-.013c.793-.07 1.189-.106 1.49-.33.303-.225.45-.595.747-1.333l.025-.061Z"/>
                                    </svg>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <span className='_dashboard_myagent_inner_card_left_prof_rating_itm_sp'>(50)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="_dashboard_myagent_inner_card_left_feat">
                            <ul className='_dashboard_myagent_inner_card_left_feat_list'>
                                <li className='_dashboard_myagent_inner_card_left_feat_itm_f'>
                                    <span className='_dashboard_myagent_inner_card_left_feat_itm_sp1'>
                                        Properties: 12
                                    </span>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_feat_itm'>
                                    <span className='_dashboard_myagent_inner_card_left_feat_itm_sp2'>
                                        Active 7
                                    </span>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_feat_itm'>
                                    <span className='_dashboard_myagent_inner_card_left_feat_itm_sp2'>
                                        SOLD 4
                                    </span>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_feat_itm'>
                                    <span className='_dashboard_myagent_inner_card_left_feat_itm_sp2'>
                                        DELISTED 1
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="_dashboard_myagent_inner_card_right">
                        <div className="_dashboard_myagent_inner_card_right_cont">
                            <div className="_dashboard_myagent_inner_card_right_cont_first">
                                <p className='_dashboard_myagent_inner_card_right_cont_first1'>Views: 2548</p>
                                <p className='_dashboard_myagent_inner_card_right_cont_first2'>above average</p>
                            </div>

                            <div className="_dashboard_myagent_inner_card_right_cont_first">
                                <p className='_dashboard_myagent_inner_card_right_cont_first1'>Interactions: 458</p>
                                <p className='_dashboard_myagent_inner_card_right_cont_first2 _inner_card_right_color'>below average</p>
                            </div>

                            <div className="_dashboard_myagent_inner_card_right_cont_first">
                                <p className='_dashboard_myagent_inner_card_right_cont_first1'>chats: 6</p>
                                <p className='_dashboard_myagent_inner_card_right_cont_first2 _inner_card_right_color'>Unread: 3</p>
                            </div>
                        </div>
                        <div className="_dashboard_myagent_inner_card_right_btns">
                            <div className="_dashboard_myagent_inner_card_right_image">
                                <img src="assets/images/dashboard-agent-carbon-rocket.png" 
                                alt="icon" 
                                className='_dashboard_myagent_inner_card_right_image_tag' />
                                <p className='_dashboard_myagent_inner_card_right_image_cont'>x350</p>
                            </div>
                            <button className='_dashboard_myagent_inner_card_right_btn'>
                                <SvgIcon iconType={'plus'} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="_dashboard_myagent_inner_card_wrap">
                <div className="_dashboard_myagent_inner_card">
                    <div className="_dashboard_myagent_inner_card_left">
                        <div className="_dashboard_myagent_inner_card_left_img">
                            <img src="assets/images/dashboard-agent-profile-img1.png" 
                            alt="icon" className='_dashboard_myagent_inner_card_left_prof_img' />
                            <button className='_dashboard_myagent_inner_card_left_img_btn'>
                                <SvgIcon iconType={'myadsSelect'} />
                            </button>
                        </div>
                        <div className="_dashboard_myagent_inner_card_left_prof_info">
                            <h6 className='_dashboard_myagent_inner_card_left_prof_info_txt'>
                                Jakob Stanton
                            </h6>
                            <ul className='_dashboard_myagent_inner_card_left_prof_rating'>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                                        <path fill="#FFBF00" d="M4.763 2.418C5.287 1.111 5.549.457 6 .457c.45 0 .713.654 1.238 1.961l.024.06c.296.74.444 1.109.746 1.333.302.225.698.26 1.491.331l.143.013c1.298.116 1.946.174 2.085.587s-.343.85-1.306 1.727l-.322.293c-.488.443-.731.665-.845.956-.021.054-.039.11-.053.166-.074.303-.003.625.14 1.269l.044.2c.263 1.183.394 1.775.165 2.03a.667.667 0 0 1-.32.198c-.332.09-.801-.293-1.74-1.058-.617-.503-.926-.754-1.28-.81a1.333 1.333 0 0 0-.42 0c-.354.056-.663.307-1.28.81-.939.765-1.408 1.148-1.74 1.058a.667.667 0 0 1-.32-.198c-.229-.255-.098-.847.165-2.03l.044-.2c.143-.644.215-.966.14-1.269a1.334 1.334 0 0 0-.053-.166c-.114-.29-.357-.513-.845-.956l-.322-.293C.616 5.593.134 5.155.273 4.742c.139-.413.787-.47 2.085-.587l.143-.013c.793-.07 1.189-.106 1.49-.33.303-.225.45-.595.747-1.333l.025-.061Z"/>
                                    </svg>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                                        <path fill="#FFBF00" d="M4.763 2.418C5.287 1.111 5.549.457 6 .457c.45 0 .713.654 1.238 1.961l.024.06c.296.74.444 1.109.746 1.333.302.225.698.26 1.491.331l.143.013c1.298.116 1.946.174 2.085.587s-.343.85-1.306 1.727l-.322.293c-.488.443-.731.665-.845.956-.021.054-.039.11-.053.166-.074.303-.003.625.14 1.269l.044.2c.263 1.183.394 1.775.165 2.03a.667.667 0 0 1-.32.198c-.332.09-.801-.293-1.74-1.058-.617-.503-.926-.754-1.28-.81a1.333 1.333 0 0 0-.42 0c-.354.056-.663.307-1.28.81-.939.765-1.408 1.148-1.74 1.058a.667.667 0 0 1-.32-.198c-.229-.255-.098-.847.165-2.03l.044-.2c.143-.644.215-.966.14-1.269a1.334 1.334 0 0 0-.053-.166c-.114-.29-.357-.513-.845-.956l-.322-.293C.616 5.593.134 5.155.273 4.742c.139-.413.787-.47 2.085-.587l.143-.013c.793-.07 1.189-.106 1.49-.33.303-.225.45-.595.747-1.333l.025-.061Z"/>
                                    </svg>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                                        <path fill="#FFBF00" d="M4.763 2.418C5.287 1.111 5.549.457 6 .457c.45 0 .713.654 1.238 1.961l.024.06c.296.74.444 1.109.746 1.333.302.225.698.26 1.491.331l.143.013c1.298.116 1.946.174 2.085.587s-.343.85-1.306 1.727l-.322.293c-.488.443-.731.665-.845.956-.021.054-.039.11-.053.166-.074.303-.003.625.14 1.269l.044.2c.263 1.183.394 1.775.165 2.03a.667.667 0 0 1-.32.198c-.332.09-.801-.293-1.74-1.058-.617-.503-.926-.754-1.28-.81a1.333 1.333 0 0 0-.42 0c-.354.056-.663.307-1.28.81-.939.765-1.408 1.148-1.74 1.058a.667.667 0 0 1-.32-.198c-.229-.255-.098-.847.165-2.03l.044-.2c.143-.644.215-.966.14-1.269a1.334 1.334 0 0 0-.053-.166c-.114-.29-.357-.513-.845-.956l-.322-.293C.616 5.593.134 5.155.273 4.742c.139-.413.787-.47 2.085-.587l.143-.013c.793-.07 1.189-.106 1.49-.33.303-.225.45-.595.747-1.333l.025-.061Z"/>
                                    </svg>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                                        <path fill="#FFBF00" d="M4.763 2.418C5.287 1.111 5.549.457 6 .457c.45 0 .713.654 1.238 1.961l.024.06c.296.74.444 1.109.746 1.333.302.225.698.26 1.491.331l.143.013c1.298.116 1.946.174 2.085.587s-.343.85-1.306 1.727l-.322.293c-.488.443-.731.665-.845.956-.021.054-.039.11-.053.166-.074.303-.003.625.14 1.269l.044.2c.263 1.183.394 1.775.165 2.03a.667.667 0 0 1-.32.198c-.332.09-.801-.293-1.74-1.058-.617-.503-.926-.754-1.28-.81a1.333 1.333 0 0 0-.42 0c-.354.056-.663.307-1.28.81-.939.765-1.408 1.148-1.74 1.058a.667.667 0 0 1-.32-.198c-.229-.255-.098-.847.165-2.03l.044-.2c.143-.644.215-.966.14-1.269a1.334 1.334 0 0 0-.053-.166c-.114-.29-.357-.513-.845-.956l-.322-.293C.616 5.593.134 5.155.273 4.742c.139-.413.787-.47 2.085-.587l.143-.013c.793-.07 1.189-.106 1.49-.33.303-.225.45-.595.747-1.333l.025-.061Z"/>
                                    </svg>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                        <path stroke="#FFBF00" d="M6.763 4.418C7.287 3.111 7.549 2.457 8 2.457c.45 0 .713.654 1.238 1.961l.024.06c.296.74.444 1.109.746 1.333.302.225.698.26 1.491.331l.143.013c1.298.116 1.946.174 2.085.587s-.343.85-1.306 1.727l-.322.293c-.488.443-.731.665-.845.956-.021.054-.039.11-.053.166-.075.303-.003.625.14 1.269l.044.2c.263 1.183.394 1.775.165 2.03a.667.667 0 0 1-.32.198c-.332.09-.801-.293-1.74-1.058-.617-.503-.926-.754-1.28-.81a1.336 1.336 0 0 0-.42 0c-.354.056-.663.307-1.28.81-.939.765-1.408 1.148-1.74 1.058a.667.667 0 0 1-.32-.198c-.229-.255-.098-.847.165-2.03l.044-.2c.143-.644.215-.966.14-1.269a1.334 1.334 0 0 0-.053-.166c-.114-.29-.357-.513-.845-.956l-.322-.293c-.963-.876-1.445-1.314-1.306-1.727.139-.413.788-.47 2.085-.587l.143-.013c.793-.07 1.189-.106 1.49-.33.303-.225.45-.595.747-1.333l.025-.061Z"/>
                                    </svg>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_prof_rating_itm'>
                                    <span className='_dashboard_myagent_inner_card_left_prof_rating_itm_sp'>(9)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="_dashboard_myagent_inner_card_left_feat">
                            <ul className='_dashboard_myagent_inner_card_left_feat_list'>
                                <li className='_dashboard_myagent_inner_card_left_feat_itm_f'>
                                    <span className='_dashboard_myagent_inner_card_left_feat_itm_sp1'>
                                        Properties: 12
                                    </span>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_feat_itm'>
                                    <span className='_dashboard_myagent_inner_card_left_feat_itm_sp2'>
                                        Active 7
                                    </span>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_feat_itm'>
                                    <span className='_dashboard_myagent_inner_card_left_feat_itm_sp2'>
                                        SOLD 4
                                    </span>
                                </li>
                                <li className='_dashboard_myagent_inner_card_left_feat_itm'>
                                    <span className='_dashboard_myagent_inner_card_left_feat_itm_sp2'>
                                        DELISTED 1
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="_dashboard_myagent_inner_card_right">
                        <div className="_dashboard_myagent_inner_card_right_cont">
                            <div className="_dashboard_myagent_inner_card_right_cont_first">
                                <p className='_dashboard_myagent_inner_card_right_cont_first1'>Views: 2548</p>
                                <p className='_dashboard_myagent_inner_card_right_cont_first2'>above average</p>
                            </div>

                            <div className="_dashboard_myagent_inner_card_right_cont_first">
                                <p className='_dashboard_myagent_inner_card_right_cont_first1'>Interactions: 458</p>
                                <p className='_dashboard_myagent_inner_card_right_cont_first2 _inner_card_right_color'>below average</p>
                            </div>

                            <div className="_dashboard_myagent_inner_card_right_cont_first">
                                <p className='_dashboard_myagent_inner_card_right_cont_first1'>chats: 6</p>
                                <p className='_dashboard_myagent_inner_card_right_cont_first2 _inner_card_right_color'>Unread: 3</p>
                            </div>
                        </div>
                        <div className="_dashboard_myagent_inner_card_right_btns">
                            <div className="_dashboard_myagent_inner_card_right_image">
                                <img src="assets/images/dashboard-agent-carbon-rocket.png" 
                                alt="icon" 
                                className='_dashboard_myagent_inner_card_right_image_tag' />
                                <p className='_dashboard_myagent_inner_card_right_image_cont'>x350</p>
                            </div>
                            <button className='_dashboard_myagent_inner_card_right_btn'>
                                <SvgIcon iconType={'plus'} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="_dashboard_myagent_inner_card_select_cont">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="_housiko_myproduct_left_card_head">
                                <div className="_dashboard_myagent_inner_top_select _last_list">
                                    <p className="_dashboard_myagent_inner_top_select_txt">
                                        Sort by: 
                                    </p>
                                    <div className="_dashboard_myagent_inner_select_rate">
                                        <Select defaultValue="Position" suffixIcon={<SvgIcon iconType={'myadsSelect'} />}>
                                            <Option value="Position 1">Position1</Option>
                                            <Option value="Position 2">Position2</Option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="_housiko_dashboard_agent_left_cards">
                                <div className="_housiko_myproduct_left_card">
                                    <div className="_housiko_myproduct_left_card_img">
                                        <img src="assets/images/myproduct-card-img.png" alt="myproduct-card" 
                                        className='_housiko_myproduct_left_card_img_tag' />
                                        <div className='_housiko_mymessage_card_item_img_txt'>
                                            <p className='_housiko_mymessage_card_item_img_txt1'>
                                                REF:5236
                                            </p>
                                        </div>
                                    </div>
                                    <div className="_housiko_myproduct_left_card_cont">
                                        <button className='_housiko_dashboard_agent_fb_btn'>
                                            Feedback
                                        </button>
                                        <span className="_housiko_listing_card_item_content_txt_inner">
                                            <h3 className="_housiko_listing_card_item_content_inner_title">
                                                $25,000
                                            </h3>
                                        </span>
                                        <p className="_housiko_listing_card_item_content_p">
                                            HUF 10,000,000
                                        </p>
                                        <div className="_housiko_listing_card_item_type">
                                            <p className='_housiko_listing_card_item_type_p'>
                                                Luxury Vila
                                                <span className='_housiko_listing_card_item_type_inner'>
                                                    <span className="_housiko_listing_card_item_type_inner_ic">
                                                        <SvgIcon iconType={'location'} w={18} h={18} />
                                                    </span>
                                                    <span className="_housiko_listing_card_item_type_inner_txt">
                                                        101 Valay Road, NY
                                                    </span>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="_housiko_listing_card_item_feature_wrap">
                                            <ul className="_housiko_listing_card_item_feature_ul _housiko_myproduct_card_item">
                                                <li className="_housiko_listing_card_item_feature_li">
                                                    <span className="_housiko_listing_card_item_feature_li_ic">
                                                        <SvgIcon iconType={'room'} />
                                                    </span>
                                                    <span className="_housiko_listing_card_item_feature_li_txt">
                                                        6 Total rooms
                                                    </span>
                                                </li>
                                                <li className="_housiko_listing_card_item_feature_li">
                                                    <span className="_housiko_listing_card_item_feature_li_ic">
                                                        <SvgIcon iconType={'area'} />
                                                    </span>
                                                    <span className="_housiko_listing_card_item_feature_li_txt">
                                                        3000 m2
                                                    </span>
                                                </li>
                                                <li className="_housiko_listing_card_item_feature_li">
                                                    <a href="#0" className='_housiko_myproduct_left_card_cont_link'>Full View</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>           
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="_housiko_dashboard_agent_right_cards">
                                <div className="_housiko_dashboard_agent_right_card_start">
                                    <div className="_housiko_myproduct_card_bottm">
                                        <div className="_housiko_myads_card_center_bottm_list">
                                            <p className='_housiko_myads_card_center_bottm_list_txt'>POSITION: 8</p>
                                        </div>
                                        <div className="_housiko_myads_card_center_bottm_list">
                                            <p className='_housiko_myads_card_center_bottm_list_txt1'>Views: 2548</p>
                                        </div>
                                        <div className="_housiko_myads_card_center_bottm_list _last_list">
                                            <p className="_housiko_myads_card_center_bottm_list_txt1">
                                                Interactions: 
                                            </p>
                                            <div className="_navbar_btn3 _housiko_myads_card_center_bottm_list_select">
                                                <Select defaultValue="458" suffixIcon={<SvgIcon iconType={'myadsSelect'}/>}>
                                                    <Option value="Interaction 1">480</Option>
                                                    <Option value="Interaction 2">408</Option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="_housiko_myads_card_center_bottm_list">
                                            <p className='_housiko_myads_card_center_bottm_list_txt1 _housiko_dashboardAgent_bottm_list'>Chats: 6 
                                            <span className='_housiko_dashboardAgent_bottm_list_sp'>(1)</span></p>
                                            <p className='_housiko_myads_card_center_bottm_list_txt1'>Visits: 1</p>
                                        </div>
                                    </div>  
                                </div>
                                <div className="_housiko_dashboard_agent_right_card_end">
                                    <div className="_housiko_dashboard_agent_right_card_end_btns">
                                        <button className='_housiko_dashboard_agent_right_card_end_btn'>
                                            See products
                                        </button>

                                        <p className='_housiko_dashboard_agent_right_card_end_btn_status'>Status: 
                                            <span>Active</span> 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardMyAgent;