import React, { useState, useEffect } from 'react'
import Avatar from 'react-avatar'
import av from '../Assets/images/avatar.jpg'
import logo from '../Assets/images/dark-h2o.png'
import { BsFillClockFill, BsCalendar3, BsBellFill, BsPeople, BsPeopleFill, BsSpeedometer2, BsSpeedometer } from 'react-icons/bs'
import { IoCartOutline, IoCart } from 'react-icons/io5'
import { PiCoins, PiCoinsFill } from 'react-icons/pi'
import { BiSolidMessage } from 'react-icons/bi'
import { MDIcon, IconPark, InventoryIcon } from '../Assets/SvgIcons'
import { mdiPrinterPos, mdiPrinterPosOutline, mdiTruckDeliveryOutline, mdiTruckDelivery } from '@mdi/js';
import { format } from 'date-fns';

const Navigation = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const userName = 'Raphael Isla'
    const urlImg = av || '';

    const [item, setItem] = useState('dashboard');
    const delivery = item === 'pickup' ? 'icon-park-solid:delivery' : 'icon-park-outline:delivery'
    const dash = item === 'dashboard' ? 'bxs:dashboard': 'humbleicons:dashboard'
    const truck = item === 'logistic' ? mdiTruckDelivery : mdiTruckDeliveryOutline
    const printer = item === 'pos' ? mdiPrinterPos : mdiPrinterPosOutline

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const formattedDate = format(currentDateTime, 'MMM. dd, yyyy, E');
    const formattedTime = format(currentDateTime, 'HH:mm a');

    const handleActiveItem = (item) => {
        setItem(item)
    }

    return (
        <>
            <aside id='side' className='position-fixed top-0 left-0 bottom-0 bg-light py-2 px-1 gap-5 d-flex align-items-center flex-column'>
                <img src={logo} width={'40%'} alt='logo' />
                <ul className='list-unstyled d-flex flex-column gap-1'>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('dashboard')}>
                        <a  className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                            <IconPark path={dash} size={30} /> Dashboard
                        </a>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('customer')}>
                        <a  className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                            {item === 'customer' ? <BsPeopleFill size={30} /> : <BsPeople size={30} />} Customers
                        </a>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('pos')}>
                        <a  className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                            <MDIcon icon={printer} size={'32px'} color='#003E81' /> Point of Sales
                        </a>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('order')}>
                        <a  className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                            {item === 'order' ? <IoCart size={30} /> : <IoCartOutline size={30} />} Orders
                        </a>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('sale')}>
                        <a  className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                            {item === 'sale' ? <PiCoinsFill size={30} /> : <PiCoins size={30} />} Sales
                        </a>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('logistic')}>
                        <a  className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                            <MDIcon icon={truck} size={'32px'} color='#003E81'/> Logistics
                        </a>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('pickup')}>
                        <a  className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                            <IconPark path={delivery} size={30} /> Pick-up
                        </a>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('inventory')}>
                        <a  className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                            <InventoryIcon color={'#003E81'} filled={item === 'inventory'} size={30} /> Inventory
                        </a>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('meter')}>
                        <a  className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                            {item === 'meter' ? <BsSpeedometer size={30} /> : <BsSpeedometer2 size={30} />} Meter Reading
                        </a>
                    </li>
                </ul>
            </aside>
            <header id='header' className='position-fixed top-0 end-0 p-2 d-flex align-items-center'>
                <div className='w-50 ps-5 d-flex gap-2 align-items-center'>
                <Avatar src={urlImg || null} name={userName} round={true} color='#003E81' fgColor='#fff' size={25} textSizeRatio={2} />
                    <p className='fw-medium m-0'>Hello <span className='uName fw-bold m-0'>{userName}</span>!</p>
                </div>
                <div className='w-50 pe-5 d-flex justify-content-end align-items-center gap-3'>
                    <div className='fw-medium rounded-3 py-2 px-3 bg-light d-flex align-items-center justify-content-center gap-1'><BsFillClockFill size={16} color={'#005EC3'}/>{formattedTime}</div>
                    <div className='fw-medium rounded-3 py-2 px-3 bg-light d-flex align-items-center justify-content-center gap-1'><BsCalendar3 size={16} color={'#005EC3'}/>{formattedDate}</div>
                    <div className='d-flex gap-3'>
                        <a href='/' className='itm'>
                            <BiSolidMessage size={22}/>
                        </a>
                        <a href='/' className='itm'>
                            <BsBellFill size={22}/>
                        </a>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Navigation