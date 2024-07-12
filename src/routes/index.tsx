import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/common/header/header";
import { HomeContent } from "~/components/home/home-content/home-content";

export default component$(() => {
	return (
		<>
			<Header />
			<HomeContent />
		</>
	);
});

export const head: DocumentHead = {
	title: "EuSoJao",
	meta: [
		{
			name: "description",
			content: "EuSoJao portfolio",
		},
	],
};
