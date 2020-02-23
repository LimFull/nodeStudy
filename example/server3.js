const http = require('http');

const parseCookie = (cookie = '') => {
    return cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
}

http.createServer((req, res) => {
    const cookies = parseCookie(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200, {'Set-Cookie': 'mycookie=test'});
    res.writeHead(200, {'Set-Cookie': 'kj=DD'});
    res.writeHead(200, {'Set-Cookie': 'kyeongjin=DDong'});
    res.end('Hello Cookie');
}).listen(8082, () => {
    console.log("8082번 포트에서 서버 대기 중입니다!");
});