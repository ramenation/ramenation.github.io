/**
 * imports from node_modules
*/

import $ from 'jquery';
import Headroom from "headroom.js";



/******************************************************************************/



/**
 * $trigger activating js for css-hamburgers
 * https://jonsuh.com/hamburgers/
 */
$('.toggle').on('click', function() {
  $('#sidebar').toggleClass('active');
});


/**
 * $headroom.js
 * http://wicky.nillia.ms/headroom.js/
 */

 var options = {
  // vertical offset in px before element is first unpinned
  offset : 200,
  // or you can specify tolerance individually for up/down scroll
  tolerance : {
    up : 10,
    down : 0
  }
};
// pass options as the second argument to the constructor
// supplied options are merged with defaults

const header = document.querySelector("header");

const headroom = new Headroom(header, options);
headroom.init();