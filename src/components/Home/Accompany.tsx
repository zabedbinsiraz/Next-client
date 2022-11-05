import Link from "next/link";
import { SvgIcon } from "../Design/SvgIcon";

const Accompany = () => {
  return (
    <div className="_housiko_accompany_wrapper">
      <div className="_housiko_accompany_wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_housiko_accompany_heading_txt text-center">
                <h2 className="_housiko_accompany_title">Get started</h2>
              </div>
            </div>
          </div>
          <div className="_housiko_accompany_content_wrap">
            <div className="row">
              <div className="col-xl-6 ccol-lg-6 col-md-12 col-sm-12">
                <div className="_housiko_accompany_content _housiko_accompany_content_yl">
                  <div className="_housiko_accompany_content_img_wrap">
                    <img
                      src="assets/images/acc1.png"
                      alt="chobi"
                      className="_housiko_accompany_content_img"
                    />
                  </div>
                  <div className="_housiko_accompany_content_txt">
                    <h3 className="_housiko_accompany_content_title">
                      Look for an Agent
                    </h3>
                    <p className="_housiko_accompany_content_p">
                      Lörem ipsum tasigförsamhet fören elektropol. Lavöpreskapet
                      mining om vusk, i kus. Lörem ipsum tasigförsamhet fören
                      elektropol.
                    </p>
                    {/* <a href="#0" className="_housiko_accompany_content_link">
                                        </a> */}
                    <Link
                      href="/agentlist"
                      className="_housiko_accompany_content_link"
                    >
                      <span>
                        Find out more, with no string attatch
                        <span className="_housiko_accompany_content_link_ic">
                          <SvgIcon
                            iconType={"right-arw"}
                            w={18}
                            h={18}
                            color={"#252E8D"}
                          />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 ccol-lg-6 col-md-12 col-sm-12">
                <div className="_housiko_accompany_content _housiko_accompany_content_bl">
                  <div className="_housiko_accompany_content_img_wrap">
                    <img
                      src="assets/images/acc2.png"
                      alt="chobi"
                      className="_housiko_accompany_content_img"
                    />
                  </div>
                  <div className="_housiko_accompany_content_txt">
                    <h3 className="_housiko_accompany_content_title">
                      List your property for Free
                    </h3>
                    <p className="_housiko_accompany_content_p">
                      Lörem ipsum tasigförsamhet fören elektropol. Lavöpreskapet
                      mining om vusk, i kus. Lörem ipsum tasigförsamhet fören
                      elektropol.
                    </p>
                    <Link
                      href="/pricing?isLogin=1"
                      className="_housiko_accompany_content_link"
                    >
                      <span>
                        Find out more, with no string attatch
                        <span className="_housiko_accompany_content_link_ic">
                          <SvgIcon
                            iconType={"right-arw"}
                            w={18}
                            h={18}
                            color={"#FFBF00"}
                          />
                        </span>
                      </span>
                    </Link>
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

export default Accompany;
