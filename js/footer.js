

function renderFooter(){
    const footer = document.getElementById("footer");
    const render =
    `
    <div class="bg-foot">
          <div class="over-foot">
              <div class="foot-container">
                  <div class="head-footer">
                      <h4>Foodie Kitchen</h4>
                  </div>
                  <div class="content-footer">
                      <h6>Location</h6>
                      <p>44 Street NYC, Bronx, NY 10475, United States</p>
                      <a href="#contact">Directions</a>
                  </div>

                  <div class="content-footer">
                      <h6>Opening Hours</h6>
                      <p>Monday - Friday</p>
                      <p>10:00 AM - 08:00 PM</p>
                      <p>Tel: +1 100 104 40001</p>
                  </div>

                  <div class="content-footer">
                      <h6>Social</h6>
                     <div class="social"> 
                      <i class="fa-brands fa-facebook"></i>
                      <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-youtube"></i>
                     </div>
                      <div class="space"> 
                          <p> Copyright © 2022 Foodie Kitchen Co., Ltd.</p>
                          <p>Design: Thang</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
    footer.innerHTML = render;
}

renderFooter();