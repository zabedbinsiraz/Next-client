import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { SvgIcon } from "../../components/Design/SvgIcon";

const { Option } = Select;

const AgentList = () => {
  return (
    <>
      <div className="_housiko_agentlist_wrapper">
        <div className="_housiko_agentlist_wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="_housiko_agentlist_title">
                  <h4 className="_housiko_agentlist_title1">List Of Agents</h4>
                </div>
                <div className="_housiko_agentlist_search_select">
                  <div className="_housiko_agentlist_search">
                    <input
                      type="text"
                      placeholder="Search"
                      className="_housiko_agentlist_search_inpt"
                    />
                    <button className="_housiko_agentlist_search_btn">
                      <SvgIcon
                        iconType={"search1"}
                        w={24}
                        h={24}
                        color={"#252E8D"}
                      />
                    </button>
                  </div>

                  <div className="_housiko_listing_top_filter_wrap">
                    <p className="_housiko_listing_top_filter_txt">Sort by:</p>
                    <div className="_housiko_listing_top_filter _agent_select">
                      <Select
                        defaultValue="Rating"
                        style={
                          {
                            // gap: '0 10px'
                          }
                        }
                        suffixIcon={
                          <SvgIcon iconType={"caret-down"} w={14} h={14} />
                        }
                      >
                        <Option value="option1">Rating</Option>
                        <Option value="option2">Rating 1</Option>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="_housiko_agentlist_cards">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="_housiko_agentlist_card">
                        <div className="_housiko_agentlist_card_ic_address">
                          <div className="_listing_modal_card_advertise_box_company_ic_address">
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
                          <div className="_housiko_agentlist_card_property">
                            <p className="_housiko_agentlist_card_property_para">
                              54 Properties
                            </p>
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
                          <div className="_housiko_agentlist_card_button_link">
                            <div className="_listing_modal_card_advertise_box_chat_buttons">
                              <div className="_listing_modal_card_advertise_box_rating">
                                <ul className="_listing_modal_card_advertise_box_rating_list">
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star1"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>

                                  <li className="_listing_modal_card_advertise_box_rating_ic _listing_modal_card_advertise_box_rating_count">
                                    (50)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="_housiko_agentlist_card_link">
                              <Link
                                href="/listing"
                                className="_housiko_agentlist_card_link_tag"
                              >
                                See All Properties
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="_housiko_agentlist_card">
                        <div className="_housiko_agentlist_card_ic_address">
                          <div className="_listing_modal_card_advertise_box_company_ic_address">
                            <div className="_listing_modal_card_advertise_box_company_ic">
                              <Image
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
                          <div className="_housiko_agentlist_card_property">
                            <p className="_housiko_agentlist_card_property_para">
                              54 Properties
                            </p>
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
                          <div className="_housiko_agentlist_card_button_link">
                            <div className="_listing_modal_card_advertise_box_chat_buttons">
                              <div className="_listing_modal_card_advertise_box_rating">
                                <ul className="_listing_modal_card_advertise_box_rating_list">
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star1"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>

                                  <li className="_listing_modal_card_advertise_box_rating_ic _listing_modal_card_advertise_box_rating_count">
                                    (50)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="_housiko_agentlist_card_link">
                              <Link
                                href="/listing"
                                className="_housiko_agentlist_card_link_tag"
                              >
                                See All Properties
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="_housiko_agentlist_card">
                        <div className="_housiko_agentlist_card_ic_address">
                          <div className="_listing_modal_card_advertise_box_company_ic_address">
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
                          <div className="_housiko_agentlist_card_property">
                            <p className="_housiko_agentlist_card_property_para">
                              54 Properties
                            </p>
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
                          <div className="_housiko_agentlist_card_button_link">
                            <div className="_listing_modal_card_advertise_box_chat_buttons">
                              <div className="_listing_modal_card_advertise_box_rating">
                                <ul className="_listing_modal_card_advertise_box_rating_list">
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star1"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>

                                  <li className="_listing_modal_card_advertise_box_rating_ic _listing_modal_card_advertise_box_rating_count">
                                    (50)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="_housiko_agentlist_card_link">
                              <Link
                                href="/listing"
                                className="_housiko_agentlist_card_link_tag"
                              >
                                See All Properties
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="_housiko_agentlist_card">
                        <div className="_housiko_agentlist_card_ic_address">
                          <div className="_listing_modal_card_advertise_box_company_ic_address">
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
                          <div className="_housiko_agentlist_card_property">
                            <p className="_housiko_agentlist_card_property_para">
                              54 Properties
                            </p>
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
                          <div className="_housiko_agentlist_card_button_link">
                            <div className="_listing_modal_card_advertise_box_chat_buttons">
                              <div className="_listing_modal_card_advertise_box_rating">
                                <ul className="_listing_modal_card_advertise_box_rating_list">
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>
                                  <li className="_listing_modal_card_advertise_box_rating_ic">
                                    <SvgIcon
                                      iconType={"star1"}
                                      w={18}
                                      h={18}
                                      color={"#FFBF00"}
                                    />
                                  </li>

                                  <li className="_listing_modal_card_advertise_box_rating_ic _listing_modal_card_advertise_box_rating_count">
                                    (50)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="_housiko_agentlist_card_link">
                              <Link
                                href="/listing"
                                className="_housiko_agentlist_card_link_tag"
                              >
                                See All Properties
                              </Link>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentList;
