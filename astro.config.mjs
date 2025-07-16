// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
	integrations: [
	icon(),
		starlight({
			title: '超级工大',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/cc2562/superhut' },
			{ icon: 'github', label: 'GitHub', href: 'https://github.com/cc2562/superhut' },
			],
			sidebar: [
				{
					label: '文档',
					autogenerate: { directory: 'upgrade' },
				},
				{
					label: '常用链接',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'GitHub仓库', link: 'https://github.com/cc2562/superhut' },
						{ label: '软件下载', link: 'https://down.ccrice.com/#s/superhut/' },
						{ label: 'QQ交流群', link: 'https://qm.qq.com/q/stCS8sY3jW' },
					],
				},
				
			],
		}),
	],
});
