describe('Regexp API:', function () {

	describe('#isColor()', function() {
		it('flyutils.isColor("#acf") should return true ', function() {
			assert(flyutils.isColor("#acf"))
		});
		it('flyutils.isColor("#aaccff") should return true ', function() {
			assert(flyutils.isColor("#aaccff"))
		});
		it('flyutils.isColor("acf") should return false ', function() {
			assert(!flyutils.isColor("acf"))
		});
		it('flyutils.isColor("aaccff") should return false ', function() {
			assert(!flyutils.isColor("aaccff"))
		});
		it('flyutils.isColor("rgb(0,0,0,1)") should return false ', function() {
			assert(!flyutils.isColor("rgb(0,0,0,1)"))
		});
		it('flyutils.isColor("rgb(0,0,0,)") should return false ', function() {
			assert(!flyutils.isColor("rgb(0,0,0,)"))
		});
		it('flyutils.isColor("rgb(255,255,256)") should return false ', function() {
			assert(!flyutils.isColor("rgb(255,255,256)"))
		});
		it('flyutils.isColor("rgb(255,256,255)") should return false ', function() {
			assert(!flyutils.isColor("rgb(255,256,255)"))
		});
		it('flyutils.isColor("rgb(256,255,255)") should return false ', function() {
			assert(!flyutils.isColor("rgb(256,255,255)"))
		});
		it('flyutils.isColor("rgb(1,1,-1)") should return false ', function() {
			assert(!flyutils.isColor("rgb(1,1,-1)"))
		});
		it('flyutils.isColor("rgb(1,-1,1)") should return false ', function() {
			assert(!flyutils.isColor("rgb(1,-1,1)"))
		});
		it('flyutils.isColor("rgb(-1,1,1)") should return false ', function() {
			assert(!flyutils.isColor("rgb(-1,1,1)"))
		});
		it('flyutils.isColor("rgb(1,1,1.1)") should return false ', function() {
			assert(!flyutils.isColor("rgb(1,1,1.1)"))
		});
		it('flyutils.isColor("rgb(1,1.1,1)") should return false ', function() {
			assert(!flyutils.isColor("rgb(1,1.1,1)"))
		});
		it('flyutils.isColor("rgb(1.1,1,1)") should return false ', function() {
			assert(!flyutils.isColor("rgb(1.1,1,1)"))
		});
		it('flyutils.isColor("rgb(0,0,0)") should return true ', function() {
			assert(flyutils.isColor("rgb(0,0,0)"))
		});
		it('flyutils.isColor("rgb(255,255,255)") should return true ', function() {
			assert(flyutils.isColor("rgb(255,255,255)"))
		});
		it('flyutils.isColor("rgba(-1,0,0,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(-1,0,0,1)"))
		});
		it('flyutils.isColor("rgba(0,-1,0,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,-1,0,1)"))
		});
		it('flyutils.isColor("rgba(0,0,-1,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,0,-1,1)"))
		});
		it('flyutils.isColor("rgba(0,0,0,-1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,0,0,-1)"))
		});
		it('flyutils.isColor("rgba(256,0,0,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(256,0,0,1)"))
		});
		it('flyutils.isColor("rgba(0,256,0,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,256,0,1)"))
		});
		it('flyutils.isColor("rgba(0,0,256,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,0,256,1)"))
		});
		it('flyutils.isColor("rgba(-1,0,0,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(-1,0,0,1)"))
		});
		it('flyutils.isColor("rgba(0,-1,0,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,-1,0,1)"))
		});
		it('flyutils.isColor("rgba(0,0,-1,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,0,-1,1)"))
		});
		it('flyutils.isColor("rgba(1.1,0,0,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(1.1,0,0,1)"))
		});
		it('flyutils.isColor("rgba(0,1.1,0,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,1.1,0,1)"))
		});
		it('flyutils.isColor("rgba(0,0,1.1,1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,0,1.1,1)"))
		});
		it('flyutils.isColor("rgba(0,0,0,256)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,0,0,256)"))
		});
		it('flyutils.isColor("rgba(0,0,0,1.1)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,0,0,1.1)"))
		});
		it('flyutils.isColor("rgba(0,0,0,0.222)") should return false ', function() {
			assert(flyutils.isColor("rgba(0,0,0,0.222)"))
		});
		it('flyutils.isColor("rgba(0,0,0,)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,0,0,)"))
		});
		it('flyutils.isColor("rgba(0,0,0)") should return false ', function() {
			assert(!flyutils.isColor("rgba(0,0,0)"))
		});
		it('flyutils.isColor("rgba(0,0,0,0.2)") should return false ', function() {
			assert(flyutils.isColor("rgba(0,0,0,0.2)"))
		});
		it('flyutils.isColor("rgba(24,0,0,.2)") should return false ', function() {
			assert(flyutils.isColor("rgba(24,0,0,0.2)"))
		});
	});

	describe('#isEmail()', function () {
		it('flyutils.isEmail("leiquanlive.com") should return false ', function () {
			assert.notEqual(flyutils.isEmail("leiquanlive.com"), true)
		});
		it('flyutils.isEmail("leiquan@live.com") should return true ', function () {
			assert(flyutils.isEmail("leiquan@live.com"))
		});
	});

	describe('#isIdCard()', function () {
		it('flyutils.isIdCard("622224188203234033") should return true ', function () {
			assert(flyutils.isIdCard("622224188203234033"))
		});
		it('flyutils.isIdCard("zas224188203234033") should return false', function () {
			assert(!flyutils.isIdCard("leiquan@live.com"))
		});
	});

	describe('#isPhoneNum()', function () {
		it('flyutils.isPhoneNum("18882324234") should return true ', function () {
			assert(flyutils.isPhoneNum("18882324234"))
		});
		it('flyutils.isPhoneNum("8618882324234") should return true ', function () {
			assert(flyutils.isPhoneNum("8618882324234"))
		});
		it('flyutils.isPhoneNum("5534553") should return false', function () {
			assert(!flyutils.isPhoneNum("5534553"))
		});
		it('flyutils.isPhoneNum("19056323241") should return true', function () {
			assert(flyutils.isPhoneNum("19056323241"))
		});
	});

	describe('#isUrl()', function () {
		it('flyutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
			assert(flyutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
		});
		it('flyutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
			assert(flyutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
		});
		it('flyutils.isUrl("www.baidu.com") should return true', function () {
			assert(flyutils.isUrl("www.baidu.com"))
		});
		it('flyutils.isUrl("baidu.com") should return true', function () {
			assert(flyutils.isUrl("baidu.com"))
		});
		it('flyutils.isUrl("http://baiducom") should return false', function () {
			assert(!flyutils.isUrl("http://baiducom"))
		});
	});

});