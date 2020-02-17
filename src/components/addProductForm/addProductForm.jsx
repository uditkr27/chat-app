import React, { Component } from "react";
import "./addProductForm.css";

export class AddProductForm extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            brand: '',
            type: '',
            category: '',
            count: 0,
            price: 0,
            imageUrl: '',
            description: [{key: "KEY", value: "VALUE"}],
             
        }
    }

    handleChange = (key, event) => {

        this.setState({
            [key]: event.target.value,
        })
    }


    addDescription = () => {
        this.setState(prev =>({
            description: [...prev.description, {key: 'KEY', value: 'VALUE'}]
        }))
    }

    addDescriptionKey = (key, index) => {
        this.setState(prevState => {
            let descriptionArray = prevState.description;
            let description =  prevState.description[index];   
            description.key = key;    

            descriptionArray[index] = description;

            return { description: [...descriptionArray] };
        });
    }

    addDescriptionValue = (value, index) => {
        this.setState(prevState => {
            let descriptionArray = prevState.description;
            let description =  prevState.description[index];   
            description.value = value;    

            descriptionArray[index] = description;

            return { description: [...descriptionArray] };
        });
    }

    renderDescriptionForm = () => {

        const {description} = this.state;

        return description.map((x,index) => {
            return (
                <div key={index} className="form-element">
                        <div className="input-div">
                             <input type="text" name={`key${index}`} placeholder={description[index].key} onChange={(e) => this.addDescriptionKey(e.target.value, index)}/>
                        </div>
                        <div className="input-div">
                            <input type="text" name={`value${index}`} placeholder={description[index].value} onChange={(e) => this.addDescriptionValue(e.target.value, index)}/>
                        </div>
                </div>
            );
        });
    }

    handleDescriptionKeyChange = (index, e) => {
        this.setState(prev => {

            
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault();


    }

    render() {

        const { name, brand, type, category, count, price, imageUrl } = this.state;

        return (
            <form className="add-product-form">
                <div className="form-element">
                    <div className="label-div">
                        <label for="name">Name:</label>
                    </div>
                    <div className="input-div">
                        <input type="text" name="name" value={name} onChange={(e) =>  {this.handleChange('name',e)}}/>
                    </div>
                    <div className>

                    </div>
                </div>
                <div className="form-element">
                    <div className="label-div">
                        <label for="brand">Brand:</label>
                    </div>
                    <div className="input-div">
                        <input type="text" name="brand" value={brand} onChange={(e) =>  {this.handleChange('brand',e)}}/>
                    </div>
                </div>
                <div className="form-element">
                    <div className="label-div">
                        <label for="type">Type:</label>
                    </div>
                    <div className="input-div">
                        <input type="text" name="type" value={type} onChange={(e) =>  {this.handleChange('type',e)}}/>
                    </div>
                </div>
                <div className="form-element">
                    <div className="label-div">
                        <label for="category">Categoty:</label>
                    </div>
                    <div className="input-div">
                        <input type="text" name="category" value={category} onChange={(e) =>  {this.handleChange('category',e)}}/>
                    </div>
                </div>
                <div className="form-element">
                    <div className="label-div">
                        <label for="count">Count:</label>
                    </div>
                    <div className="input-div">
                        <input type="number" name="count" value={count} onChange={(e) =>  {this.handleChange('count',e)}}/>
                    </div>
                </div>
                <div className="form-element">
                    <div className="label-div">
                        <label for="price">Price:</label>
                    </div>
                    <div className="input-div">
                        <input type="number" name="price" value={price} onChange={(e) =>  {this.handleChange('price',e)}}/>
                    </div>
                </div>
                <div className="form-element">
                    <div className="label-div">
                        <label for="imageUrl">Image URL:</label>
                    </div>
                    <div className="input-div">
                        <input type="text" name="imageUrl" value={imageUrl} onChange={(e) =>  {this.handleChange('imageUrl',e)}}/>
                    </div>
                </div>
                <div className="description-element">
                    <h4 >Add Product Details</h4>
                    <div className="body">
                        {
                            this.renderDescriptionForm()
                        }
                    </div>
                    <div className="add-more-btn" onClick={this.addDescription}>Add More</div>
                </div>
            </form>
        );
    }
}

export default AddProductForm;
