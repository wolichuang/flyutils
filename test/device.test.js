describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`flyutils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${flyutils.getExplore()}`)
            assert(/^Chrome:/.test(flyutils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`flyutils.getOS() should return "windows"`, function () {
            console.log(`OS:${flyutils.getOS()}`)
            assert(flyutils.getOS() === 'windows' || flyutils.getOS() === 'MacOSX' || flyutils.getOS() === 'linux')
        });
    });
});