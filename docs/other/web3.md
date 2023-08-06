# web3

## 区块链

> 对区块链最好的描述是将其描述为一个公共数据库

区块链可以从以下几个方面来理解:

- 一种去中心化的公共账本技术,可以记录交易,并在网络中共享。
- 由一个个的交易记录组成的区块,通过密码学原理链接在一起形成不可篡改的链式结构。
- 分布式节点共同维护账本,消除需要信任第三方机构的问题。
- 利用密码学和计算机算法保证交易的真实性和防止双重支付。
- 具有公开透明、去中心化、集体维护、权威认证等特点。
- 提供了一种建立数字价值的方式,如比特币等加密货币。
- 可以进行自动化的智能合约,实现复杂和可信的业务逻辑。
- 点对点网络,没有中间人,用户可以直接进行交易。
- 利用共识机制在无信任情况下实现数据一致性。
- 可实现编程数字资产,进行自动化的数位化交易。

综上,区块链作为一项技术,其本质是建立一个无需中央机构的可信任的交易系统,通过技术代替信任,实现价值的传递。

### 区块链类似于浏览器?

从一定程度上可以将区块链比作像浏览器那样的基础协议和运行环境。

- 浏览器提供了标准化的网页浏览和渲染环境。区块链提供了标准化的分布式账本和交易环境。
- 网页通过遵守浏览器的 HTML、CSS、JavaScript 等标准在浏览器上运行。区块链应用通过遵守区块链的协议、账户系统、交易格式在区块链上运行。
- 浏览器实现了网页的基本功能像页面浏览、表单提交等。区块链实现了账本和交易的基本功能。
- 不同的网页应用构建在浏览器之上,提供特定服务。不同的去中心化应用(DApp)构建在区块链之上,提供特定服务。
- 浏览器把网页技术标准化,使网页开发更简单。区块链把账本和交易机制标准化,使开发去中心化应用更简单。

但是两者也有一些不同:

- 浏览器是客服端软件,区块链需要全网的节点共同参与。
- 浏览器访问网站有明确的客户端-服务器区分,区块链弱化客户端和服务器的概念。
- 浏览器属于计算机软件类别,区块链更像一个互联网基础协议和基础设施。

但总的来说,这个类比抓住了两者在提供应用运行环境方面的本质相似点。

### 区块

### 挖矿

### 节点

### 私钥/公钥

### 公链

## P2P 交易

## 智能合约

## 钱包

> 钱包实际上就是帮助用户管理私钥的软件.

区块链网络中,私钥和公钥构成了用户的数字身份,相当于账号和密码。
钱包软件的主要功能包括:

- 生成私钥/公钥对。不同钱包使用不同的算法生成密钥。
- 存储用户的私钥。私钥非常重要,需要用户妥善保管。失去私钥意味着失去对账户的控制。
- 通过公钥生成区块链地址。地址是账户的标识,用于接收资产。
- 签署交易。用户利用私钥在发送资产时对交易信息进行签名。
- 提供用户界面。用户可以通过钱包软件查看余额、发送资产等。
- 与区块链交互。钱包软件连接区块链网络,发送交易、查询等。
- 加密和备份私钥。用于防止私钥丢失或被盗。
- 支持多重签名。一些钱包支持多签模式,提高安全性。
  所以钱包实际上就是一个管理私钥和公钥的工具。它让普通用户不需要复杂地处理密钥,就可以在区块链上进行交易和其他操作。

## HD 钱包

HD 钱包(Hierarchical Deterministic wallet) 是一种特定的数字钱包类型,它和普通的数字钱包有一些区别:

- 普通钱包:
  - 每个地址的私钥和公钥是独立随机生成的。
  - 地址之间没有关联,需要备份每个地址的私钥。
- HD 钱包:
  - 根据一个主私钥(seed),派生出一个树状的密钥体系。
  - 子私钥和子公钥是确定性产生,可以重复派生出相同的密钥。
  - 子地址之间有关联,只需要备份主 seed 即可恢复所有子地址私钥。
- HD 钱包的优点:
  - 方便备份,只需备份主 seed。
  - 可以根据固定派生路径恢复钱包。
  - 支持无限数量的地址生成。
- 普通钱包也可以实现确定性密钥生成。
- 但 HD 钱包通过树状层级结构更方便、安全的管理子密钥。
  总结来说,HD 钱包是数字钱包的一种更高级的实现方式,它利用确定性密钥生成和层级管理,使钱包管理更简单安全。所以它是数字钱包的一个重要发展方向。

DAPP