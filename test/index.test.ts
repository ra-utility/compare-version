import * as test from 'tape'
import compareVersion from '../index'

test('compareVersion', t => {
    t.equal(compareVersion('1.11.0', '1.9.9'), 1)
    t.equal(compareVersion('1.11.0', '1.9'), 1)
    t.equal(compareVersion('1.11.0', '1.9.0'), 1)
    t.equal(compareVersion('1.11.0', '1.10.99'), 1)
    t.equal(compareVersion('1.11.0', '0.9.9'), 1)

    t.equal(compareVersion('1.9.9', '1.11.0'), -1)
    t.equal(compareVersion('1.9', '1.11.0'), -1)
    t.equal(compareVersion('1.9.0', '1.11.0'), -1)
    t.equal(compareVersion('1.10.99', '1.11.0'), -1)
    t.equal(compareVersion('0.9.9', '1.11.0'), -1)

    t.equal(compareVersion('1.11.0', '1.11.0'), 0)
    t.equal(compareVersion('1.11.0', '1.11'), 0)
    t.equal(compareVersion('2', '2.0'), 0)
    t.equal(compareVersion('2', '2.0.0'), 0)

    t.end()
})