import { defineConfig } from 'vitepress'
import { vitepressPluginLegend } from 'vitepress-plugin-legend'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tech_pages/',
  title: "Technology documents",
  description: "Technology documents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: 'Linux',
        collapsed: true,
        items: [
          { text: 'boot', link: '/linux/boot/boot' },
          { text: 'interrupt', link: '/linux/interrupt/interrupt' }
        ]
      },
      {
        text: 'ARM',
        collapsed: true,
        items: [
          { text: 'el', link: '/arm/exception_level/el' },
          { text: 'mmu', link: '/arm/mmu/mmu' }
        ]
      },
      {
        text: 'PCIE',
        collapsed: true,
        items: [
          { text: 'pcie5.0', link: '/pcie/pcie5.0/pcie5_0' },
          { text: 'phy', link: '/pcie/phy/phy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config(md) {
      vitepressPluginLegend(md, {
        markmap: { showToolbar: true }, // 启用脑图工具栏（可选）
        mermaid: true // 启用Mermaid图表
      })
    }
  }
})
