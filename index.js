'use strict';

const NeweggStore = require('./stores/newegg.js');
const AmazonStore = require('./stores/amazon.js');
const Product = require('./product.js');

const Newegg = new NeweggStore();
const Amazon = new AmazonStore();

Amazon.addProduct(new Product({ id: 'B08R876RTH' })); // EVGA RTX 3060 Ti XC
Amazon.addProduct(new Product({ id: 'B08P2H5LW2' })); // EVGA RTX 3060 Ti FTW
Amazon.addProduct(new Product({ id: 'B08L8L9TCZ' })); // EVGA RTX 3070 FTW3
Amazon.addProduct(new Product({ id: 'B08L8L71SM' })); // EVGA RTX 3070 XC3
Amazon.addProduct(new Product({ id: 'B08HR55YB5' })); // EVGA RTX 3080 XC3 Ultra
Amazon.addProduct(new Product({ id: 'B08HR3Y5GQ' })); // EVGA RTX 3080 FTW3 Ultra
Amazon.addProduct(new Product({ id: 'B08HR3DPGW' })); // EVGA RTX 3080 FTW3 Gaming
Amazon.addProduct(new Product({ id: 'B08HR4RJ3Q' })); // EVGA RTX 3080 XC3 Gaming
Amazon.addProduct(new Product({ id: 'B08HR6FMF3' })); // EVGA RTX 3080 XC3 Black Gaming
Amazon.addProduct(new Product({ id: 'B08J5F3G18' })); // EVGA RTX 3090 FTW3 Ultra Gaming
Amazon.addProduct(new Product({ id: 'B08J61SS5R' })); // EVGA RTX 3090 XC3 Ultra Gaming
Amazon.addProduct(new Product({ id: 'B08J5NMDP7' })); // EVGA RTX 3090 FTW3 Gaming
Amazon.addProduct(new Product({ id: 'B08X4V8N5Q' })); // Gigabyte RTX 3060 Gaming OC
Amazon.addProduct(new Product({ id: 'B08X4W98LV' })); // Gigabyte RTX 3060 Eagle OC
Amazon.addProduct(new Product({ id: 'B08X4VJ6SB' })); // Gigabyte RTX 3060 Vision OC
Amazon.addProduct(new Product({ id: 'B08VHB6YXK' })); // Gigabyte RTX 3060 Ti Vision OC
Amazon.addProduct(new Product({ id: 'B08NYPLXPJ' })); // Gigabyte RTX 3060 Ti Gaming OC Pro
Amazon.addProduct(new Product({ id: 'B08NYP7KG6' })); // Gigabyte RTX 3060 Ti Gaming OC 8GB
Amazon.addProduct(new Product({ id: 'B08WB6R2K4' })); // Gigabyte RTX 3060 Ti Gaming OC 12GB
Amazon.addProduct(new Product({ id: 'B08WBB3ZMJ' })); // Gigabyte RTX 3060 Ti Eagle OC
Amazon.addProduct(new Product({ id: 'B08KHL21CV' })); // Gigabyte RTX 3070 Gaming OC
Amazon.addProduct(new Product({ id: 'B08LNY8P5L' })); // Gigabyte AORUS RTX 3070 Master 8GB
Amazon.addProduct(new Product({ id: 'B08HLZXHZY' })); // Gigabyte RTX 3080 Gaming OC
Amazon.addProduct(new Product({ id: 'B08KH7R4FQ' })); // Gigabyte AORUS RTX 3090 Master
Amazon.addProduct(new Product({ id: 'B08HLYQ9XL' })); // Gigabyte RTX 3090 Gaming OC