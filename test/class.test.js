describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`flyutils.addClass($ele, 'test') should return true`, function () {
            flyutils.addClass($ele, 'test')
            assert(flyutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            flyutils.addClass($ele, 'test')
        })
        it(`flyutils.hasClass($ele, 'test') should return true`, function () {
            assert(flyutils.hasClass($ele, 'test'))
        });
        it(`flyutils.hasClass($ele, 'test') should return false`, function () {
            assert(!flyutils.hasClass($ele, 'test2'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            flyutils.addClass($ele, 'test')
        })
        it(`flyutils.removeClass($ele, 'test') should return false`, function () {
            flyutils.removeClass($ele, 'test')
            assert.notEqual(flyutils.hasClass($ele, 'test'), true)
        });
        it(`flyutils.removeClass($ele, 'test') should return false`, function () {
            flyutils.removeClass($ele, 'test')
            assert.notEqual(flyutils.hasClass($ele, 'test'), true)
            flyutils.addClass($ele, 'newTest')
            assert(flyutils.hasClass($ele, 'newTest'))
            flyutils.removeClass($ele, 'newTest')
            assert.notEqual(flyutils.hasClass($ele, 'newTest'), true)
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});