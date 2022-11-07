import { Checkbox, Form, Input, Select } from "antd";
import { SvgIcon } from "../Design/SvgIcon";

const { Option } = Select;

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

const ContactDetails = ({ useDifferent, handelUseDifferent }) => {
  return (
    <div className="_housiko_list_prop_characterstics_input_wrap">
      <label htmlFor="" className="_housiko_list_prop_characterstics_label">
        Your Contact Details
      </label>

      <div className="_housiko_list_prop_contact_infos">
        <div className="_housiko_list_prop_contact_info">
          <label htmlFor="" className="_housiko_list_prop_characterstic_label">
            Name
          </label>
          <div className="_housiko_list_prop_characterstics_input_inner">
            <Form.Item name="name">
              <Input
                disabled={useDifferent ? false : true}
                className="_housiko_list_prop_characterstics_input"
                placeholder="Adam"
              />
            </Form.Item>
          </div>
        </div>

        <div className="_housiko_list_prop_contact_info">
          <label htmlFor="" className="_housiko_list_prop_characterstic_label">
            Email
          </label>
          <div className="_housiko_list_prop_characterstics_input_inner">
            <Form.Item name="email">
              <Input
                disabled={useDifferent ? false : true}
                className="_housiko_list_prop_characterstics_input"
                placeholder="Adam@housiko.com"
              />
            </Form.Item>
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
            <Form.Item>
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
                </Select>
              </div>
            </Form.Item>
            <Form.Item name="phone">
              <input
                type="text"
                placeholder="99999999"
                className="_housiko_listing_property_inpt"
              />
            </Form.Item>
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
                <Form.Item name="language_one">
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
                </Form.Item>
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
                <Form.Item name="language_two">
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
                </Form.Item>
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
                <Form.Item name="language_three">
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
                </Form.Item>
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
                <Form.Item name="language_four">
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
                </Form.Item>
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
  );
};

export default ContactDetails;
