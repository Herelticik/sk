import styles from "./BenefitCard.module.css"
export const BenefitCard = ({ header, line1, line2, line3, line4, state, theme }) => {
    return (
        <div className={styles.wrapper} style={theme ? { color: "white", background: "black" } : { color: "black", background: "white" }}>
            <div className={styles.header}>
                {header}
            </div>
            <ul className={styles.items}>
                <li>{line1}</li>
                <li>{line2}</li>
                <li>{line3}</li>
                <li>{line4}</li>
            </ul>
            {state ?

                (theme ?
                    <div className={styles.triangle}>
                        <svg width="100%" height="100%" viewBox="0 0 48 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5848 1.83222C23.3661 1.04991 24.6339 1.04991 25.4152 1.83222L45.8922 22.3367C47.1508 23.5971 46.2582 25.75 44.477 25.75H3.52296C1.7418 25.75 0.849174 23.5971 2.1078 22.3367L22.5848 1.83222Z" stroke="#58FE49" stroke-width="2" />
                        </svg>
                    </div>
                    :
                    <div className={styles.triangle_black}>
                        <svg width="100%" height="100%" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8153 2.48892C14.6019 1.25936 16.3981 1.25936 17.1847 2.48892L29.4575 21.6722C30.3092 23.0034 29.3532 24.75 27.7728 24.75H3.2272C1.64684 24.75 0.690799 23.0034 1.54248 21.6722L13.8153 2.48892Z" stroke="black" stroke-width="2" />
                        </svg>
                    </div>

                ) :
                (theme ?
                    <div className={styles.ellipse} />
                    :
                    <div className={styles.circle}></div>
                )
            }





        </div>

    )
}