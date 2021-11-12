import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.array.isRequired
}

const defaultProps = {
    items: []
}

const Listing = ({items}) => {

    const currency = {
        USD: '$',
        EUR: '€',
        GBP: 'GBP'
    }

    const quantity = (quantity) => {

        if ( quantity <= 10 ){
            return 'low'

        } else if ( quantity <= 20 ){
            return 'medium'

        } else if ( quantity > 20 ){
            return 'high'
        }
    }

    return (
        <>
            {Object.keys(items).length !== 0 
                ?   <div className="item-list">
                        {items.map(item =>
                            <div className="item" key={item.listing_id}>
                                <div className="item-image">
                                    <a href={item.url}>
                                        <img src={item.MainImage.url_570xN} alt={item.title}/>
                                    </a>
                                </div>
                                <div className="item-details">
                                    <p className="item-title">{item.title.length > 50 ? item.title.slice(0,50) + '...' : item.title}</p>
                                    {item.currency_code === 'GBP' 
                                        ? <p className="item-price">{item.price} {currency.GBP}</p> 
                                        : <p className="item-price">{item.currency_code === 'USD' ? currency.USD : currency.EUR}{item.price}</p>}
                                    <p className={`item-quantity level-${quantity(item.quantity)}`}>{item.quantity} left</p>
                                </div>
                            </div>
                        )}
                    </div>

                :   <div>
                        <center>
                            <strong>
                                Нет данных
                            </strong>
                        </center>
                    </div>
            }
        </>
    );
}

Listing.propTypes = propTypes;
Listing.defaultProps = defaultProps;

export default Listing;
