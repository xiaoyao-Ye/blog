# Git

## 配置 git 邮箱与账号

如果是第一次使用 git，需要配置提交者信息，推荐和 github 的账号邮箱一致

```bash
# git config  user.name 你的目标用户名
# git config  user.email 你的目标邮箱名

# 使用--global参数，配置全局的用户名和邮箱，只需要配置一次即可。推荐配置github的用户名和邮箱
git config  --global user.name autumnFish
git config  --global user.email 517729329@qq.com

# 查看配置信息
git config --list
```

### git init

- 作用：初始化 git 仓库，想要使用 git 对某个项目进行管理，需要`git init`进行初始化

```bash
# 初始化仓库， 在当前目录下生成一个隐藏文件夹.git，不能修改.git下的任何东西
git init
```

## git 基本命令

### git status

- 作用：查看文件的状态

- 命令：`git status`
  - 红色表示工作区中的文件需要提交
  - 绿色表示暂存区中的文件需要提交

### git add

> 注意点：空的文件夹是会被忽略掉的，如果想要提交这个文件夹，一般会在该目录下创建一个.gitkeep 文件

- 作用：将文件由 `工作区` 添加到 `暂存区`，在 git 中，文件无法直接从工作区直接添加到仓库区，必须先从工作区添加到暂存区，再从暂存区添加到仓库区。
- 命令：`git add 文件名/目录名`

```bash
# 将index.html添加到暂存区
git add index.html

# 将css目录下所有的文件添加到暂存区
git add css

# 将当前目录下所有的js文件添加到暂存区
git add *.js

# 添加当前目录下所有的文件
git add .
git add -A
git add --all
```

### git commit

作用：将文件由 暂存区 添加到 仓库区，生成版本号

```bash
# 将文件从暂存区提交到仓库
git commit -m "提交说明"

# 如果不写提交说明，会进入vi编辑器，没有写提交说明，是提交不成功的。
git commit   # 需要使用vi输入内容

# 如果是一个已经暂存过的文件，可以快速提交，如果是未追踪的文件，那么命令将不生效。
git commit -a -m '提交说明'

# 修改最近的一次提交说明， 如果提交说明不小心输错了，可以使用这个命令
git commit --amend -m "New commit message"
```

### git log

- 作用：查看提交日志
- `git log` 查看提交的日志

## git 对比

### git diff

`git diff`可以查看每次提交的内容的不同

```bash
# 查看工作区与暂存区的不同
git diff

# 查看暂存区与仓库区的不同
git diff --cached

# 查看工作区与仓库区的不同，HEAD表示最新的那次提交
git diff HEAD

# 查看两个版本之间的不同
git diff c265262 de4845b
```

## git 重置

### git reset

作用：版本回退，将代码恢复到已经提交的某一个版本中。

```bash
# git 回滚到指定 commit 提交(reset 会撤销更改, 并删除提交)
git reset --hard <commit-id>
# 要撤销上一次 Git 提交，您可以使用以下命令(这将会移动 HEAD 指针指向上一个提交，同时保留之前的更改。)：
git reset --soft HEAD^
# 如果您想撤销提交并删除更改，请使用以下命令(这将永久删除所有更改，因此请谨慎使用此命令):
git reset --hard HEAD^

# 将版本回退到上一次提交
# ~1:上一次提交
# ~2:上上次提交
# ~0:当前提交
git reset --hard head~1
```

- 当使用了`git reset`命令后，版本会回退，使用`git log`只能看到当前版本之前的信息。使用`git reflog`可以查看所有的版本信息

## git 忽视文件

> 在仓库中，有些文件是不想被 git 管理的，比如数据的配置密码、写代码的一些思路等。git 可以通过配置从而达到忽视掉一些文件，这样这些文件就可以不用提交了。

- 在仓库的根目录创建一个`.gitignore`的文件，文件名是固定的。
- 将不需要被 git 管理的文件路径添加到`.gitignore`中

```bash
# 忽视idea.txt文件
idea.txt

# 忽视css下的index.js文件
css/index.js

# 忽视css下的所有的js文件
css/*.js

# 忽视css下的所有文件
css/*.*
# 忽视css文件夹
css
```

