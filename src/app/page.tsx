"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X, MapPin, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

const VK = "https://vk.me/blacktattoo54";
const TG = "https://t.me/ramzestattoo54";
const MAX = "https://max.ru/u/f9LHodD0cOIQNAuaMQf1XDGOKm9TQ6jNOLhGt8kIIw5-ARlMFzqdvWeQa98";

const styles = [
  {n:"01",title:"Графика",desc:"Чёткая линия, контраст, выразительная композиция и внимание к деталям."},
  {n:"02",title:"Реализм",desc:"Объём, светотень и детальная проработка образа на коже."},
  {n:"03",title:"Акварель",desc:"Свободные цветовые переходы и ощущение живого движения."}
];
const works = ["ГРАФИКА","РЕАЛИЗМ","ЧЁРНО-БЕЛАЯ РАБОТА","АВТОРСКИЙ ЭСКИЗ","ДЕТАЛИ И ЛИНИИ","ЦВЕТНАЯ ТАТУИРОВКА"];

export default function Home() {
  const [menuOpen,setMenuOpen] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const scrollPortfolio = (direction: number) => {
    const track = portfolioRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".portfolio-tile");
    const distance = card ? card.getBoundingClientRect().width + 14 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="logo" href="#top" onClick={closeMenu}>RAMZES<span>.</span></a>
          <nav className={menuOpen ? "nav nav-open" : "nav"}>
            <a href="#styles" onClick={closeMenu}>Стили</a><a href="#works" onClick={closeMenu}>Работы</a><a href="#about" onClick={closeMenu}>О мастере</a><a href="#contact" onClick={closeMenu}>Контакты</a>
          </nav>
          <a className="header-cta" href={VK} target="_blank" rel="noreferrer">Записаться <ArrowUpRight size={14}/></a>
          <button className="mobile-menu" aria-label="Открыть меню" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="eyebrow">Тату-мастер · Новосибирск</div>
          <h1>ТВОЯ ИДЕЯ.<span>ТВОЯ КОЖА.</span></h1>
          <p className="hero-copy">Создаю татуировки, которые становятся частью твоей истории. Индивидуальный подход, авторские эскизы и внимание к каждой детали.</p>
          <div className="hero-actions">
            <a className="button" href={VK} target="_blank" rel="noreferrer">Обсудить идею <ArrowUpRight size={15}/></a>
            <a className="button secondary" href="#works">Смотреть работы <ArrowDown size={15}/></a>
          </div>
          <div className="hero-bottom">
            <div><strong>С 2019</strong>в профессии</div>
            <div><strong>1000+</strong>клиентов</div>
            <div><strong>3</strong>направления</div>
          </div>
          <div className="hero-stamp" aria-hidden="true">INK YOUR STORY</div>
        </div>
      </section>

      <section className="section styles" id="styles">
        <div className="container">
          <div className="section-head"><div><div className="kicker">Направления</div><h2>Найди свой<br/>стиль</h2></div><p className="section-intro">Не копирую чужие решения один в один. Обсуждаем идею, адаптируем референсы и создаём эскиз под тебя.</p></div>
          <div className="style-grid">{styles.map(s=><article className="style-card" key={s.n}><span className="style-number">{s.n} / STYLE</span><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="works">
        <div className="container">
          <div className="section-head"><div><div className="kicker">Портфолио</div><h2>Работы<br/>говорят сами</h2></div><p className="section-intro">Здесь будет собрана галерея реальных работ RAMZES. Никаких чужих фотографий и случайных картинок.</p></div>
          <div className="portfolio-controls"><span>ЛИСТАЙ ПОРТФОЛИО</span><div><button type="button" aria-label="Предыдущие работы" onClick={()=>scrollPortfolio(-1)}><ChevronLeft size={20}/></button><button type="button" aria-label="Следующие работы" onClick={()=>scrollPortfolio(1)}><ChevronRight size={20}/></button></div></div><div className="portfolio-track" ref={portfolioRef}>{works.map((w,i)=><div className="portfolio-tile" key={w}><span>{String(i+1).padStart(2,"0")} / {w}<br/><br/>ФОТО РАБОТЫ ДОБАВИМ</span></div>)}</div>
          <p className="portfolio-note">Пока это места под фотографии. После загрузки твоих работ заменю заглушки реальными снимками.</p>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="about-art" aria-label="Фирменная графика RAMZES"/>
          <div className="about-copy"><div className="kicker">О мастере</div><h2>Привет,<br/>я RAMZES</h2><p>Я тату-мастер из Новосибирска. Работаю с 2019 года и помог более чем тысяче клиентов воплотить их идеи в татуировках.</p><p>Для меня важно не просто перенести картинку на кожу, а подобрать композицию, которая будет смотреться органично именно на тебе. Каждый проект начинаем с разговора и понимания твоей задумки.</p><div className="facts"><div><strong>2019</strong><span>Начало пути</span></div><div><strong>1000+</strong><span>Клиентов</span></div></div></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><div className="kicker">Как всё проходит</div><h2>От идеи<br/>до тату</h2></div><p className="section-intro">Понятный процесс без лишней суеты — на каждом этапе ты понимаешь, что происходит.</p></div>
          <div className="steps"><article className="step"><b>01 / ОБСУЖДЕНИЕ</b><h3>Рассказываешь идею</h3><p>Обсуждаем задумку, место, размер, стиль и референсы. Определяем направление проекта.</p></article><article className="step"><b>02 / ЭСКИЗ</b><h3>Создаём решение</h3><p>Подготавливаю индивидуальную композицию и согласовываю с тобой основные детали.</p></article><article className="step"><b>03 / СЕАНС</b><h3>Воплощаем задумку</h3><p>В назначенный день встречаемся в Новосибирске и превращаем идею в татуировку.</p></article></div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy"><div className="kicker">Контакты и запись</div><h2>Есть идея?<br/>Давай обсудим.</h2><p>Напиши мне, расскажи, какую татуировку хочешь, и приложи референсы, если они есть. Вместе определим дальнейшие шаги.</p><div className="address"><strong><MapPin size={15} style={{display:"inline",verticalAlign:"middle",marginRight:7}}/>Новосибирск</strong>ул. Спартака, 5Б<br/>Приём по предварительной записи</div></div>
          <div className="contact-card"><h3>Выбери удобный способ связи</h3><a className="contact-link" href={VK} target="_blank" rel="noreferrer"><span>ВКонтакте · запись и вопросы</span><span><ArrowUpRight size={17}/></span></a><a className="contact-link" href={TG} target="_blank" rel="noreferrer"><span>Telegram · написать мастеру</span><span><ArrowUpRight size={17}/></span></a><a className="contact-link" href={MAX} target="_blank" rel="noreferrer"><span>MAX · написать мастеру</span><span><ArrowUpRight size={17}/></span></a><a className="contact-link" href="https://yandex.ru/maps/?text=Новосибирск%2C%20улица%20Спартака%2C%205Б" target="_blank" rel="noreferrer"><span>Открыть адрес на карте</span><span><ArrowUpRight size={17}/></span></a></div>
        </div>
      </section>

      <footer className="footer"><div className="footer-inner"><span>© {new Date().getFullYear()} RAMZES TATTOO</span><span>ТАТУ-МАСТЕР · НОВОСИБИРСК</span></div></footer>
    </main>
  );
}