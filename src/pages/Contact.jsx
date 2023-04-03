import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Contact() {

    const { lauga } = useContext(AppContext)

    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        const chatId = "2064891580"; // Telegram chat ID
        const token = "6242159717:AAFlCHciEkD4EDSldWbSLlYDFB_d4s0dKW0"; // Telegram bot token
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

        axios.get(url)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <main>
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
                        <textarea name="" id="" cols="30" rows="10" value={message} onChange={handleInputChange} placeholder={lauga == 'uzb' ? "Xabar" : "Сообщение"}></textarea>
                        <button onClick={sendMessage}>{lauga == 'uzb' ? "Yuborish" : "Отправка"}</button>
                    </div>
                </div>
            </main>
        </div>
    )
}