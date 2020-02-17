import React, { Component } from 'react';
import './addDetails.css';

import AddProductForm from '../../components/addProductForm/addProductForm';


export class AddDetails extends Component {
    render() {
        return (
            <div className="add-details-page"> 
                <div className="title">
                    <h2>Add Product</h2>
                </div>
                <div className="form-container">
                    <AddProductForm/>
                </div>
            </div>
        )
    }
}

export default AddDetails;
