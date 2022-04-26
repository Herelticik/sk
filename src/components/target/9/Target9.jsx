import styles from "../Target.module.css"
import { Link } from "react-router-dom";
export const Target9 = ({ theme }) => {
    return (
        <div className={styles.wrapper} style={!theme ? { color: "white" } : { color: "black" }}>
            <div className={styles.ellipse} style={!theme ? { backgroundColor: "#FA49FE" } : { background: "#49FEFE" }} />
          
            <div className={styles.rectangle}/>
            <div className={styles.logo}>
                <div />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                <div className={styles.title}>
                        <Link to={"/"}>SkillX</Link>
                    </div>
                    <div className={styles.about}>
                        <div className={styles.line}>Яндекс</div>
                        <div className={styles.line}>Директ</div>
                        <div className={styles.line}>Таргетолог</div>
                    </div>
                    <div className={styles.button}>
                        <Link to={"/"}><button style={!theme ? { background: "white", color: "black" } : { background: "black", color: "white" }}>В каталог</button></Link>
                    </div>
                </div>
                <div className={styles.italic_text}>Мы создали программу, чтобы вы развили каждый из этих навыков в диджитал-среде. Узнаете, какие каналы работают для вашего проекта и как усилить позицию компании на рынке</div>
                <div className={styles.bold_text}>Директор по интернет-маркетингу разбирается в инструментах продвижения, а главное — умеет правильно их сочетать</div>

                <div className={styles.text_blocks}>
                    <div className={styles.about_materials} style={!theme ? { background: "white",color:"black" } : { background: "black",color:"white" }} >
                        <div className={styles.block_header}>О курсе и материалах</div>
                        <ul className={styles.lines}>
                            <li className={styles.line}> Длительность: 8 часов видео</li>
                            <li className={styles.line}>Текстовая часть: 28 страниц</li>
                            <li className={styles.line}>Сложность: 5/10</li>
                            <li className={styles.line}>Средний доход: от 50 тыс. руб</li>
                        </ul>
                    </div>
                    <div className={styles.about_price} style={!theme ? { background: "#52FF00" } : { background: "#49FEFE" }} >
                        <div className={styles.block_header}>Что включено в стоимость?</div>
                        <ul className={styles.lines}>
                            <li className={styles.line}> Видеокурсы, туториалы</li>
                            <li className={styles.line}>Поддержка неограничена</li>
                            <li className={styles.line}>Общая группа (анонимная)</li>
                            <li className={styles.line}> Связка аккаунтов</li>
                            <li className={styles.line}> Как находить клиентов</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.learn_info}>
                    <div className={styles.about}>
                        <div className={styles.line}>Чему</div>
                        <div className={styles.line}>Научитесь</div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <div className={styles.item_header}>Управлять командой</div>
                            <div className={styles.item_text}> Подбирать специалистов под задачи проекта, определять KPI и планировать ресурсы</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_header}>Искать точки роста через аналитику</div>
                            <div className={styles.item_text}> Грамотно интерпретировать статистику, чтобы управлять маркетингом на основе данных, а не предположений</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_header}>Выбирать каналы продвижения в диджитал-среде </div>
                            <div className={styles.item_text}>  Сочетать инструменты привлечения и удержания — для достижения маркетинговых целей</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_header}>Искать точки роста через аналитику</div>
                            <div className={styles.item_text}> Грамотно интерпретировать статистику, чтобы управлять маркетингом на основе данных, а не предположений</div>
                        </div>
                    </div>
                </div>
                <div className={styles.programm}  >
                    <div className={styles.about}>
                        <div className={styles.line}>Программа</div>
                        <div className={styles.line}>Курса</div>
                    </div>
                    <ul className={styles.programm_block} style={!theme ? { background: "#52FF00" } : { background: "#49FEFE" }} >
                        <li>Стратегия и рынок. Постановка целей</li>
                        <li>Маркетинговые метрики и KPI</li>
                        <li>Конкурентный анализ в digital</li>
                        <li>Бренд-менеджмент и коммуникационная стратегия</li>
                        <li> Performance-маркетинг: SEO, CPA, таргетированная и контекстная реклама</li>
                        <li>Медийная стратегия</li>
                        <li> Контент-маркетинг</li>
                        <li>Каналы удержания: email, push, SMS</li>
                        <li>Работа с лендингами</li>
                        <li>Продуктовый маркетинг: цели, метрики и эксперименты</li>
                        <li>Аналитика и отчётность </li>
                        <li>Финансовое моделирование</li>
                        <li>и другие</li>
                        
                    </ul>
          
                </div>
                <div className={styles.end_price}>
                    <div className={styles.about}>
                        <div className={styles.line}>Стоимость</div>
                        <div className={styles.line}>Туториалов</div>
                    </div>
                    <div className={styles.price}>
                        <span>7500 ₽</span>
                        <span>11000 без скидки</span>
                    </div>
                    <div className={styles.text}>
                        Возврат денег. Если передумаете, скажите — и мы вернём вам всю сумму. Только при условиях того, что было открыто не более 30% материалов
                    </div>
                    <div className={styles.buy_button}>
                        <button>Купить</button>
                    </div>
                </div>

                <div className={styles.footer}>
                    <a href="#" >Контакты</a>
                    <a href="#" >Пользовательское соглашение</a>
                    <a href="#" >Technology X OÜ</a>
                    <div className={styles.ellipse} style={!theme ? { background: "#52FF00" } : { background: "#49FEFE" }} />
                </div>

            </div>
        </div>
    )
}