import React from 'react'
import { IconPark } from '../Assets/SvgIcons'

const OverviewComponent = ({content}) => {
    return (
        <div className='rounded-3 py-3 px-4 overview bg-light'>
            <h5 className='header-txt fw-bold m-0'>{content.header}</h5>
            <div className='d-flex justify-content-between align-items-center'>
                <span className='data-txt'>{content.data}</span>
                <IconPark path={content.icon} size={40} />
            </div>
        </div>
    )
}

export default OverviewComponent