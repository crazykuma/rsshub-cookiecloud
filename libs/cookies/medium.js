// Medium Cookie
//
// RSSHub 需要为每个账号单独设置环境变量 `MEDIUM_COOKIE_{username}`，其中 `{username}` 是 Medium 用户名
// （RSSHub 内部会转成小写），且必须与路由地址 `/medium/.../:user` 中的 `:user` 一致 —— 它不在 Cookie 里，
// 无法自动推导，所以改用下面的列表逐账号声明（同一份 medium.com Cookie 会注入到每个账号）。
//
// 用法：填入你关注的 Medium 用户名（小写）。
//   'username',
const users = [
    // 'example',
];

export default Object.fromEntries(
    users.map((username) => [
        `MEDIUM_COOKIE_${username.toLowerCase()}`,
        [
            {
                "domain": "medium.com"
            }
        ]
    ])
);
