# Mega-Sena History

> [Brazilian lottery](http://www.loterias.caixa.gov.br/wps/portal/loterias/landing/megasena) scraper

<img align="right" src="img.png">

Some people may want to create some algorithm to create lottery numbers, based
on historical results, so, this module just outputs a `json` file containing
the previous lottery numbers.

## How to use

First, clone the repo and install the dependencies:

```bash
npm install
```

Then, generate the `json` output by typing:

```bash
npm start
```

This will output `out.json` file, that can be used in any way you want.

## Little server

If you want, we have created a simple server, to serve this `json` output.
To get the server up and running, just type:

```bash
npm run serve
```

Or, you can do everything in just one command:

```bash
npm install && npm run serve
```

---
If you win on lottery using this, remember to buy me some beer!
