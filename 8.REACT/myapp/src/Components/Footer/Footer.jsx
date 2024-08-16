import React from 'react'

function Footer() {
  return (

 <footer class="bg-light text-left py-3">
   <div class="row mx-4 " >   
        <div class="col-3">
           <h5>Quick Links</h5>
           <div class="d-flex">
              <div>
               <ul class="list-unstyled me-4">
                   <li class="">Home</li>
                   <li class="">Services</li>
                  <li class="">Portfolio</li>
                  <li class="">Contact Us</li>
                </ul>
              </div>
           </div>
           </div>

           <div class="col-3">
            <h4>Contact information:</h4>
            <div>
              <ul class="list-unstyled me-4">
               <li class="">Trending Gifts</li>
               <li class="">TrendingGifts@gmail.com</li>
                <li class="">+9156489801</li>
               <li class="">India</li>
            </ul>
            </div> 
        </div>


        <div class="col-3">
            <h4>Our Team:</h4>
            <div>
              <ul class="list-unstyled me-4">
               <li class="">Support</li>
               <li class="">Terms & Conditions</li>
                <li class="">Enquries</li>
               <li class="">Transport & Shipping</li>
            </ul>
            </div> 
        </div>

           <div class="col-3">
           <h4>Connect with Us:</h4>
            <div>
             <i class="fa-solid fa-phone"></i>
             <i class="fa-brands fa-facebook-f"></i>
             <i class="fa-brands fa-instagram"></i>
             <i class="fa-brands fa-linkedin"></i>
             <i class="fa-brands fa-x-twitter"></i>
             <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
  </div>

    
  </footer>

  )
}

export default Footer