## git 分支命令

### 创建分支

- `git branch <branch>`创建分支，分支中的代码，在创建时与当前分支的内容完全相同。
- git 在第一次提交时，就有了一个叫`master`的主分支。
- `git branch dev`，创建了一个叫做 dev 的分支

### 查看分支

- `git branch`可以查看所有的分支，
- 在当前分支的前面会有一个`*`
- 在 git 中，有一个特殊指针`HEAD`,永远会指向当前分支

### 创建/切换分支

- 在当前分支的任何操作，都不会影响到其他的分支，除非进行了分支合并。
- 提交代码时，会产生 commit，当前分支会指向最新的 commit。
- 切换分支会做两件事情
  - 创建一个新分支
  - 把 head 指针指向当前的分支

```bash
# 创建并切换分支
git checkout -b <branch>
# 创建并切换分支(建议使用这个, 如果当前版本 git 没有 switch 就用 checkout)
git switch -c <branch>

# 切换分支 (切换分支 HEAD 指针指向了另一个分支)
git checkout <branch>
# 切换分支(建议使用这个, 如果当前版本 git 没有 switch 就用 checkout)
git switch <branch>

# git回滚到上一个版本(只是将HEAD指针指向目标版本, 并不会删除任何提交或更改)
git checkout HEAD~1
# git回滚到指定版本(只是将HEAD指针指向目标版本, 并不会删除任何提交或更改)
git checkout <commit-id>
```

### 删除分支

- `git branch -d <branch>` 可以删除分支
- 注意：不能在当前分支删除当前分支，需要切换到其他分支才能删除。
- 注意：`master`分支是可以删除的，但是不推荐那么做。

### 合并分支

```bash
# 将其他分支的内容合并到当前分支
git merge <branch>
# 取消当前merge行为
git merge --abort

# 合并单个提交到当前分支
git cherry-pick <commit-id>
# 合并的时候如果遇到冲突, 需要手动解决冲突, 解决完毕后使用 --continue 继续
git cherry-pick --continue
# 如果要取消当前合并使用
git cherry-pick --abort
```

- 对于同一个文件，如果有多个分支需要合并时，容易出现冲突。
- 合并分支时，如果出现冲突，只能手动处理，再次提交，一般的作法，把自己的代码放到冲突代码的后面即可。
- 遇到合并冲突过多无法解决, 想要放弃合并使用 `--abort` 命令

- `git cherry-pick <target id>` 单独合并某个 commit id 到当前分支
- `git rebase -i <startpoint> <endpoint>` 合并 [范围] 区间 commit 为一次 commit 记录
- `git rebase <startpoint> <endpoint> --onto master` 复制 [范围] 部分的提交至 master

> 范围 = 开始(不包含)-结束(包含)(没有则默认至最后一次 commit)

## git 远程仓库

### github 与 git

git 与 github 没有直接的关系。

- git 是一个版本控制工具。
- github 是一个代码托管平台，开源社区，是 git 的一个远程代码仓库。

```javascript
//1. gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。
//2. github免费，代码所有人都能看到，但是只有你自己能修改。付费的可以隐藏。
//3. 创建git项目时，不能有中文。
```

### git clone

- 作用：克隆远程仓库的代码到本地
- git clone [远程仓库地址]
- `git clone git://github.com/autumnFish/test.git`会在本地新建一个`test`文件夹，在 test 中包含了一个`.git`目录，用于保存所有的版本记录，同时 test 文件中还有最新的代码，你可以直接进行后续的开发和使用。
- git 克隆默认会使用远程仓库的项目名字，也可以自己指定。需要是使用以下命令：`git clone [远程仓库地址] [本地项目名]`

### git pull

- 作用：将远程的代码下载到本地
- 通常在 push 前，需要先 pull 一次。

```bash
# 获取远程仓库的更新，并且与本地的分支进行合并
git pull
```

### git remote

每次 push 操作都需要带上远程仓库的地址，非常的麻烦，我们可以给仓库地址设置一个别名

