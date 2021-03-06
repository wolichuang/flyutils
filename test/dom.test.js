describe('Dom API:', function () {
    describe('#getScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20;
        before(function () {
            $body.style.height = '10000px'
            flyutils.setScrollTop(length)
        })
        it(`flyutils.getScrollTop() should return true`, function () {
            assert(flyutils.getScrollTop() === length)
        })
        after(function () {
            flyutils.setScrollTop(0)
            $body.style.height = bodyHeight
        })
    });

    describe('#setScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20;
        before(function () {
            $body.style.height = '10000px'
            flyutils.setScrollTop(length)
        })
        it(`flyutils.getScrollTop() should return true`, function () {
            flyutils.setScrollTop(length)
            assert(flyutils.getScrollTop() === length)
        })
        after(function () {
            flyutils.setScrollTop(0)
            $body.style.height = bodyHeight
        })
    });

    describe('#offset()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            div.style.position = 'absolute'
            div.style.top = '200px'
            div.style.left = '300px'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`flyutils.offset() should return true`, function () {
            let offset = flyutils.offset($ele)
            assert(offset.left === 300 && offset.top === 200)
        })
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#scrollTo()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20,
            y = 100,
            duration = 300;
        before(function () {
            $body.style.height = '10000px'
        })
        it(`flyutils.scrollTo() should return true`, function (done) {
            flyutils.scrollTo(y, duration)
            setTimeout(function () {
                assert(flyutils.getScrollTop() === y)
                done()
            }, duration + 200)
        })
        after(function () {
            flyutils.setScrollTop(0)
            $body.style.height = bodyHeight
        })
    });


    describe('#windowResize()', function () {
        let innerHeight = window.innerHeight
        it(`flyutils.windowResize(downCb) should return true`, function (done) {
            flyutils.windowResize(function () {
                // ??????????????????
                assert(window.innerHeight == innerHeight)
                done()
            }, function () {})
            // ??????resize??????????????????????????????
            window.dispatchEvent(new Event('resize'));
        })
    });

    describe('#windowResize()', function () {
        let innerHeight = window.innerHeight
        it(`flyutils.windowResize(upCb) should return true`, function (done) {
            flyutils.windowResize(function () {}, function () {
                // ??????????????????
                assert(window.innerHeight === innerHeight - 200)
                done()
            })
            // ??????innerHeight????????????????????????
            window.innerHeight = innerHeight - 200
            // ??????resize??????
            window.dispatchEvent(new Event('resize'));
        })
        after(function(){
            window.innerHeight = innerHeight
        })
    });


});