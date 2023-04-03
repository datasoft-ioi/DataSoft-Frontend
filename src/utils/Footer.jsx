import datalogo from '../images/datalogo.png'
import gps from '../images/gps.svg'
import phone from '../images/phone.svg'
import sms from '../images/sms.svg'
import { useContext } from 'react'
import {AppContext} from '../context/AppContext'


export default function Footer() {

    const {lauga} = useContext(AppContext)

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
                            <span>{lauga == 'uzb' ? "Xizmatlar" : "Услуги"}</span>
                            <li>UI/UX Design</li>
                            <li>Mobile Development</li>
                            <li>Web Development</li>
                        </ul>
                        <ul>
                            <span>{lauga == 'uzb' ? "Kompaniya" : "Компания"}</span>
                            <li>{lauga == 'uzb' ? "Biz haqimizda" : "о нас"}</li>
                            <li>{lauga == 'uzb' ? "Karyera imkoniyatlari" : "Карьерные возможности"}</li>
                            <li>{lauga == 'uzb' ? "Savollar" : "Вопросы"}</li>
                        </ul>
                    </div>
                </div>
                <div className="footerBottom">
                    <span>{lauga == 'uzb' ? "2023 DataSoft, Barcha huquqlar himoyalangan" : "2023 ДатаСофт, Все права защищены"}</span>
                    <img src={datalogo} alt="" />
                </div>
            </div>
        </footer>
    )
}