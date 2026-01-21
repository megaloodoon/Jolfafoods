import Link from "next/link"
import Styles from "@/app/page.module.css"

export default function Benefits() {

    return (
        <div>
            <nav className="containerB">
                <h1 className="simbol">فواید محصولات جولفا فودز</h1>

                <div className="mini-simbol">
                    <img src={'/Image/Cheese.jpg'} alt="Jolfa Cheese" />
                    <h3>محصولات جولفا برای صنعت غذا طراحی شده‌اند تا عملکرد ثابت و طعم دلپذیر را در هر پخت تضمین کنند.</h3>
                </div>

                <ul className="mother-list">
                    {Benefitdata.map((item, index) => (
                        <li key={index}>
                            <h3>{item.title}</h3>
                            <img src={item.Image} alt="" />
                            <p>{item.content}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

const Benefitdata = [
  { Id: 1, title: "ذوب یکنواخت", content: "پنیرهای جولفا به طور یکنواخت ذوب می‌شوند و نتیجه‌ای طلایی در فر ایجاد می‌کنند.", Image: "/Image/mozzarella.jpg" },
  { Id: 2, title: "طعم کلاسیک", content: "طعم متعادل که به پیتزا شخصیت و مزه می‌دهد.", Image: "/Image/Cheese.jpg" },
  { Id: 3, title: "عملکرد صنعتی", content: "مناسب برای تولید انبوه با عملکرد پایدار در فرهای مختلف.", Image: "/Image/swiss-cheese.jpg" },
  { Id: 4, title: "کنترل کیفیت", content: "تولید تحت نظارت دقیق و ردیابی هر محموله.", Image: "/Image/Jolfa-logo.png" },
];