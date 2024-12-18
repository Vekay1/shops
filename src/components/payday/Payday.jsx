import './Payday.css'
import promoPayday from './../../img/images/promo-img.jpg'
import promoPayday1 from './../../img/images/Rectangle.png'
const Promo = () => {
    return(<section className="promo">
        <div className="container">
            <div className="payday_content">
                <div className="payday_img">
                    <img src={promoPayday} alt=""/>
                    <img src={promoPayday1} className="rec" alt=""/>
                </div>
                <div className="payday_text">

                    <div className="payday_title">
                        <span className="highlight">
                            <span>PAYDAY</span></span> <br/>
                        SALE NOW
                    </div>
                    <div className="payday_desc">
                        Spend minimal $100 get 30% off
                        voucher code for your next purchase
                    </div>
                    <div className="payday_bottom">
                        <h1>1 June - 10 June 2021</h1>
                        *Terms & Conditions apply
                    </div>
                    <div className="payday_btn-wrapper">
                        <a href="/home" className="payday_btn">Shop Now</a>
                    </div>
                </div>

            </div>
        </div>

    </section>);
}
export default Promo;