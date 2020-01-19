# stocks

Stocks is a node program that let you search info about stock market symbols

## Installation

use git

From command line
```bash
git clone https://github.com/garraxxi/sotcks.git
cd stocks
node server.js
```
Open a new command line instance.
There are three options you can query for: quote, logo and news
```bash
curl http://127.0.0.1:3000/stock\?option\=quote\&name\=aapl
curl http://127.0.0.1:3000/stock\?option\=logo\&name\=aapl
curl http://127.0.0.1:3000/stock\?option\=news\&name\=aapl
```
Change the symbol (aapl in the example) to see another stock
available symbols, please go to this page:
[iextrading.com](https://iextrading.com/trading/eligible-symbols/)
