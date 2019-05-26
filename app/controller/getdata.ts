import { Controller } from 'egg';
const req = require('request-promise');
const iconv = require('iconv-lite');


export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const { query } = ctx;

    let result = [];
    let videoInfo = [];
    let success = 0;
    let opt = {
		url: `https://www.dytt8.net`,  //扒电影天堂的电影
		timeout: 15000,
		encoding : null //让body 直接是buffer
	}
	let res = await req(opt).then(res => res, err => {
		console.log('error9999999:', err.toString())
		return err.toString();
	});
	res = res.toString('utf8')
	let isMatch = res.match(/\/html\/gndy\/([\/\w\d]*)\.html/g);
	if (isMatch) {
		result = isMatch.filter(item => item.indexOf('index') == -1);
		console.log(opt.url + '解析中。。。')
		console.log(9999, result)
		let url = opt.url + result[102];
		// await getDetail(url).then(res => {
		// 		let one = iconv.decode(res, 'gb2312').toString();
		// 		let data = getData(one, url);
		// 		videoInfo.push(data);
		// 	}, err => console.log('error0000000000', err.toString()));
		await Promise.all(result.map(item => {
			let url = opt.url + item;
			// console.log(`解析${url}中。。。`);
			return getDetail(url).then(res => {
				let one = iconv.decode(res, 'gb2312').toString();
				let data = getData(one, url);
				data && videoInfo.push(data);
			}, err => {console.log(url + '解析失败！'); console.log('error0000000000', err.toString()); return err.toString()})
		}))
	}
	function getData (detailHtml, url:string) {
		let oneMatch = detailHtml.match(/id="Zoom"[\s\S]*<p>([\s\S]*)<p>&nbsp;<\/p>/);
		if (oneMatch) {
			let info:string[] = oneMatch[1].split('<br />');
			let imgs:string[] = info.filter(item => item.indexOf('img') > -1);
			imgs = imgs.map(item => {
				let isMatch = item.match(/src=['"]([\s\S]*)['"]\salt/);
				return isMatch ? isMatch[1] : '';
			})
			let titleMatch = detailHtml.match(/<title>[\s\S]*《([\s\S]*)》[\s\S]*<\/title>/)
			let title:string = titleMatch ? titleMatch[1] : '';
			console.log(title)
			if (!title) {
			    return false;
			}
			let ftpMatch = detailHtml.match(/(ftp:\/\/[\s\S]+)">ftp:\/\//);
			let ftp = ftpMatch ? ftpMatch[1] : '';
			let introduction = info.slice(4, -7);

			
			let year, fullTitle, fullName, where, sort, language, long, textMode, director, date, rate;
			introduction.forEach(item => {
				let test = item.replace(/[\s\r\n\t]/g, '_');
				if (test.indexOf('年__代') > -1) {
					// let arr = test.split(/_/).reverse();
					year = getName(test, '_', 1);
				}
				if (test.indexOf('译__名') > -1) {
					fullTitle = getName(test, '_', 1);
				}
				if (test.indexOf('片__名') > -1) {
					fullName = getName(test, '_', 1);
				}
				if (test.indexOf('产__地') > -1) {
					where = getName(test, '_', 1);
				}
				if (test.indexOf('类__别') > -1) {
					sort = getName(test, '_', 1);
				}
				if (test.indexOf('语__言') > -1) {
					language = getName(test, '_', 1);
				}
				if (test.indexOf('片__长') > -1) {
					long = getName(test, '_', 1);
				}
				if (test.indexOf('字__幕') > -1) {
					textMode = getName(test, '_', 1);
				}
				if (test.indexOf('导__演') > -1) {
					director = getName(test, '_', 1);
				}
				if (test.indexOf('上映日期') > -1) {
					date = getName(test, '_', 0);
				}
				if (test.indexOf('豆瓣评分') > -1) {
					rate = getName(test, '_', 0);
				}
			})
			let data = {
				title,
				ftpUrl: ftp,
				source: opt.url,
				pageUrl: url,
				poster: imgs[0],
				imgs: imgs.filter((item, index) => index != 0),
				introduction,
				year, fullTitle, fullName, where, sort, language, long, textMode, director, date, rate
			}
			console.log(url + '解析成功!');
      		success ++;
			return data;
		} else {
			console.log(url + '解析失败!')
		}
		return false;
	}
	function getName (str, split, test) {
		let arr = str.split(split);
		arr = test ? arr.slice(3, -1) : arr.slice(1, -1);
		return arr.join(' ');
	}
	function getDetail (option) {
		let url;
		let options = {};
		if (typeof option === "string") {
			url = option;
		}
		if (typeof option === "object") {
			options = option;
		}
		let opt = {
			timeout: 10000,
			encoding : null, //让body 直接是buffer
			url,
			...options
		}
		return req(opt);
	}
	console.log(`${success}--->${result.length}, 成功率：${success / result.length * 100}%`)
	// console.log(videoInfo)
	await ctx.model.Movie.insertMany(videoInfo);
    let data = await ctx.model.Movie.find();
    // console.log(data)
    ctx.body = {
    	data,
    	videoInfo
    };
  }
}