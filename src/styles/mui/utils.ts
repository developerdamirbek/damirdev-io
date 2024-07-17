'use client'

export const getCssVariable = (variableName: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()
