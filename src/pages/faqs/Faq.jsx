import Navbar from '../../utils/Navbar'
import Footer from '../../utils/Footer'
import FaqMessage from './faqMeesge';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Faq() {

  const {lauga} = useContext(AppContext)

  const [faqs, setFaqs] = useState([]);

  async function GetTack() {
    const response = await axios.get('https://api.data-soft.uz/api/');
    setFaqs(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    GetTack();
  }, []);

  return (
    <div className="container">
      <main>
        <div className="faqs">
          <span className="faqsTitle">FAQ</span>
          <div className="faqss">
            {faqs.map((faq) => (
              <FaqMessage key={faq.id} id={faq.id} question={lauga == 'uzb' ? faq.title : faq.rus_title} answer={lauga == 'uzb' ? faq.desc : faq.rus_desc} />
            ))}
          </div>
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
  );
}