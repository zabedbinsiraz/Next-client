import { Checkbox, Form, Input, Select } from "antd";
import { useState } from "react";
import { SvgIcon } from "../Design/SvgIcon";

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

const Features = ({
  useDifferent,
  handelUseDifferent,
  setBedRooms,
  setBathRooms,
}) => {
  const { Option } = Select;

  const [bedRoomActive, setBedRoomActive] = useState("1");
  const [bathRoomActive, setBathroomActive] = useState("1");

  const handleBedRoomValue = (e) => {
    console.log(e.target.innerText);
    setBedRooms(e.target.innerText);
    setBedRoomActive(e.target.innerText);
  };

  const handleBathRoomValue = (e) => {
    setBathRooms(e.target.innerText);
    setBathroomActive(e.target.innerText);
  };

  return (
    <div className="_housiko_list_prop_characterstics _housiko_list_prop_characterstics_big_input_wrap">
      <h3 className="_housiko_list_prop_characterstics_address_title">
        Features
      </h3>
      <div className="_housiko_list_prop_characterstics_input_wrap">
        <label htmlFor="" className="_housiko_list_prop_characterstics_label">
          Bedrooms
        </label>
        <div className="_housiko_list_prop_characterstics_input_inner">
          <ul className="_housiko_list_prop_tab_ul _housiko_list_prop_tab_ul3">
            <li
              className={
                bedRoomActive === "Studio"
                  ? "_housiko_list_prop_tab_li _active"
                  : "_housiko_list_prop_tab_li"
              }
              onClick={handleBedRoomValue}
            >
              Studio
            </li>
            {[1, 2, 3].map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    Number(bedRoomActive) === item
                      ? "_housiko_list_prop_tab_li _active"
                      : "_housiko_list_prop_tab_li"
                  }
                  onClick={handleBedRoomValue}
                >
                  {item}
                </li>
              );
            })}
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
        <label htmlFor="" className="_housiko_list_prop_characterstics_label">
          Bathroom
        </label>
        <div className="_housiko_list_prop_characterstics_input_inner">
          <ul className="_housiko_list_prop_tab_ul _housiko_list_prop_tab_ul3">
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    Number(bathRoomActive) === item
                      ? "_housiko_list_prop_tab_li _active"
                      : "_housiko_list_prop_tab_li"
                  }
                  onClick={handleBathRoomValue}
                >
                  {item}
                </li>
              );
            })}
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
        <label htmlFor="" className="_housiko_list_prop_characterstics_label">
          Floor
        </label>
        <div className="_housiko_list_prop_characterstics_drop_wrap d-flex align-items-center">
          <div className="_housiko_list_prop_characterstics_input_inner">
            <Form.Item name="floor">
              <Select
                className="_housiko_hero_content_tab_type _housiko_hero_content_tab_select _housiko_list_prop_characterstics_select2"
                defaultValue="Basement"
                style={{
                  width: "100%",
                }}
                suffixIcon={<SvgIcon iconType={"caret-down"} w={14} h={14} />}
              >
                <Option value="Basement">Basement</Option>
                <Option value="Basement 2">Basement 2</Option>
                <Option value="Basement 3">Basement 3</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
        <div className="_housiko_list_prop_feature_wrap">
          <div className="_housiko_list_prop_feature_inner">
            <div className="_housiko_list_prop_feature_content">
              <h3 className="_housiko_list_prop_feature_content_title">View</h3>
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
        <label htmlFor="" className="_housiko_list_prop_characterstics_label">
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
          <label htmlFor="" className="_housiko_list_prop_characterstic_label">
            Phone
          </label>
          <form className="_housiko_myprofile_tab_parsonal_info_mobile_form">
            <div className="_housiko_myprofile_tab_parsonal_info_mobile_form_inner">
              <div className="_housiko_myprofile_select_language _select_language_wd1">
                <Select
                  disabled={useDifferent ? false : true}
                  defaultValue={`phone`}
                  suffixIcon={<SvgIcon w={14} h={14} iconType={"caret-down"} />}
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
                  suffixIcon={<SvgIcon w={14} h={14} iconType={"caret-down"} />}
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
                      <Option key={id} value={c.value} label="ENG">
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
                      <SvgIcon iconType={"caret-down"} w={14} h={14} />
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
                      <SvgIcon iconType={"caret-down"} w={14} h={14} />
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
                      <SvgIcon iconType={"caret-down"} w={14} h={14} />
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
                      <SvgIcon iconType={"caret-down"} w={14} h={14} />
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
  );
};

export default Features;
