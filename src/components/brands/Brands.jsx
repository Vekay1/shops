import './Brands.css'
import hm from './../../img/brands/HM.png'
import amazon from './../../img/brands/Amazon.png'
import lacoste from './../../img/brands/Lacoste.png'
import levis from './../../img/brands/Levis.png'
import obey from './../../img/brands/Obey.png'
import shopify from './../../img/brands/Shopify.png'
const Brands = () => {
    return(<section className="brands">
        <div className="container">
            <ul className="brands_list">
                <li><a href="https://www2.hm.com/pl_pl/index.html"><img src={hm} alt="hm"/></a></li>
                <li><a href="https://obeyclothing.eu/?srsltid=AfmBOoo5efSvXvxder6_U_PY01o5-jeokeOChC5PcwcN5HwbtcHdPXgl"><img src={obey} alt="obey"/></a></li>
                <li><a href="https://www.shopify.com/free-trial?term=shopify&adid=699117274727&campaignid=21270911700&branded_enterprise=1&BOID=brand&utm_medium=cpc&utm_source=google&gad_source=1&gclid=Cj0KCQiAvP-6BhDyARIsAJ3uv7YV2PBP600s-1PYyrKfd7rzidFVVOYT_L3U97pFKIMk5bWhkVKx3wQaAkJwEALw_wcB&cmadid=516752332;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324494362;cmcreativeid=163722649;cmsiteid=5500011"><img src={shopify} alt="shopify"/></a></li>
                <li><a href="https://www.lacoste.ua/?gad_source=1&gclid=Cj0KCQiAvP-6BhDyARIsAJ3uv7b6cuepBFF8xkpnlqNw0jXN_YjdrB8xg7RAPRR2qaA02g1jw8y9b6gaAqIPEALw_wcB"><img src={lacoste} alt="lacoste"/></a></li>
                <li><a href="https://www.levi.com/PL/en/?srsltid=AfmBOoq1hMXuktDC4jwDxfLwOsn7W0SVKjW995uSEZYCAlgUx1bwj87u"><img src={levis} alt="levis"/></a></li>
                <li><a href="https://www.amazon.com/"><img src={amazon} alt=""/></a></li>
            </ul>
        </div>
    </section> );
}
export default Brands;