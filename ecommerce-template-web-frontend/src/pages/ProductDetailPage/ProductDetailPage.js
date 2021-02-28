import React, { Component } from 'react';

import './ProductDetailPage.css';
import DetailsThumb from './DetailsThumb';
import CategoryNavbar from "../../components/Navbar/CategoryNavbar";
import Navbars from "../../components/Navbar/Navbar";

export class ProductDetailPage extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    "_id": "1",
                    "title": "GG Shoes",
                    "src": [
                        "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                        "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                        "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                        "https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
                    ],
                    "description": "Vel et dicta petentium, facete complectitur conclusionemque nec cu. Audiam tamquam denique at cum, illud corpora mei an, cum ad platonem dissentiunt accommodare. An has dico intellegam, quo id dolorem repudiare, omnes adipiscing appellantur an duo. Vel ex dicant quodsi. Te vocent rationibus pri, novum dicunt necessitatibus has at.",
                    "content": "Lorem ipsum dolor sit amet, mei cu alii maluisset, viris impetus comprehensam sea ex. An has temporibus philosophia, nam id augue graece consetetur, paulo choro persecuti vis eu. Pri deleniti ponderum tacimates at, ea diceret laboramus gloriatur ius. Eam an delectus forensibus. Sed prompta adolescens te, ne euismod albucius adversarium sea.",
                    "price": 2300,
                    "count": 1
                }
            ],
            index: 0,
        }
    }
    myRef = React.createRef();

    handleTab = index => {
        this.setState({ index: index })
        const images = this.myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount() {
        // const { index } = this.state;
        this.myRef.current.children[this.state.index].className = "active";
    }

    render() {
        const { products, index } = this.state;
        return (
            <>
                <Navbars />
                <CategoryNavbar />
                <div className="detail__container">
                    {
                        products.map(product => (
                            <div className="details" key={product._id}>
                                <div className="big__img">
                                    <img src={product.src[index]} alt="" />
                                </div>
                                <div className="box">
                                    <div className="row">
                                        <h2>{product.title}</h2>
                                        <span>Rs.{product.price}</span>
                                    </div>
                                    <p>{product.description}</p>
                                    <p>{product.content}</p>
                                    {/* <div className="thumb" ref={myRef}>
                                    {
                                        product.src.map((img, index) => (
                                            <img src={img} alt="" key={index}
                                                onClick={() => tab(index)}
                                            />
                                        ))
                                    }
                                </div> */}
                                    {/* <div className="thumb">
                                    {
                                        product.src.map(img => (
                                            <img src={img} alt="" />
                                        ))
                                    }
                                </div> */}
                                    <DetailsThumb images={product.src} tab={this.handleTab} myRef={this.myRef} />
                                    <button className="cart">Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </>
        )
    }

}

export default ProductDetailPage;
