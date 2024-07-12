import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./header-logo.css?inline";

interface HeaderLogoProps {
	url?: string;
	logo?: string;
	width?: number;
	height?: number;
}

export const HeaderLogo = component$<HeaderLogoProps>((props) => {
	useStyles$(styles);

	return (
		<div class="header-logo">
			<a href={props.url}>
				<img
					class="logo"
					src={props.logo}
					alt="img"
					width={props.width}
					height={props.height}
				/>
			</a>
		</div>
	);
});
