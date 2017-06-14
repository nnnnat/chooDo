/* eslint-disable no-unused-expressions */
import deepFreeze from 'deep-freeze'
import { expect } from 'chai'
import * as h from '../src/scripts/handler'

describe('Handler Test', () => {
  describe('Add item to array', () => {
    it('should add item to array without mutation', () => {
      const arr = []
      deepFreeze(arr)
      expect(h.add(arr, 0)).to.eql([0])
    })
  })

  describe('Remove item from array', () => {
    it('should remove item from array without mutation', () => {
      const arr = [0]
      deepFreeze(arr)
      expect(h.removeItem(arr, 0)).to.eql([])
    })
  })

  describe('Update item in array', () => {
    it('should update item in array without mutation', () => {
      const item = { id: 1, title: 'after' }
      const arr = [{ id: 1, title: 'before' }]
      deepFreeze(arr)
      expect(h.updateItem(arr, item)).to.eql([item])
    })
  })

  describe('Toggle boolean', () => {
    it('should toggle a boolean true to false', () => {
      expect(h.toggle(true)).to.be.false
    })

    it('should toggle a boolean false to true', () => {
      expect(h.toggle(false)).to.be.true
    })
  })
})
