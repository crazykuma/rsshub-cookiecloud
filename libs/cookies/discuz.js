// Discuz 论坛 Cookie
//
// RSSHub 需要为每个论坛单独设置环境变量 `DISCUZ_COOKIE_{cid}`，其中 `{cid}` 由你自定义，
// 且必须与路由地址 `/discuz/{cid}/...` 中的 `{cid}` 完全一致 —— 它无法从 Cookie 里推导出来，
// 所以这里不能像其它站点那样写死，改用下面的列表按论坛逐个声明。
//
// 用法：为每个论坛填一条 { cid, domain }；domain 填论坛域名，采集该域名下全部 Cookie 作为整串。
//   { cid: 'example', domain: 'forum.example.com' },
const forums = [
    // { cid: 'example', domain: 'forum.example.com' },
];

export default Object.fromEntries(
    forums.map(({ cid, domain }) => [
        `DISCUZ_COOKIE_${cid}`,
        [
            {
                "domain": domain
            }
        ]
    ])
);
