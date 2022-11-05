import { Input, Select } from "antd";
import { SvgIcon } from "../../../../components/Design/SvgIcon";
import {
  ExtraPopover,
  FavouriteDropdown,
  FloorDropdown,
  PriceDropdown,
  TotalRoomDropdown,
} from "../../../../components/Dropdowns/Dropdowns";
import { ListingCarouselMany } from "../../../Listing/ListingCarousel";

const { Option } = Select;

function MyDiscarded() {
  return (
    <div className="_discarded_inner_area">
      <div className="_housiko_myads_search_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_housiko_myads_search_line"></div>
            </div>
            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 mx-auto">
              <div className="_housiko_mydiscarded_search_wrap">
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
                      defaultValue="Latest discarded"
                      style={
                        {
                          // gap: '0 10px'
                        }
                      }
                      suffixIcon={
                        <SvgIcon iconType={"caret-down"} w={14} h={14} />
                      }
                    >
                      <Option value="option1">Latest discarded</Option>
                      <Option value="option2">Old discarded</Option>
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
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12"></div>
            {/* <div className="col-xl"></div> */}
            <div className="col-xl-8 col-lg-10 col-md-9 col-sm-12">
              <div className="_housiko_listing_card_item _housiko_listing_card_item_bl">
                <div className="_housiko_listing_card_item_img_wrap">
                  <div className="_housiko_listing_card_item_img_content _housiko_listing_card_item_img_content_many">
                    <div className="_housiko_listing_card_item_img_slide_wrap">
                      <ListingCarouselMany />
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
                  <div className="_housiko_discard_card_item_content_top">
                    <h3 className="_housiko_listing_card_item_content_title">
                      Housiko Exclusive
                    </h3>
                    <img
                      src="assets/images/logo-card.svg"
                      alt="logo-card"
                      className="_housiko_listing_card_item_content_img_logo"
                    />
                  </div>
                  <div className="_housiko_listing_card_item_content_bottom">
                    <div className="_housiko_listing_card_item_content_txt">
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
                      <p className="_housiko_listing_card_item_content_p">
                        HUF 10,000,000
                      </p>
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
                      <div className="_housiko_listing_card_item_bottom_btn_wrap">
                        <ul className="_housiko_listing_card_item_bottom_btn_ul _housiko_listing_card_item_bottom_btn_ul3">
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <button className="_housiko_listing_card_item_bottom_btn _navbar_btn">
                              <span className="_housiko_listing_card_item_bottom_btn_ic">
                                <SvgIcon iconType={"chat"} color={"#fff"} />
                              </span>
                              <span className="_housiko_listing_card_item_bottom_btn_txt">
                                Live Chat
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
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 ms-auto">
                  <div className="_housiko_myrejectAdvert_card_left_btn mb-5 d-flex align-items-center justify-content-end">
                    <button className="_housiko_myrejectAdvert_card_left_undo_btn">
                      <SvgIcon iconType={"undo"} />
                      Undo discard
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2"></div>
          </div>

          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12"></div>
            {/* <div className="col-xl"></div> */}
            <div className="col-xl-8 col-lg-10 col-md-9 col-sm-12">
              <div className="_housiko_listing_card_item _housiko_listing_card_item_gray">
                <div className="_housiko_listing_card_item_img_wrap">
                  <div className="_housiko_listing_card_item_img_content _housiko_listing_card_item_img_content_many">
                    <div className="_housiko_listing_card_item_img_slide_wrap">
                      <ListingCarouselMany />
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
                  <div className="_housiko_listing_card_item_content_bottom">
                    <div className="_housiko_listing_card_item_content_txt">
                      <div className="_housiko_listing_card_item_content_txt_first">
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

                        <a
                          href="#0"
                          className="_housiko_listing_card_item_content_inner_title1"
                        >
                          New
                        </a>
                      </div>
                      <p className="_housiko_listing_card_item_content_p">
                        HUF 10,000,000
                      </p>
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
                      <div className="_housiko_listing_card_item_bottom_btn_wrap">
                        <ul className="_housiko_listing_card_item_bottom_btn_ul">
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _msg_btn">
                              <span className="_housiko_listing_card_item_bottom_btn_ic">
                                <SvgIcon
                                  iconType={"envelop"}
                                  w={24}
                                  h={22}
                                  color={"#fff"}
                                />
                              </span>
                              <span className="_housiko_listing_card_item_bottom_btn_txt">
                                Contact
                              </span>
                            </button>
                          </li>
                          <li className="_housiko_listing_card_item_bottom_btn_li">
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
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 ms-auto">
                  <div className="_housiko_myrejectAdvert_card_left_btn mb-5 d-flex align-items-center justify-content-end">
                    <button className="_housiko_myrejectAdvert_card_left_undo_btn">
                      <SvgIcon iconType={"undo"} />
                      Undo discard
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDiscarded;
