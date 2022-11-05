import { Carousel } from 'antd';
import React from 'react'
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


export const ListingCarouselMany = () => {
    return (
        <div>
            <Carousel
                className='_housiko_listing_card_slider_wrap'
                draggable
                infinite
                arrows
                dots={false}
                autoplay
                slidesToScroll={1}
                slidesToShow={1}
                prevArrow={<LeftOutlined />}
                nextArrow={<RightOutlined />}
            >
                <div className="_housiko_listing_card_item_slide">
                    <div className="_housiko_listing_card_item_slide_up">
                        <img src="assets/images/house-img.png" alt="house" className='_housiko_listing_card_item_slide_img' />
                    </div>
                    <ul className="_housiko_listing_card_item_img_ul">
                        <li className="_housiko_listing_card_item_img_li">
                            <img src="assets/images/house-img.png" alt="house" className='_housiko_listing_card_item_slide_img' />
                        </li>
                        <li className="_housiko_listing_card_item_img_li">
                            <img src="assets/images/house-img.png" alt="house" className='_housiko_listing_card_item_slide_img' />
                        </li>
                    </ul>
                </div>
                <div className="_housiko_listing_card_item_slide">
                    <div className="_housiko_listing_card_item_slide_up">
                        <img src="assets/images/house-img.png" alt="house" className='_housiko_listing_card_item_slide_img' />
                    </div>
                    <ul className="_housiko_listing_card_item_img_ul">
                        <li className="_housiko_listing_card_item_img_li">
                            <img src="assets/images/house-img.png" alt="house" className='_housiko_listing_card_item_slide_img' />
                        </li>
                        <li className="_housiko_listing_card_item_img_li">
                            <img src="assets/images/house-img.png" alt="house" className='_housiko_listing_card_item_slide_img' />
                        </li>
                    </ul>
                </div>
            </Carousel>
        </div>
    )
}

export const ListingCarouselOne = () => {
    return (
        <div>
            <Carousel
                className='_housiko_listing_card_slider_wrap'
                draggable
                infinite
                arrows
                dots={false}
                autoplay
                slidesToScroll={1}
                slidesToShow={1}
                prevArrow={<LeftOutlined />}
                nextArrow={<RightOutlined />}
            >
                <div className="_housiko_listing_card_item_slide">
                    <img src="assets/images/house-img.png" alt="house" className='_housiko_listing_card_item_slide_img' />
                </div>
                <div className="_housiko_listing_card_item_slide">
                    <img src="assets/images/house-img.png" alt="house" className='_housiko_listing_card_item_slide_img' />
                </div>
            </Carousel>
        </div>
    )
}