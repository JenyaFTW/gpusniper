'use strict';

const request = require('request');
const Store = require('../store.js');

class NeweggStore extends Store {
  constructor() {
    super({ name: "Newegg" });
  }

  getInfo(product) {
    return new Promise((resolve, reject) => {
      let info = {};
      const requestOptions = {
        method: 'GET',
        uri: 'https://www.newegg.com/p/' + product.id
      };

      request(requestOptions, (err, res) => {
        if (err) reject(err);
        const body = res.body;
        
        let left = '<h1 class="product-title">';
        let leftIdx = body.indexOf(left);
        let rightIdx = body.indexOf('</h1>');
        info.name = body.substring(leftIdx + left.length, rightIdx);
  
        left = '<span class="price-current-label"></span>$<strong>';
        leftIdx = body.indexOf(left);
        rightIdx = body.indexOf('</sup></li>');
        info.price = parseFloat(body.substring(leftIdx + left.length, rightIdx).replace(',', '').replace('</strong><sup>', ''));
  
        info.inStock = false;
        if (body.includes('Add to cart')) {
          info.inStock = true;
        }
        
        resolve(info);
      });
    });
  }
}

module.exports = NeweggStore;