import React from 'react'

const POSItem = ({data, customerName, onItemSelected, isSelected }) => {
    const handleItemClick = () => {
        if (customerName && !isSelected) {
            onItemSelected(data); // Pass the selected item data to the parent component
        }
    };

    return (
        <div className={`rounded-3 pos-itm p-3 d-flex flex-column align-items-center justify-content-center ${ customerName ? (isSelected ? 'select' : 'selectable') : 'not-selectable' }`} onClick={handleItemClick}>
            <img src={data.imge} alt={data.imge} />
            <span className='itm-value '>{data.item}</span>
            <span className='fw-bold itm-value'>P {data.unit_price}.00</span>
        </div>
    )
}

export default POSItem