import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import "../Style/Filter.scss"

function Breadcrumb() {
  return (
    <div className='container bread'>
      <div class="aem-Grid aem-Grid--12 desk">
        <div class="aem-GridColumn aem-GridColumn--default--3">
          <div><Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="text.primary" href="/">
              Clothing
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/"
            >
              Women’s
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/"
            >
              Outerwear
            </Link>
          </Breadcrumbs></div>
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--9">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--10">
              <h6>6 Results</h6>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--2">
              <select name="Sort by Latest" id="Sort by Latest">
                <option value="Sort by Latest">Sort by Latest</option>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Smart Gear">Smart Gear</option>
                <option value="rAccessories">Accessories</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="multi">
        <div className="catalog">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="text.primary" href="/">
              Clothing
            </Link>
            <Link underline="hover" color="text.primary" href="/">
              Women’s
            </Link>
            <Link underline="hover" color="text.primary" href="/">
              Outerwear
            </Link>
          </Breadcrumbs>
        </div>
        <h6>6 Results</h6>
      </div>
    </div>
  )
}

export default Breadcrumb