import { Input, Select } from "antd";
import { useState } from "react";
import { SvgIcon } from "../../../../components/Design/SvgIcon";
import {
  ExtraPopover,
  FloorDropdown,
  PriceDropdown,
  PrintDropdown,
  TotalRoomDropdown,
} from "../../../../components/Dropdowns/Dropdowns";
import { ListingCarouselOne } from "../../../Listing/ListingCarousel";

const { Option } = Select;
function MyAds() {
  const [isAgent, setisAgent] = useState(true);
  return (
    <div className="_housiko_myads_search_wrapper">
      <div className="_housiko_myads_search_line"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            {/* mb-3 d-flex align-items-center justify-content-between */}
            <div className="_housiko_myads_title_wrap">
              <h6 className="_housiko_myads_cards_txt mb-3">My Ads</h6>
              <div className="_housiko_myads_add_porperty_btn_wrap">
                <button className="_housiko_myads_add_porperty_btn _navbar_btn">
                  + Add Property
                </button>
              </div>
            </div>
            <div className="_housiko_myads_search_select_list_wrap mb-3 d-flex align-items-center justify-content-between"></div>
            <div className="_housiko_myads_search_select_list">
              <div className="_housiko_myads_search _housiko_myads_search_list_space">
                <Input
                  className="_housiko_myads_search_inpt"
                  placeholder="Search by reference"
                  prefix={<SvgIcon iconType={"myadsSearch"} />}
                />
              </div>
              <div className="_housiko_myads_select _housiko_myads_select_wd1 _housiko_myads_search_list_space">
                <PriceDropdown />
              </div>
              <div className="_housiko_myads_select _housiko_myads_search_list_space">
                <FloorDropdown />
              </div>
              <div className="_housiko_myads_select _housiko_myads_select_wd3 _housiko_myads_search_list_space">
                <TotalRoomDropdown />
              </div>
            </div>
            <div className="_housiko_listing_top_filter_wrap">
              <p className="_housiko_listing_top_filter_txt">Sort by:</p>
              <div className="_housiko_listing_top_filter _navbar_btn3">
                <Select
                  defaultValue="Newest"
                  style={
                    {
                      // gap: '0 10px'
                    }
                  }
                  suffixIcon={<SvgIcon iconType={"caret-down"} w={14} h={14} />}
                >
                  <Option value="option1">Newest</Option>
                  <Option value="option2">Older</Option>
                </Select>
              </div>
            </div>
            <div className="_housiko_myads_cards_wrap">
              <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                  <div className="_housiko_listing_card_item _housiko_listing_card_item_gray">
                    <div className="_housiko_listing_card_item_img_wrap">
                      <div className="_housiko_listing_card_item_img_content _housiko_listing_card_item_img_content_single">
                        <div className="_housiko_listing_card_item_img_slide_wrap ListingCarouselOne">
                          <ListingCarouselOne />
                          <div className="_housiko_listing_card_item_img_total_slide">
                            <p className="_housiko_listing_card_item_img_seen _housiko_listing_card_item_img_total_slide_p">
                              1/10
                            </p>
                          </div>
                          <div className="_housiko_listing_card_item_img_tag_wrap">
                            <p className="_housiko_listing_card_item_img_category _housiko_listing_card_item_img_cat1">
                              Virtual Tour
                            </p>
                            <p className="_housiko_listing_card_item_img_seen">
                              Seen
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_housiko_listing_card_item_content">
                      <div className="_housiko_listing_card_item_content_top">
                        <h3 className="_housiko_listing_card_item_content_title">
                          Directly from owner
                        </h3>
                        <img
                          src="assets/images/myads-card-txt-ic.svg"
                          alt="logo-card"
                          className="_housiko_listing_card_item_content_img_logo1"
                        />
                      </div>
                      <div className="_housiko_listing_card_item_content_bottom">
                        <div className="_housiko_listing_card_item_content_txt">
                          <span className="_housiko_listing_card_item_content_txt_inner myads_inner_txt">
                            <h3 className="_housiko_listing_card_item_content_inner_title">
                              $25,000
                            </h3>
                            <span className="_housiko_myfav_card_item_content_txt_inner">
                              <SvgIcon iconType={"share"} />
                              <p className="_housiko_myfav_card_item_content_txt_inner_para">
                                Share
                              </p>
                            </span>
                          </span>
                          <div className="_housiko_myfav_card_item_content_para">
                            <p className="_housiko_listing_card_item_content_p">
                              HUF 10,000,000
                            </p>
                            <p className="_housiko_myfav_card_item_content_p">
                              Posted: more than 30 days ago
                            </p>
                          </div>
                          <div className="_housiko_listing_card_item_type">
                            <p className="_housiko_listing_card_item_type_p">
                              Luxury Vila
                              <span className="_housiko_listing_card_item_type_inner">
                                <span className="_housiko_listing_card_item_type_inner_ic">
                                  <SvgIcon
                                    iconType={"location"}
                                    w={18}
                                    h={18}
                                  />
                                </span>
                                <span className="_housiko_listing_card_item_type_inner_txt">
                                  101 Valay Road, NY
                                </span>
                              </span>
                            </p>
                          </div>
                          <div className="_housiko_listing_card_item_feature_wrap">
                            <ul className="_housiko_listing_card_item_feature_ul">
                              <li className="_housiko_listing_card_item_feature_li">
                                <span className="_housiko_listing_card_item_feature_li_ic">
                                  <SvgIcon iconType={"room"} />
                                </span>
                                <span className="_housiko_listing_card_item_feature_li_txt">
                                  6 Total rooms
                                </span>
                              </li>
                              <li className="_housiko_listing_card_item_feature_li">
                                <span className="_housiko_listing_card_item_feature_li_ic">
                                  <SvgIcon iconType={"area"} />
                                </span>
                                <span className="_housiko_listing_card_item_feature_li_txt">
                                  3000 m2
                                </span>
                              </li>
                              <li className="_housiko_listing_card_item_feature_li">
                                <span className="_housiko_listing_card_item_feature_li_ic">
                                  <SvgIcon iconType={"floor"} />
                                </span>
                                <span className="_housiko_listing_card_item_feature_li_txt">
                                  2nd Floor
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="_housiko_listing_card_item_tag_wrap">
                            <ExtraPopover />
                          </div>
                          <div className="_housiko_listing_card_item_desc_wrap">
                            <p className="_housiko_listing_card_item_desc_txt">
                              Lörem ipsum tasigförsamhet fören elektropol.
                              Lavöpreskapet mining om vusk, i kus. Lörem ipsum
                              tasigförsamhet.
                            </p>
                          </div>
                          <div className="_housiko_listing_card_item_bottom_btn_wrap">
                            <ul className="_housiko_listing_card_item_bottom_btn_ul">
                              <li className="_housiko_listing_card_item_bottom_btn_li">
                                <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _msg_btn">
                                  <span className="_housiko_listing_card_item_bottom_btn_ic">
                                    <SvgIcon iconType={"chat"} color={"#fff"} />
                                  </span>
                                  <span className="_housiko_listing_card_item_bottom_btn_txt">
                                    Chat
                                  </span>
                                </button>
                              </li>
                              <li className="_housiko_listing_card_item_bottom_btn_li">
                                {!isAgent && (
                                  <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _myads_whatsapp_btn">
                                    <span className="_housiko_listing_card_item_bottom_btn_ic">
                                      <SvgIcon
                                        iconType={"whatsapp"}
                                        w={24}
                                        h={22}
                                        color={"#30B742"}
                                      />
                                    </span>
                                    <span className="_housiko_myads_card_item_bottom_btn_txt">
                                      915 233 266
                                    </span>
                                  </button>
                                )}
                              </li>
                            </ul>
                            <ul className="_housiko_listing_card_item_bottom_btn_ul _housiko_listing_card_item_bottom_btn_ul2">
                              <li className="_housiko_listing_card_item_bottom_btn_li">
                                <button className="_housiko_listing_card_item_bottom_btn">
                                  <span className="_housiko_listing_card_item_bottom_btn_ic">
                                    <SvgIcon iconType={"fav"} />
                                  </span>
                                  <span className="_housiko_listing_card_item_bottom_btn_txt _fav_btn_txt">
                                    Favourite <span>(256)</span>
                                  </span>
                                </button>
                              </li>
                              <li className="_housiko_listing_card_item_bottom_btn_li">
                                <button className="_housiko_listing_card_item_bottom_btn">
                                  <span className="_housiko_listing_card_item_bottom_btn_ic">
                                    <SvgIcon
                                      iconType={"trash"}
                                      color={"#8D2525"}
                                    />
                                  </span>
                                  <span className="_housiko_listing_card_item_bottom_btn_txt _del_btn_txt">
                                    Discard
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12">
                  <div className="_housiko_myads_card_center">
                    <div className="_housiko_myads_card_center_links">
                      <button className="_housiko_myads_card_center_link_list">
                        <SvgIcon iconType={"share"} />
                        <span className="_housiko_myads_card_center_link_list_para">
                          Share
                        </span>
                      </button>
                      <button className="_housiko_myads_card_center_link_list">
                        <SvgIcon iconType={"edit"} />
                        <span className="_housiko_myads_card_center_link_list_para">
                          Edit
                        </span>
                      </button>
                      <button className="_housiko_myads_card_center_link_list">
                        <SvgIcon
                          iconType={"trash"}
                          w={16}
                          h={17}
                          color={"#555"}
                        />
                        <span className="_housiko_myads_card_center_link_list_para">
                          Remove property
                        </span>
                      </button>
                      <div className="_housiko_myads_card_center_link_list">
                        <span className="_housiko_myads_card_center_link_list_para1">
                          Reference: 56248
                        </span>
                      </div>
                      <div className="_housiko_myads_card_center_link_list">
                        <span className="_housiko_myads_card_center_link_list_para">
                          Date Posted : 17/09/22
                        </span>
                      </div>
                    </div>
                    <div className="_housiko_myads_card_center_bottm">
                      <div className="_housiko_myads_card_center_bottm_list">
                        <p className="_housiko_myads_card_center_bottm_list_txt">
                          POSITION: 8
                        </p>
                      </div>
                      <div className="_housiko_myads_card_center_bottm_list">
                        <p className="_housiko_myads_card_center_bottm_list_txt1">
                          Views: 2548
                        </p>
                      </div>
                      <div className="_housiko_myads_card_center_bottm_list _last_list">
                        <p className="_housiko_myads_card_center_bottm_list_txt1">
                          Interactions: 458
                        </p>
                        {/* <div className="_navbar_btn3 _housiko_myads_card_center_bottm_list_select">
                                                    <Select defaultValue="458" suffixIcon={<SvgIcon iconType={'myadsSelect'} />}>
                                                        <Option value="Interaction 1">480</Option>
                                                        <Option value="Interaction 2">408</Option>
                                                    </Select>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                  <div className="_housiko_myads_qr_code">
                    <img src="assets/images/qr-buy.png" alt="" />
                  </div>
                  {/* <div className="_housiko_myads_qr_code_btn_wrap">
                                        <button className='_housiko_myads_qr_code_btn _print_btn'>
                                            <SvgIcon iconType={'print'} />
                                        </button>
                                    </div> */}
                  <PrintDropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAds;
