import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./home-content.css?inline";

export const HomeContent = component$(() => {
	useStyles$(styles);

	return (
		<>
			<div class="flex flex-1 h-screen">
				<section class="home-content bg-repeat flex flex-1">
					<h1>HOME</h1>
				</section>
			</div>
		</>
	);
});
