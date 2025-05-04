import { mount } from '@vue/test-utils'
import ContactItem from '@/components/items/ContactItem.vue'
import { expect, describe, it } from 'vitest'

describe('ContactItem.vue', () => {
  it('can be mounted', () => {
    expect(ContactItem).toBeTruthy()
  })

  it("renders the contact's value", () => {
    const wrapper = mount(ContactItem, {
      props: {
        id: 'contact',
        value: 'Jacky Fu'
      }
    })

    expect(wrapper.text()).toContain('Jacky Fu')
  })

  it('matches the snapshot', () => {
    const wrapper = mount(ContactItem, {
      props: {
        id: 'contact',
        value: 'Dezhi Fu'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
