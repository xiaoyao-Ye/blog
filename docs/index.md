---
layout: home
# title: home
# sidebar: false

# editLink: true
# titleTemplate: Vite & Vue powered static site generator.
lastUpdated: false

head:
  - - meta
    - name: 笔记
      content: 笔记整理, 汇总所有知识点
  - - meta
    - name: 知识体系
      content: 梳理个人知识, 尽量形成体系, 便于查阅和记忆

hero:
  # name: Hello
  # text: 天堂有路你不走, 学海无涯苦作舟.
  # tagline: 梳理个人知识, 尽量形成体系, 便于查阅和记忆
  # text: Burn one's boats
  # tagline: Do you have any output? Do it now!
  name: Burn one's boats
  # name: anything is possible.
  # text: Do you have any output? Do it now!
  text: Anything is possible. Do it now!
  tagline: But if you don't change your direction, and if you keep looking, you may end up where you are heading.
  image:
    # src: /img/book.png
    src: /logo.svg
    alt: keyboard
  actions:
    - theme: brand
      text: Document
      link: /handbook/coding-specification
    - theme: alt
      text: View on GitHub
      link: https://github.com/xiaoyao-Ye/blog

features:
  - title: 常用速查文档
    icon: 📝
    details: 总结或整理一些东西 css html js ts vue react node docker...
  - title: blog
    # icon: 🖖
    icon: 🚀
    details: 记录一些日常踩坑或者学习过程的种种...
  - title: 工程化
    icon: 🛠️
    details: 降本提效学会合理偷懒, 把更多的时间花在学习上...
  - title: 小技巧
    icon: ⚡️
    details: 记录一些最佳实践...
---

<script setup>
// import Solar from './components/Solar.vue'
</script>

<ClientOnly>
  <!-- <Solar /> -->
</ClientOnly>
