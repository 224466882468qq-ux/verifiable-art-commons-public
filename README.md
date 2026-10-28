# 共证艺术网络 / Verifiable Art Commons

### 为数字艺术建立可独立验证的公共档案

### Building a public record for digital art that anyone can verify

当作者、发行数量、归属和流转只能由单一平台解释时，公众很难独立核对。
这个项目正在试验公开规则、内容哈希、签名记录和独立节点，让这些事实可以由
不同的人重复验证。

When authorship, edition size, ownership and transfer history can only be
explained by one platform, the public cannot independently verify them. This
project explores public rules, content hashes, signed records and independent
nodes so that different people can reproduce the same checks.

> 当前为 v1 候选原型，正式经济功能尚未开放。它不是法币、投资产品、交易所、
> 拍卖平台或现实艺术品鉴定机构，也不承诺价格、收益、回购或现金兑换。

## 服务可用性 / Service availability

当前候选站点由维护者个人主机临时运行，关机、断网、Tor 故障或更换网络代理时
可能离线。因此本仓库不发布临时网站地址，GitHub 仓库、Issue、Pull Request
和这里公开的档案才是在线协作入口。

The current candidate site runs on the maintainer's personal machine and may be
offline during shutdowns, network outages, Tor failures or proxy changes. Its
temporary address is intentionally not published here. The GitHub repository,
Issues, Pull Requests and the public archive in this repository are the durable
collaboration entry points.

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

1. 三位规则审阅者，检查 R47 的发行取整、费用去向和跨链结算边界。
2. 一位独立复现者，在干净环境运行公开检查并提交可复现报告。
3. 一台由志愿者自行控制的只读测试镜像，用来验证离线、恢复和内容一致性。
4. PostgreSQL 故障接管、内容寻址存储、女巫身份、公共随机数和 P2P 研究。
5. 安全审查、翻译、作品来源核验、七天异议处理和英文校对贡献者。

镜像节点是自愿公共基础设施，不按在线时长凭空发币，也不承诺固定收益。
志愿者始终保留自己服务器的管理权；项目不会要求移交服务器、SSH 控制权、
密码、钱包或助记词。

可以直接从首批任务开始：

- [独立运行验证包并提交复现报告](https://github.com/224466882468qq-ux/verifiable-art-commons-public/issues/2)
- [审阅 R47 的发行、费用和跨链结算边界](https://github.com/224466882468qq-ux/verifiable-art-commons-public/issues/4)
- [设计主机关机、只读镜像与恢复测试方案](https://github.com/224466882468qq-ux/verifiable-art-commons-public/issues/3)

## 如何参与

- 一般研究、文档和分析建议：提交 GitHub Issue。
- 技术方案和接口改进：提交 Issue，讨论后再发 Pull Request。
- 镜像或服务器合作：使用“合作与镜像节点”Issue 表单。
- 安全问题：使用 GitHub 私密安全报告，不要公开漏洞细节。

请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)、
[GOVERNANCE.md](GOVERNANCE.md) 和 [SECURITY.md](SECURITY.md)。

项目方不会索要助记词、私钥、钱包文件、验证码、付款或远程控制权。安全报告
只使用 GitHub 私密漏洞报告，不要在公开 Issue 中发布未修复漏洞或真实服务器
信息。

## 首批开放问题

- 如何在不采集生物身份的前提下降低批量账号影响？
- 如何让艺术资产在网站失效后仍可独立核验？
- 如何设计跨物理机的 PostgreSQL 单写者故障接管？
- 如何为二十四时序建立可公开复核的全球来源与版权目录？
- 如何让图片和 3D 内容长期保存并可验证？
- 如何避免节点贡献、作品发行和手续费治理变成投资承诺？

更多问题见 [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md)。

## English

Verifiable Art Commons is an early-stage public-record and governance prototype
for digital art. The public economy is closed, both candidate chains are at
height zero, and no assets have been issued.

We are looking for rule reviewers, an independent reproduction tester, a
volunteer-operated read-only mirror, protocol and storage researchers, security
reviewers, translators and documentation contributors.

See [STATUS.md](STATUS.md) for the verified project boundary.
The project will never ask for seed phrases, private keys, wallet files,
verification codes, payments or remote control of a contributor's server.

## License

This repository's original code and documentation are released under the MIT
License unless a file states otherwise. Project names, logos, artworks and
artwork previews are not included in this first publication.
