import { Input, Select, Switch } from "antd";
import { SvgIcon } from "../../../../components/Design/SvgIcon";
const { Option } = Select;

function MyProduct() {
  return (
    <div className="_myproduct_inner_area">
      <div className="_housiko_myads_search_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_housiko_myads_search_line"></div>
              <div className="_housiko_myads_search">
                <div className="_housiko_myads_search_select_list">
                  <div className="_housiko_myads_search _housiko_myads_search_list_space">
                    <Input
                      className="_housiko_myads_search_inpt"
                      placeholder="Search by reference"
                      prefix={<SvgIcon iconType={"myadsSearch"} />}
                    />
                  </div>
                  <div className="_housiko_myads_select _housiko_myads_select_wd1 _housiko_myads_search_list_space">
                    <Select
                      defaultValue="Price"
                      suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                    >
                      <Option value="Option1">Price 1</Option>
                      <Option value="Option2">Price 2</Option>
                    </Select>
                  </div>
                  <div className="_housiko_myads_select _housiko_myads_select_wd2 _housiko_myads_search_list_space">
                    <Select
                      defaultValue="Floor Area"
                      suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                    >
                      <Option value="Option1">Floor Area 1</Option>
                      <Option value="Option2">Floor Area 2</Option>
                    </Select>
                  </div>
                  <div className="_housiko_myads_select _housiko_myads_select_wd3 _housiko_myads_search_list_space">
                    <Select
                      defaultValue="Total Rooms"
                      suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                    >
                      <Option value="Option1">20</Option>
                      <Option value="Option2">30</Option>
                    </Select>
                  </div>
                </div>

                <div className="_housiko_myproduct_search_balance">
                  <p className="_housiko_myproduct_search_balance_txt1">
                    Housikoin balance
                  </p>
                  <p className="_housiko_myproduct_search_balance_txt2">
                    {" "}
                    $40,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="_housiko_myproduct_card_wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="_housiko_myproduct_left_cards">
                <div className="_housiko_myproduct_left_card_head">
                  <div className="_housiko_myproduct_left_card_head_para">
                    <p className="_housiko_myproduct_left_card_head_para1">
                      1 property
                    </p>
                  </div>
                  <div className="_housiko_listing_top_filter_wrap">
                    <p className="_housiko_listing_top_filter_txt">Sort by:</p>
                    <div className="_housiko_listing_top_filter _navbar_btn3">
                      <Select
                        defaultValue="Position"
                        style={{
                          width: 100,
                        }}
                        suffixIcon={
                          <SvgIcon iconType={"caret-down"} w={14} h={14} />
                        }
                      >
                        <Option value="option1">Position</Option>
                        <Option value="option2">Content</Option>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="_housiko_myproduct_left_card">
                  <div className="_housiko_myproduct_left_card_img">
                    <img
                      src="assets/images/myproduct-card-img.png"
                      alt="myproduct-card"
                      className="_housiko_myproduct_left_card_img_tag"
                    />
                    <div className="_housiko_mymessage_card_item_img_txt">
                      <p className="_housiko_mymessage_card_item_img_txt1">
                        REF:5236
                      </p>
                    </div>
                  </div>
                  <div className="_housiko_myproduct_left_card_cont">
                    <span className="_housiko_listing_card_item_content_txt_inner">
                      <h3 className="_housiko_listing_card_item_content_inner_title">
                        $25,000
                      </h3>
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
                      <ul className="_housiko_listing_card_item_feature_ul _housiko_myproduct_card_item">
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
                    <div className="_housiko_myproduct_left_card_cont_links">
                      <a
                        href="#0"
                        className="_housiko_myproduct_left_card_cont_link"
                      >
                        Full View
                      </a>
                    </div>
                  </div>
                </div>

                <div className="_housiko_myproduct_card_bottm">
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
                      Interactions:
                    </p>
                    <div className="_navbar_btn3 _housiko_myads_card_center_bottm_list_select">
                      <Select
                        defaultValue="458"
                        suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                      >
                        <Option value="Interaction 1">480</Option>
                        <Option value="Interaction 2">408</Option>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 me-auto">
              <div className="_housiko_myproduct_r8_cards">
                <div className="_housiko_myproduct_r8_card">
                  <div className="_housiko_myproduct_r8_card_txt">
                    <span className="_housiko_myproduct_r8_card_txt_sp">
                      <img
                        src="assets/images/my-product-carbon-rocket.svg"
                        alt="iocn"
                        className="_housiko_myproduct_r8_card_txt_icon"
                      />
                    </span>
                    <p className="_housiko_myproduct_r8_card_txt1">
                      UPs
                      <span className="_housiko_myproduct_r8_card_txt1_sp">
                        <SvgIcon
                          iconType={"info"}
                          w={15}
                          h={15}
                          color={"#252E8D"}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="_housiko_myproduct_r8_card_box _housiko_myproduct_r8_card_box_width1">
                    <button className="_housiko_myproduct_r8_card_box_btn">
                      Upgrade to Pro
                    </button>
                  </div>
                </div>
                <div className="_housiko_myproduct_r8_card">
                  <div className="_housiko_myproduct_r8_card_txt">
                    <span className="_housiko_myproduct_r8_card_txt_sp">
                      <img
                        src="assets/images/my-product-top-ic.svg"
                        alt="iocn"
                        className="_housiko_myproduct_r8_card_txt_icon"
                      />
                    </span>
                    <p className="_housiko_myproduct_r8_card_txt1">
                      Top
                      <span className="_housiko_myproduct_r8_card_txt1_sp">
                        <SvgIcon
                          iconType={"info"}
                          w={15}
                          h={15}
                          color={"#252E8D"}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="_housiko_myproduct_r8_card_box _housiko_myproduct_r8_card_box_width2">
                    <Switch className="_housiko_list_prop_toggle_btn" />
                    <p className="_housiko_list_prop_para">12 pos. left</p>
                    <a
                      href="#0"
                      className="_housiko_myproduct_left_card_cont_link"
                    >
                      Renew
                    </a>
                  </div>
                </div>
                <div className="_housiko_myproduct_r8_card">
                  <div className="_housiko_myproduct_r8_card_txt">
                    <span className="_housiko_myproduct_r8_card_txt_sp">
                      <img
                        src="assets/images/my-product-promo-ic.svg"
                        alt="iocn"
                        className="_housiko_myproduct_r8_card_txt_icon"
                      />
                    </span>
                    <p className="_housiko_myproduct_r8_card_txt1">
                      Promo
                      <span className="_housiko_myproduct_r8_card_txt1_sp">
                        <SvgIcon
                          iconType={"info"}
                          w={15}
                          h={15}
                          color={"#252E8D"}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="_housiko_myproduct_r8_card_box _housiko_myproduct_r8_card_box_width3">
                    <Switch className="_housiko_list_prop_toggle_btn" />
                    <p className="_housiko_list_prop_para">7 days left</p>
                    <a
                      href="#0"
                      className="_housiko_myproduct_left_card_cont_link"
                    >
                      Renew
                    </a>
                  </div>
                </div>
                <div className="_housiko_myproduct_r8_card">
                  <div className="_housiko_myproduct_r8_card_txt">
                    <span className="_housiko_myproduct_r8_card_txt_sp">
                      <SvgIcon
                        iconType={"envelop"}
                        w={16}
                        h={16}
                        color={"#000"}
                      />
                    </span>
                    <p className="_housiko_myproduct_r8_card_txt1">
                      Alert
                      <span className="_housiko_myproduct_r8_card_txt1_sp">
                        <SvgIcon
                          iconType={"info"}
                          w={15}
                          h={15}
                          color={"#252E8D"}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="_housiko_myproduct_r8_card_box _housiko_myproduct_r8_card_box_width3 _width3_padding_top">
                    <Switch className="_housiko_list_prop_toggle_btn" />
                    <p className="_housiko_list_prop_para">7 days left</p>
                    <a
                      href="#0"
                      className="_housiko_myproduct_left_card_buy_link"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              </div>

              <div className="_housiko_myproduct_r8_cards">
                <div className="_housiko_myproduct_r8_card">
                  <div className="_housiko_myproduct_r8_card_txt">
                    <p className="_housiko_myproduct_r8_card_txt1">
                      Basic tags
                    </p>
                  </div>
                  <div className="_housiko_myproduct_r8_card_box _housiko_myproduct_r8_card_box_width1">
                    <span className="_housiko_myproduct_r8_card_box_select _housiko_myproduct_r8_card_box_select_width1">
                      <Select
                        defaultValue="3D Tour"
                        suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                      >
                        <Option value="plan 1">Tour 1</Option>
                        <Option value="plan 2">Tour 2</Option>
                      </Select>
                    </span>
                    <p className="_housiko_list_prop_para">5 days left</p>
                    <a
                      href="#0"
                      className="_housiko_myproduct_left_card_cont_link"
                    >
                      Renew
                    </a>
                  </div>
                </div>
                <div className="_housiko_myproduct_r8_card">
                  <div className="_housiko_myproduct_r8_card_txt">
                    <p className="_housiko_myproduct_r8_card_txt1">Pro tags</p>
                  </div>
                  <div className="_housiko_myproduct_r8_card_box _housiko_myproduct_r8_card_box_width4">
                    <span className="_housiko_myproduct_r8_card_box_select _housiko_myproduct_r8_card_box_select_width2">
                      <Select
                        defaultValue="Great location"
                        suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                      >
                        <Option value="location">location 1</Option>
                        <Option value="location">location 2</Option>
                      </Select>
                    </span>
                    <p className="_housiko_list_prop_para">-- days left</p>
                    <a
                      href="#0"
                      className="_housiko_myproduct_left_card_buy_link"
                    >
                      Buy
                    </a>
                    <a
                      href="#0"
                      className="_housiko_myproduct_left_card_cont_preview_link"
                    >
                      Preview
                    </a>
                  </div>
                </div>
                <div className="_housiko_myproduct_r8_card">
                  <div className="_housiko_myproduct_r8_card_txt">
                    <p className="_housiko_myproduct_r8_card_txt1">
                      Premium tags
                    </p>
                  </div>
                  <div className="_housiko_myproduct_r8_card_box _housiko_myproduct_r8_card_box_width4">
                    <button className="_housiko_myproduct_r8_card_box_btn">
                      Upgrade to Pro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProduct;
