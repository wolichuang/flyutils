describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(flyutils.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(flyutils.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= flyutils.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = flyutils.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });

        // 测试 0.1 ~ 1.2 之间只能取得 1，不能为 0
        it(`1 === flyutils.randomNum(0.1, 1.2) should return true`, function () {
            let num = flyutils.randomNum(0.1, 1.2)
            assert(num === 1)
        });
    });
})