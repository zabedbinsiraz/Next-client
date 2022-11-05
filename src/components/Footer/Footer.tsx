import Link from "next/link";
import { useRouter } from "next/router";
import { SvgIcon } from "../Design/SvgIcon";

const Footer = () => {
  const { pathname } = useRouter();
  const date = new Date();
  const pathToAvoid = [
    "/dashboard",
    "/dashboardagent",
    "/pricing",
    "/listing",
    "/singleListing",
  ];
  if (pathToAvoid.includes(pathname)) {
    return <></>;
  } else {
    return (
      <footer className="_housiko_footer_wrapper">
        <div className="_housiko_footer_bg">
          <img src="assets/images/ft-img.png" alt="imaage" />
        </div>
        <div className="_housiko_footer_top_wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                    <div className="_housiko_footer_top_img_content">
                      <Link href="/" className="_housiko_footer_top_img_link">
                        <img
                          src="assets/images/ft-logo.svg"
                          alt=""
                          className="_housiko_footer_top_img"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <ul className="_housiko_footer_top_content_ul">
                      <li className="_housiko_footer_top_content_li">
                        <a href="#0" className="_housiko_footer_top_content_a">
                          <span className="_housiko_footer_top_content_a_ic">
                            <SvgIcon iconType={"fb"} w={18} h={18} />
                          </span>
                        </a>
                      </li>
                      <li className="_housiko_footer_top_content_li">
                        <a href="#0" className="_housiko_footer_top_content_a">
                          <span className="_housiko_footer_top_content_a_ic">
                            <SvgIcon iconType={"tele"} w={18} h={18} />
                          </span>
                        </a>
                      </li>
                      <li className="_housiko_footer_top_content_li">
                        <a href="#0" className="_housiko_footer_top_content_a">
                          <span className="_housiko_footer_top_content_a_ic">
                            <SvgIcon iconType={"insta"} w={18} h={18} />
                          </span>
                        </a>
                      </li>
                      <li className="_housiko_footer_top_content_li">
                        <a href="#0" className="_housiko_footer_top_content_a">
                          <span className="_housiko_footer_top_content_a_ic">
                            <SvgIcon iconType={"twt"} w={18} h={18} />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className="_housiko_footer_top_app_btn_wrap">
                  <ul className="_housiko_footer_top_app_btn_ul">
                    <li className="_housiko_footer_top_app_btn_li">
                      <button className="_housiko_footer_top_app_btn">
                        <img
                          src="assets/images/google.png"
                          alt="play"
                          className="img-fluid _housiko_footer_top_app_btn_img"
                        />
                      </button>
                    </li>
                    <li className="_housiko_footer_top_app_btn_li">
                      <button className="_housiko_footer_top_app_btn">
                        <img
                          src="assets/images/apple.png"
                          alt="app"
                          className="img-fluid _housiko_footer_top_app_btn_img"
                        />
                      </button>
                    </li>
                    <li className="_housiko_footer_top_app_btn_li">
                      <button className="_housiko_footer_top_qr_btn">
                        <img
                          src="assets/images/qr.png"
                          alt="qr"
                          className="img-fluid _housiko_footer_top_qr_img"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="_ft_divider" />
        <div className="_housiko_footer_bottom_wrap">
          <div className="container">
            <div className="_housiko_footer_bottom_content_wrap">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="_housiko_footer_bottom_content">
                    <h4 className="_housiko_footer_bottom_content_title">
                      Support
                    </h4>
                    <ul className="_housiko_footer_bottom_content_ul">
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Second hand flats
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          New construction flats
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Flats for rent
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Report on prices
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Neighborhood guide
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Real estate agencies finder
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="_housiko_footer_bottom_content">
                    <h4 className="_housiko_footer_bottom_content_title">
                      About
                    </h4>
                    <ul className="_housiko_footer_bottom_content_ul">
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Who We Are
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Press Releses
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Privacy
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="_housiko_footer_bottom_content">
                    <h4 className="_housiko_footer_bottom_content_title">
                      Company
                    </h4>
                    <ul className="_housiko_footer_bottom_content_ul">
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Covid 19 Safety
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Country
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Regions
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Cities
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="_housiko_footer_bottom_content">
                    <h4 className="_housiko_footer_bottom_content_title">
                      Private publishers
                    </h4>
                    <ul className="_housiko_footer_bottom_content_ul">
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Post Your Add
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Publish your advert to rent
                        </a>
                      </li>
                      <li className="_housiko_footer_bottom_content_li">
                        <a
                          href="#0"
                          className="_housiko_footer_bottom_content_link"
                        >
                          Sell your properties
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="_ft_divider" />
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="_copy_txt_wrap text-center">
                  <p className="_copy_txt">
                    Copyright &copy; {date.getFullYear()}
                    <span className="_copy_txt_yl"> housiko.com</span>. All
                    Rights Reserved <span className="_copy_txt_yl"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};
export default Footer;
