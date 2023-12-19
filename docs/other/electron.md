## FAQ

1. 安装 electron 经常会失败, 如果发现卡在 postinstall 阶段, 直接去 node_modules 下找到 electron 的 package.json 将 postinstall 命令删除, 然后安装其他的包, 安装完成后再手动安装 electron 即可:

   1. 手动去 electron 安装对应系统的压缩包, 解压后放置在一个指定的文件夹, 然后将该文件夹设置为环境变量, 打开 cmd 输入 electron -v 查看是否安装成功.

      然后启动项目会发现还是启动不了, 这个时候需要将 node 的环境变量更改一下

      ```bash
      # process.env.ELECTRON_OVERRIDE_DIST_PATH = 手动安装的 electron 的路径
      # process.env.ELECTRON_OVERRIDE_DIST_PATH = 'C:\\Users\\Administrator\\Downloads\\electron-v26.1.0-win32-x64'
      # 这里我选择在vite.config.ts的plugins的electron的onstart中设置
      process.env.ELECTRON_OVERRIDE_DIST_PATH = "C:\\Users\\Administrator\\Downloads\\electron-v26.1.0-win32-x64";
      ```

   2. 发现 postinstall 就是下载对应版本的 zip 文件解压放到 ./dist 中, 然后创建 `path.txt` `echo "electron.exe" ./path.txt`, 我们可以手动这样做

2. 打包缓慢, 需要手动将打包时它提示的文件下载, 放到 xx 目录
