import React from 'react'
import PurchaseOrderModule from '../../../components/modules/purchase/purchase-order/PurchaseOrderModule'
import { Route } from 'react-router-dom'

const PurchasingModuleRoute = (
    <>
        <Route path='/PurchaseOrder' element={
            <PurchaseOrderModule />
        } />
        <Route path='/PurchaseRequest' element={
            <PurchaseOrderModule />
        } />
        <Route path='/PurchaseQuotation' element={
            <PurchaseOrderModule />
        } />
    </>
)

export default PurchasingModuleRoute