import styles from "./index.module.css";
import { withLayout } from "../layout/Layout";
import { Button } from "../components";

function Home() {
	return (
		<div className={styles.body}>
			<div className={styles.topic}>
				Зарабатывайте больше
				<div className={styles.welbex}>с WELBEX</div>
			</div>

			<div></div>

			<div className={styles.consultation}>
				<div>
					Вместе с <span>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:
				</div>
				<div className={styles.adventages}>
					<div>
						<h4>Виджеты </h4>
						<div>30 готовых решений</div>
					</div>

					<div>
						<h4>Dashboard </h4>
						<div>с показателями вашего бизнеса</div>
					</div>

					<div>
						<h4>Skype Аудит </h4>
						<div>отдела продаж и CRM системы</div>
					</div>

					<div>
						<h4>35 дней </h4>
						<div>использования CRM</div>
					</div>
				</div>
				<Button appearance="blue">Получить консультацию</Button>
			</div>
		</div>
	);
}

export default withLayout(Home);
