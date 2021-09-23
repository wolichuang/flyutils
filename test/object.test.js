describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual flyutils.deepClone(null) should return true`, function () {
            let person = null
            assert.deepEqual(person, flyutils.deepClone(person))
        });

        it(`person deepEqual flyutils.deepClone('SlaneYang') should return true`, function () {
            let person = 'SlaneYang'
            assert.deepEqual(person, flyutils.deepClone(person))
        });

        it(`person deepEqual flyutils.deepClone(new Date()) should return true`, function () {
            let date = new Date()
            assert.deepEqual(date, flyutils.deepClone(date))
        });

        it(`person deepEqual flyutils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, flyutils.deepClone(person))
        });

        it(`person === flyutils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, flyutils.deepClone(person), true)
        });
    });

    describe('#isEmptyObject()', function () {
        it(`flyutils.isEmptyObject({}) should return true`, function () {
            assert(flyutils.deepClone({}))
        });

        it(`flyutils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(flyutils.isEmptyObject({
                one: 1
            }), true)
        });

        it(`flyutils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(flyutils.isEmptyObject([]), true)
        });
    });
})