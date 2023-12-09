import React from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import cn from "classnames";
import { Button } from "../../components";
import Logo from "./logo_welbex.svg";
import Telegram from "../telegram.svg";
import Viber from "../viber.svg";
import Whatsapp from "../whatsapp.svg";

const headerArr = ["Услуги", "Виджеты", "Интеграции", "Кейсы", "Сертификаты"];

const Header = ({ className, ...props }: HeaderProps) => {
	return (
		<div className={cn(className, styles.header)} {...props}>
			<div className={styles.logo}>
				<Logo />
				<div className={styles.logoText}>
					крупный интегратор CRM в Росcии и ещё 8 странах
				</div>
			</div>

			<div className={styles.headerMiddle}>
				{headerArr.map((el) => (
					<a href="#">{el}</a>
				))}
			</div>

			<div className={styles.feedback}>
				<div>+7 555 555-55-55</div>

				<Telegram />
				<Whatsapp />
				<Viber />
			</div>
		</div>
	);
};

export default Header;
