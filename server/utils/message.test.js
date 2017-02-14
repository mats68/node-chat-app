const expect = require('expect')

const {generateMessage} = require('./message')

describe('generate Message', () => {
  it('should generate a correct message object', () => {
      const from = 'Tilt'
      const text = 'New text'
      const genMess = generateMessage(from,text)
      expect(genMess.text).toBe(text)
      expect(genMess.from).toBe(from)
      expect(genMess.createdAt).toBeA('number')
      expect(genMess).toInclude({from,text})
      
    
  })
})