import React from "react";
import styles from './ClubInfo.module.css';
import emblem from '../../assets/images/emblem.gif';

export function ClubInfo() {
    const getRandomStyle = () => ({
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
        fontSize: `${Math.floor(Math.random() * 10) + 15}px`,
      });
    return (
    <div style={getRandomStyle()} className={styles.body}>
        <img src={emblem} alt="" />
        <div>
            <span>«Чорноморець»</span> <span>Одеса</span>
        </div>
        <div className={styles['founded-year']}>
            <span>FoundedYear:</span> <span>1936</span>
        </div>
        <div className={styles.stadium}>
            <span>Stadium:</span> <span>«Чорноморець»</span>
        </div>
    </div>);
}