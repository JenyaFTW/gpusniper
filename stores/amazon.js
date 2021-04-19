'use strict';

const request = require('request');
const Store = require('../store.js');

class BestBuyStore extends Store {
  constructor() {
    super({ name: "Amazon" });
  }
  
  getInfo(product) {
    return new Promise((resolve, reject) => {
      let info = {};
      const requestOptions = {
        method: 'GET',
        uri: 'https://www.amazon.com/dp/' + product.id,
        gzip: true
      };

      request(requestOptions, (err, res) => {
        if (err) reject(err);
        const body = res.body;
        
        let left = '<span id="productTitle" class="a-size-large product-title-word-break">';
        let right = '<div id="expandTitleToggle" class="a-section a-spacing-none expand aok-hidden"></div>';
        let leftIdx = body.indexOf(left);
        let rightIdx = body.indexOf(right);
        info.name = body.substring(leftIdx + left.length + 12, rightIdx - 27).replace('\t', '');

        left = '<span id="price_inside_buybox" class="a-size-medium a-color-price">\n';
        right = '\n</span>\n<span id="price_inside_buybox_badge"';
        leftIdx = body.indexOf(left);
        rightIdx = body.indexOf(right);
        info.price = parseFloat(body.substring(leftIdx + left.length, rightIdx).replace('$', ''));

        info.inStock = false;
        if (info.price) {
          info.inStock = true;
        }

        resolve(info);
      });
    });
  }
}

module.exports = BestBuyStore;