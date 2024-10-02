import { describe, expect, test } from "vitest";

import { mount } from "@vue/test-utils";
import AppBtn from "./AppBtn.vue";

describe("AppBtn", () => {
  test("renders the correct style for default", () => {
    const wrapper = mount(AppBtn)
    const classes = 'rounded-md px-2.5 py-2 text-white bg-slate-800 hover:bg-slate-900 active:bg-slate-950'
    
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(classes.split(' '))
    );
  });
  test("renders the correct style for default-disabled", () => {
    const wrapper = mount(AppBtn, { props: { disabled: true } })
    const classes = 'rounded-md px-2.5 py-2 disabled:bg-slate-50 disabled:text-slate-200 cursor-not-allowed'
    
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(classes.split(' '))
    );
  });
  test("renders the correct style for outline", () => {
    const wrapper = mount(AppBtn, { props: { outline: true } })
    const classes = 'rounded-md px-2.5 py-2 bg-white border hover:bg-slate-50 active:bg-slate-100 border-slate-300'
    
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(classes.split(' '))
    );
  });
  test("renders the correct style for outline-disabled", () => {
    const wrapper = mount(AppBtn, { props: { outline: true, disabled: true } })
    const classes = 'rounded-md px-2.5 py-2 border-slate-300 border disabled:text-slate-300 cursor-not-allowed'
    
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(classes.split(' '))
    );
  });
  test("renders the correct style for flat", () => {
    const wrapper = mount(AppBtn, { props: { flat: true } })
    const classes = 'rounded-md px-2.5 py-2 text-gray-300'
    
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(classes.split(' '))
    );
  });
  test("renders the correct style for flat-disabled", () => {
    const wrapper = mount(AppBtn, { props: { flat: true, disabled: true } })
    const classes = 'rounded-md px-2.5 py-2 disabled:text-gray-100 cursor-not-allowed'
    
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(classes.split(' '))
    );
  });
  test("renders the correct style for dense", () => {
    const wrapper = mount(AppBtn, { props: { dense: true } })
    const classes = 'rounded-md px-1 py-1'
    
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(classes.split(' '))
    );
  });
  test("renders the correct style for dense-disabled", () => {
    const wrapper = mount(AppBtn, { props: { dense: true, disabled: true } })
    const classes = 'rounded-md disabled:px-1 disabled:py-1 cursor-not-allowed'
    
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(classes.split(' '))
    );
  });
});