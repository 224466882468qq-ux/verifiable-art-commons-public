# 共证艺术网络 / Verifiable Art Commons

寻找早期验证者、研究合作者、独立镜像节点和代码贡献者。

共证艺术网络是一个数字艺术共同体候选原型。它尝试用公开规则、内容哈希、
签名记录和独立节点，让作品来源、发行数量、归属和流转历史可以被第三方复核。

> 当前为 v1 候选原型，正式经济功能尚未开放。它不是法币、投资产品、交易所、
> 拍卖平台或现实艺术品鉴定机构，也不承诺价格、收益、回购或现金兑换。

## 当前状态

- 艺术币候选链高度：`0`
- 艺术币发行量：`0`
- 艺术品候选链高度：`0`
- 艺术品数量：`0`
- 公开挖矿：关闭
- 公开铸造、赠送、转账、提名和投票写入：关闭
- 当前生效规则：`rule-000047`
- 外部独立节点：尚无
- 外部 PostgreSQL 副本：尚无
- 正式资产接管：未发生

完整状态见 [STATUS.md](STATUS.md)。

## 项目要解决什么

很多数字艺术平台依赖平台单方面说明作品是谁做的、发行多少份、谁拥有、
有没有被修改、赠送历史是否完整、规则有没有临时变化。

本项目希望把这些事实尽量变成可复核的数据，并允许不同运营者运行网页镜像和
链节点，减少对单一网站的依赖。

核心原则：

> 算力只维护账本；作品发行由公开规则和社区审核决定。

## 艺术币和艺术品

- 艺术币是唯一可互换、可计价、可赠送的货币 Token。
- 艺术品是带编号、内容哈希和归属记录的作品资产，不是第二种币。
- 艺术币链只处理币，不发行或转让作品。
- 艺术品链只记录作品，不发行艺术币。
- 镜像节点不会凭空增发艺术币。

当前经济参数和作品规则见 [RULES.md](RULES.md)。

## 正在寻找

1. 两台独立外部镜像测试机，验证网页镜像、Tor 入口和只读链数据。
2. 一台由项目控制的外部 PostgreSQL 候选服务器，用于受控故障接管测试。
3. 另一台物理机上的独立矿工，验证区块同步、断线恢复和重组。
4. 研究女巫身份、公共随机数、P2P、数据库恢复、版权、隐私和经济机制的伙伴。
5. 安全审查、翻译、作品来源核验、七天异议处理和英文校对贡献者。

镜像节点是自愿公共基础设施，不按在线时长凭空发币，也不承诺固定收益。

## 如何参与

- 一般研究、文档和分析建议：提交 GitHub Issue。
- 技术方案和接口改进：提交 Issue，讨论后再发 Pull Request。
- 镜像或服务器合作：使用“合作与镜像节点”Issue 表单。
- 安全问题：使用 GitHub 私密安全报告，不要公开漏洞细节。

请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)、
[GOVERNANCE.md](GOVERNANCE.md) 和 [SECURITY.md](SECURITY.md)。

## 首批开放问题

- 如何在不采集生物身份的前提下降低批量账号影响？
- 如何让艺术资产在网站失效后仍可独立核验？
- 如何设计跨物理机的 PostgreSQL 单写者故障接管？
- 如何为二十四时序建立可公开复核的全球来源与版权目录？
- 如何让图片和 3D 内容长期保存并可验证？
- 如何避免节点贡献、作品发行和手续费治理变成投资承诺？

更多问题见 [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md)。

## English

Verifiable Art Commons is an early-stage digital-art governance prototype.
The public economy is closed, both candidate chains are at height zero, and no
assets have been issued. We are looking for independent reviewers, mirror-node
operators, protocol researchers and code contributors.

See [STATUS.md](STATUS.md) for the verified project boundary.

## License

This repository's original code and documentation are released under the MIT
License unless a file states otherwise. Project names, logos, artworks and
artwork previews are not included in this first publication.
