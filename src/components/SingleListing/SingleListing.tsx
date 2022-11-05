import { Image, Tooltip } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SvgIcon } from "../Design/SvgIcon";
import Properties from "../Home/Properties";
import { LightBox, ReportModal } from "../Modals/Modals";

const SingleListing = () => {
  const { pathname, query } = useRouter();

  const [isLoginVal, setisLoginVal] = useState(query.isLogin);

  const [isLightboxOn, setLightboxOn] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const [isReportModalOpen, setReportModalOpen] = useState(false);

  const showCreateReportModal = () => {
    setReportModalOpen(true);
  };

  const handleCancel = () => {
    setReportModalOpen(false);
  };

  const images = [
    {
      original: "assets/images/list-img.png",
      thumbnail: "assets/images/list-img.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img1.png",
      thumbnail: "assets/images/list-img1.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img2.png",
      thumbnail: "assets/images/list-img2.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img3.png",
      thumbnail: "assets/images/list-img3.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img4.png",
      thumbnail: "assets/images/list-img4.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img5.png",
      thumbnail: "assets/images/list-img5.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img6.png",
      thumbnail: "assets/images/list-img6.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img7.png",
      thumbnail: "assets/images/list-img7.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img8.png",
      thumbnail: "assets/images/list-img8.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img9.png",
      thumbnail: "assets/images/list-img9.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img10.png",
      thumbnail: "assets/images/list-img10.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img11.png",
      thumbnail: "assets/images/list-img11.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img.png",
      thumbnail: "assets/images/list-img.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img1.png",
      thumbnail: "assets/images/list-img1.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img2.png",
      thumbnail: "assets/images/list-img2.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
    {
      original: "assets/images/list-img3.png",
      thumbnail: "assets/images/list-img3.png",
      thumbnailClass: "_lightbox_img_thumbnail",
    },
  ];

  return (
    <div
      className={`_listing_modal_inner ${
        pathname === "/singleListing" ? "_singleListing_page_wrap" : ""
      }`}
    >
      <div className="_listing_modal_img_wrap">
        <div className="_listing_modal_top_img_wrap">
          <button className="_listing_modal_top_btn">Virtual 3D tour</button>
          <img
            src="assets/images/listing-img.png"
            alt=""
            className="_listing_modal_top_img img-fluid"
          />
        </div>
        <LightBox
          startIndex={selectedImg}
          imageList={images}
          open={isLightboxOn}
          cancel={() => {
            setLightboxOn(false);
          }}
        />
        <div className="_listing_modal_bottom_img_ul_wrap">
          <ul className="_listing_modal_bottom_img_ul">
            {images.map((img, id) => {
              return (
                <li
                  onClick={() => setSelectedImg(id)}
                  className="_listing_modal_bottom_img_li"
                >
                  <img
                    src={img.original}
                    alt=""
                    className="_listing_modal_bottom_img"
                    onClick={() => setLightboxOn(true)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="_listing_modal_content_wrap _listing_modal_card">
        <div className="_listing_modal_content_txt">
          <div className="_listing_modal_card_inner">
            <div className="_listing_modal_card_inner_btn">
              <div className="_listing_modal_card_inner_btn_list">
                <button className="_housiko_listing_modal_card_item_btn">
                  <span className="_housiko_listing_card_item_bottom_btn_ic">
                    <SvgIcon iconType={"trash"} color={"#555555"} />
                  </span>
                  <span className="_housiko_listing_card_item_bottom_btn_txt _del_modal_btn_txt">
                    Discard
                  </span>
                </button>
              </div>
              <div className="_listing_modal_card_inner_btn_list">
                <button
                  className="_housiko_listing_modal_card_item_btn"
                  onClick={showCreateReportModal}
                >
                  <span className="_housiko_listing_card_item_bottom_btn_ic">
                    <SvgIcon
                      iconType={"info"}
                      color={"#555555"}
                      w={20}
                      h={20}
                    />
                  </span>
                  <span className="_housiko_listing_card_item_bottom_btn_txt _del_modal_btn_txt">
                    Report error
                  </span>
                </button>
              </div>
              <div className="_listing_modal_card_inner_btn_list">
                <button className="_housiko_listing_modal_card_item_btn">
                  <span className="_housiko_listing_card_item_bottom_btn_ic">
                    <SvgIcon iconType={"share"} />
                  </span>
                  <span className="_housiko_listing_card_item_bottom_btn_txt _del_modal_btn_txt">
                    Share
                  </span>
                </button>
              </div>
              <div className="_listing_modal_card_inner_btn_list">
                <button className="_housiko_listing_modal_card_item_btn _modal_fav_btn">
                  <span className="_housiko_listing_card_item_bottom_btn_ic">
                    <SvgIcon iconType={"fav"} w={20} h={18} color={"#A32C2C"} />
                  </span>
                  <span className="_housiko_listing_card_item_fav">
                    Favourite
                  </span>
                </button>
              </div>
            </div>
            <div className="_listing_modal_card_inner_btn inner_btns">
              {pathname != "/singleListing" && (
                <Link
                  href="/singleListing"
                  target="_blank"
                  className="_housiko_listing_modal_card_item_btn"
                >
                  <span className="_housiko_listing_card_item_bottom_btn_ic">
                    <SvgIcon iconType={"new-tab"} />
                  </span>
                </Link>
              )}
              <button className="_housiko_listing_modal_card_item_btn _housiko_listing_modal_card_cancel_btn">
                <span className="_housiko_listing_card_item_bottom_btn_ic">
                  <SvgIcon iconType={"new-tab"} />
                </span>
              </button>
            </div>
          </div>

          <div className="_listing_modal_card_rent_btns">
            <button className="_listing_modal_card_rent_btn">
              Also for rent
            </button>
          </div>

          <div className="_listing_modal_card_rent_conts">
            <div className="_listing_modal_card_rent_cont_title">
              <h3 className="_housiko_listing_card_item_content_inner_title">
                $25,000
              </h3>
            </div>
            <div className="_listing_modal_card_rent_cont_price">
              <SvgIcon iconType={"price-tag"} />
              <Tooltip
                overlayClassName={"_listing_popup"}
                trigger={"click"}
                title="You will be notified when this property reduce its price"
                overlayInnerStyle={{
                  borderRadius: "12px",
                  padding: "10px 12px",
                }}
              >
                <p className="_listing_modal_card_rent_cont_price_txt">
                  Notify me when price decreases
                </p>
              </Tooltip>
            </div>
            <div className="_listing_modal_card_rent_chat _housiko_listing_card_item_bottom_btn_li">
              <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _msg_btn">
                <span className="_housiko_listing_card_item_bottom_btn_ic">
                  <SvgIcon iconType={"chat"} color={"#fff"} />
                </span>
                <span className="_housiko_listing_card_item_bottom_btn_txt">
                  Chat
                </span>
              </button>
            </div>
          </div>

          <div className="_listing_modal_card_rent_cont1">
            <p className="_housiko_listing_card_item_content_p">
              HUF 10,000,000
            </p>
          </div>

          <div className="_listing_modal_card_rent_cont2">
            <div className="_listing_modal_card_rent_cont2_prop">
              <div className="_listing_modal_card_rent_cont2_ic">
                <SvgIcon iconType={"home-light"} />
              </div>
              <div className="_listing_modal_card_rent_cont2_txt">
                <p className="_listing_modal_card_rent_cont2_txt1">
                  Type of property
                </p>
                <p className="_listing_modal_card_rent_cont2_txt2">
                  House-Chalet
                </p>
              </div>
            </div>
            <div className="_listing_modal_card_rent_cont2_prop">
              <div className="_listing_modal_card_rent_cont2_ic">
                <SvgIcon iconType={"area"} />
              </div>
              <div className="_listing_modal_card_rent_cont2_txt">
                <p className="_listing_modal_card_rent_cont2_txt1">
                  Floor Area
                </p>
                <p className="_listing_modal_card_rent_cont2_txt2">162 sqm</p>
              </div>
            </div>
            <div className="_listing_modal_card_rent_cont2_prop">
              <div className="_listing_modal_card_rent_cont2_ic">
                <SvgIcon iconType={"total-room"} />
              </div>
              <div className="_listing_modal_card_rent_cont2_txt">
                <p className="_listing_modal_card_rent_cont2_txt1">
                  Total rooms
                </p>
                <p className="_listing_modal_card_rent_cont2_txt2">5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="_listing_modal_content_arrow">
          <div className="_listing_modal_content_arrow_space">
            <div className="_listing_modal_card_rent_cont3">
              <h6 className="_listing_modal_card_rent_cont3_txt">
                Villa for sale: Good opportunity!!{" "}
              </h6>
              <div className="_housiko_listing_card_item_type_inner d-flex align-items-center">
                <span className="_housiko_listing_card_item_type_inner_ic d-flex">
                  <SvgIcon iconType={"location"} w={18} h={18} />
                </span>
                <span className="_housiko_listing_card_item_type_inner_txt">
                  101 Valay Road, NY
                </span>
              </div>
              <div className="_listing_modal_card_rent_cont3_translate_btns">
                <button className="_listing_modal_card_rent_cont3_translate_btn">
                  TranslateTo English
                  <span className="_listing_modal_card_rent_cont3_translate_btn_ic">
                    <SvgIcon iconType={"translate"} />
                  </span>
                </button>
              </div>
            </div>

            <div className="_listing_modal_card_rent_cont4">
              <p className="_listing_modal_card_rent_cont4_para">
                Lörem ipsum viktor Bergman ore kreativ skolgång. Berade platese
                det krotåserade: plat inte sulig. Talibanisering hysar sosat
                fast öryns. Internet of things geomöl, Ellen Falk fangen men
                löngar. Misoception plattfilm sungar tårelig ben. Hosade
                regramma, dekanat, pararålogi, mådade.
              </p>

              <p className="_listing_modal_card_rent_cont4_para">
                Rötiv meganar sar. Primates disan men inbound innovation. Pude
                ser, paragam triheten.
              </p>
              <p className="_listing_modal_card_rent_cont4_para">
                Hast cynnomi parkera bussen, än pregen skurkstat. Ultraser
                makros medan homosat krorat astrofunade. Lars Dahlberg råligen
                or tetrad. Elektrovalens heterosade Yvonne Andersson röda, och
                osegypp. Hugo Petersson triprelor, om metatopi. Hunt virad
                rolapål att laling.
              </p>
            </div>

            <div className="_listing_modal_card_rent_cont4_link">
              <a href="#0" className="_listing_modal_card_rent_cont4_read_link">
                Read More
              </a>
            </div>

            <div className="_listing_modal_card_rent_features">
              <p className="_listing_modal_card_rent_features_txt">Features</p>

              <div className="_listing_modal_card_rent_feature_row">
                <div className="_listing_modal_card_rent_cont2_prop">
                  <div className="_listing_modal_card_rent_cont2_ic">
                    <SvgIcon iconType={"bath"} color={"#252E8D"} />
                  </div>
                  <div className="_listing_modal_card_rent_feature_card_cont">
                    <p className="_listing_modal_card_rent_cont2_txt1">
                      Bathrooms
                    </p>
                    <p className="_listing_modal_card_rent_cont2_txt2">1</p>
                  </div>
                </div>

                <div className="_listing_modal_card_rent_cont2_prop">
                  <div className="_listing_modal_card_rent_cont2_ic">
                    <SvgIcon iconType={"blue-elevator"} />
                  </div>
                  <div className="_listing_modal_card_rent_feature_card_cont">
                    <p className="_listing_modal_card_rent_cont2_txt1">Lift</p>
                    <p className="_listing_modal_card_rent_cont2_txt2">Yes</p>
                  </div>
                </div>
              </div>

              <div className="_listing_modal_card_rent_feature_row">
                <div className="_listing_modal_card_rent_cont2_prop">
                  <div className="_listing_modal_card_rent_cont2_ic">
                    <SvgIcon iconType={"bed"} color={"#252E8D"} />
                  </div>
                  <div className="_listing_modal_card_rent_feature_card_cont">
                    <p className="_listing_modal_card_rent_cont2_txt1">
                      Bedrooms
                    </p>
                    <p className="_listing_modal_card_rent_cont2_txt2">3</p>
                  </div>
                </div>

                <div className="_listing_modal_card_rent_cont2_prop">
                  <div className="_listing_modal_card_rent_cont2_ic">
                    <SvgIcon iconType={"blue-floor"} />
                  </div>
                  <div className="_listing_modal_card_rent_feature_card_cont">
                    <p className="_listing_modal_card_rent_cont2_txt1">
                      Floor"
                    </p>
                    <p className="_listing_modal_card_rent_cont2_txt2">2nd</p>
                  </div>
                </div>
              </div>

              <div className="_listing_modal_card_rent_feature_btns">
                <div className="_listing_modal_card_rent_feature_btn1">
                  <button className="_listing_modal_card_rent_feature_btn">
                    Concierge serviee
                  </button>
                </div>
                <div className="_listing_modal_card_rent_feature_btn1">
                  <button className="_listing_modal_card_rent_feature_btn _listing_modal_card_ac_btn">
                    A/C
                  </button>
                </div>
              </div>
            </div>

            <div className="_listing_modal_card_rent_floor">
              <p className="_listing_modal_card_rent_features_txt">
                Floor Plan
              </p>
              <div className="_listing_modal_card_rent_floor_plan_img">
                <Image
                  src="assets/images/listing-modal-floor-plan.png"
                  alt="floor-plan"
                />
              </div>
            </div>

            <div className="_listing_modal_card_rent_map">
              <p className="_listing_modal_card_rent_features_txt">
                101 Valay Road, NY
              </p>
              <p className="_listing_modal_card_rent_map_para">
                Approximate address as by advertiser's desire
              </p>
              <Link href="/listing?tab=map" target="_blank">
                <div className="mapouter _map _listing_page_map">
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
                    <a href="https://www.embedgooglemap.net">
                      responsive google map
                    </a>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}",
                      }}
                    />
                  </div>
                </div>
              </Link>

              <div className="_listing_modal_card_rent_map_address_buttons d-flex align-items-center justify-content-between">
                <button className="_listing_modal_card_rent_map_address_button">
                  <span className="_housiko_listing_card_item_type_inner_ic">
                    <SvgIcon iconType={"location"} w={18} h={18} />
                  </span>
                  Ask The exact address
                </button>
                <button className="_listing_modal_card_rent_map_address_button _listing_modal_card_rent_map_address_button2">
                  <span className="_housiko_listing_card_item_type_inner_ic">
                    <SvgIcon iconType={"direction"} w={18} h={18} />
                  </span>
                  Get Directions
                </button>
              </div>

              <div className="_listing_modal_card_rent_map_bus_info">
                <p className="_listing_modal_card_rent_map_bus_info_para">
                  Bus
                </p>
                <div className="_listing_modal_card_rent_map_bus_number">
                  <div className="_listing_modal_card_rent_map_bus_number_two_digit">
                    <p className="_listing_modal_card_rent_map_bus_number_two_digit_para">
                      44
                    </p>
                  </div>
                  <div className="_listing_modal_card_rent_map_bus_number_three_digit">
                    <p className="_listing_modal_card_rent_map_bus_number_two_digit_para">
                      108
                    </p>
                  </div>
                </div>
              </div>

              <div className="_listing_modal_card_rent_map_bus_root">
                <p className="_listing_modal_card_rent_map_bus_info_para">
                  Metro
                </p>
                <div className="_listing_modal_card_rent_map_bus_number_two_digit">
                  <p className="_listing_modal_card_rent_map_bus_number_two_digit_para">
                    M2
                  </p>
                </div>
              </div>

              <div className="_listing_modal_card_rent_map_bus_root_links">
                <a
                  href="#0"
                  className="_listing_modal_card_rent_map_bus_root_link"
                >
                  Check other points of interest nearby
                </a>
              </div>
            </div>

            <div className="_listing_modal_card_advertise">
              <p className="_listing_modal_card_rent_features_txt">
                Contact the advertiser
              </p>

              <div className="_listing_modal_card_advertise_box">
                <div className="_listing_modal_card_advertise_box_title">
                  <p className="_listing_modal_card_advertise_box_title1">
                    Advertiser
                  </p>
                </div>

                <div className="_listing_modal_card_advertise_box_company_ic_adddress">
                  <div className="_listing_modal_card_advertise_box_company_ic">
                    <img
                      src="assets/images/listing-modal-advertise-ic.svg"
                      alt="company-logo"
                      className="_listing_modal_card_advertise_box_company_ic_tag"
                    />
                  </div>
                  <div className="_listing_modal_card_advertise_box_company_address">
                    <p className="_listing_modal_card_advertise_box_company_address_para">
                      Properties CENTURY 21 BZ CENTURY 21 BZ
                    </p>

                    <div className="_listing_modal_card_advertise_box_company_address_phone">
                      <p className="_listing_modal_card_advertise_box_company_address_phone_para">
                        Phone
                      </p>

                      <div className="_listing_modal_card_advertise_box_company_address_phone_number">
                        <SvgIcon iconType={"phone"} />
                        <p className="_listing_modal_card_rent_features_txt">
                          932 938 205
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="_listing_modal_card_advertise_box_language_reference">
                  <div className="_listing_modal_card_advertise_box_language">
                    <p className="_listing_modal_card_advertise_box_company_address_phone_para">
                      Languages
                    </p>
                    <p className="_listing_modal_card_rent_features_txt">
                      English, Hungarian
                    </p>
                  </div>
                  <div className="_listing_modal_card_advertise_box_language">
                    <p className="_listing_modal_card_advertise_box_company_address_phone_para">
                      Reference Housiko
                    </p>
                    <p className="_listing_modal_card_rent_features_txt">
                      164709287
                    </p>
                  </div>
                </div>

                <div className="_listing_modal_card_advertise_box_chat">
                  {!isLoginVal && (
                    <p className="_listing_modal_card_advertise_box_chat_para">
                      Before you can chat you need to log in into your account
                    </p>
                  )}
                  <div className="_listing_modal_card_advertise_box_chat_buttons">
                    <div className="_listing_modal_card_advertise_box_chat_button1">
                      {isLoginVal && (
                        <button className="_housiko_listing_card_item_bottom_btn _navbar_btn _msg_btn1">
                          <span className="_housiko_listing_card_item_bottom_btn_ic">
                            <SvgIcon iconType={"chat"} color={"#fff"} />
                          </span>
                          <span className="_housiko_listing_card_item_bottom_btn_txt">
                            Chat
                          </span>
                        </button>
                      )}
                      {!isLoginVal && (
                        <button className="_housiko_listing_card_item_bottom_btn _register_navbar_btn">
                          <span className="_housiko_listing_card_item_bottom_btn_ic">
                            <SvgIcon iconType={"register-user"} />
                          </span>
                          <span>Sign In or Regiser</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="_listing_modal_card_property_line_calculator">
              <div className="_listing_modal_card_property_lines">
                <div className="_listing_modal_card_property _active">
                  <p className="_listing_modal_card_property_txt">
                    This property 865,000 Ft/m2
                  </p>
                </div>
                <div className="_listing_modal_card_property">
                  <p className="_listing_modal_card_property_txt">
                    Budapest Average 899,000 Ft/m2
                  </p>
                </div>
                <div className="_listing_modal_card_property">
                  <p className="_listing_modal_card_property_txt">
                    District I average 945,000 Ft/m2
                  </p>
                </div>
              </div>
              <div className="_listing_modal_card_property_bottom_border">
                <ul className="_listing_modal_card_property_bottom_border_dot_list">
                  <li className="_listing_modal_card_property_bottom_border_dot">
                    <span className="_listing_modal_card_property_bottom_border_dot_active"></span>
                  </li>
                  <li className="_listing_modal_card_property_bottom_border_dot">
                    <span className="_listing_modal_card_property_bottom_border_dot_inactive"></span>
                  </li>
                  <li className="_listing_modal_card_property_bottom_border_dot">
                    <span className="_listing_modal_card_property_bottom_border_dot_inactive"></span>
                  </li>
                </ul>
              </div>
              <div className="_listing_modal_card_property_calculator_buttons">
                <button className="_listing_modal_card_property_calculator_button _register_navbar_btn">
                  $ Mortagage calculator
                </button>
              </div>
            </div>

            <div className="_listing_modal_card_slider">
              <h6 className="_listing_modal_card_slider_title">
                People also search
              </h6>
              <Properties />
            </div>
          </div>
        </div>
      </div>
      <ReportModal
        showCreate={showCreateReportModal}
        open={isReportModalOpen}
        cancel={handleCancel}
      />
    </div>
  );
};

export default SingleListing;
