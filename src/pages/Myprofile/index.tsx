import { Checkbox, Dropdown, Input, Select } from "antd";
import { useState } from "react";
import { SvgIcon } from "../../components/Design/SvgIcon";
import { EditInfoModal } from "../../components/Modals/Modals";
const { Option } = Select;

const Myprofile = () => {
  const [image, setImage] = useState(
    "assets/images/housiko-message-box-profile-img.png"
  );

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [editModal, setEditModal] = useState(false);
  const [name, setName] = useState("Adam Smith");
  const [email, setEmail] = useState("adam@housiko.com");
  const handleName = (event: any) => {
    setName(event.target.value);
  };
  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const first2 = name
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");
  const profilePicSelect = () => {
    return (
      <>
        <div className="_profile_pic_dropdown _dropdown_profile_wrap">
          <div className="_profile_pic_dropdown_inner">
            <label htmlFor="fileInput" className="_profile_pic_dropdown_btn">
              <span className="_profile_pic_dropdown_btn_ic">
                <SvgIcon iconType={"upload"} w={18} h={18} />
              </span>
              <span className="_profile_pic_dropdown_btn_txt">
                Upload/Add Photo
              </span>
              <input
                type="file"
                id="fileInput"
                onChange={onImageChange}
                className="_profilepic_upload_input"
              />
            </label>
            <button
              onClick={() => setImage("")}
              className="_profile_pic_dropdown_btn _profile_pic_dropdown_btn2"
            >
              <span className="_profile_pic_dropdown_btn_ic">
                <SvgIcon iconType={"minus"} w={16} h={16} />
              </span>
              <span className="_profile_pic_dropdown_btn_txt">
                Remove Photo
              </span>
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="_housiko_myprofile_wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_housiko_myads_search_line"></div>
              <div className="_housiko_myprofile_tab">
                <h6 className="_housiko_myprofile_tab_txt">My Profile</h6>
                <div className="_housiko_myprofile_tab_parsonal_info_pics">
                  <div className="_housiko_myprofile_tab_parsonal_infos">
                    <div className="_housiko_myprofile_tab_parsonal_info_name">
                      <p className="_housiko_myprofile_tab_parsonal_info_name_txt _housiko_parsonal_txt">
                        My Name:
                      </p>
                      <p className="_housiko_myprofile_tab_parsonal_info_name_inpt">
                        {name}
                      </p>
                    </div>
                    <div className="_housiko_myprofile_tab_parsonal_info_email">
                      <p className="_housiko_myprofile_tab_parsonal_info_name_txt _housiko_parsonal_txt">
                        Email:
                      </p>
                      <p className="_housiko_myprofile_tab_parsonal_info_name_inpt">
                        {email}
                      </p>
                    </div>
                    <div className="_housiko_myprofile_tab_parsonal_info_link">
                      <a
                        onClick={() => setEditModal(true)}
                        href="#0"
                        className="_housiko_myprofile_tab_parsonal_info_link_tag"
                      >
                        Edit my personal information
                      </a>
                      <EditInfoModal
                        name={name}
                        email={email}
                        open={editModal}
                        updateName={handleName}
                        updateEmail={handleEmail}
                        cancel={() => setEditModal(false)}
                      />
                    </div>
                  </div>

                  <div className="_housiko_myprofile_tab_parsonal_info_pic">
                    <Dropdown overlay={profilePicSelect} trigger={["click"]}>
                      <div>
                        {image && (
                          <img
                            src={image}
                            alt="profile"
                            className="_housiko_myprofile_tab_parsonal_info_pic_tag"
                          />
                        )}
                        {!image && (
                          <div className="_housiko_profile_no_image">
                            {first2}
                          </div>
                        )}
                      </div>
                    </Dropdown>
                  </div>
                </div>

                <div className="_housiko_myprofile_language_spoken">
                  <p className="_housiko_myprofile_tab_parsonal_info_mobile_para">
                    Languages spoken
                  </p>

                  <div className="_housiko_myprofile_language_spoken_select">
                    <div className="_housiko_myprofile_language_spoken_selected">
                      <label className="_housiko_myprofile_language_spoken_txt">
                        language 1
                      </label>
                      <div className="_housiko_myprofile_select_lan_spoken _select_language_spoken_wd1">
                        <Select
                          defaultValue="English"
                          suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                        >
                          <Option value="Option1">English</Option>
                          <Option value="Option2">German</Option>
                          <Option value="Option2">Portuguese</Option>
                        </Select>
                      </div>
                    </div>

                    <div className="_housiko_myprofile_language_spoken_selected">
                      <label className="_housiko_myprofile_language_spoken_txt">
                        language 2
                      </label>
                      <div className="_housiko_myprofile_select_lan_spoken _select_language_spoken_wd1">
                        <Select
                          defaultValue="Hungarian"
                          suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                        >
                          <Option value="Option1">Hungarian</Option>
                          <Option value="Option2">Portuguese</Option>
                          <Option value="Option3">English</Option>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="_housiko_myprofile_language_spoken_select">
                    <div className="_housiko_myprofile_language_spoken_selected">
                      <label className="_housiko_myprofile_language_spoken_txt">
                        language 3
                      </label>
                      <div className="_housiko_myprofile_select_lan_spoken _select_language_spoken_wd1">
                        <Select
                          defaultValue="German"
                          suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                        >
                          <Option value="Option1">German</Option>
                          <Option value="Option2">Portuguese</Option>
                          <Option value="Option3">English</Option>
                        </Select>
                      </div>
                    </div>

                    <div className="_housiko_myprofile_language_spoken_selected">
                      <label className="_housiko_myprofile_language_spoken_txt">
                        language 4
                      </label>
                      <div className="_housiko_myprofile_select_lan_spoken _select_language_spoken_wd1">
                        <Select
                          defaultValue="N/A"
                          suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                        >
                          <Option value="Option1">N/A</Option>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="_housiko_myprofile_currency _housiko_myprofile_tab_parsonal_info">
                    <p className="_housiko_myprofile_tab_parsonal_info_mobile_para">
                      Prefered currency
                    </p>
                    <div className="_housiko_myprofile_select_lan_spoken">
                      <Select
                        defaultValue="eur"
                        suffixIcon={<SvgIcon iconType={"myadsSelect"} />}
                      >
                        <Option value="usd">GBP</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="huf">HUF</Option>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="_housiko_myprofile_tab_parsonal_info">
                  <div className="_housiko_myprofile_tab_parsonal_info_mobile">
                    <p className="_housiko_myprofile_tab_parsonal_info_mobile_para">
                      Enter or modify your phone number
                    </p>
                    <form className="_housiko_myprofile_tab_parsonal_info_mobile_form">
                      <div className="_housiko_myprofile_tab_parsonal_info_mobile_form_inner">
                        <div className="_housiko_myprofile_select_language _select_language_wd1">
                          <Select
                            defaultValue={`phone`}
                            suffixIcon={
                              <SvgIcon w={14} h={14} iconType={"caret-down"} />
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
                                  <SvgIcon iconType={"whatsapp-card"} />
                                </span>
                              </div>
                            </Option>
                          </Select>
                        </div>

                        <div className="_housiko_myprofile_select_language _select_language_wd2">
                          <Select
                            popupClassName="_country_select_wrap"
                            defaultValue={`english`}
                            suffixIcon={
                              <SvgIcon w={14} h={14} iconType={"caret-down"} />
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
                            <Option value="english" label="ENG">
                              <div className="option-label-item">
                                <div
                                  className="_navbar_btn3_flag_wrap _country_list_item"
                                  role="img"
                                  aria-label="england"
                                >
                                  <div className="_country_list_item_inner_ic">
                                    <img
                                      src="assets/images/engflag.png"
                                      alt=""
                                      className="_navbar_btn3_flag"
                                    />
                                    <span className="_navbar_btn3_flag_txt">
                                      +44
                                    </span>
                                  </div>
                                  <div className="_country_list_item_inner_txt">
                                    <p className="_country_list_item_txt">
                                      England
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Option>
                            <Option value="usa" label="USA">
                              <div className="option-label-item">
                                <div
                                  className="_navbar_btn3_flag_wrap _country_list_item"
                                  role="img"
                                  aria-label="england"
                                >
                                  <div className="_country_list_item_inner_ic">
                                    <img
                                      src="assets/images/hungflag.png"
                                      alt=""
                                      className="_navbar_btn3_flag"
                                    />
                                    <span className="_navbar_btn3_flag_txt">
                                      +36
                                    </span>
                                  </div>
                                  <div className="_country_list_item_inner_txt">
                                    <p className="_country_list_item_txt">
                                      Hungary
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Option>
                          </Select>
                        </div>

                        <input
                          type="text"
                          placeholder="Enter phone number*"
                          className="_housiko_myprofile_tab_parsonal_info_mobile_inpt"
                        />
                      </div>

                      <div className="_housiko_myprofile_tab_parsonal_info_link">
                        <a
                          href="#0"
                          className="_housiko_myprofile_tab_parsonal_info_link_tag"
                        >
                          + Add another number
                        </a>
                      </div>

                      <Checkbox
                        defaultChecked
                        className="_housiko_myprofile_tab_parsonal_info_checkbox"
                      >
                        <div className="_housiko_myprofile_tab_parsonal_info_checkbox_cnt">
                          <p className="_housiko_myprofile_tab_parsonal_info_checkbox_txt">
                            Always hide my phone
                          </p>
                        </div>
                      </Checkbox>

                      <button className="_housiko_myprofile_tab_parsonal_info_mobile_inpt_btn">
                        Save
                      </button>
                    </form>
                  </div>
                </div>
                <div className="_housiko_myprofile_tab_parsonal_info">
                  <div className="_housiko_myprofile_tab_parsonal_info_conts">
                    <p className="_housiko_myprofile_tab_parsonal_info_mobile_para">
                      My communications and advertising
                    </p>

                    <Checkbox
                      defaultChecked
                      className="_housiko_myprofile_tab_parsonal_info_checkbox"
                    >
                      <div className="_housiko_myprofile_tab_parsonal_info_checkbox_cnt">
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_txt">
                          News and recommendations
                        </p>
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para">
                          Lörem ipsum tasigförsamhet fören elektropol.
                          Lavöpreskapet mining om vusk, i kus. Lörem ipsum
                          tasigförsamhet fören elektopol. Lörem ipsum
                          tasigförsamhcet fören.
                        </p>
                      </div>
                    </Checkbox>

                    <Checkbox
                      defaultChecked
                      className="_housiko_myprofile_tab_parsonal_info_checkbox"
                    >
                      <div className="_housiko_myprofile_tab_parsonal_info_checkbox_cnt">
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_txt">
                          News from our blog
                        </p>
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para">
                          Lörem ipsum tasigförsamhet fören elektropol.
                        </p>
                      </div>
                    </Checkbox>

                    <Checkbox
                      defaultChecked
                      className="_housiko_myprofile_tab_parsonal_info_checkbox"
                    >
                      <div className="_housiko_myprofile_tab_parsonal_info_checkbox_cnt">
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_txt">
                          Offers and real estate promotions
                        </p>
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para">
                          Lörem ipsum tasigförsamhet fören elektropol.
                          Lavöpreskapet mining om vusk, i kus. Lörem ipsum
                          tasigförsamhet fören elektropol. elektropol.
                          Lavöpreskapet mining om vusk
                        </p>
                      </div>
                    </Checkbox>

                    <Checkbox
                      defaultChecked
                      className="_housiko_myprofile_tab_parsonal_info_checkbox"
                    >
                      <div className="_housiko_myprofile_tab_parsonal_info_checkbox_cnt">
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_txt">
                          External services information
                        </p>
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para">
                          Lörem ipsum tasigförsamhet fören elektropol.
                          Lavöpreskapet mining om vusk, i kus. Lörem ipsum
                          tasigförsamhet fören elektropol. i kus. Lörem ipsum
                          tasigförsamhet fören elektropol.
                        </p>
                      </div>
                    </Checkbox>

                    <Checkbox
                      defaultChecked
                      className="_housiko_myprofile_tab_parsonal_info_checkbox"
                    >
                      <div className="_housiko_myprofile_tab_parsonal_info_checkbox_cnt">
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_txt">
                          Offers for your ads
                        </p>
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para">
                          Lörem ipsum tasigförsamhet fören elektropol.
                        </p>
                      </div>
                    </Checkbox>

                    <Checkbox
                      defaultChecked
                      className="_housiko_myprofile_tab_parsonal_info_checkbox"
                    >
                      <div className="_housiko_myprofile_tab_parsonal_info_checkbox_cnt">
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_txt">
                          Advertising based on my profile
                        </p>
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para">
                          Lörem ipsum tasigförsamhet fören elektropol.
                          Lavöpreskapet mining om vusk, i kus. Lörem ipsum
                          tasigförsamhet fören elektropol. i kus. Lörem ipsum
                          tasigförsamhet fören elektropol.
                        </p>
                      </div>
                    </Checkbox>

                    <div className="_housiko_myprofile_tab_parsonal_info_conts_btn">
                      <button className="_housiko_myprofile_tab_parsonal_info_mobile_inpt_btn">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <div className="_housiko_myprofile_tab_parsonal_info">
                  <div className="_housiko_myprofile_tab_parsonal_info_conts">
                    <p className="_housiko_myprofile_tab_parsonal_info_mobile_para _housiko_myprofile_tab_parsonal_info_margin">
                      Alerts
                    </p>

                    <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para">
                      Lörem ipsum tasigförsamhet fören elektropol.
                    </p>

                    <div className="_housiko_myprofile_tab_parsonal_info_conts_border_btn">
                      <button className="_housiko_myprofile_tab_parsonal_info_mobile_inpt_btn _myprofile_border_btn">
                        Check And Delete My Alerts
                      </button>
                    </div>
                  </div>
                </div>
                <div className="_housiko_myprofile_tab_parsonal_info">
                  <div className="_housiko_myprofile_tab_parsonal_info_conts">
                    <p className="_housiko_myprofile_tab_parsonal_info_mobile_para _housiko_myprofile_tab_parsonal_info_margin">
                      How we manage your data
                    </p>

                    <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para">
                      Lörem ipsum tasigförsamhet fören elektropol.
                    </p>

                    <div className="_housiko_myprofile_tab_parsonal_info_conts_border_btn">
                      <button className="_housiko_myprofile_tab_parsonal_info_mobile_inpt_btn _myprofile_border_btn">
                        More Information
                      </button>
                    </div>
                  </div>
                </div>
                <div className="_housiko_myprofile_tab_parsonal_info">
                  <div className="_housiko_myprofile_tab_parsonal_info_conts">
                    <p className="_housiko_myprofile_tab_parsonal_info_mobile_para _housiko_myprofile_tab_parsonal_info_margin">
                      Download my data
                    </p>

                    <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para">
                      Lörem ipsum tasigförsamhet fören elektropol.
                    </p>

                    <div className="_housiko_myprofile_tab_parsonal_info_conts_border_btn">
                      <button className="_housiko_myprofile_tab_parsonal_info_mobile_inpt_btn _myprofile_border_btn">
                        Request Data Download
                      </button>
                    </div>
                  </div>
                </div>
                <div className="_housiko_myprofile_tab_parsonal_bottm">
                  <div className="_housiko_myprofile_tab_parsonal_info_conts">
                    <p className="_housiko_myprofile_tab_parsonal_info_mobile_para _housiko_myprofile_tab_parsonal_info_margin">
                      Delete my account
                    </p>

                    <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para">
                      Lörem ipsum tasigförsamhet fören elektropol.
                    </p>

                    <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para _housiko_myprofile_tab_parsonal_bottm_para">
                      Lörem ipsum tasigförsamhet fören elektropol. Lavöpreskapet
                      mining om vusk, i kus. Lörem ipsum tasigförsamhet fören
                      elektropol. Lörem ipsum tasigförsamhet fören elektropol.
                      Lavöpreskapet mining.
                    </p>

                    <Checkbox
                      defaultChecked
                      className="_housiko_myprofile_tab_parsonal_info_checkbox"
                    >
                      <div className="_housiko_myprofile_tab_parsonal_info_checkbox_cnt">
                        <p className="_housiko_myprofile_tab_parsonal_info_checkbox_para _housiko_myprofile_tab_parsonal_info_checkbox_para_width">
                          I understand that deleting my account I will lose my
                          published ads, my saved searches alerts, my favorites
                          and other Housiko services.
                        </p>
                      </div>
                    </Checkbox>

                    <div className="_housiko_myprofile_tab_parsonal_info_conts_bottm_border_btn">
                      <button className="_housiko_myprofile_tab_parsonal_info_mobile_inpt_btn _myprofile_bottm_border_btn">
                        Request Cancelltion
                      </button>
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

export default Myprofile;
