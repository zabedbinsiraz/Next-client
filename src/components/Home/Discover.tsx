import React from 'react'

const Discover = () => {


    return (
        <div className="_housiko_discover_wrapper">
            <div className="_housiko_discover_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="_housiko_discover_header_txt">
                                <h2 className="_housiko_discover_header_title">Discover Properties</h2>
                                <p className="_housiko_discover_header_p">Lörem ipsum made homogt håhangen diahavis serat av riligt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="_housiko_discover_tab_wrap">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <ul className="_housiko_discover_tab_ul">
                                    <li className="_housiko_discover_tab_li _active">
                                        TOP SEARCH
                                    </li>
                                    <li className="_housiko_discover_tab_li">
                                        BUY
                                    </li>
                                    <li className="_housiko_discover_tab_li">
                                        RENT
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="_housiko_discover_tab_content_wrap">
                            <div className="row">
                                {
                                    Array.from(Array(24).keys()).map((item, id) =>
                                        <div key={id} className="col-xl-2 col-lg-2 col-md-3 col-sm-12">
                                            <div className="_housiko_discover_tab_content_txt">
                                                <h3 className="_housiko_discover_tab_content_title">
                                                    Birmingham
                                                </h3>
                                                <p className="_housiko_discover_tab_content_p">
                                                    450 Properties
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover;