import React from 'react';
import countyLongLine from '../../assets/images/media/county-long-line.png';

const BannerBar = ({title, withBg, btnTxt, urlBtn}) => {
    return (
        <>
            <div className="mcb-wrap-inner">
                <div className="column mcb-column two-fifth column_column  column-margin-40px">
                    <div className="column_attr clearfix">
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className="column mcb-column one-third column_image">
                    <div className="image_frame image_item no_link scale-with-grid no_border" style={styles.iconPanel}>
                        <div className="image_wrapper">
                            <img className="scale-with-grid" src={countyLongLine} />
                        </div>
                    </div>
                </div>
                <div className="column mcb-column one-fourth column_button">
                    <div className="button_align align_center">
                        <a className="button button_size_2 button_js" href="news-and-events.html" style={withBg ? styles.btnExtraClass : {}}>
                            <span className="button_label">{btnTxt}</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    btnExtraClass: {
        backgroundColor:'#fff !important',
        color:'#a18e72' //50B463
    },
    iconPanel: {
        marginTop:'12px',
    }
}

export default BannerBar;
