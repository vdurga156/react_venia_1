import React from 'react'
import "../Style/Title.scss"


function Title() {
  return (
    <div>
      <div className='main'>
        <div className='container'>
          <div className='hero-sec'>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--4">
                <div class="card_1">
                  <div class="card_1_body">
                    <h5 class="card_1_title">Women's</h5>
                    <div className='lines'>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--8">
                <div class="card-img">
                  <img src="https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-4-lkIigJwFz.jpg" class="card-img-top" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='awq hero-sec'>
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div class="card-img">
              <img src="https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-4-lkIigJwFz.jpg" class="card-img-top" alt="" />
            </div>
          </div>

          <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div class="card_1">
              <div class="card_1_body">
                <h5 class="card_1_title">Women's</h5>
                <div className='lines'>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Title