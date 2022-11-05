import Link from "next/link";
import { useState } from "react";
// import { useParams } from 'react-router-dom';
import { SvgIcon } from "../../components/Design/SvgIcon";

import Image from "next/image";
import { useRouter } from "next/router";
import { PricingPlanExample } from "../../components/Modals/Modals";

const Pricing = ({ name }: any) => {
  const { query } = useRouter();
  const [isLoginVal, setisLoginVal] = useState(query.isLogin);

  const [selectPlan, setSelectPlan] = useState("free");
  const [pricingExample, setPricingExample] = useState(false);
  const handlePlan = (plan: any) => {
    setSelectPlan(plan);
    setPricingExample(true);
  };
  const handleCancel = () => {
    setPricingExample(false);
  };
  // console.log();

  return (
    <>
      <div className="_housiko_pricing_wrapper">
        <div className="_housiko_pricing_wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="_housiko_pricing_header_wrap">
                  {!isLoginVal && (
                    <Link
                      href="/"
                      className="_housiko_pricing_header_img_wrap d-block"
                    >
                      <Image
                        src="assets/images/logo.svg"
                        alt="housiko logo"
                        className="_housiko_pricing_header_img"
                      />
                    </Link>
                  )}
                  {isLoginVal && <></>}

                  <div className="_housiko_pricing_header_txt">
                    {isLoginVal && (
                      <h2 className="_housiko_pricing_header_title">
                        Your Plan
                      </h2>
                    )}
                    {!isLoginVal && (
                      <h2 className="_housiko_pricing_header_title">
                        Choose your plan
                      </h2>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="_housiko_pricing_content_wrap">
              <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 mx-auto">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="_housiko_pricing_content">
                        <div className="_housiko_pricing_content_inner">
                          <div className="_housiko_pricing_content_inner_top">
                            <div className="_housiko_pricing_content_top">
                              <h3 className="_housiko_pricing_content_top_title">
                                Free
                              </h3>
                            </div>
                            <div className="_housiko_pricing_content_txt">
                              <h2 className="_housiko_pricing_content_title">
                                Free
                              </h2>
                            </div>
                            <div className="_housiko_pricing_content_ul_wrap">
                              <ul className="_housiko_pricing_content_ul">
                                <li className="_housiko_pricing_content_li">
                                  <span className="_housiko_pricing_content_li_ic">
                                    <SvgIcon iconType={"circle-tick"} />
                                  </span>
                                  <span className="_housiko_pricing_content_li_txt">
                                    1 advert for free
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="_housiko_pricing_content_inner_bottom">
                            <div className="_housiko_pricing_content_btn_wrap">
                              {!isLoginVal && (
                                <Link
                                  href="/myinfo?mytab=myprofile"
                                  className="_housiko_pricing_content_btn"
                                >
                                  Get started
                                </Link>
                              )}
                              {isLoginVal && (
                                <button className="_housiko_pricing_content_btn _housiko_user_pricing_content_btn">
                                  You have this plan
                                </button>
                              )}
                              <button
                                onClick={() => handlePlan("free")}
                                className="_housiko_pricing_content_btn _housiko_pricing_content_btn2"
                              >
                                See example
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="_housiko_pricing_content">
                        <div className="_housiko_pricing_content_inner">
                          <div className="_housiko_pricing_content_inner_top">
                            <div className="_housiko_pricing_content_top">
                              <h3 className="_housiko_pricing_content_top_title">
                                Plus
                              </h3>
                            </div>
                            <div className="_housiko_pricing_content_txt">
                              <h2 className="_housiko_pricing_content_title">
                                HUF 3,500<span>/month</span>
                              </h2>
                            </div>
                            <div className="_housiko_pricing_content_ul_wrap">
                              <ul className="_housiko_pricing_content_ul">
                                <li className="_housiko_pricing_content_li">
                                  <span className="_housiko_pricing_content_li_ic">
                                    <SvgIcon iconType={"circle-tick"} />
                                  </span>
                                  <span className="_housiko_pricing_content_li_txt">
                                    3 adverts
                                  </span>
                                </li>
                                <li className="_housiko_pricing_content_li">
                                  <span className="_housiko_pricing_content_li_ic">
                                    <SvgIcon iconType={"circle-tick"} />
                                  </span>
                                  <span className="_housiko_pricing_content_li_txt">
                                    Bigger pictures and more data displayed than
                                    free
                                  </span>
                                </li>
                                <li className="_housiko_pricing_content_li">
                                  <span className="_housiko_pricing_content_li_ic">
                                    <SvgIcon iconType={"circle-tick"} />
                                  </span>
                                  <span className="_housiko_pricing_content_li_txt">
                                    Better positioning than free
                                  </span>
                                </li>
                                <li className="_housiko_pricing_content_li">
                                  <span className="_housiko_pricing_content_li_ic">
                                    <SvgIcon iconType={"circle-tick"} />
                                  </span>
                                  <span className="_housiko_pricing_content_li_txt">
                                    Email alerts to the buyers
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="_housiko_pricing_content_inner_bottom">
                            <div className="_housiko_pricing_content_btn_wrap">
                              {!isLoginVal && (
                                <Link
                                  href="/myinfo?mytab=profile"
                                  className="_housiko_pricing_content_btn"
                                >
                                  Get started
                                </Link>
                              )}
                              {isLoginVal && (
                                <button className="_housiko_pricing_content_btn">
                                  Upgrade
                                </button>
                              )}
                              <button
                                onClick={() => handlePlan("pro")}
                                className="_housiko_pricing_content_btn _housiko_pricing_content_btn2"
                              >
                                See example
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="_housiko_pricing_content">
                        <div className="_housiko_pricing_content_inner">
                          <div className="_housiko_pricing_content_inner_top">
                            <div className="_housiko_pricing_content_top">
                              <h3 className="_housiko_pricing_content_top_title">
                                Pro
                              </h3>
                            </div>
                            <div className="_housiko_pricing_content_txt">
                              <h2 className="_housiko_pricing_content_title">
                                HUF 7,500
                                <span>/month</span>
                              </h2>
                            </div>
                            <div className="_housiko_pricing_content_ul_wrap">
                              <ul className="_housiko_pricing_content_ul">
                                <li className="_housiko_pricing_content_li">
                                  <span className="_housiko_pricing_content_li_ic">
                                    <SvgIcon iconType={"circle-tick"} />
                                  </span>
                                  <span className="_housiko_pricing_content_li_txt">
                                    Unlimited adverts
                                  </span>
                                </li>
                                <li className="_housiko_pricing_content_li">
                                  <span className="_housiko_pricing_content_li_ic">
                                    <SvgIcon iconType={"circle-tick"} />
                                  </span>
                                  <span className="_housiko_pricing_content_li_txt">
                                    3 pictures displayed in one
                                  </span>
                                </li>
                                <li className="_housiko_pricing_content_li">
                                  <span className="_housiko_pricing_content_li_ic">
                                    <SvgIcon iconType={"circle-tick"} />
                                  </span>
                                  <span className="_housiko_pricing_content_li_txt">
                                    Even more data displayed
                                  </span>
                                </li>
                                <li className="_housiko_pricing_content_li">
                                  <span className="_housiko_pricing_content_li_ic">
                                    <SvgIcon iconType={"circle-tick"} />
                                  </span>
                                  <span className="_housiko_pricing_content_li_txt">
                                    Better positioning than Plus
                                  </span>
                                </li>
                                <li className="_housiko_pricing_content_li">
                                  <span className="_housiko_pricing_content_li_ic">
                                    <SvgIcon iconType={"circle-tick"} />
                                  </span>
                                  <span className="_housiko_pricing_content_li_txt">
                                    Email alerts to the buyers
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="_housiko_pricing_content_inner_bottom">
                            <div className="_housiko_pricing_content_btn_wrap">
                              {!isLoginVal && (
                                <Link
                                  href="/myinfo?mytab=myprofile"
                                  className="_housiko_pricing_content_btn"
                                >
                                  Get started
                                </Link>
                              )}
                              {isLoginVal && (
                                <button className="_housiko_pricing_content_btn">
                                  Upgrade
                                </button>
                              )}
                              <button
                                onClick={() => handlePlan("plus")}
                                className="_housiko_pricing_content_btn _housiko_pricing_content_btn2"
                              >
                                See example
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PricingPlanExample
        open={pricingExample}
        cancel={handleCancel}
        plan={selectPlan}
      />
    </>
  );
};

export default Pricing;
