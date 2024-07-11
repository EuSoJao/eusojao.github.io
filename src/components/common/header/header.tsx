import { component$, useStyles$ } from "@builder.io/qwik";
import { HeaderLogo } from "./header-logo";
import styles from "./header.css?inline";

export const Header = component$(() => {
	useStyles$(styles);

	return (
		<header>
			<div id="header-inner">
				<div id="header-logos" class="flex gap-1 justify-end">
					<HeaderLogo
						logo="img/logo/github-logo.png"
						url="https://github.com/EuSoJao"
						width={40}
						height={40}
					/>
					<HeaderLogo
						logo="img/logo/reddit-logo.png"
						url="https://reddit.com/EuSoJao"
						width={40}
						height={40}
					/>
				</div>
			</div>
		</header>
	);
});
