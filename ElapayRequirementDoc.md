Elapay Requirement Document
============================

Elapay has two kinds of payment types: pay on order and point-point transfer.
Elapay有两种类型：订购类支付和点对点转账。

## 类型一：订购类支付
### 场景介绍
商家在WEB、App应用中集成支付功能，调用ElaPay提供网页支付收银台，支付完等收到足够的确认数后完成后返回支付结果。
目前支持系统有：WEB、iOS（苹果）、Android（安卓）

### 产品流程
#### 商家流程
-	注册并配置ElaPay
-	对商品和服务用ELA标价
-	接入ElaPay提供的网页收银台webpage
-	支付结果获取
-	执行订单

#### 用户流程
1. 用户在商家App中选择商品下单、确认购买，进入支付环节，调取Elapay的SDK
2. 选择ElaPay，用户点击确认支付后调起ElaPay网页支付收银台
3. 用户登录ElaPay钱包，登录成功后，进入确认付款页面
4. 用户点击确认付款，进入支付密码页面
5. 用户输入密码，完成支付
6. 支付结果回调


#### 功能列表
功能一：商家配置Elapay

商家可在PC和APP端注册并配置ElaPay服务，每个商家可注册多个收款账户，每个账户需要配置以下信息：

- 收款账号名称

- ELA收款的钱包地址

- 价格规则有固定和动态两种： 

固定：即用ELA作为货币单位进行标价，不考虑在交易所的价格波动，直接用ELA交易
动态：用法币标价，支付时读取交易所的ELA与法币的汇率数据，计算交易的ELA币梳理

- 汇率计算规则：ELA-法币实时汇率，ELA-法币定期平均汇率

- 优惠：汇率±x%，用于商家自行配置提供给用户优惠

- URL：生成支付URL，用于商家配置支付信息



功能二：ElaPay支付API/SDK
支持合作交易平台通过SDK/API接入ELA支付
接口列表：
正向支付、交易查询、关闭、退款、退款查询、下载对账等配套API


功能三：商家在合作交易平台配置ElaPay

- 收款账户:在自己的服务（web或app）上配置Elapay收款服务账号

- 用Ela标价：用Ela在商品或服务上标价，可直接用ELa也可以用法币标价，法币的标价规则可以选择多种汇率规则及汇率优惠（具体看该账户具体的配置信息）

- 试算服务：用法币标记可以预算一下预计多少Ela，用Ela标价也可以预算一下预计多少指定法币

功能四：Elapay收银台页面
Pcweb和h5两个版本（需要设计稿）

功能五：交易结果回调

功能七：流水查询模块（PC和APP端）




## 类型二：点对点交易

### 场景介绍
用户与用户点对点发起交易类转账，可在各类社交媒体，如facebook，wechat等实现ela的点对点转账。主要分为两类：收款和付款。
收款即收款人向付款人发起收款单，付款人登录确认支付；付款即付款人向收款人直接转账。

#### 用户流程-收款
收款人填写收款单

收款人将收款单页面（pcweb或h5）分享给付款人

付款人打开收款单，点击支付

付款人登录ElaPay钱包

登录成功后，进入确认付款页面

用户点击确认付款，进入支付密码页面

用户输入密码，完成支付

支付结果回调

#### 用户流程-付款
付款人填写付款

付款人登录ElaPay钱包

登录成功后，进入确认付款页面

用户点击确认付款，进入支付密码页面

用户输入密码，完成支付

支付结果回调


#### 问题：

1. 退款怎么操作
答：elapay的本质还是点对点转账，所以正向交易流程是用户向商家转币，而退款是商家向用户转币，但不同于信用卡、第三方支付的原路返回的概念

2.	费率怎收取
答：手续费在钱包转账页面自动扣取，与普通钱包转账相同。

3.	怎样保证买家输入的地址和余额有效
答：钱包要做金额校验

4. 转账结果需要多长时间能查询和确认
答：ELA平均2分钟出一个块，具体确认时间取决于商家认可一个交易所需要的确认次数。
