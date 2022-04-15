import styles from "./Catalog.module.css"
import { BenefitCard } from "./components/BenefitCard"
import { Link } from "react-router-dom";
export const Catalog = ({ theme, setTheme }) => {
    return (
        <div className={styles.wrapper} style={!theme ? { color: "white" } : { color: "black" }}>
            <div className={styles.ellipse} style={!theme ? { backgroundColor: "#5749FE" } : { background: "#58FE49" }} />
            <div className={styles.ellipse} style={!theme ? { background: "#5749FE" } : { background: "#58FE49" }} />
            <div className={styles.logo}>
                <div />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>SkillX</div>
                    <div className={styles.about}>
                        <div className={styles.line}>Каталог</div>
                        <div className={styles.line}>авторских</div>
                        <div className={styles.line}>курсов</div>
                    </div>
                    <div className={styles.button}>
                        <button onClick={() => setTheme(!theme)} style={!theme ? { background: "white", color: "black" } : { background: "black", color: "white" }}>{theme ? "White" : "Black"}</button>
                    </div>
                    <div className={styles.switch_text}>Нажимая кнопку - вы можете сменить режим</div>
                </div>
                <div className={styles.benefits}>
                    <div className={styles.short_cards}>
                        <Link to={"/card1"}>
                            <BenefitCard
                                theme={theme}
                                state={false}
                                header={"Яндекс Директ таргетолог"}
                                line1={"Научим настраивать таргет"}
                                line2={"Как найти клиентов и парсинг аудитории"}
                                line3={"Клоакинг и зеркала"}
                                line4={"Биллинг и прочее"}
                            />
                        </Link>
                        <Link to={"/card2"}>
                            <BenefitCard
                                theme={theme}
                                state={true}
                                header={"Binance арбитраж"}
                                line1={"Где покупаем и где продаем"}
                                line2={"Банки и безопасность"}
                                line3={"Торговля на фьючерсах"}
                                line4={"P2P обмен"}
                            />
                        </Link>
                        <Link to={"/card3"}>
                            <BenefitCard
                                theme={theme}
                                state={false}
                                header={"Яндекс Директ таргетолог"}
                                line1={"Научим настраивать таргет"}
                                line2={"Как найти клиентов и парсинг аудитории"}
                                line3={"Клоакинг и зеркала"}
                                line4={"Биллинг и прочее"}
                            />
                        </Link>
                        <Link to={"/card4"}>
                            <BenefitCard
                                theme={theme}
                                state={true}
                                header={"Binance арбитраж"}
                                line1={"Где покупаем и где продаем"}
                                line2={"Банки и безопасность"}
                                line3={"Торговля на фьючерсах"}
                                line4={"P2P обмен"}
                            />
                        </Link>
                        <Link to={"/card5"}>
                            <BenefitCard
                                theme={theme}
                                state={false}
                                header={"Яндекс Директ таргетолог"}
                                line1={"Научим настраивать таргет"}
                                line2={"Как найти клиентов и парсинг аудитории"}
                                line3={"Клоакинг и зеркала"}
                                line4={"Биллинг и прочее"}
                            />
                        </Link>
                        <Link to={"/card6"}>
                            <BenefitCard
                                theme={theme}
                                state={true}
                                header={"Binance арбитраж"}
                                line1={"Где покупаем и где продаем"}
                                line2={"Банки и безопасность"}
                                line3={"Торговля на фьючерсах"}
                                line4={"P2P обмен"}
                            />
                        </Link>
                    </div>

                    <div className={styles.long_card} style={!theme ? { background: "white", color: "black" } : { background: "black", color: "white" }}>
                        {!theme && <div className={styles.rectangles}>
                            <div className={styles.rectangle} />
                            <div className={styles.rectangle} />
                        </div>}
                        <div className={styles.header}>
                            Карта Black по акции
                        </div>
                        <div className={styles.text}>
                            Все курсы из каталога и индивидуальная поддержка по одной цене, акция доступна до 20 апреля
                        </div>
                    </div>
                </div>

                <div className={styles.differences} >
                    <div className={styles.about}>
                        <div className={styles.line}>Чем мы</div>
                        <div className={styles.line}>отличаемся от</div>
                        <div className={styles.line}>конкурентов</div>
                    </div>
                    <ul className={styles.variables}>
                        <li>Настройка под вас</li>
                        <li>Ограниченное количество копий</li>
                        <li>Без воды - только конкретные шаги</li>
                        <li>Вы будете готовы продавать готовые решения с первого дня</li>
                    </ul>
                </div>
                <div className={styles.footer}>
                    <a href="#" style={!theme ? { color: "white" } : { color: "black" }}>Контакты</a>
                    <a href="#" style={!theme ? { color: "white" } : { color: "black" }}>Пользовательское соглашение</a>
                    <a href="#" style={!theme ? { color: "white" } : { color: "black" }}>Technology X OÜ</a>
                </div>
            </div>
        </div>
    )
}