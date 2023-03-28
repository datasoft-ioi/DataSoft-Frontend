import datalogo from '../images/datalogo.png'
import gps from '../images/gps.svg'
import phone from '../images/phone.svg'
import sms from '../images/sms.svg'


export default function Footer() {
    return (
        <footer>
            <div className="footerCon">
                <div className="footerTop">
                    <div className="footerContact">
                        <a href="" className="footeradress">
                            <button><img src={phone} alt="" /></button>
                            <span>+998 (33)564-64-04</span>
                        </a>
                        <a href="" className="footeradress">
                            <button><img src={sms} alt="" /></button>
                            <span>info@data-soft.uz</span>
                        </a>
                        <a href="" className="footeradress">
                            <button><img src={gps} alt="" /></button>
                            <span>Xorazm (UZ)</span>
                        </a>
                    </div>
                    <div className="footerInfos">
                        <ul>
                            <span>Xizmatlar</span>
                            <li>UI/UX Design</li>
                            <li>Mobile Development</li>
                            <li>Web Development</li>
                        </ul>
                        <ul>
                            <span>Company</span>
                            <li>About Us</li>
                            <li>Career Opportunities</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>
                </div>
                <div className="footerBottom">
                    <span>2023 DataSoft, All rights reserved</span>
                    <img src={datalogo} alt="" />
                </div>
            </div>
        </footer>
    )
}