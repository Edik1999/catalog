import React from 'react';

const Listing = ({items}) => {

    const cost = (currency, price) => {
        
        if ( currency === 'USD' ) {
            return <p className="item-price">${price}</p>

        } else if ( currency === 'EUR' ) {
            return <p className="item-price">€{price}</p>

        } else {
            return <p className="item-price">{price} {currency}</p>
        }
    }

    const quantity = (quantity) => {

        if ( quantity <= 10 ){
            return <p className='item-quantity level-low'>{quantity} left</p>

        } else if ( quantity <= 20 ){
            return <p className='item-quantity level-medium'>{quantity} left</p>

        } else if ( quantity > 20 ){
            return <p className='item-quantity level-high'>{quantity} left</p>
        }
    }

    return (
        <div className="item-list">
            {items.map(item =>
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt={item.title}/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title.length > 50 ? item.title.slice(0,50) + '...' : item.title}</p>
                        {cost(item.currency_code, item.price)}
                        {quantity(item.quantity)}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Listing;
