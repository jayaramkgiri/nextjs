module.exports = {
  dateFormatter: function (str) {
    let dateStr = null;
    if (str && str.length > 2) {
      dateStr = new Date(str);
    }
    return dateStr;
  },

  bseOpenClose: function (bse_scrape) {
    return {
      open: module.exports.formattedStringToNumber(bse_scrape.openPrice),
      close: module.exports.formattedStringToNumber(bse_scrape.ltpClose),
    };
  },

  nseOpenClose: function (nse_scrape) {
    return {
      open: module.exports.fetchSeriesInfo(
        nse_scrape.market_depth.data,
        nse_scrape['series'],
      ).allSecurities.open,
      close: module.exports.fetchSeriesInfo(
        nse_scrape.market_depth.data,
        nse_scrape['series'],
      ).allSecurities.previousClose,
    };
  },
  mergeOpenClose: function (bse, nse) {
    let open = null;
    let close = null;
    if (bse['open'] === null) {
      open = nse['open'];
    } else if (nse['open'] === null) {
      open = bse['open'];
    } else {
      open = nse['open'] > bse['open'] ? nse['open'] : bse['open'];
    }
    if (bse['close'] === null) {
      close = nse['close'];
    } else if (nse['close'] === null) {
      close = bse['close'];
    } else {
      close = nse['close'] > bse['close'] ? nse['close'] : bse['close'];
    }

    return { open: open, close: close };
  },

  bseBuyOrderSellOrder: function (bse_scrape) {
    return {
      buyOrder: module.exports.formattedStringToNumber(
        bse_scrape.market_depth.TotalBQty,
      ),
      sellOrder: module.exports.formattedStringToNumber(
        bse_scrape.market_depth.TotalSQty,
      ),
    };
  },

  nseBuyOrderSellOrder: function (nse_scrape) {
    return {
      buyOrder: module.exports.fetchSeriesInfo(
        nse_scrape.market_depth.data,
        nse_scrape['series'],
      ).marketDeptOrderBook.totalBuyQuantity,
      sellOrder: module.exports.fetchSeriesInfo(
        nse_scrape.market_depth.data,
        nse_scrape['series'],
      ).marketDeptOrderBook.totalSellQuantity,
    };
  },
  mergeBuyOrderSellOrder: function (bse, nse) {
    let buyOrder = null;
    let sellOrder = null;
    if (bse['buyOrder'] === null) {
      buyOrder = nse['buyOrder'];
    } else if (nse['buyOrder'] === null) {
      buyOrder = bse['open'];
    } else {
      buyOrder = nse['buyOrder'] + bse['buyOrder'];
    }
    if (bse['sellOrder'] === null) {
      sellOrder = nse['sellOrder'];
    } else if (nse['sellOrder'] === null) {
      sellOrder = bse['sellOrder'];
    } else {
      sellOrder = nse['sellOrder'] + bse['sellOrder'];
    }

    return { buyOrder: buyOrder, sellOrder: sellOrder };
  },

  bseBuyPriceSellPrice: function (bse_scrape) {
    let highestBPrice = null;
    let lowestSPrice = null;

    // Find the highest buy price
    for (let i = 1; i <= 5; i++) {
      const bPrice = module.exports.formattedStringToNumber(
        bse_scrape.market_depth[`BPrice${i}`],
      );
      if (bPrice != null) {
        if (highestBPrice === null || bPrice > highestBPrice) {
          highestBPrice = bPrice;
        }
      }
    }
    for (let i = 1; i <= 5; i++) {
      const sPrice = module.exports.formattedStringToNumber(
        bse_scrape.market_depth[`SPrice${i}`],
      );

      if (sPrice != null) {
        if (lowestSPrice === null || sPrice < lowestSPrice) {
          lowestSPrice = sPrice;
        }
      }
    }

    return { buyPrice: highestBPrice, sellPrice: lowestSPrice };
  },

  nseBuyPriceSellPrice: function (nse_scrape) {
    let highestBPrice = null;
    let data = module.exports.fetchSeriesInfo(
      nse_scrape.market_depth.data,
      nse_scrape['series'],
    )['marketDeptOrderBook'];
    let lowestSPrice = null;
    let ask = data.ask;

    let bid = data.bid;
    // Find the highest buy price
    for (let i = 0; i < bid.length; i++) {
      if (bid[i] != null && typeof bid[i].price === 'number') {
        if (highestBPrice === null || bid[i].price > highestBPrice) {
          highestBPrice = bid[i].price;
        }
      }
    }
    for (let i = 0; i < ask.length; i++) {
      if (ask[i] != null && typeof ask[i].price === 'number') {
        if (
          lowestSPrice === null ||
          (ask[i].price < lowestSPrice && ask[i].quantity !== 0)
        ) {
          lowestSPrice = ask[i].price;
        }
      }
    }

    return { buyPrice: highestBPrice, sellPrice: lowestSPrice };
  },

  mergeBuyPriceSellPrice: function (bse, nse) {
    let buyPrice = null;
    let sellPrice = null;
    if (bse['buyPrice'] === null) {
      buyPrice = nse['buyPrice'];
    } else if (nse['buyPrice'] === null) {
      buyPrice = bse['buyPrice'];
    } else {
      buyPrice =
        nse['buyPrice'] > bse['buyPrice'] ? nse['buyPrice'] : bse['buyPrice'];
    }
    if (bse['sellPrice'] === null) {
      sellPrice = nse['sellPrice'];
    } else if (nse['close'] === null) {
      sellPrice = bse['sellPrice'];
    } else {
      sellPrice =
        nse['sellPrice'] > bse['sellPrice']
          ? nse['sellPrice']
          : bse['sellPrice'];
    }

    return { buyPrice: buyPrice, sellPrice: sellPrice };
  },

  formattedStringToNumber: function (str) {
    if (typeof str == 'string') {
      // Remove commas from the string
      const numberStr = str.replace(/,/g, '').replace(/-/g, '');
      // Convert the resulting string to a number
      let number = null;
      if (numberStr.length > 0) {
        number = parseFloat(numberStr);
      }
      return number;
    } else {
      return str;
    }
  },

  fetchSeriesInfo: function (data, series) {
    let info = data[0];
    let index = 0;
    while (info.allSecurities.series !== series) {
      index = index + 1;
      info = data[index];
    }
    return info;
  },

  fetchFaceValue: function (trade, market) {
    let faceValue = null;
    if (trade.face_value) {
      faceValue = module.exports.formattedStringToNumber(trade.face_value);
    } else {
      faceValue = module.exports.fetchSeriesInfo(market.data, trade.series)
        .securityInfo.faceValue;
    }
    return faceValue;
  },
};
