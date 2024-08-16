import React from "react";
import styles from './ClubAchievements.module.css'

export function ClubAchievements() {
    const getRandomStyle = () => ({
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
        fontSize: `${Math.floor(Math.random() * 10) + 15}px`,
      });
    return (
        <div style={getRandomStyle()} className={styles.body}>
            <ul>
                <li className={styles.bronze}>Дві бронзові медалі у чемпіонаті України (сезони 1992-1993, 1993-1994)</li>
                <li className={styles['gold-cup']}>Володар Кубка України (1992, 1993-1994)</li>
            </ul>
            <div className={styles.group}>
                <div><span className={styles['title']}>TopScorers:</span> <span>Ігор Бєланов, Анатолій Довгаль</span></div>
                <div><span className={styles['title']}>Records:</span> <span>Вихід у фінал Кубка України</span></div>
                <div><span className={styles['title']}>Honors:</span> <span>Участь у Лізі Європи, Фіналіст Кубка України</span></div>
            </div>
        </div>);
}