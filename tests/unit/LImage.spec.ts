import { shallowMount } from '@vue/test-utils'
import { imageDefaultProps } from '@/defaultProps'
import LImage from '@/components/LImage'

describe('LImage component', () => {
  it('default LImage render', () => {
    const src = 'test.url'
    const props = {
      ...imageDefaultProps,
      src: src,
    }
    const wrapper = shallowMount(LImage, {
      props,
    })
    expect(wrapper.find('img').exists()).toBeTruthy()
    // console.log(wrapper.get('img').attributes())
  })
})
