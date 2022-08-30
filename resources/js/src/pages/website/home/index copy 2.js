import React from 'react';
import countyBlogpost6 from '../../../assets/images/media/county-blogpost6-960x720.jpg';
import countyHomePatternBg from '../../../assets/images/media/county-home-pattern-bg.png';
import countyHomePatternbg2 from '../../../assets/images/media/county-home-patternbg-2.png';
import countyMainBgWithoutGradient from '../../../assets/images/media/county-main-bg-without-gradient.jpg';
import countyMapMarkerIcon from '../../../assets/images/media/county-map-marker-icon.png';
import countyCallendarIcon from '../../../assets/images/media/county-callendar-icon.png';
import countyChevronDown from '../../../assets/images/media/county-chevron-down.png';
import { Carousel } from 'react-bootstrap';
import BannerBar from '../../../components/banner-bar';
import countyPdfIcon from '../../../assets/images/media/county-pdf-icon.png';

const HomePage = (props) => {
    return (
        <>
        <div className="row">
            <div className="col-md-12">
                <div className="section mcb-section dark has-video bg-cover">
                    <Carousel>
                        <Carousel.Item >
                            <div className='carousel-img-container'>
                                <img
                                    className="d-block w-100"
                                    src={countyMainBgWithoutGradient}
                                    alt="Second slide"
                                />
                            </div>
                            <Carousel.Caption className='cesw-custom'>
                                <div className='d-flex align-items-center h-100'>
                                    <div className="mcb-wrap-inner">
                                        <div className="mcb-column column_column  column-margin-20px">
                                            <div className="column_attr clearfix">
                                                <h4>City Hall</h4>
                                            </div>
                                        </div>
                                        <div className="mcb-column column_column  column-margin-20px">
                                            <div className="column_attr clearfix">
                                                <p>
                                                    Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum, diam arcu tristique nibh, nec egestas diam elit at nulla.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mcb-column column_button">
                                            <a className="button button_size_3 button_js" href="category_page.html"><span className="button_label">View more details</span></a>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="section mcb-section" style={{paddingTop:'100px', paddingBottom:'175px', backgroundColor:'#f6f1e9', backgroundImage:`url(${countyHomePatternBg})`, backgroundRepeat:'repeat', backgroundPosition:'left top'}}>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one-second valign-top clearfix">
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one-second column_image">
                                    <div className="image_frame image_item no_link scale-with-grid no_border">
                                        <div className="image_wrapper">
                                            <img className="scale-with-grid" src={countyMapMarkerIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix">
                                        <h2>Les journaux officiels les plus recents</h2>
                                    </div>
                                </div>
                                <div className="column mcb-column two-third column_button">
                                    <a className="sgg-bg-color sgg-color button button_size_4 button_js" href="news-and-events.html"><span className="button_label">Plus de journaux</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="wrap mcb-wrap one-second valign-top clearfix">
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one column_blog_news ">
                                    <div className="Latest_news ">
                                        <ul className="ul-first">
                                            <li className="post type-post format-standard has-post-thumbnail">
                                                <div className="photo">
                                                    <a href="post.html">
                                                            <img src={countyBlogpost6} className="scale-with-grid wp-post-image"/>
                                                        </a>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="post.html">Aliquam sit amet turpis</a></h5>
                                                    <div className="desc_footer">
                                                        <span className="date"><i className="icon-clock"></i> July 12, 2018</span><i className="icon-comment-empty-fa"></i><a href="post.html#respond" className="post-comments">0</a>
                                                        <div className="button-love">
                                                            <a href="#" className="mfn-love" data-id="81"><span className="icons-wrapper"><i className="icon-heart-empty-fa"></i><i className="icon-heart-fa"></i></span><span className="label">1</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="post type-post format-standard has-post-thumbnail">
                                                <div className="photo">
                                                    <a href="post.html">
                                                            <img src={countyBlogpost6} className="scale-with-grid wp-post-image"/>
                                                        </a>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="post.html">Et omnia lorem es</a></h5>
                                                    <div className="desc_footer">
                                                        <span className="date"><i className="icon-clock"></i> July 12, 2018</span><i className="icon-comment-empty-fa"></i><a href="post.html#respond" className="post-comments">0</a>
                                                        <div className="button-love">
                                                            <a href="#" className="mfn-love " data-id="80"><span className="icons-wrapper"><i className="icon-heart-empty-fa"></i><i className="icon-heart-fa"></i></span><span className="label">2</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="post type-post format-standard has-post-thumbnail hentry">
                                                <div className="photo">
                                                    <a href="post.html">
                                                            <img src={countyBlogpost6} className="scale-with-grid wp-post-image"/>
                                                            </a>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="post.html">Dolor es quantum</a></h5>
                                                    <div className="desc_footer">
                                                        <span className="date"><i className="icon-clock"></i> July 12, 2018</span><i className="icon-comment-empty-fa"></i><a href="post.html#respond" className="post-comments">0</a>
                                                        <div className="button-love">
                                                            <a href="#" className="mfn-love " data-id="75"><span className="icons-wrapper"><i className="icon-heart-empty-fa"></i><i className="icon-heart-fa"></i></span><span className="label">1</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="section mcb-section" style={{paddingTop:'0px', paddingBottom:'0px'}}>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one-second valign-top move-up clearfix" style={{padding:'0 3%', marginTop:'-75px'}} data-mobile="no-up">
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one column_image">
                                    <div className="image_frame image_item no_link scale-with-grid no_border">
                                        <div className="image_wrapper">
                                            <img className="scale-with-grid" src={countyMainBgWithoutGradient} />
                                        </div>
                                    </div>
                                </div>
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix align_center">
                                        <h4>Places worth visiting</h4>
                                        <p>
                                            Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo.
                                        </p>
                                    </div>
                                </div>
                                <div className="column mcb-column one column_image">
                                    <div className="image_frame image_item no_link scale-with-grid no_border">
                                        <div className="image_wrapper">
                                            <img className="scale-with-grid" src={countyMainBgWithoutGradient} />
                                        </div>
                                    </div>
                                </div>
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix align_center">
                                        <h4>Places worth visiting</h4>
                                        <p>
                                            Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrap mcb-wrap one-second valign-top move-up clearfix" style={{padding:'0 3%', marginTop:'-100px'}} data-mobile="no-up">
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one column_image">
                                    <div className="image_frame image_item no_link scale-with-grid no_border">
                                        <div className="image_wrapper">
                                            <img className="scale-with-grid" src={countyMainBgWithoutGradient} />
                                        </div>
                                    </div>
                                </div>
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix align_center">
                                        <h4>Places worth visiting</h4>
                                        <p>
                                            Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo.
                                        </p>
                                    </div>
                                </div>
                                <div className="column mcb-column one column_image">
                                    <div className="image_frame image_item no_link scale-with-grid no_border">
                                        <div className="image_wrapper">
                                            <img className="scale-with-grid" src={countyMainBgWithoutGradient} />
                                        </div>
                                    </div>
                                </div>
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix align_center">
                                        <h4>Places worth visiting</h4>
                                        <p>
                                            Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="section mcb-section" id="first" style={{paddingTop:'50px', paddingBottom:'50px'}}>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one valign-top clearfix">
                            <BannerBar
                                title={"Rester connecter"}
                                withBg={false}
                                btnTxt={'Contact'}
                                urlBtn={''}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="section mcb-section" style={{paddingTop:'100px', paddingBottom:'120px', backgroundColor:'#f6f1e9', backgroundImage:`url(${countyHomePatternbg2})`, backgroundRepeat:'repeat', backgroundPosition:'left top'}}>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap two-fifth valign-top clearfix">
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one-second column_image">
                                    <div className="image_frame image_item no_link scale-with-grid no_border">
                                        <div className="image_wrapper">
                                            <img className="scale-with-grid" src={countyCallendarIcon}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="column mcb-column five-sixth column_column">
                                    <div className="column_attr clearfix">
                                        <h2>Les textes règlementaires les plus recents</h2>
                                    </div>
                                </div>
                                <div className="column mcb-column two-third column_button">
                                    <a className="sgg-bg-color sgg-color button button_size_4 button_js" href="news-and-events.html"><span className="button_label">Voir plus de texte</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="wrap mcb-wrap three-fifth valign-top clearfix">
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one column_blog_news ">
                                    <div className="Latest_news featured">
                                        <ul className="ul-first">
                                            <li className=" post type-post format-standard has-post-thumbnail hentry">
                                                <div className="photo">
                                                    <a href="post.html">
                                                        <img src={countyBlogpost6} className="scale-with-grid wp-post-image" />
                                                    </a>
                                                </div>
                                                <div className="desc">
                                                    <h4><a href="post.html">Cras efficitur nisl vel</a></h4>
                                                    <div className="desc_footer">
                                                        <span className="date"><i className="icon-clock"></i> July 13, 2018</span><i className="icon-comment-empty-fa"></i><a href="post.html#respond" className="post-comments">0</a>
                                                        <div className="button-love">
                                                            <a href="#" className="mfn-love " data-id="79"><span className="icons-wrapper"><i className="icon-heart-empty-fa"></i><i className="icon-heart-fa"></i></span><span className="label">0</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="ul-second">
                                            <li className="post type-post format-standard has-post-thumbnail hentry">
                                                <div className="photo">
                                                    <a href="post.html">
                                                        <img src={countyPdfIcon} className="scale-with-grid wp-post-image" />
                                                    </a>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="post.html">Donec volutpat est in</a></h5>
                                                    <div className="desc_footer">
                                                        <span className="date"><i className="icon-clock"></i> July 12, 2018</span><i className="icon-comment-empty-fa"></i><a href="post.html#respond" className="post-comments">0</a>
                                                        <div className="button-love">
                                                            <a href="#" className="mfn-love " data-id="76"><span className="icons-wrapper"><i className="icon-heart-empty-fa"></i><i className="icon-heart-fa"></i></span><span className="label">0</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="post type-post format-standard has-post-thumbnail hentry">
                                                <div className="photo">
                                                    <a href="post.html">
                                                        <img src={countyPdfIcon} className="scale-with-grid wp-post-image" />
                                                        </a>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="post.html">Fusce ullamcorper</a></h5>
                                                    <div className="desc_footer">
                                                        <span className="date"><i className="icon-clock"></i> July 12, 2018</span><i className="icon-comment-empty-fa"></i><a href="post.html#respond" className="post-comments">0</a>
                                                        <div className="button-love">
                                                            <a href="#" className="mfn-love " data-id="77"><span className="icons-wrapper"><i className="icon-heart-empty-fa"></i><i className="icon-heart-fa"></i></span><span className="label">0</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="post type-post format-standard has-post-thumbnail hentry">
                                                <div className="photo">
                                                    <a href="post.html">
                                                        <img src={countyPdfIcon} className="scale-with-grid wp-post-image" />
                                                    </a>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="post.html">Cras a ex id ipsum</a></h5>
                                                    <div className="desc_footer">
                                                        <span className="date"><i className="icon-clock"></i> July 12, 2018</span><i className="icon-comment-empty-fa"></i><a href="post.html#respond" className="post-comments">0</a>
                                                        <div className="button-love">
                                                            <a href="#" className="mfn-love " data-id="78"><span className="icons-wrapper"><i className="icon-heart-empty-fa"></i><i className="icon-heart-fa"></i></span><span className="label">0</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="post type-post format-standard has-post-thumbnail hentry">
                                                <div className="photo">
                                                    <a href="post.html">
                                                        <img src={countyPdfIcon} className="scale-with-grid wp-post-image" />
                                                    </a>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="post.html">Lorem ipsum dolor</a></h5>
                                                    <div className="desc_footer">
                                                        <span className="date"><i className="icon-clock"></i> July 12, 2018</span><i className="icon-comment-empty-fa"></i><a href="post.html#respond" className="post-comments">0</a>
                                                        <div className="button-love">
                                                            <a href="#" className="mfn-love " data-id="62"><span className="icons-wrapper"><i className="icon-heart-empty-fa"></i><i className="icon-heart-fa"></i></span><span className="label">0</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-decoration bottom" style={{backgroundImage:'url(images/county_section_decoration-1.png)', height:'125px'}}></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomePage;
