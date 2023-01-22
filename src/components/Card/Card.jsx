import React, { useState } from 'react';
import styles from './Card.module.scss';
import cat from '../../assets/Photo.png';

const Card = ({ text, name, taste, portion, mouse, weight, underCardText }) => {
    const [isHover, setIsHover] = useState(false);
    const [isSelect, setIsSelect] = useState(false);
    const [isDisable, setIsDisable] = useState(false);

    const cardState = () => {
        return isDisable
            ? styles.wrapper__disabled
            : isSelect && isHover
            ? styles.wrapper__selectedHover
            : isSelect
            ? styles.wrapper__selected
            : isHover
            ? styles.wrapper__hover
            : styles.wrapper;
    };

    const cornerState = () => {
        return isDisable
            ? styles.corner__disabled
            : isSelect && isHover
            ? styles.corner__selectedHover
            : isSelect
            ? styles.corner__selected
            : isHover
            ? styles.corner__hover
            : styles.corner;
    };

    const weightState = () => {
        return isDisable
            ? styles.weight__disabled
            : isSelect && isHover
            ? styles.weight__selectedHover
            : isSelect
            ? styles.weight__selected
            : isHover
            ? styles.weight__hover
            : styles.weight;
    };

    const selected = () => {
        setIsSelect(!isSelect);
        setIsHover(false);
    };

    const handleMouseEnter = () => {
        setIsHover(!isHover);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const disabled = () => {
        setIsDisable(!isDisable);
        console.log('disabled');
        setIsHover(false);
        setIsSelect(false);
    };

    return (
        <div className={styles.card}>
            <div
                onClick={selected}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onDoubleClick={disabled}
                className={cardState()}
            >
                <div className={cornerState()}></div>
                {text.map((item) => {
                    return isDisable ? (
                        <span
                            key={item.defaultText}
                            className={styles.text__disabled}
                        >
                            {item.defaultText}
                        </span>
                    ) : isSelect && isHover ? (
                        <span
                            key={item.selectedText}
                            className={styles.text__selected}
                        >
                            {item.selectedText}
                        </span>
                    ) : (
                        <span key={item.defaultText} className={styles.text}>
                            {item.defaultText}
                        </span>
                    );
                })}
                <h1
                    className={
                        isDisable ? styles.title__disabled : styles.title
                    }
                >
                    {name}
                </h1>
                <h3
                    className={
                        isDisable ? styles.taste__disabled : styles.taste
                    }
                >
                    {taste}
                </h3>
                <p
                    className={
                        isDisable ? styles.small__disabled : styles.small
                    }
                >
                    <span>
                        <b>{portion}</b> порций
                    </span>
                    <br />
                    {[mouse].map((item) => {
                        if (item === 1) {
                            return 'Мышь в подарок';
                        } else if (item >= 2 && item <= 4) {
                            return (
                                <span key={mouse}>
                                    <b>{mouse}</b> мыши в подарок
                                </span>
                            );
                        } else {
                            return (
                                <span key={mouse}>
                                    <b>{mouse}</b> мышей в подарок
                                    <br />
                                    заказчик доволен
                                </span>
                            );
                        }
                    })}
                </p>
                <div className={weightState()}>
                    <span className={styles.weight__firstPart}>{weight}</span>
                    <br />
                    <span className={styles.weight__secondPart}>кг</span>
                </div>
                <img
                    className={isDisable ? styles.cat__disabled : styles.cat}
                    src={cat}
                    alt="image"
                />
            </div>
            <p
                className={
                    isDisable ? styles.underCard__disabled : styles.underCard
                }
            >
                {underCardText.map((item) => {
                    return isDisable ? (
                        <span key={item.disabledText}>{item.disabledText}</span>
                    ) : isSelect ? (
                        <span key={item.selectedText}>{item.selectedText}</span>
                    ) : (
                        <span key={item.defaultText}>
                            {item.defaultText}{' '}
                            <b onClick={selected} className={styles.dash}>
                                {' '}
                                купи.
                            </b>
                        </span>
                    );
                })}
            </p>
        </div>
    );
};

export default Card;
