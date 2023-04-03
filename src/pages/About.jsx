import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import aboutImg from '../images/about.svg'
import gallery1 from '../images/galery1.png'
import gallery2 from '../images/galarey2.png'
import gallery3 from '../images/galery3.png'
import gallery4 from '../images/galery4.png'
import gallery5 from '../images/galery5.png'
import gallery6 from '../images/galery6.png'
import gallery7 from '../images/galery7.png'
import ImgGallary from './Gallary'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { useEffect , useState } from 'react'


export default function About() {

    const {lauga} = useContext(AppContext)
    async function HeaderTitle() {
        const about = await axios.get('https://api.data-soft.uz/about/')

        setAboutTitle(about.data)
    }
    useEffect(() => {
        HeaderTitle();
    }, []);
    const [aboutTitle , setAboutTitle] = useState([])

    return (
        <div className="container">
            <main>
                <div className="about" style={{marginTop: '147px'}}>
                    {
                        aboutTitle.map(item => (
                            <div className="aboutInfo">
                                <span className="aboutInfo_title">{lauga == 'uzb' ? item.title : item.rus_title}</span>
                                <p>{lauga == 'uzb' ? item.desc : item.rus_desc}</p>
                            </div>
                        ))
                    }
                    <img src={aboutImg} alt="" />
                </div>
                <div className="gallery">
                        <span className="galleryTitle">{lauga == 'uzb' ? 'Gallary' : 'Галерея'}</span>
                        <ImgGallary />
                    </div>
                    <div className="contact">
                        <span className="contactTitle">{lauga == 'uzb' ? 'loyihangiz haqida bizga xabar bering' : 'Расскажите нам о своем проекте'}</span>
                        <div className="contactMain">
                            <div className="contactMainInfos">
                                <input type="text" placeholder={lauga == 'uzb' ? "Ism" : "Имя"} />
                                <input type="text" placeholder={lauga == 'uzb' ? "Familiya" : "Фамилия"} />
                                <input type="text" placeholder='Email' />
                                <input type="text" placeholder={lauga == 'uzb' ? "Telefon" : "телефон"} />
                                <select name="" id="">
                                    <option value="" selected disabled hidden>{lauga == 'uzb' ? "Byudjet" : "Бюджет"}</option>
                                    <option value="">0$-100$</option>
                                    <option value="">100$-300$</option>
                                    <option value="">300$-700$</option>
                                    <option value="">700$-1000$</option>
                                    <option value="">1000$-2000$</option>
                                    <option value="">2000$+</option>
                                </select>
                                <select name="" id="">
                                    <option value="" selected disabled hidden>{lauga == 'uzb' ? "Biz haqimizda qayerdan eshitdingiz?" : "Как вы узнали о нас?"}</option>
                                    <option value="">Google</option>
                                    <option value="">Instagram</option>
                                    <option value="">Telegram</option>
                                </select>
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder={lauga == 'uzb' ? "Xabar" : "Сообщение"}></textarea>
                            <button>{lauga == 'uzb' ? "Yuborish" : "Отправка"}</button>
                        </div>
                    </div>
            </main>
        </div>
    )
}