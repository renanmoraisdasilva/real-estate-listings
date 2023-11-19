/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Footer from "../Footer.vue"

describe("Footer", () => {
  it("renders correctly", () => {
    const wrapper = mount(Footer)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find("footer").exists()).toBe(true)
  })
})
