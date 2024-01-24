# window powershell

1. 打开命令行通过 `echo $profile` 获取 `Microsoft.PowerShell_profile.ps1` 的位置(如果没有可以自己创建一个`C:\Users\Admin\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`)
2. 配置你自己的命令
3. 重启命令行输入命令看是否生效, 不生效可以使用 [Set-ExecutionPolicy](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.3) 设置权限

```shell
# To use @antfu/ni, Remove-Item the alias 'ni' of New-Item 
Remove-Item Alias:ni -Force -ErrorAction Ignore
# The 'gc' is the alias of Get-Content default
Remove-Item Alias:gc -Force -ErrorAction Ignore

# @Args represent the parameters of input 
function gc { git clone @Args }
function dg { degit @Args }
function git.proxy {
  if ($Args) {
    git config --global http.proxy http://127.0.0.1:$Args
  } else {
    git config --global http.proxy http://127.0.0.1:10809
  }
}
function git.getproxy { git config --global --get http.proxy }
function git.unproxy { git config --global --unset http.proxy }
```
