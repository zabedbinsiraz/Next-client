import { Checkbox, Form, Input, Select } from "antd";
import ContactDetails from "./ContactDetails";
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
  setPropertyExtras,
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

  const onExtrasChange = (checkedValues) => {
    setPropertyExtras(checkedValues);
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
              <Checkbox.Group onChange={onExtrasChange}>
                <div className="_housiko_list_prop_feature_check_wrap">
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Lift"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Lift
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Parking"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Parking
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Terrace"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Terrace
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Heating gas"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Heating gas
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Heating electric"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Heating electric
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Central Heating"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Central Heating
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Airbnb license"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Airbnb license
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Garden"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Garden
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Swimming Pool"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Swimming Pool
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Balcony"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Balcony
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Furnished"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Furnished
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="A/C"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      A/C
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Storage"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Storage
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="American Kitchen"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      American Kitchen
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="In-suite bathroom"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      In-suite bathroom
                    </Checkbox>
                  </div>
                  <div className="_housiko_list_prop_feature_check _city_map_tab_content_all_wrap _login_remember_check">
                    <Checkbox
                      value="Parquet floor"
                      className="_login_input_check _city_input_check_login_input_check _login_input_label"
                    >
                      Parquet floor
                    </Checkbox>
                  </div>
                </div>
              </Checkbox.Group>
            </div>
          </div>
        </div>
      </div>
      <ContactDetails
        useDifferent={useDifferent}
        handelUseDifferent={handelUseDifferent}
      />
    </div>
  );
};

export default Features;
