describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`flyutils.getKeyName(13) should return "Enter"`, function () {
            assert(flyutils.getKeyName(13) === 'Enter')
        });
        const keycode = 10000
        it(`flyutils.getKeyName(${keycode}) should return ''`, function () {
            assert(flyutils.getKeyName(keycode) === '')
        });
    });

});