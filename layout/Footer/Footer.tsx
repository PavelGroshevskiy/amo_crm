import React from "react";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";
import { format } from "date-fns";
import Telegram from "../telegram.svg";
import Viber from "../viber.svg";
import Whatsapp from "../whatsapp.svg";

const aboutArr = ["Партнёрская программа", "Вакансии"];
const menuArr = ["Расчёт стоимости", "Услуги", "Виджеты", "Интеграции", "Наши клиенты"];
const thirdColumnFooter = [
	"Кейсы",
	"Благодарственные письма",
	"Сертификаты",
	"Блог на Youtube",
	"Вопрос / Ответ",
];

const Footer = ({ className, ...props }: FooterProps) => {
	const pasteArrOnFooter = (arr: Array<string>) => {
		return arr.map((el) => (
			<p>
				<a href="#" target="_blank">
					{el}
				</a>
			</p>
		));
	};

	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div className={""}>
				<h4>О КОМАНИИ</h4>
				{pasteArrOnFooter(aboutArr)}
			</div>

			<div>
				<h4>МЕНЮ</h4>
				{pasteArrOnFooter(menuArr)}
			</div>

			<div>{pasteArrOnFooter(thirdColumnFooter)}</div>

			<div className={styles.contacts}>
				<h4>КОНТАКТЫ</h4>
				<div>+7 555 555-55-55</div>
				<div className={styles.mesengers}>
					<Telegram />
					<Whatsapp />
					<Viber />
				</div>
				<span>Москва, Путевой проезд 3с1, к 902</span>
				<div className={styles.confidential}>
					<span>©WELBEX {format(new Date(), "yyyy")}. Все права защищены. </span>
					<a href="#" target="_blank">
						Политика конфиденциальности
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
