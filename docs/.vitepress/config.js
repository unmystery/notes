export default {
    // 基本路径
    base: '/notes/',
    // 主题配置
    themeConfig: {
        // logo 设置
        logo: "/logo.jpg",
        // 站点标题设置
        siteTitle: "UnMystery's Docs",
        // 导航栏配置
        nav: [
            {text: '主页', link: '/'},
            {
                text: '前端', items: [
                    {
                        text: '前端语言', items:
                            [
                                {text: 'JavaScript', link: '/javascript/'}
                            ]
                    },
                    {
                        text: '前端框架',
                        items: [
                            {text: 'Vue', link: '/vue/'},
                        ],

                    },
                ]
            },

            {
                text: '后端',
                items: [
                    {text: 'Java', link: '/java/'},
                    {text: '数据库', link: '/database/'}
                ]
            },
            {
                text: '关于',
                link: '/about'
            },
        ],

        // 侧边栏设置
        sidebar: {
            '/javascript/': [
                {
                    text: 'JavaScript基础速查',
                    collapsed: true,
                    items: [
                        {text: 'JavaScript基础语法', link: '/javascript/grammar.md'},
                        {text: 'JavaScript对象', link: '/javascript/object.md'},
                        {text: 'JavaScript对象', link: '/javascript/object.md'},
                        {text: 'JavaScript对象', link: '/javascript/object.md'},
                        {text: 'JavaScript对象', link: '/javascript/object.md'},
                        {text: 'JavaScript对象', link: '/javascript/object.md'},
                    ]
                }
            ],
            '/java/': [
                {
                    text: 'JavaScript基础速查',
                    collapsed: true,
                    items: [
                        {text: 'JavaScript基础语法', link: '/javascript/grammar.md'},
                        {text: 'JavaScript对象', link: '/javascript/object.md'},
                        {text: 'JavaScript对象', link: '/javascript/object.md'},
                        {text: 'JavaScript对象', link: '/javascript/object.md'},
                        {text: 'JavaScript对象', link: '/javascript/object.md'},
                        {text: 'JavaScript对象', link: '/javascript/object.md'},
                    ]
                }
            ],
        },

        // 社交链接设置
        socialLinks: [
            {icon: "github", link: "https://github.com/unmystery"},
        ],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-present UnMystery",
        },

        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
        }

    }
}