import React from 'react';
import styleContent from './Content.module.scss';
import {BookingContainer} from "../BookingContainer/BookingContainer";
import contentImage from '../../assets/img/content/content.png';

class Content extends React.Component {
    render() {
        return (
            <section className={styleContent.content}>
                <div className={styleContent.content__element}>
                    <img src="https://www.engerta.ru/wp-content/themes/engerta-theme/assets/img/main/main-bg.jpg" className={styleContent.content__image} alt="change this"/>
                </div>
                <BookingContainer/>
            </section>
        );
    }
}

export default Content;
