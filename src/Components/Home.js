import React from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://microdeft.rifatewu.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div >
            <h1 className='text-center mt-5'>Our Products</h1>
            <div>
                
                <div className='row mx-0'>
                {
                    products.map(product => <Product
                        key = {product.id}
                        product={product}
                    >
                    </Product>)
                }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;