import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Project COMBAT",
	description: "Project combat 公開ドキュメント",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "ホーム", link: "/" },
			{ text: "プロダクト要求定義書", link: "/prd" },
			{ text: "開発者募集中", link: "/join-developing" },
		],

		sidebar: [],

		socialLinks: [
			{ icon: "github", link: "https://github.com/project-combat" },
			{ icon: "discord", link: "https://discord.gg/8FQtuNrmrb" },
		],
	},
});
