var http = require('http');
var fs = require('fs');
var unzip = require('unzip');
var cheerio = require('cheerio');

var fileName = 'mega-sena.zip';
var extractPath = 'mega-sena';
var htmlFile = 'D_MEGA.HTM';

var zipFileWriter = fs.createWriteStream(fileName);

function unzipFile() {
    var data = [];

    fs.createReadStream(fileName).pipe(unzip.Extract({
        path: 'mega-sena'
    })).on('close', function() {
        var html = cheerio.load(
            fs.readFileSync([extractPath, htmlFile].join('/')).toString()
        );

        html('table tr').map(function(i, tr) {
            if(i > 0) {
                var td = cheerio(tr).find('td');

                var numbers = [
                    td.eq(2).text(),
                    td.eq(3).text(),
                    td.eq(4).text(),
                    td.eq(5).text(),
                    td.eq(6).text(),
                    td.eq(7).text()
                ];

                if(numbers.join('')) {
                    data.push(numbers);
                }
            }
        });

        fs.createWriteStream('out.json').write(JSON.stringify(data));
    });
}

http.
    get({
        host: 'www1.caixa.gov.br',
        path: '/loterias/_arquivos/loterias/D_megase.zip',
        headers: {
            Cookie: 'security=true'
        }
    }).on('response', function(res) {
        res.pipe(zipFileWriter);

        res.on('end', unzipFile);
    });
