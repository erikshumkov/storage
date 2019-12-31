// Images coats
import lindebergBlack from './img/products/coat/lindeberg-black.jpg';
import peakBlack from './img/products/coat/peak-black.jpg';
import peakWhite from './img/products/coat/peak-white.jpg';
import tigerBrown from './img/products/coat/tiger-brown.jpg';
import tigerGreen from './img/products/coat/tiger-green.jpg';
import filippaNavy from './img/products/coat/coatfk.jpg';
// Boots
import blackBoots from './img/products/boots/black-boots.jpg';
import brownBoots from './img/products/boots/brown-boots.jpg';
import brownBootsTwo from './img/products/boots/brown-boots2.jpg';
import shinyBoots from './img/products/boots/shiny-boots.jpg';
// Accessories
import gloryGreen from './img/products/accessories/glory-green.jpg';
import gloryGrey from './img/products/accessories/glory-grey.jpg';
import lacosteBlue from './img/products/accessories/lacoste-blue.jpg';
import oscarCheckered from './img/products/accessories/oscar-checkered.jpg';
import peakArmy from './img/products/accessories/peak-army.jpg';
import scottRed from './img/products/accessories/scott-red.jpg';
import tigerBlack from './img/products/accessories/tiger-black.jpg';
import tretornYellow from './img/products/accessories/tretorn-yellow.jpg';

const productsData = [
  {
    id: 0,
    category: 'coats',
    brand: 'Filippa K',
    brandCheck: 'filippa',
    type: 'Hague Pea Coat',
    color: 'Navyblue',
    hexColor: '#000080',
    url: `${filippaNavy}`,
    price: 370
  },
  {
    id: 1,
    category: 'coats',
    brand: 'Peak Performance',
    brandCheck: 'peak',
    type: 'Y Parka',
    color: 'White',
    hexColor: '#FFF',
    url: `${peakWhite}`,
    price: 550
  },
  {
    id: 2,
    category: 'coats',
    brand: 'J.Lindeberg',
    brandCheck: 'lindeberg',
    type: 'Holger Melton Rock',
    color: 'Black',
    hexColor: '#000',
    url: `${lindebergBlack}`,
    price: 380
  },
  {
    id: 3,
    category: 'coats',
    brand: 'Tiger of Sweden',
    brandCheck: 'tiger',
    type: 'Ossien Jacket',
    color: 'Dark Green',
    hexColor: '#4E4D30',
    url: `${tigerGreen}`,
    price: 550
  },
  {
    id: 4,
    category: 'coats',
    brand: 'Peak Performance',
    brandCheck: 'peak',
    type: 'Rivel Vernis Jacket',
    color: 'Black',
    hexColor: '#000',
    url: `${peakBlack}`,
    price: 400
  },
  {
    id: 5,
    category: 'coats',
    brand: 'Tiger of Sweden',
    brandCheck: 'tiger',
    type: 'Jacket',
    color: 'Beige',
    hexColor: '#C2936A',
    url: `${tigerBrown}`,
    price: 849
  },
  {
    id: 6,
    category: 'boots',
    brand: 'These Glory Days',
    brandCheck: 'glory',
    type: 'Chelsea Boot',
    color: 'Black',
    hexColor: '#000',
    url: `${blackBoots}`,
    price: 129
  },
  {
    id: 7,
    category: 'boots',
    brand: 'TGA',
    brandCheck: 'tga',
    type: 'Cap Toe Boot',
    color: 'Brown',
    hexColor: '#000',
    url: `${brownBoots}`,
    price: 159
  },
  {
    id: 8,
    category: 'boots',
    brand: 'TGA',
    brandCheck: 'tga',
    type: 'Chelsea Boot',
    color: 'Brown',
    hexColor: '#000',
    url: `${brownBootsTwo}`,
    price: 159
  },
  {
    id: 9,
    category: 'boots',
    brand: 'These Glory Days',
    brandCheck: 'glory',
    type: 'Collins Boot',
    color: 'Dark Brown',
    hexColor: '#000',
    url: `${shinyBoots}`,
    price: 169
  },
  {
    id: 10,
    category: 'accessories',
    brand: 'These Glory Days',
    brandCheck: 'glory',
    type: 'Brunello Scarf',
    color: 'Green',
    hexColor: '#000',
    url: `${gloryGreen}`,
    price: 59
  },
  {
    id: 11,
    category: 'accessories',
    brand: 'These Glory Days',
    brandCheck: 'glory',
    type: 'Belluno Scarf',
    color: 'Grey',
    hexColor: '#000',
    url: `${gloryGrey}`,
    price: 59
  },
  {
    id: 12,
    category: 'accessories',
    brand: 'Lacoste',
    brandCheck: 'lacoste',
    type: 'Beanie',
    color: 'Navyblue',
    hexColor: '#000',
    url: `${lacosteBlue}`,
    price: 29
  },
  {
    id: 13,
    category: 'accessories',
    brand: 'Oscar Jacobson',
    brandCheck: 'oscar',
    type: 'Wool Scarf',
    color: 'Brown',
    hexColor: '#000',
    url: `${oscarCheckered}`,
    price: 129
  },
  {
    id: 14,
    category: 'accessories',
    brand: 'Peak Performance',
    brandCheck: 'peak',
    type: 'Beanie',
    color: 'Dark Green',
    hexColor: '#000',
    url: `${peakArmy}`,
    price: 50
  },
  {
    id: 15,
    category: 'accessories',
    brand: 'Lyle & Scott',
    brandCheck: 'lyle',
    type: 'Scarf',
    color: 'Red',
    hexColor: '#000',
    url: `${scottRed}`,
    price: 169
  },
  {
    id: 16,
    category: 'accessories',
    brand: 'Tiger of Sweden',
    brandCheck: 'tiger',
    type: 'Hollein Beanie',
    color: 'Black',
    hexColor: '#000',
    url: `${tigerBlack}`,
    price: 79
  },
  {
    id: 17,
    category: 'accessories',
    brand: 'Tretorn',
    brandCheck: 'tretorn',
    type: 'Makia Beanie',
    color: 'Yellow',
    hexColor: '#000',
    url: `${tretornYellow}`,
    price: 50
  }
];

export default productsData;
