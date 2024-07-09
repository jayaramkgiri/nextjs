
module.exports = {
    dateFormatter: function (str) {
        let dateStr = null;
        if (str && str.length > 2) {
            dateStr = new Date(str);
        }
        return dateStr;
    },

    highestBuyPrices: function (data) {
        let highestBPrice = null;

        // Find the highest buy price
        for (let i = 1; i <= 5; i++) {
            const bPrice = module.exports.formattedStringToNumber(data[`BPrice${i}`]);
            if (bPrice != null) {
                if (highestBPrice === null || bPrice > highestBPrice) {
                    highestBPrice = bPrice;
                }
            }
        }

        return highestBPrice;
    },

    lowestSellPrice: function (data) {
        let lowestSPrice = null;

        // Find the lowest sell price
        for (let i = 1; i <= 5; i++) {
            const sPrice = module.exports.formattedStringToNumber(data[`SPrice${i}`]);

            if (sPrice != null) {
                if (lowestSPrice === null || sPrice < lowestSPrice) {
                    lowestSPrice = sPrice;
                }
            }
        }

        return lowestSPrice;
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
            faceValue = module.exports.fetchSeriesInfo(market.data, trade.series).securityInfo
                .faceValue;
        }
        return faceValue;
    }
}
