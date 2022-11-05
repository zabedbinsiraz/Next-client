import { Input, Select } from "antd";
import { useState } from "react";
import { SvgIcon } from "../../../../components/Design/SvgIcon";
import {
  ExtraPopover,
  FavouriteDropdown,
  FloorDropdown,
  PriceDropdown,
  TotalRoomDropdown,
} from "../../../../components/Dropdowns/Dropdowns";
import Properties from "../../../../components/Home/Properties";
import { CreateNewAlbum } from "../../../../components/Modals/Modals";
import {
  ListingCarouselMany,
  ListingCarouselOne,
} from "../../../Listing/ListingCarousel";

const { Option } = Select;

function MyFav() {
  const [albumModal, setAlbumModal] = useState(false);

  return (
    <div className="_fav_inner_area">
      <div className="_housiko_myads_search_wrapper">
        <div className="_housiko_myads_search_line"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
              <div className="_housiko_myfav_page_wrap">
                <div className="_housiko_myfav_page_album_title _housiko_myads_title_wrap mb-3">
                  <h3 className="_housiko_myfav_page_title1 mb-3">
                    My Albums{" "}
                  </h3>
                  <div className="_housiko_myads_add_porperty_btn_wrap">
                    <button
                      onClick={() => setAlbumModal(true)}
                      className="_housiko_myads_add_porperty_btn _navbar_btn"
                    >
                      + Create New Album
                    </button>
                    <CreateNewAlbum
                      open={albumModal}
                      cancel={() => setAlbumModal(false)}
                    />
                  </div>
                </div>
                <div className="_housiko_myfav_page_album_slider">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="_housiko_myfav_page_album_border_slider">
                        <Properties houseName={"Summer"} />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="_housiko_myfav_page_album_border_slider">
                        <Properties houseName={"Winter"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_housiko_myfav_page_title">
                  <h3 className="_housiko_myfav_page_title1">My favourites</h3>
                </div>
                <div className="_housiko_myads_search_select_list">
                  <div className="_housiko_myads_search _housiko_myads_search_list_space">
                    <Input
                      className="_housiko_myads_search_inpt"
                      placeholder="Search"
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
                      suffixIcon={
                        <SvgIcon iconType={"caret-down"} w={14} h={14} />
                      }
                    >
                      <Option value="option1">Newest</Option>
                      <Option value="option2">Older</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="_housiko_myrejectAdvert_cards_wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
              <div className="_housiko_listing_card_item _housiko_listing_card_item_yl">
                <div className="_housiko_listing_card_item_img_wrap _housiko_myfav_img_border">
                  <div className="_housiko_listing_card_item_img_content _housiko_listing_card_item_img_content_many">
                    <div className="_housiko_listing_card_item_img_slide_wrap">
                      <ListingCarouselMany />
                      <div className="_housiko_listing_card_item_img_total_slide">
                        <p className="_housiko_listing_card_item_img_seen _housiko_listing_card_item_img_total_slide_p">
                          1/10
                        </p>
                      </div>
                      <div className="_housiko_listing_card_item_img_tag_wrap">
                        <p className="_housiko_listing_card_item_img_category _housiko_myfav_card_item_txt_bl">
                          Promoted
                        </p>
                        <p className="_housiko_listing_card_item_img_seen">
                          Seen
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="_housiko_listing_card_item_img_content d-none">
                    <div className="_housiko_listing_card_item_img_slide_wrap">
                      <img
                        src="assets/images/house-img.png"
                        alt="house"
                        className="_housiko_listing_card_item_slide_img"
                      />
                    </div>
                  </div>
                </div>
                <div className="_housiko_listing_card_item_content">
                  <div className="_housiko_listing_card_item_content_top">
                    <h3 className="_housiko_listing_card_item_content_title">
                      Elder Real estate, Barcelona
                    </h3>
                    <img
                      src="assets/images/elders.svg"
                      alt="logo-card"
                      className="_housiko_listing_card_item_content_img_logo"
                    />
                  </div>
                  <div className="_housiko_listing_card_item_content_bottom myfav _housiko_myfav_card_item_content_bottom">
                    <div className="_housiko_listing_card_item_content_txt">
                      <div className="_housiko_myfav_card_item_content_txt">
                        <span className="_housiko_listing_card_item_content_txt_inner">
                          <h3 className="_housiko_listing_card_item_content_inner_title">
                            $25,000
                          </h3>
                          <p className="_housiko_listing_card_item_content_inner_p">
                            <span>
                              <SvgIcon iconType={"down-arw"} />
                            </span>
                            Has been reduced $10,000
                          </p>
                        </span>
                        <span className="_housiko_myfav_card_item_content_txt_inner">
                          <SvgIcon iconType={"share"} />
                          <p className="_housiko_myfav_card_item_content_txt_inner_para">
                            Share
                          </p>
                        </span>
                      </div>
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
                              <SvgIcon iconType={"location"} w={18} h={18} />
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
                          <li className="_housiko_listing_card_item_feature_li">
                            <span className="_housiko_listing_card_item_feature_li_ic">
                              <SvgIcon iconType={"elevator"} />
                            </span>
                            <span className="_housiko_listing_card_item_feature_li_txt">
                              Elevator
                            </span>
                          </li>
                          <li className="_housiko_listing_card_item_feature_li">
                            <span className="_housiko_listing_card_item_feature_li_ic">
                              <SvgIcon iconType={"bed"} />
                            </span>
                            <span className="_housiko_listing_card_item_feature_li_txt">
                              3 Bedrooms
                            </span>
                          </li>
                          <li className="_housiko_listing_card_item_feature_li">
                            <span className="_housiko_listing_card_item_feature_li_ic">
                              <SvgIcon iconType={"bath"} />
                            </span>
                            <span className="_housiko_listing_card_item_feature_li_txt">
                              2 Bathrooms
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
                          tasigförsamhet fören elektropol. Lavöpreskapet mining
                          om vusk, i kus.Lörem ipsum tasigförsamhet fören
                          elektropol. Lavöpreskapet mining om vusk, i kus.
                        </p>
                      </div>
                      <div className="_housiko_listing_card_item_bottom_btn_wrap _housiko_myfav_card_item_gap">
                        <ul className="_housiko_listing_card_item_bottom_btn_ul _housiko_listing_card_item_bottom_btn_ul3">
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
                            <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _phone_btn">
                              <span className="_housiko_listing_card_item_bottom_btn_ic">
                                <SvgIcon iconType={"phone"} />
                              </span>
                              <span className="_housiko_listing_card_item_bottom_btn_txt">
                                915 233 266
                              </span>
                            </button>
                          </li>
                        </ul>
                        <ul className="_housiko_listing_card_item_bottom_btn_ul _housiko_listing_card_item_bottom_btn_ul2">
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <FavouriteDropdown />
                          </li>
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <button className="_housiko_listing_card_item_bottom_btn">
                              <span className="_housiko_listing_card_item_bottom_btn_ic">
                                <SvgIcon iconType={"trash"} color={"#8D2525"} />
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
                          New Home
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
                      Elder Real estate, Barcelona
                    </h3>
                    <img
                      src="assets/images/elders.svg"
                      alt="logo-card"
                      className="_housiko_listing_card_item_content_img_logo"
                    />
                  </div>
                  <div className="_housiko_listing_card_item_content_bottom">
                    <div className="_housiko_listing_card_item_content_txt">
                      <div className="_housiko_listing_card_item_content_txt_first">
                        <span className="_housiko_listing_card_item_content_txt_inner">
                          <h3 className="_housiko_listing_card_item_content_inner_title">
                            $25,000
                          </h3>
                        </span>
                        <span className="_housiko_myfav_card_item_content_txt_inner">
                          <SvgIcon iconType={"share"} />
                          <p className="_housiko_myfav_card_item_content_txt_inner_para">
                            Share
                          </p>
                        </span>
                      </div>

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
                              <SvgIcon iconType={"location"} w={18} h={18} />
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
                          tasigförsamhet fören elektropol. Lavöpreskapet mining
                          om vusk, i kus.Lörem ipsum tasigförsamhet fören
                          elektropol. Lavöpreskapet mining om vusk, i kus.
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
                            <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _phone_btn">
                              <span className="_housiko_listing_card_item_bottom_btn_ic">
                                <SvgIcon iconType={"phone"} />
                              </span>
                              <span className="_housiko_listing_card_item_bottom_btn_txt">
                                915 233 266
                              </span>
                            </button>
                          </li>
                        </ul>
                        <ul className="_housiko_listing_card_item_bottom_btn_ul _housiko_listing_card_item_bottom_btn_ul2">
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <FavouriteDropdown />
                          </li>
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <button className="_housiko_listing_card_item_bottom_btn">
                              <span className="_housiko_listing_card_item_bottom_btn_ic">
                                <SvgIcon iconType={"trash"} color={"#8D2525"} />
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
                      <div className="_housiko_listing_card_item_content_txt_first">
                        <span className="_housiko_listing_card_item_content_txt_inner">
                          <h3 className="_housiko_listing_card_item_content_inner_title">
                            $25,000
                          </h3>
                        </span>
                        <span className="_housiko_myfav_card_item_content_txt_inner">
                          <SvgIcon iconType={"share"} />
                          <p className="_housiko_myfav_card_item_content_txt_inner_para">
                            Share
                          </p>
                        </span>
                      </div>

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
                              <SvgIcon iconType={"location"} w={18} h={18} />
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
                            <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _phone_btn">
                              <span className="_housiko_listing_card_item_bottom_btn_ic">
                                <SvgIcon iconType={"phone"} />
                              </span>
                              <span className="_housiko_listing_card_item_bottom_btn_txt">
                                915 233 266
                              </span>
                            </button>
                          </li>
                        </ul>
                        <ul className="_housiko_listing_card_item_bottom_btn_ul _housiko_listing_card_item_bottom_btn_ul2">
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <FavouriteDropdown />
                          </li>
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <button className="_housiko_listing_card_item_bottom_btn">
                              <span className="_housiko_listing_card_item_bottom_btn_ic">
                                <SvgIcon iconType={"trash"} color={"#8D2525"} />
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

              <div className="_housiko_listing_card_item _housiko_listing_card_item_gray">
                <div className="_housiko_listing_card_item_img_wrap">
                  <div className="_housiko_listing_card_item_img_content _housiko_listing_card_item_img_content_single">
                    <div className="_housiko_listing_card_item_img_slide_wrap">
                      <img
                        src="assets/images/house-last-img.png"
                        alt="house"
                        className="_housiko_myfav_card_item_slide_img"
                      />
                      <div className="_housiko_listing_card_item_img_total_slide">
                        <p className="_housiko_listing_card_item_img_seen _housiko_listing_card_item_img_total_slide_p">
                          1/10
                        </p>
                      </div>
                      <div className="_housiko_listing_card_item_img_tag_wrap">
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
                      Elder Real estate, Barcelona
                    </h3>
                    <img
                      src="assets/images/elders.svg"
                      alt="logo-card"
                      className="_housiko_listing_card_item_content_img_logo"
                    />
                  </div>
                  <div className="_housiko_listing_card_item_content_bottom">
                    <div className="_housiko_listing_card_item_content_txt">
                      <div className="_housiko_listing_card_item_content_txt_first">
                        <span className="_housiko_listing_card_item_content_txt_inner">
                          <h3 className="_housiko_listing_card_item_content_inner_title">
                            $25,000
                          </h3>
                        </span>
                        <span className="_housiko_myfav_card_item_content_txt_inner">
                          <SvgIcon iconType={"share"} />
                          <p className="_housiko_myfav_card_item_content_txt_inner_para">
                            Share
                          </p>
                        </span>
                      </div>

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
                              <SvgIcon iconType={"location"} w={18} h={18} />
                            </span>
                            <span className="_housiko_listing_card_item_type_inner_txt">
                              101 Valay Road, NY
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="_housiko_listing_card_item_feature_wrap _housiko_myfav_feat">
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
                        </ul>
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
                            <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _phone_btn">
                              <span className="_housiko_listing_card_item_bottom_btn_ic">
                                <SvgIcon iconType={"phone"} />
                              </span>
                              <span className="_housiko_listing_card_item_bottom_btn_txt">
                                915 233 266
                              </span>
                            </button>
                          </li>
                        </ul>
                        <ul className="_housiko_listing_card_item_bottom_btn_ul _housiko_listing_card_item_bottom_btn_ul2">
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <FavouriteDropdown />
                          </li>
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <button className="_housiko_listing_card_item_bottom_btn">
                              <span className="_housiko_listing_card_item_bottom_btn_ic">
                                <SvgIcon iconType={"trash"} color={"#8D2525"} />
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
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="_housiko_myfav_pagination_wrap">
                <ul className="_housiko_listing_item_pagination_ul">
                  <li className="_housiko_listing_item_pagination_li">
                    <button className="_housiko_listing_item_pagination_btn _active">
                      1
                    </button>
                  </li>
                  <li className="_housiko_listing_item_pagination_li">
                    <button className="_housiko_listing_item_pagination_btn">
                      2
                    </button>
                  </li>
                  <li className="_housiko_listing_item_pagination_li">
                    <button className="_housiko_listing_item_pagination_btn">
                      3
                    </button>
                  </li>
                  <li className="_housiko_listing_item_pagination_li">
                    <button className="_housiko_listing_item_pagination_btn">
                      4
                    </button>
                  </li>
                  <li className="_housiko_listing_item_pagination_li">
                    <button className="_housiko_listing_item_pagination_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          fill="#252E8D"
                          d="m11.25 9 .707.707.707-.707-.707-.707L11.25 9Zm-3.793 5.207 4.5-4.5-1.414-1.414-4.5 4.5 1.414 1.414Zm4.5-5.914-4.5-4.5-1.414 1.414 4.5 4.5 1.414-1.414Z"
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFav;
