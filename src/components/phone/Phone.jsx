import './Phone.css'
import phoneImg from './../../img/images/vouchers-img.png'
import appImg from './../../img/icons/app-store.png'
import aplayImg from './../../img/icons/google-play.png'
const phone = () => {
    return(<section className="phone">
        <div className="container">
            <div className="phone_content">
                <div className="phone_text">

                    <div className="phone_title">
                        DOWNLOAD APP &
                        GET THE VOUCHER!
                    </div>
                    <div className="phone_desc">
                        Get 30% off for first transaction using <br/>
                        Rondovision mobile app for now.
                    </div>
                    <div className="phone_logoimg">
                        <a href="https://www.apple.com/store">
                            <img src={appImg} alt=""/>
                        </a>
                        <a href="https://play.google.com/store/games?hl=uk">
                            <img src={aplayImg} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="phone_img">
                    <img src={phoneImg} alt=""/>
                </div>
            </div>
        </div>

    </section> );
}
export default phone;