import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Hi from './Hi.vue'

describe('40-snapshot', () => {
  it('snapshot', () => {
    expect({ name: 'Ghosteye', age: 24 }).toMatchSnapshot()
  })

  it('component', () => {
    const wrapper = mount(Hi)
    expect(wrapper.html()).toMatchSnapshot()
  })

  // 可以将快照生成为对应格式的文件, 方便高亮查看
  it('file', () => {
    const wrapper = mount(Hi)
    expect(wrapper.html()).toMatchFileSnapshot('./__snapshots__/Hi.html')
  })

  // inline snapshot 会把结果生成在当前行
  it('inline snapshot', () => {
    expect({ name: 'Ghosteye', age: 24 }).toMatchInlineSnapshot(`
      {
        "age": 24,
        "name": "Ghosteye",
      }
    `)
  })
})
