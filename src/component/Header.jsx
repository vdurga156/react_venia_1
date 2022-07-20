import React from 'react'
import Productlist from './Productlist';
import Filter from './Filter';
import Title from './Title';
import Breadcrumb from './Breadcrumb';

function Header({ category }) {
    return (
        <>
            <Title />
            <div>
                <Breadcrumb />
            </div>
            <div class="aem-Grid aem-Grid--12 container">
                <div class="aem-GridColumn aem-GridColumn--default--3">
                    <Filter />
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                    <Productlist category={category} />
                </div>
            </div>
        </>

    )
}

export default Header
