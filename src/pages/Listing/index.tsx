import { useEffect, useState } from "react";

import { SvgIcon } from "../../components/Design/SvgIcon";
// import { ListingFooter } from '../Footer/Footer';
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ExtraPopover,
  FavouriteDropdown,
  PhoneDropdown,
} from "../../components/Dropdowns/Dropdowns";
import { ListingModal } from "../../components/Modals/Modals";
import { ListingCarouselMany, ListingCarouselOne } from "./ListingCarousel";
import ListingTop from "./ListingTop";

const Listing = () => {
  const [mapFull, setMapFull] = useState(false);
  const [listFull, setListFull] = useState(false);
  const [listModal, setListModal] = useState(false);

  const { query } = useRouter();

  useEffect(() => {
    let a = query.tab;
    if (a == "map") {
      setMapFull(true);
    }
  }, []);

  const handleCancel = () => {
    setListModal(false);
  };
  return (
    <div className="_housiko_listing_wrapper container-fluid">
      <div className="_housiko_listing_map_view_btn">
        {listFull && (
          <button
            onClick={() => setListFull(false)}
            className="_housiko_listing_map_inner_btn _list_btn"
          >
            <span className="_housiko_listing_map_inner_btn_txt">Map</span>
            <SvgIcon iconType={"caret-right"} w={20} h={20} />
          </button>
        )}
      </div>
      <ListingTop />
      <div className="_housiko_listing_container">
        {!listFull && (
          <div
            className={`_housiko_listing_map_wrapper _housiko_listing_map_wrap p-0 ${
              mapFull ? "_housiko_listing_map_full_view" : ""
            }`}
          >
            <div
              className={`_housiko_listing_map_wrap _housiko_listing_item ${
                mapFull ? "_housiko_listing_map_full_view" : ""
              }`}
            >
              <div className="_housiko_listing_map_inner_btn_wrap">
                <ul className="_housiko_listing_map_inner_btn_ul">
                  <li className="_housiko_listing_map_inner_btn_li">
                    <button
                      onClick={() => setListFull(true)}
                      className="_housiko_listing_map_inner_btn"
                    >
                      <SvgIcon
                        iconType={"close"}
                        w={12}
                        h={12}
                        color={"#000"}
                      />
                    </button>
                  </li>
                  <li className="_housiko_listing_map_inner_btn_li">
                    <span className="_housiko_listing_map_inner_btn_li_txt">
                      Seeing 30 out of 13,578 results.
                    </span>
                  </li>
                  <li className="_housiko_listing_map_inner_btn_li">
                    {!mapFull && (
                      <button
                        onClick={() => setMapFull(true)}
                        className="_housiko_listing_map_inner_btn _full_view_btn"
                      >
                        <SvgIcon iconType={"caret-right"} />
                      </button>
                    )}
                    {mapFull && (
                      <button
                        onClick={() => setMapFull(false)}
                        className="_housiko_listing_map_inner_btn _list_btn"
                      >
                        <SvgIcon iconType={"caret-left"} w={20} h={20} />
                        <span className="_housiko_listing_map_inner_btn_txt">
                          List
                        </span>
                      </button>
                    )}
                  </li>
                </ul>

                <div className="_housiko_listing_propertymap_card">
                  <div className="_housiko_listing_propertymap_card_img">
                    <img
                      src="assets/images/listing-map-card.png"
                      alt="house"
                      className="_housiko_listing_propertymap_card_img_tag"
                    />
                  </div>
                  <div className="_housiko_listing_propertymap_card_cont">
                    <h3 className="_housiko_listing_card_item_content_inner_title">
                      $25,000
                    </h3>
                    <p className="_housiko_listing_card_item_content_p">
                      HUF 10,000,000
                    </p>

                    <ul className="_housiko_listing_propertymap_card_cont_feat">
                      <li className="_housiko_listing_propertymap_card_cont_feat_li">
                        <span className="_housiko_listing_card_item_feature_li_ic">
                          <SvgIcon
                            iconType={"bed"}
                            color={"#555"}
                            w={20}
                            h={17}
                          />
                        </span>
                        <span className="_housiko_listing_card_item_feature_li_txt">
                          6
                        </span>
                      </li>
                      <li className="_housiko_listing_propertymap_card_cont_feat_li">
                        <span className="_housiko_listing_card_item_feature_li_ic">
                          <SvgIcon
                            iconType={"bath"}
                            color={"#555"}
                            w={19}
                            h={18}
                          />
                        </span>
                        <span className="_housiko_listing_card_item_feature_li_txt">
                          5
                        </span>
                      </li>
                      <li className="_housiko_listing_propertymap_card_cont_feat_li">
                        <span className="_housiko_listing_card_item_feature_li_ic">
                          <SvgIcon
                            iconType={"area"}
                            color={"#555"}
                            w={17}
                            h={18}
                          />
                        </span>
                        <span className="_housiko_listing_card_item_feature_li_txt">
                          3000 Sqft
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="_housiko_listing_draw_map">
                  <a className="_city_map_btn2" href="#0">
                    <span className="_housiko_hero_content_tab_search_btn_ic">
                      <SvgIcon iconType={"hand-draw"} w={20} h={24} />
                    </span>
                    Draw on Map
                  </a>
                </div>
              </div>
              <div className="mapouter _map">
                <div className="gmap_canvas _map_inner">
                  <iframe
                    title="gmap"
                    width={"100%"}
                    height={500}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />
                  <br />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;height:500px;width:600px;}",
                    }}
                  />
                  {/* <a href="https://www.embedgooglemap.net">responsive google map</a> */}
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {!mapFull && (
          <div
            className={`_housiko_listing_wrap _housiko_listing_item ${
              listFull ? "_housiko_listing_full_view" : ""
            }`}
          >
            <div className="_housiko_listing_inner">
              <div className="_housiko_listing_card_item _housiko_listing_card_item_bl">
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
                        <p className="_housiko_listing_card_item_img_category">
                          Housiko
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
                      Housiko Exclusive
                    </h3>
                    <img
                      src="assets/images/logo-card.svg"
                      alt="logo-card"
                      className="_housiko_listing_card_item_content_img_logo"
                    />
                  </div>
                  <div className="_housiko_listing_card_item_content_bottom _housiko_myfav_card_item_content_bottom">
                    <div className="_housiko_listing_card_item_content_txt">
                      <div
                        onClick={() => setListModal(true)}
                        className="_housiko_listing_card_item_click"
                      >
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
                            tasigförsamhet fören elektropol. Lavöpreskapet
                            mining om vusk, i kus.Lörem ipsum tasigförsamhet
                            fören elektropol. Lavöpreskapet mining om vusk, i
                            kus.
                          </p>
                        </div>
                      </div>

                      <div className="_housiko_listing_card_item_bottom_btn_wrap">
                        <ul className="_housiko_listing_card_item_bottom_btn_ul _housiko_listing_card_item_bottom_btn_ul3">
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            <Link
                              href=""
                              className="_housiko_listing_card_item_bottom_btn _navbar_btn"
                            >
                              <span>
                                <span className="_housiko_listing_card_item_bottom_btn_ic">
                                  <SvgIcon iconType={"chat"} color={"#fff"} />
                                </span>
                                <span className="_housiko_listing_card_item_bottom_btn_txt">
                                  Exclusive
                                </span>
                              </span>
                            </Link>
                          </li>
                        </ul>
                        <ul className="_housiko_listing_card_item_bottom_btn_ul _housiko_listing_card_item_bottom_btn_ul2">
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            {/* <button className="_housiko_listing_card_item_bottom_btn">
                                                                <span className="_housiko_listing_card_item_bottom_btn_ic">
                                                                    <SvgIcon iconType={'fav'} />
                                                                </span>
                                                                <span className="_housiko_listing_card_item_bottom_btn_txt _fav_btn_txt">
                                                                    Favourite
                                                                    <span>
                                                                        (256)
                                                                    </span>
                                                                </span>
                                                            </button> */}
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
                      <div
                        onClick={() => setListModal(true)}
                        className="_housiko_listing_card_item_click"
                      >
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
                            tasigförsamhet fören elektropol. Lavöpreskapet
                            mining om vusk, i kus.Lörem ipsum tasigförsamhet
                            fören elektropol. Lavöpreskapet mining om vusk, i
                            kus.
                          </p>
                        </div>
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
                            <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _whatsapp_btn">
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
                            {/* <button className="_housiko_listing_card_item_bottom_btn">
                                                                <span className="_housiko_listing_card_item_bottom_btn_ic">
                                                                    <SvgIcon iconType={'fav'} />
                                                                </span>
                                                                <span className="_housiko_listing_card_item_bottom_btn_txt _fav_btn_txt">
                                                                    Favourite
                                                                    <span>
                                                                        (256)
                                                                    </span>
                                                                </span>
                                                            </button> */}
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
                  <div className="_housiko_listing_card_item_content_bottom _housiko_myfav_card_item_content_bottom">
                    <div className="_housiko_listing_card_item_content_txt">
                      <div
                        onClick={() => setListModal(true)}
                        className="_housiko_listing_card_item_click"
                      >
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
                            tasigförsamhet fören elektropol. Lavöpreskapet
                            mining om vusk, i kus.Lörem ipsum tasigförsamhet
                            fören elektropol. Lavöpreskapet mining om vusk, i
                            kus.
                          </p>
                        </div>
                      </div>
                      <div className="_housiko_listing_card_item_bottom_btn_wrap">
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
                            <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _whatsapp_btn">
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
                            {/* <button className="_housiko_listing_card_item_bottom_btn">
                                                                <span className="_housiko_listing_card_item_bottom_btn_ic">
                                                                    <SvgIcon iconType={'fav'} />
                                                                </span>
                                                                <span className="_housiko_listing_card_item_bottom_btn_txt _fav_btn_txt">
                                                                    Favourite <span>
                                                                        (256)
                                                                    </span>
                                                                </span>
                                                            </button> */}
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
                      <div
                        onClick={() => setListModal(true)}
                        className="_housiko_listing_card_item_click"
                      >
                        <span className="_housiko_myfav_card_item_content_txt _housiko_listing_card_item_content_txt_inner">
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
                            <PhoneDropdown />
                          </li>
                        </ul>
                        <ul className="_housiko_listing_card_item_bottom_btn_ul _housiko_listing_card_item_bottom_btn_ul2">
                          <li className="_housiko_listing_card_item_bottom_btn_li">
                            {/* <button className="_housiko_listing_card_item_bottom_btn">
                                                                <span className="_housiko_listing_card_item_bottom_btn_ic">
                                                                    <SvgIcon iconType={'fav'} />
                                                                </span>
                                                                <span className="_housiko_listing_card_item_bottom_btn_txt _fav_btn_txt">
                                                                    Favourite
                                                                    <span>
                                                                        (256)
                                                                    </span>
                                                                </span>
                                                            </button> */}
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
                      className="_housiko_listing_hand_logo"
                    />
                  </div>
                  <div className="_housiko_listing_card_item_content_bottom">
                    <div className="_housiko_listing_card_item_content_txt">
                      <div
                        onClick={() => setListModal(true)}
                        className="_housiko_listing_card_item_click"
                      >
                        <span className="_housiko_myfav_card_item_content_txt _housiko_listing_card_item_content_txt_inner">
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
                            <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _whatsapp_btn">
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
                            {/* <button className="_housiko_listing_card_item_bottom_btn">
                                                                <span className="_housiko_listing_card_item_bottom_btn_ic">
                                                                    <SvgIcon iconType={'fav'} />
                                                                </span>
                                                                <span className="_housiko_listing_card_item_bottom_btn_txt _fav_btn_txt">
                                                                    Favourite
                                                                    <span>
                                                                        (256)
                                                                    </span>
                                                                </span>
                                                            </button> */}
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
              <div className="_housiko_listing_item_pagination_wrap">
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
                      <SvgIcon iconType={"right-bracket"} w={18} h={18} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* <ListingFooter /> */}
          </div>
        )}
      </div>
      <ListingModal open={listModal} cancel={handleCancel} />
      {/* <button type="button" onClick={() => setListModal(true)}>
                Open Listing Modal
            </button> */}
    </div>
  );
};

export default Listing;
