import { classNames } from './classNames'

describe('classNames()', () => {
  it('concat all passed class names', () => {
    expect(classNames('foo', null, 'bar')).toEqual('foo bar')
  })
})
