describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            flyutils.setCookie('test', 'getTestValue')
        })
        it(`flyutils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(flyutils.getCookie('test') === 'getTestValue')
        })
        it(`flyutils.getCookie('empty', '') should return true`, function () {
            assert(flyutils.getCookie('empty') === '')
        })
        after(function () {
            flyutils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            flyutils.setCookie('test', 'removeTestValue')
        })
        it(`flyutils.removeCookie('test') should return false`, function () {
            flyutils.removeCookie('test')
            assert.notEqual(flyutils.getCookie('test') === 'removeTestValue', true)
        })
    })

    describe('#setCookie()', function () {
        it(`flyutils.getCookie('test', 'setCookie') should return true`, function () {
            flyutils.setCookie('test', 'setCookie')
            assert(flyutils.getCookie('test') === 'setCookie')
        })
        after(function () {
            flyutils.removeCookie('test')
        })
    })
})