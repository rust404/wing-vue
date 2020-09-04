function getStyle(el, prop) {
  return getComputedStyle(el, null).getPropertyValue(prop)
}

export {
  getStyle
}
