## 手写 CLI 工具

## 要跟那个好玩的原理下的 cli 的 zyd 分支同步

1. 基于 node 实现

## 步骤

1. 初始化 npm init -y

2. 实现窗口命令 ha-cli create xxx

## 步骤

- node 会把可执行的文件放到 bin 目录下 然后创建可执行的脚本（zyd）
- （配置 package.json bin 选项）
- npm link 链接到本地 （测试的时候可以这么做等到发布到 npm 的时候就不用了）(默认以 name 为基准 也可以配别名表)

> link 相当于将当前本地模块链接到 npm 目录下

## ora 模块可以实现加载效果

## inquirer 命令交互模块

## download-git-repo 安装 git 下面的资源

## 剩余问题 packag.json 写配置文件 模板引擎


## 后面发布到npm 并且可以实现多项目选择(移动端和pc端)

执行 npm login 登陆 npm 账号，如果没有账号的先注册一个
执行 npm publish 进行发布

发布完之后，我们来验证一下。

执行 npm unlink 解绑一下全局命令
执行 npm install ha-cli -g 全局安装脚手架
执行 ha-cli create xxx