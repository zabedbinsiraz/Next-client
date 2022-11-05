import Link from "next/link";
import { useRouter } from "next/router";
import { SvgIcon } from "../Design/SvgIcon";

const PropertyCard = () => {
  const { pathname } = useRouter();
  if (pathname === "/listing") {
    return (
      <div className="_housiko_search_card_wrapper">
        <div className="_housiko_search_card_wrap">
          <div className="_housiko_search_card">
            <Link href="/listing" className="_housiko_search_card_img_wrap">
              <img
                src="assets/images/searchimg.png"
                alt=""
                className="_housiko_search_card_img"
              />
            </Link>
            <div className="_housiko_search_card_bottom">
              <Link href="/listing">
                <div>
                  <div className="_housiko_search_card_bottom_txt">
                    <h3 className="_housiko_search_card_bottom_title">
                      $25,000
                    </h3>
                    <p className="_housiko_search_card_bottom_p">
                      HUF 10,000,000
                    </p>
                  </div>
                  <div className="_housiko_search_card_bottom_txt">
                    <h3 className="_housiko_search_card_bottom_title2">
                      Luxury Vila
                    </h3>
                    <p className="_housiko_search_card_bottom_p2">
                      101 Valay Road, NY
                    </p>
                  </div>
                  <ul className="_housiko_search_card_bottom_info_ul">
                    <li className="_housiko_search_card_bottom_info_li">
                      <span className="_housiko_search_card_bottom_info_ic">
                        <SvgIcon iconType={"bed"} color={"#555"} />
                      </span>
                      <span className="_housiko_search_card_bottom_info_txt">
                        6
                      </span>
                    </li>
                    <li className="_housiko_search_card_bottom_info_li">
                      <span className="_housiko_search_card_bottom_info_ic">
                        <SvgIcon iconType={"bath"} color={"#555"} />
                      </span>
                      <span className="_housiko_search_card_bottom_info_txt">
                        5
                      </span>
                    </li>
                    <li className="_housiko_search_card_bottom_info_li">
                      <span className="_housiko_search_card_bottom_info_ic">
                        <SvgIcon iconType={"area"} color={"#555"} />
                      </span>
                      <span className="_housiko_search_card_bottom_info_txt">
                        3000 Sqft
                      </span>
                    </li>
                  </ul>
                </div>
              </Link>
              <div className="_housiko_search_card_bottom_btn_ul_wrap">
                <ul className="_housiko_search_card_bottom_btn_ul">
                  <li className="_housiko_search_card_bottom_btn_li">
                    <button className="_housiko_search_card_bottom_btn">
                      <span className="_housiko_search_card_bottom_btn_ic">
                        <SvgIcon
                          iconType={"fav"}
                          w={22}
                          h={22}
                          color={"#A32C2C"}
                        />
                      </span>
                      <span className="_housiko_search_card_bottom_btn_txt">
                        (178)
                      </span>
                    </button>
                  </li>
                  <li className="_housiko_search_card_bottom_btn_li">
                    <button className="_housiko_search_card_bottom_btn">
                      <span className="_housiko_search_card_bottom_btn_ic">
                        <SvgIcon
                          iconType={"phone"}
                          w={22}
                          h={22}
                          color={"#30B742"}
                        />
                      </span>
                    </button>
                  </li>
                  <li className="_housiko_search_card_bottom_btn_li">
                    <button className="_housiko_search_card_bottom_btn">
                      <span className="_housiko_search_card_bottom_btn_ic">
                        <SvgIcon iconType={"chat"} w={22} h={22} />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (pathname === "/myinfo") {
    return (
      <div className="_housiko_search_card_wrapper">
        <div className="_housiko_search_card_wrap">
          <div className="_housiko_search_card">
            <div className="_housiko_search_card_img_wrap">
              <img
                src="assets/images/myfav-album-slider-image.png"
                alt="album-slider"
                className="_housiko_search_card_img"
              />
            </div>
            <div className="_housiko_album_card_bottom">
              <div className="_housiko_album_card_bottom_txts">
                <div className="_housiko_albun_card_bottom_txt">
                  <h3 className="_housiko_album_card_bottom_title">$25,000</h3>
                  <p className="_housiko_album_card_bottom_para">
                    HUF 10,000,000
                  </p>
                </div>
                <div className="_housiko_albun_card_bottom_txt">
                  <h3 className="_housiko_album_card_bottom_title2">
                    Luxury Vila
                  </h3>
                  <p className="_housiko_album_card_bottom_p2">
                    101 Valay Road, NY
                  </p>
                </div>
              </div>
              <div className="_housiko_album_card_bottom_info_ul">
                <ul className="_housiko_search_card_bottom_info_ul">
                  <li className="_housiko_search_card_bottom_info_li">
                    <span className="_housiko_search_card_bottom_info_ic">
                      <SvgIcon iconType={"bed"} color={"#555"} />
                    </span>
                    <span className="_housiko_album_card_bottom_info_txt">
                      6
                    </span>
                  </li>
                  <li className="_housiko_search_card_bottom_info_li">
                    <span className="_housiko_search_card_bottom_info_ic">
                      <SvgIcon iconType={"bath"} color={"#555"} />
                    </span>
                    <span className="_housiko_album_card_bottom_info_txt">
                      5
                    </span>
                  </li>
                  <li className="_housiko_search_card_bottom_info_li">
                    <span className="_housiko_search_card_bottom_info_ic">
                      <SvgIcon iconType={"area"} color={"#555"} />
                    </span>
                    <span className="_housiko_album_card_bottom_info_txt">
                      3000 Sqft
                    </span>
                  </li>
                </ul>
              </div>
              <div className="_housiko_search_card_bottom_btn_ul_wrap">
                <ul className="_housiko_album_card_bottom_btn_ul">
                  <div className="_housiko_album_card_bottom_btn1">
                    <li className="_housiko_search_card_bottom_btn_li">
                      <button className="_housiko_search_card_bottom_btn">
                        <span className="_housiko_search_card_bottom_btn_ic">
                          <SvgIcon
                            iconType={"phone1"}
                            color={"#000"}
                            w={16}
                            h={16}
                          />
                        </span>
                      </button>
                    </li>
                    <li className="_housiko_search_card_bottom_btn_li">
                      <button className="_housiko_search_card_bottom_btn">
                        <span className="_housiko_search_card_bottom_btn_ic">
                          <SvgIcon iconType={"chat"} w={22} h={22} />
                        </span>
                      </button>
                    </li>
                  </div>

                  <div className="_housiko_album_card_bottom_btn2">
                    <button className="_housiko_search_card_bottom_btn">
                      <span className="_housiko_search_card_bottom_btn_ic">
                        <SvgIcon
                          iconType={"fav"}
                          w={22}
                          h={22}
                          color={"#A32C2C"}
                        />
                      </span>
                      <span className="_housiko_search_card_bottom_btn_txt">
                        (178)
                      </span>
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="_housiko_search_card_wrapper">
        <div className="_housiko_search_card_wrap">
          <div className="_housiko_search_card">
            <Link href="/listing" className="_housiko_search_card_img_wrap">
              <img
                src="assets/images/searchimg.png"
                alt=""
                className="_housiko_search_card_img"
              />
            </Link>
            <div className="_housiko_search_card_bottom">
              <Link href="/listing">
                <div>
                  <div className="_housiko_search_card_bottom_txt">
                    <h3 className="_housiko_search_card_bottom_title">
                      $25,000
                    </h3>
                    <p className="_housiko_search_card_bottom_p">
                      HUF 10,000,000
                    </p>
                  </div>
                  <div className="_housiko_search_card_bottom_txt">
                    <h3 className="_housiko_album_card_bottom_title1">
                      Luxury Vila
                    </h3>
                    <p className="_housiko_search_card_bottom_p2">
                      101 Valay Road, NY
                    </p>
                  </div>
                  <ul className="_housiko_search_card_bottom_info_ul">
                    <li className="_housiko_search_card_bottom_info_li">
                      <span className="_housiko_search_card_bottom_info_ic">
                        <SvgIcon iconType={"bed"} color={"#555"} />
                      </span>
                      <span className="_housiko_search_card_bottom_info_txt">
                        6
                      </span>
                    </li>
                    <li className="_housiko_search_card_bottom_info_li">
                      <span className="_housiko_search_card_bottom_info_ic">
                        <SvgIcon iconType={"bath"} color={"#555"} />
                      </span>
                      <span className="_housiko_search_card_bottom_info_txt">
                        5
                      </span>
                    </li>
                    <li className="_housiko_search_card_bottom_info_li">
                      <span className="_housiko_search_card_bottom_info_ic">
                        <SvgIcon iconType={"area"} color={"#555"} />
                      </span>
                      <span className="_housiko_search_card_bottom_info_txt">
                        3000 Sqft
                      </span>
                    </li>
                  </ul>
                </div>
              </Link>
              <div className="_housiko_search_card_bottom_btn_ul_wrap">
                <ul className="_housiko_search_card_bottom_btn_ul">
                  <li className="_housiko_search_card_bottom_btn_li">
                    <button className="_housiko_search_card_bottom_btn">
                      <span className="_housiko_search_card_bottom_btn_ic">
                        <SvgIcon
                          iconType={"fav"}
                          w={22}
                          h={22}
                          color={"#A32C2C"}
                        />
                      </span>
                      <span className="_housiko_search_card_bottom_btn_txt">
                        (178)
                      </span>
                    </button>
                  </li>
                  <li className="_housiko_search_card_bottom_btn_li">
                    <button className="_housiko_search_card_bottom_btn">
                      <span className="_housiko_search_card_bottom_btn_ic">
                        <SvgIcon
                          iconType={"phone"}
                          w={22}
                          h={22}
                          color={"#30B742"}
                        />
                      </span>
                    </button>
                  </li>
                  <li className="_housiko_search_card_bottom_btn_li">
                    <button className="_housiko_search_card_bottom_btn">
                      <span className="_housiko_search_card_bottom_btn_ic">
                        <SvgIcon iconType={"chat"} w={22} h={22} />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PropertyCard;
