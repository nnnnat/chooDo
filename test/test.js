import deepFreeze from 'deep-freeze'
import { expect } from 'chai'
import { addItem } from '../src/scripts/handlers'

describe('Handler Test', () => {
  describe('Add item to array', () => {
    it('should add item to array without mutation', () => {
      const before = []
      const after = [0]
      deepFreeze(before)
      expect(addItem(before, 0)).to.eql(after)
    })
  })
})
