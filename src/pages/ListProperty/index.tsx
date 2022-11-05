import { Checkbox, Input, Select, Switch, Upload } from "antd";
import { useState } from "react";
import { SvgIcon } from "../../components/Design/SvgIcon";
import { TypeDropdown } from "../../components/Dropdowns/Dropdowns";

const { Option } = Select;
const { TextArea } = Input;

TypeDropdown;
const ListProperty = () => {
  const [useDifferent, setUseDifferent] = useState(false);
  const [showRentPrice, setShowRentPrice] = useState(false);

  const handelUseDifferent = () => {
    setUseDifferent(!useDifferent);
  };
  const countries = [
    {
      flag: (
        <img
          src="assets/images/engflag.png"
          alt=""
          className="_navbar_btn3_flag"
        />
      ),
      countryCode: "+44",
      countryName: "England",
      value: "eng",
    },
    {
      flag: (
        <img
          src="assets/images/hungflag.png"
          alt=""
          className="_navbar_btn3_flag"
        />
      ),
      countryCode: "+32",
      countryName: "Hungary",
      value: "hung",
    },
  ];
  return (
    <div className="_housiko_list_prop_wrapper">
      <div className="_housiko_list_porp_wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 mx-auto">
              <div className="_housiko_list_prop_content_wrap">
                <div className="_housiko_list_prop_content">
                  <div className="_housiko_list_prop_main_tab_wrap">
                    <ul className="_housiko_list_prop_main_tab_ul">
                      <li className="_housiko_list_prop_main_tab_li _active">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"home"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Home
                        </span>
                      </li>
                      <li className="_housiko_list_prop_main_tab_li _housiko_list_prop_main_tab_come">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"garage"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Garage
                        </span>

                        <span className="_housiko_list_prop_main_tab_come_box">
                          <p className="_housiko_list_prop_main_tab_come_box_txt">
                            coming soon
                          </p>
                        </span>
                      </li>
                      <li className="_housiko_list_prop_main_tab_li _housiko_list_prop_main_tab_come">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"land"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Land
                        </span>

                        <span className="_housiko_list_prop_main_tab_come_box">
                          <p className="_housiko_list_prop_main_tab_come_box_txt">
                            coming soon
                          </p>
                        </span>
                      </li>
                      <li className="_housiko_list_prop_main_tab_li _housiko_list_prop_main_tab_come">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"local"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Local
                        </span>

                        <span className="_housiko_list_prop_main_tab_come_box">
                          <p className="_housiko_list_prop_main_tab_come_box_txt">
                            coming soon
                          </p>
                        </span>
                      </li>
                      <li className="_housiko_list_prop_main_tab_li _housiko_list_prop_main_tab_come">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"office"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Office
                        </span>

                        <span className="_housiko_list_prop_main_tab_come_box">
                          <p className="_housiko_list_prop_main_tab_come_box_txt">
                            coming soon
                          </p>
                        </span>
                      </li>
                      <li className="_housiko_list_prop_main_tab_li _housiko_list_prop_main_tab_come">
                        <span className="_housiko_list_prop_main_tab_li_ic">
                          <SvgIcon
                            iconType={"store"}
                            w={42}
                            h={42}
                            color={"#999"}
                          />
                        </span>
                        <span className="_housiko_list_prop_main_tab_li_txt">
                          Store Room
                        </span>

                        <span className="_housiko_list_prop_main_tab_come_box">
                          <p className="_housiko_list_prop_main_tab_come_box_txt">
                            coming soon
                          </p>
                        </span>
                      </li>
                    </ul>
                    <div className="_housiko_list_prop_tab_wrap">
                      <ul className="_housiko_list_prop_tab_ul">
                        <li className="_housiko_list_prop_tab_li  _active">
                          I Sell
                        </li>
                        <li className="_housiko_list_prop_tab_li ">I Rent</li>
                        {/* <li className="_housiko_list_prop_tab_li ">
                                                    I Share
                                                </li> */}
                      </ul>
                      <div className="_housiko_list_prop_toggle_btn_wrap">
                        <ul className="_housiko_list_prop_toggle_btn_ul">
                          <li className="_housiko_list_prop_toggle_btn_li">
                            <Switch
                              onChange={() => setShowRentPrice(!showRentPrice)}
                              className="_housiko_list_prop_toggle_btn"
                            />
                            <span className="_housiko_list_prop_toggle_btn_txt">
                              I also rent it
                            </span>
                          </li>
                          <li className="_housiko_list_prop_toggle_btn_li">
                            <Switch className="_housiko_list_prop_toggle_btn" />
                            <span className="_housiko_list_prop_toggle_btn_txt">
                              Directly from owner
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="_housiko_list_prop_characterstics">
                    <h3 className="_housiko_list_prop_charactersitics_title">
                      Basic characteristics
                    </h3>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <label
                        htmlFor=""
                        className="_housiko_list_prop_characterstics_label"
                      >
                        Price
                      </label>
                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <Input
                          className="_housiko_list_prop_characterstics_input _housiko_list_prop_characterstics_input1"
                          placeholder="$20000"
                        />
                        <div className="_price_select_wrap">
                          <span className="_price_select">£</span>
                        </div>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      {showRentPrice && (
                        <>
                          <label
                            htmlFor=""
                            className="_housiko_list_prop_characterstics_label"
                          >
                            Rent price
                          </label>
                          <div className="_housiko_list_prop_characterstics_input_inner">
                            <Input
                              className="_housiko_list_prop_characterstics_input _housiko_list_prop_characterstics_input1"
                              placeholder="$20000"
                            />
                            <div className="_price_select_wrap">
                              <span className="_price_select">£</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <label
                        htmlFor=""
                        className="_housiko_list_prop_characterstics_label"
                      >
                        Type of construction
                      </label>
                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <Select
                          className="_housiko_hero_content_tab_type _housiko_hero_content_tab_select _housiko_list_prop_characterstics_select2"
                          defaultValue="Piso"
                          style={{
                            width: "100%",
                          }}
                          suffixIcon={
                            <SvgIcon iconType={"caret-down"} w={14} h={14} />
                          }
                        >
                          <Option value="Piso1">Piso 1</Option>
                          <Option value="Piso2">Piso 2</Option>
                          <Option value="Piso3">Piso 3</Option>
                        </Select>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <label
                        htmlFor=""
                        className="_housiko_list_prop_characterstics_label"
                      >
                        Type of home
                      </label>
                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <TypeDropdown />
                      </div>
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <label
                        htmlFor=""
                        className="_housiko_list_prop_characterstics_label"
                      >
                        Floor area
                        {/* <span className='_housiko_list_prop_characterstics_label_unit'>(sqm, m2)</span> */}
                      </label>
                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <Input
                          className="_housiko_list_prop_characterstics_input _housiko_list_prop_characterstics_input1"
                          placeholder="Piso"
                        />
                        <p className="_housiko_list_prop_characterstics_label_unit">
                          m2
                        </p>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <div className="_housiko_list_prop_characterstics_label_ics">
                        <label
                          htmlFor=""
                          className="_housiko_list_prop_characterstics_label"
                        >
                          Total Rooms
                        </label>
                        <span className="_housiko_list_prop_characterstics_label_ic">
                          <SvgIcon
                            iconType={"info"}
                            color={"#555"}
                            w={19}
                            h={19}
                          />
                        </span>
                      </div>

                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <h4 className="_housiko_list_prop_characterstics_title">
                          Rooms
                        </h4>
                        <ul className="_housiko_list_prop_tab_ul">
                          <li className="_housiko_list_prop_tab_li _active">
                            1
                          </li>
                          <li className="_housiko_list_prop_tab_li ">2</li>
                          <li className="_housiko_list_prop_tab_li ">3</li>
                          <li className="_housiko_list_prop_tab_li ">4</li>
                          <li className="_housiko_list_prop_tab_li ">
                            More
                            {/* <div className="_housiko_list_prop_tab_li_inner px-2">
                                                            <Input placeholder='5' className='text-center' />
                                                        </div> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <h4 className="_housiko_list_prop_characterstics_title">
                          Half rooms
                        </h4>
                        <ul className="_housiko_list_prop_tab_ul">
                          <li className="_housiko_list_prop_tab_li _active">
                            1
                          </li>
                          <li className="_housiko_list_prop_tab_li ">2</li>
                          <li className="_housiko_list_prop_tab_li ">3</li>
                          <li className="_housiko_list_prop_tab_li ">4</li>
                          <li className="_housiko_list_prop_tab_li ">
                            More
                            {/* <div className="_housiko_list_prop_tab_li_inner px-2">
                                                            <Input placeholder='5' className='text-center' />
                                                        </div> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="_housiko_list_prop_characterstics _housiko_list_prop_characterstics_big_input_wrap">
                    <h3 className="_housiko_list_prop_characterstics_address_title">
                      Property Address
                    </h3>
                    <div className="_housiko_list_prop_characterstics_input_inner2">
                      <div className="_housiko_list_prop_characterstics_input_inner2_inner">
                        <Input
                          className="_housiko_list_prop_characterstics_input2 _housiko_list_prop_characterstics_input1"
                          placeholder="Street, Number and population"
                        />
                        <button className="_housiko_list_map_btn">
                          <SvgIcon iconType={"map-pin"} color={"#fff"} />
                        </button>
                      </div>
                      <button className="_housiko_list_prop_characterstics_input_btn">
                        To Locate
                      </button>
                    </div>
                    <div className="_housiko_list_prop_characterstics_map_wrap">
                      <div className="mapouter">
                        <div className="gmap_canvas">
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
                          <a href="https://123movies-to.org"></a>
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
                    </div>
                    <div className="_housiko_list_prop_toggle_btn_wrap">
                      <ul className="_housiko_list_prop_toggle_btn_ul _housiko_list_prop_toggle_btn_ul2 mt-3">
                        <li className="_housiko_list_prop_toggle_btn_li">
                          <Switch className="_housiko_list_prop_toggle_btn" />
                          <span className="_housiko_list_prop_toggle_btn_txt">
                            Hide The Address for <span>$25</span>
                          </span>
                        </li>
                        <li className="_housiko_list_prop_toggle_btn_li _housiko_list_prop_toggle_btn_li2">
                          <a
                            href="#0"
                            className="_housiko_list_prop_toggle_btn_li _housiko_list_prop_toggle_btn_li2"
                          >
                            <span className="_housiko_list_prop_toggle_btn_li_ic">
                              <SvgIcon iconType={"info"} color={"#252E8D"} />
                            </span>
                            <span className="_housiko_list_prop_toggle_btn_txt _housiko_list_prop_toggle_btn_txt2">
                              More Information
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="_housiko_list_prop_characterstics _housiko_list_prop_characterstics_big_input_wrap">
                    <h3 className="_housiko_list_prop_characterstics_address_title">
                      Photos of the property
                    </h3>
                    <div className="_housiko_list_prop_characterstics_upload_img_wrap">
                      <div className="_housiko_list_prop_characterstics_upload_img_inner">
                        <Upload>
                          <button className="_housiko_list_prop_characterstics_upload_img_btn">
                            <SvgIcon iconType={"folder"} w={64} h={64} />
                            <span className="_housiko_list_prop_characterstics_upload_img_btn_txt">
                              Upload Photo
                            </span>
                          </button>
                        </Upload>
                      </div>
                      <div className="_housiko_list_prop_characterstics_upload_img_btn_wrap">
                        <button className="_city_map_btn _housiko_list_prop_characterstics_add_img_btn">
                          +Add photo of the floor plan
                        </button>
                        <button className="_city_map_btn _housiko_list_prop_characterstics_add_img_btn">
                          +Add 3D Tour
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="_housiko_list_prop_characterstics _housiko_list_prop_characterstics_big_input_wrap">
                    <h3 className="_housiko_list_prop_characterstics_address_title">
                      Description
                    </h3>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <Input
                          className="_housiko_list_prop_characterstics_input"
                          placeholder="Title"
                        />
                      </div>
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <TextArea
                          className="_housiko_list_prop_characterstics_input"
                          style={{
                            height: 120,
                          }}
                          placeholder="Tell us about your property"
                        />
                      </div>
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <Input
                          className="_housiko_list_prop_characterstics_input"
                          placeholder="Description of common costs, if any"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="_housiko_list_prop_characterstics _housiko_list_prop_characterstics_big_input_wrap">
                    <h3 className="_housiko_list_prop_characterstics_address_title">
                      Features
                    </h3>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <label
                        htmlFor=""
                        className="_housiko_list_prop_characterstics_label"
                      >
                        Bedrooms
                      </label>
                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <ul className="_housiko_list_prop_tab_ul _housiko_list_prop_tab_ul3">
                          <li className="_housiko_list_prop_tab_li ">Studio</li>
                          <li className="_housiko_list_prop_tab_li ">1</li>
                          <li className="_housiko_list_prop_tab_li ">2</li>
                          <li className="_housiko_list_prop_tab_li ">3</li>
                          <li className="_housiko_list_prop_tab_li ">
                            More
                            {/* <div className="_housiko_list_prop_tab_li_inner px-2">
                                                            <Input placeholder='5' className='text-center' />
                                                        </div> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <label
                        htmlFor=""
                        className="_housiko_list_prop_characterstics_label"
                      >
                        Bathroom
                      </label>
                      <div className="_housiko_list_prop_characterstics_input_inner">
                        <ul className="_housiko_list_prop_tab_ul _housiko_list_prop_tab_ul3">
                          <li className="_housiko_list_prop_tab_li ">1</li>
                          <li className="_housiko_list_prop_tab_li ">2</li>
                          <li className="_housiko_list_prop_tab_li ">3</li>
                          <li className="_housiko_list_prop_tab_li ">4</li>
                          <li className="_housiko_list_prop_tab_li ">
                            More
                            {/* <div className="_housiko_list_prop_tab_li_inner px-2">
                                                            <Input placeholder='5' className='text-center' />
                                                        </div> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <label
                        htmlFor=""
                        className="_housiko_list_prop_characterstics_label"
                      >
                        Floor
                      </label>
                      <div className="_housiko_list_prop_characterstics_drop_wrap d-flex align-items-center">
                        <div className="_housiko_list_prop_characterstics_input_inner">
                          <Select
                            className="_housiko_hero_content_tab_type _housiko_hero_content_tab_select _housiko_list_prop_characterstics_select2"
                            defaultValue="Basement"
                            style={{
                              width: "100%",
                            }}
                            suffixIcon={
                              <SvgIcon iconType={"caret-down"} w={14} h={14} />
                            }
                          >
                            <Option value="Basement">Basement</Option>
                            <Option value="Basement 2">Basement 2</Option>
                            <Option value="Basement 3">Basement 3</Option>
                          </Select>
                        </div>
                        {/* <div className="_housiko_list_prop_characterstics_input_inner">
                                                    <Select
                                                        className='_housiko_hero_content_tab_type _housiko_hero_content_tab_select _housiko_list_prop_characterstics_select2'
                                                        defaultValue="10th"
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        suffixIcon={<SvgIcon iconType={'caret-down'} w={14} h={14} />}
                                                    >
                                                        <Option value="10th">10th</Option>
                                                        <Option value="9th">9th</Option>
                                                        <Option value="8th">8th</Option>
                                                        <Option value="7th">7th</Option>
                                                        <Option value="6th">6th</Option>
                                                        <Option value="5th">5th</Option>
                                                        <Option value="4th">4th</Option>
                                                        <Option value="3rd">3rd</Option>
                                                        <Option value="2nd">2nd</Option>
                                                        <Option value="1st">1st</Option>
                                                        <Option value="GF">GF</Option>
                                                    </Select>
                                                </div> */}
                      </div>
                      <div className="_housiko_list_prop_feature_wrap">
                        <div className="_housiko_list_prop_feature_inner">
                          <div className="_housiko_list_prop_feature_content">
                            <h3 className="_housiko_list_prop_feature_content_title">
                              View
                            </h3>
                            <div className="_housiko_list_prop_feature_check_wrap">
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Street
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Danube
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Panoramic
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Balaton
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Courtyard
                                </Checkbox>
                              </div>
                            </div>
                          </div>
                          <div className="_housiko_list_prop_feature_content">
                            <h3 className="_housiko_list_prop_feature_content_title">
                              Orientation
                            </h3>
                            <div className="_housiko_list_prop_feature_check_wrap">
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  North
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  North East
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  East
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  North West
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  West
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  South East
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  South
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  South West
                                </Checkbox>
                              </div>
                            </div>
                          </div>
                          <div className="_housiko_list_prop_feature_content">
                            <h3 className="_housiko_list_prop_feature_content_title">
                              Conservation status
                            </h3>
                            <div className="_housiko_list_prop_feature_check_wrap">
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Almost New
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  For renovation
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Good
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Very good
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Refurbished
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  New
                                </Checkbox>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_housiko_list_prop_feature_inner _housiko_list_prop_feature_inner2">
                          <div className="_housiko_list_prop_feature_content">
                            <h3 className="_housiko_list_prop_feature_content_title">
                              Extras
                            </h3>
                            <div className="_housiko_list_prop_feature_check_wrap">
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Lift
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Parking
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Terrace
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Heating gas
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Heating electric
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Central Heating
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Airbnb license
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Garden
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Swimming Pool
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Balcony
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Furnished
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  A/C
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Storage
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  American Kitchen
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  In-suite bathroom
                                </Checkbox>
                              </div>
                              <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                                <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                                  Parquet floor
                                </Checkbox>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_housiko_list_prop_characterstics_input_wrap">
                      <label
                        htmlFor=""
                        className="_housiko_list_prop_characterstics_label"
                      >
                        Your Contact Details
                      </label>

                      <div className="_housiko_list_prop_contact_infos">
                        <div className="_housiko_list_prop_contact_info">
                          <label
                            htmlFor=""
                            className="_housiko_list_prop_characterstic_label"
                          >
                            Name
                          </label>
                          <div className="_housiko_list_prop_characterstics_input_inner">
                            <Input
                              disabled={useDifferent ? false : true}
                              className="_housiko_list_prop_characterstics_input"
                              placeholder="Adam"
                            />
                          </div>
                        </div>

                        <div className="_housiko_list_prop_contact_info">
                          <label
                            htmlFor=""
                            className="_housiko_list_prop_characterstic_label"
                          >
                            Email
                          </label>
                          <div className="_housiko_list_prop_characterstics_input_inner">
                            <Input
                              disabled={useDifferent ? false : true}
                              className="_housiko_list_prop_characterstics_input"
                              placeholder="Adam@housiko.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="_housiko_myprofile_tab_parsonal_info_mobile">
                        <label
                          htmlFor=""
                          className="_housiko_list_prop_characterstic_label"
                        >
                          Phone
                        </label>
                        <form className="_housiko_myprofile_tab_parsonal_info_mobile_form">
                          <div className="_housiko_myprofile_tab_parsonal_info_mobile_form_inner">
                            <div className="_housiko_myprofile_select_language _select_language_wd1">
                              <Select
                                disabled={useDifferent ? false : true}
                                defaultValue={`phone`}
                                suffixIcon={
                                  <SvgIcon
                                    w={14}
                                    h={14}
                                    iconType={"caret-down"}
                                  />
                                }
                              >
                                <Option value="phone" label="Phone">
                                  <div className="option-label-item">
                                    <span
                                      className="_navbar_btn3_flag_wrap"
                                      role="img"
                                      aria-label="Phone"
                                    >
                                      <SvgIcon iconType={"phone"} />
                                    </span>
                                  </div>
                                </Option>
                                <Option value="envelop" label="envelop">
                                  <div className="option-label-item">
                                    <span
                                      className="_navbar_btn3_flag_wrap"
                                      role="img"
                                      aria-label="envelop"
                                    >
                                      <SvgIcon iconType={"whatsapp"} />
                                    </span>
                                  </div>
                                </Option>
                              </Select>
                            </div>

                            <div className="_housiko_myprofile_select_language _select_language_wd2">
                              <Select
                                popupClassName="_country_select_wrap"
                                defaultValue={`eng`}
                                suffixIcon={
                                  <SvgIcon
                                    w={14}
                                    h={14}
                                    iconType={"caret-down"}
                                  />
                                }
                                dropdownRender={(menu) => (
                                  <>
                                    <div className="_searchbar_wrap">
                                      <Input
                                        placeholder="Country or code"
                                        className="_searchbar_input"
                                      />
                                      <div className="_search_ic">
                                        <SvgIcon iconType={"myadsSearch"} />
                                      </div>
                                    </div>
                                    {menu}
                                  </>
                                )}
                              >
                                <>
                                  {countries.map((c, id) => (
                                    <Option
                                      key={id}
                                      value={c.value}
                                      label="ENG"
                                    >
                                      <div className="option-label-item">
                                        <div
                                          className="_navbar_btn3_flag_wrap _country_list_item"
                                          role="img"
                                          aria-label="england"
                                        >
                                          <div className="_country_list_item_inner_ic">
                                            <>
                                              {c.flag}
                                              <span className="_navbar_btn3_flag_txt">
                                                {c.countryCode}
                                              </span>
                                            </>
                                          </div>
                                          <div className="_country_list_item_inner_txt">
                                            <p className="_country_list_item_txt">
                                              {c.countryName}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </Option>
                                  ))}
                                </>
                                {/* <Option value="english" label="ENG">
                                                                    <div className="option-label-item">
                                                                        <div className='_navbar_btn3_flag_wrap _country_list_item' role="img" aria-label="england">
                                                                            <div className="_country_list_item_inner_ic">
                                                                                <img src="assets/images/engflag.png" alt="" className="_navbar_btn3_flag" />
                                                                                <span className="_navbar_btn3_flag_txt">
                                                                                    +44
                                                                                </span>
                                                                            </div>
                                                                            <div className="_country_list_item_inner_txt">
                                                                                <p className="_country_list_item_txt">England</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Option>
                                                                <Option value="usa" label="USA">
                                                                    <div className="option-label-item">
                                                                        <div className='_navbar_btn3_flag_wrap _country_list_item' role="img" aria-label="england">
                                                                            <div className="_country_list_item_inner_ic">
                                                                                <img src="assets/images/hungflag.png" alt="" className="_navbar_btn3_flag" />
                                                                                <span className="_navbar_btn3_flag_txt">
                                                                                    +36
                                                                                </span>
                                                                            </div>
                                                                            <div className="_country_list_item_inner_txt">
                                                                                <p className="_country_list_item_txt">Hungary</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Option> */}
                              </Select>
                            </div>

                            <input
                              type="text"
                              placeholder="99999999"
                              className="_housiko_listing_property_inpt"
                            />
                          </div>
                        </form>
                      </div>

                      <div className="_housiko_list_prop_characterstics_input_inner _housiko_list_prop_contact_input_inner">
                        {/* <div className="_housiko_list_prop_contact_info_wrap">
                                                    <Checkbox className='_login_input_check _city_input_check_login_input_check _login_input_label mt-5'>
                                                        Whatsapp
                                                    </Checkbox>
                                                </div> */}
                        <div className="_housiko_list_prop_contact_info_language_spoken">
                          <label className="_housiko_list_prop_characterstic_label">
                            Languages spoken
                          </label>

                          <div className="_housiko_list_prop_contact_info_select_language">
                            <div className="_housiko_list_prop_contact_info_select_language1">
                              <label
                                htmlFor=""
                                className="_housiko_list_prop_characterstics_input_inner_labl"
                              >
                                language 1
                              </label>
                              <div className="_housiko_list_prop_contact_info_select_language2_inner _select_languages_wd1">
                                <Select
                                  defaultValue="English"
                                  disabled={useDifferent ? false : true}
                                  suffixIcon={
                                    <SvgIcon
                                      iconType={"caret-down"}
                                      w={14}
                                      h={14}
                                    />
                                  }
                                >
                                  <Option value="English">English</Option>
                                  <Option value="Hungarian">Hungarian</Option>
                                  <Option value="Chinese">Chinese</Option>
                                </Select>
                              </div>
                            </div>

                            <div className="_housiko_list_prop_contact_info_select_language2">
                              <label
                                htmlFor=""
                                className="_housiko_list_prop_characterstics_input_inner_labl"
                              >
                                language 2
                              </label>
                              <div className="_housiko_list_prop_contact_info_select_language2_inner _select_languages_wd1">
                                <Select
                                  defaultValue="Hungarian"
                                  disabled={useDifferent ? false : true}
                                  suffixIcon={
                                    <SvgIcon
                                      iconType={"caret-down"}
                                      w={14}
                                      h={14}
                                    />
                                  }
                                >
                                  <Option value="English">English</Option>
                                  <Option value="Hungarian">Hungarian</Option>
                                  <Option value="Chinese">Chinese</Option>
                                </Select>
                              </div>
                            </div>
                          </div>
                          <div className="_housiko_list_prop_contact_info_select_language">
                            <div className="_housiko_list_prop_contact_info_select_language1">
                              <label
                                htmlFor=""
                                className="_housiko_list_prop_characterstics_input_inner_labl"
                              >
                                language 3
                              </label>
                              <div className="_housiko_list_prop_contact_info_select_language2_inner _select_languages_wd1">
                                <Select
                                  defaultValue="English"
                                  disabled={useDifferent ? false : true}
                                  suffixIcon={
                                    <SvgIcon
                                      iconType={"caret-down"}
                                      w={14}
                                      h={14}
                                    />
                                  }
                                >
                                  <Option value="English">English</Option>
                                  <Option value="Hungarian">Hungarian</Option>
                                  <Option value="Chinese">Chinese</Option>
                                </Select>
                              </div>
                            </div>

                            <div className="_housiko_list_prop_contact_info_select_language2">
                              <label
                                htmlFor=""
                                className="_housiko_list_prop_characterstics_input_inner_labl"
                              >
                                language 4
                              </label>
                              <div className="_housiko_list_prop_contact_info_select_language2_inner _select_languages_wd1">
                                <Select
                                  defaultValue="Hungarian"
                                  disabled={useDifferent ? false : true}
                                  suffixIcon={
                                    <SvgIcon
                                      iconType={"caret-down"}
                                      w={14}
                                      h={14}
                                    />
                                  }
                                >
                                  <Option value="English">English</Option>
                                  <Option value="Hungarian">Hungarian</Option>
                                  <Option value="Chinese">Chinese</Option>
                                </Select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="_housiko_list_prop_contact_info_wrap mb-4">
                        <Checkbox
                          onChange={handelUseDifferent}
                          className="_login_input_check _city_input_check_login_input_check _login_input_label_checkbox"
                        >
                          use different contact details
                        </Checkbox>
                      </div>
                    </div>
                  </div>
                  <div className="_housiko_list_prop_finish_wrap d-flex align-items-center justify-content-between">
                    <button className="_housiko_list_prop_preview_btn">
                      Preview
                    </button>
                    <ul className="_housiko_list_prop_finish_ul">
                      <li className="_housiko_list_prop_finish_li">
                        <button className="_housiko_list_prop_finish_btn _housiko_list_prop_draft_btn">
                          Save Draft
                        </button>
                        <button className="_housiko_list_prop_finish_btn _city_modal_apply_btn">
                          Finish
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
  );
};

export default ListProperty;
