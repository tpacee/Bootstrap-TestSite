// Import our custom CSS
import '../scss/styles.scss'


import { Offcanvas } from 'bootstrap'
document.addEventListener('DOMContentLoaded', function () {
  const bsOffcanvas = new Offcanvas('#offcanvasNav');
});

const container = document.getElementById("enroll");
      const modal = new bootstrap.Modal(container);

      document.getElementById("btnShow").addEventListener("click", function () {
        modal.show();
      });
      document.getElementById("btnSave").addEventListener("click", function () {
        modal.hide();
      });
// 
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'