import { shallowMount } from '@vue/test-utils'
import { textDefaultProps } from '@/defaultProps'
import LText from '@/components/LText'

describe('LText component', () => {
  const { location } = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        href: '',
      },
    })
  })

  afterEach(() => {
    window.location = location
  })

  it('default LText render', () => {
    const msg = 'test'
    const props = {
      ...textDefaultProps,
      text: msg,
    }
    const wrapper = shallowMount(LText, {
      props,
    })
    // should have the right text
    expect(wrapper.text()).toBe(msg)
    // should be default div tag
    expect(wrapper.element.tagName).toBe('DIV')
    // should have certain css attr
    const style = wrapper.attributes().style
    expect(style.includes('font-size')).toBeTruthy()
    // should not have prop has been filtered
    expect(style.includes('actionType')).toBeFalsy()
  })

  it('LText with actionType and url should trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'https://www.baidu.com/',
      tag: 'a',
    }
    const wrapper = shallowMount(LText, {
      props,
    })
    await wrapper.trigger('click')
    expect(window.location.href).toBe('https://www.baidu.com/')
    expect(wrapper.element.tagName).toBe('A')
  })

  it('LText with isEditing should not trigger location change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'https://www.baidu.com/',
      tag: 'a',
      isEditing: true,
    }
    const wrapper = shallowMount(LText, {
      props,
    })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe('https://www.baidu.com/')
  })
})