```bash
# 添加一个新的远程地址。其中 <name> 是远程地址的别名，<url>是远程地址的URL。
git remote add <name> <url>
git remote add origin git@github.com:xiaoyao-Ye/test.git
# 重复上述步骤添加另外一个远程地址。例如:
git remote add gitlab git@gitlab.com:username/project.git
# 完成上述步骤后，我们就可以使用 git push 命令将代码推送到任意一个远程地址。
# 例如，如果要将代码推送到 GitHub 上，可以运行以下命令 :
git push origin master
# 如果要将代码推送到 GitLab 上，可以运行以下命令：
git push gitlab master

# 移除远程地址
git remote remove origin

# git clone 的仓库默认会关联远程仓库并有一个 origin 的别名
# 查看当前项目的远程地址列表。
git remote -v
# git remote 只显示别名, 一般默认别名是 origin, 要查看具体地址, 可以使用:
git remote get-url origin
# 这会输出 "origin" 远程地址的URL。如果您的本地仓库只与一个远程仓库关联，那么这个命令和 git config --get remote.origin.url 命令是等价的。
# 设置当前远程地址为新地址
git remote set-url origin git@xiaoyao-Ye.github.com:xiaoyao-Ye/mangosteen-service.git
```

### git push

- 作用：将本地仓库中代码提交到远程仓库
- `git push 仓库地址 master` 在代码提交到远程仓库，注意 master 分支必须写，不能省略
- 例子：`git push git@github.com:autumnFish/test.git master` 如果第一次使用，需要填写 github 的用户名和密码

```bash
# push 本地分支到远程并与远程分支关联, -u 是 --set-upstream 的简写, origin 是远程地址的别名
git push -u origin local-branch
# 单独设置上游分支
git branch --set-upstream <remote-branch>
# 有关联的分支可以直接 push
git add .
git commit -m"commit message"
git pull
git push
```

## SSH

### SSH 免密码登陆

git 支持多种数据传输协议：

- https 协议：`https://github.com/autumnFish/test.git` 需要输入用户名和密码
- ssh 协议：`git@github.com:autumnFish/test.git` 可以配置免密码登录

每次 push 或者 pull 代码，如果使用 https 协议，那么都需要输入用户名和密码进行身份的确认，非常麻烦。

- github 为了账户的安全，需要对每一次 push 请求都要验证用户的身份，只有合法的用户才可以 push
- 使用 ssh 协议，配置 ssh 免密码，可以做到免密码往 github 推送代码

### SSH 免密码登录配置

注意：这些命令需要在 bash 中敲

- 1 创建 SSH Key：`ssh-keygen -t rsa`
- 2 在文件路径  `C:\用户\当前用户名\`  找到  `.ssh`  文件夹
- 3 文件夹中有两个文件：
  - 私钥：`id_rsa`
  - 公钥：`id_rsa.pub`
- 4 在  `github -> settings -> SSH and GPG keys`页面中，新创建 SSH key
- 5 粘贴 公钥  `id_rsa.pub`  内容到对应文本框中
- 5 在 github 中新建仓库或者使用现在仓库，拿到`git@github.com:用户名/仓库名.git`
- 6 此后，再次 SSH 方式与 github“通信”，不用输入密码确认身份了

- 新创建的 SSH 密钥添加到 GitHub 后没有任何效果，可能有以下几个原因
- 您可能使用了错误的公钥。请确保您在 GitHub 上添加的是正确的公钥。
- 可能还没有将私钥添加到您的本地 SSH 代理中。请使用以下命令将私钥添加到代理中: `ssh-add ~/.ssh/id_rsa`
- SSH 配置可能需要更新。请确保您的 SSH 配置文件（通常位于 ~/.ssh/config）包含以下内容:

  ```txt
  Host github.com
    IdentityFile ~/.ssh/id_rsa
  ```

## git 提交规范

- `feat` 新增功能
- `fix` 修复问题/bug
- `style` 代码风格相关(不影响运行结果的)
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流跟进
- `ci` 持续集成
- `mod` 不确定分类的修改
- `wip` 开发中
- `types` 类型修改
