const url = require('url');

const myURL = new URL('http://www.google.com:8080/hello.html?id=100&status=active');

/** --------------------------
    Serialized URL
 --------------------------**/
console.log('>>>URL ref<<<', myURL.href);
console.log('>>>URL ref<<<', myURL.toString());

/** --------------------------
    Host (root domain)
 --------------------------**/
console.log('>>>Root domain<<<', myURL.host);
console.log('>>>Host name (no port number included)<<<', myURL.hostname);

/** --------------------------
    Path name
 --------------------------**/
console.log('>>>Path name<<<', myURL.pathname);

/** --------------------------
    Serialized query (anything after '?')
 --------------------------**/
console.log('>>>Qurery<<<', myURL.search);

/** --------------------------
    Params object
 --------------------------**/
console.log('>>>Params object<<<', myURL.searchParams);
console.log('>>>Adding params dybamically<<<', myURL.searchParams.append('abc', '123'));
console.log('>>>Parans object<<<', myURL.searchParams);
console.log('>>>Looping params<<<',
    myURL
        .searchParams
        .forEach((value, name) => console.log(`${name}: ${value}`)
        )
);