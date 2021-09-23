describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`flyutils.arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false`, function () {
            assert.notEqual(flyutils.arrayEqual([0, 2, 3, 4], [1, 2, 3]), true)
        });
        it(`flyutils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(flyutils.arrayEqual([0, 2, 3], [1, 2, 3]), true)
        });
        it('flyutils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(flyutils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        const arr = [8, 2, 3, 4, 7, 8]
        it(`flyutils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(flyutils.arrayEqual(arr, arr))
        });
    });
});