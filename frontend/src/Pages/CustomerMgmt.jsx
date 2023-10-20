import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { OverviewComponent, Table } from 'Components'

const CustomerMgmt = () => {
    const sampleData = [
        {
            header: 'Total Customers',
            icon: 'bi:people-fill'
        },
        {
            header: 'Daily Credited Customers',
            icon: 'solar:checklist-bold'
        }
    ]
    const content = [500, 50]

    const headers = ['ID', 'Customer Name', 'Contact', 'Address', 'Total Credit', 'Account Creation', 'Agua Coins']
    const sampleContents = useMemo(() => [
        {
            id: '2223335674890673',
            name: 'Raphael Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 0,
            createdAt: 'Oct 6, 2023',
            coins: 825
        },
        {
            id: '1113335674890673',
            name: 'Joshua Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 5070,
            createdAt: 'Sept 6, 2023',
            coins: 275
        },
        {
            id: '1223335674890673',
            name: 'Micheal Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 5060,
            createdAt: 'Aug 6, 2023',
            coins: 265
        },
        {
            id: '3423335674890673',
            name: 'Epifanio Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 5005,
            createdAt: 'Jan 6, 2023',
            coins: 525
        },
        {
            id: '3423321674890673',
            name: 'Mae Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 1500,
            createdAt: 'Mar 6, 2023',
            coins: 245
        },
        {
            id: '3423335612390673',
            name: 'Gerardo Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 2500,
            createdAt: 'May 6, 2023',
            coins: 225
        },
        {
            id: '3423335600090673',
            name: 'Maria Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 1500,
            createdAt: 'Jul 6, 2023',
            coins: 245
        },
        {
            id: '3423339994890673',
            name: 'Jeselle  Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 500,
            createdAt: 'Feb 6, 2023',
            coins: 235
        },
        {
            id: '3423338884890673',
            name: 'Juan Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 5100,
            createdAt: 'Apr 6, 2023',
            coins: 225
        },
        {
            id: '3423335622290673',
            name: 'Alan Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 5200,
            createdAt: 'Jan 6, 2023',
            coins: 215
        },
        {
            id: '3423335333890673',
            name: 'Raphael Isla 3',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 0,
            createdAt: 'june 6, 2023',
            coins: 25
        },
        {
            id: '3423335777890673',
            name: 'Raphael Isla 4',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 500,
            createdAt: 'june 6, 2023',
            coins: 25
        },
        {
            id: '3423335444890673',
            name: 'Raphael Isla 5',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 500,
            createdAt: 'june 6, 2023',
            coins: 25
        },
        {
            id: '3423335554890673',
            name: 'Raphael Isla',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 500,
            createdAt: 'june 6, 2023',
            coins: 25
        },
        {
            id: '3423335656490673',
            name: 'Raphael Isla 6',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 0,
            createdAt: 'june 6, 2023',
            coins: 25
        },
        {
            id: '3423323174890673',
            name: 'Raphael Isla 7',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 0,
            createdAt: 'june 6, 2023',
            coins: 25
        },
        {
            id: '3423789674890673',
            name: 'Raphael Isla 8',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 0,
            createdAt: 'june 6, 2023',
            coins: 25
        },
        {
            id: '3423335673420673',
            name: 'Raphael Isla 9',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 0,
            createdAt: 'june 6, 2023',
            coins: 25
        },
        {
            id: '3423335674567673',
            name: 'Raphael Isla 10',
            phone: '09269603768',
            address: '558 M De Jesus St.',
            credit: 0,
            createdAt: 'june 6, 2023',
            coins: 25
        },
    ], []);

    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('Latest'); // Default sort order
    const [filteredContents, setFilteredContents] = useState(sampleContents);
    const [selectedTab, setSelectedTab] = useState('All');

    const sortSampleContents = (contents, order) => {
        const sortedContents = [...contents];
        if (order === 'Agua Coins') {
            sortedContents.sort((a, b) => b.coins - a.coins);
        } else if (order === 'Total Credits') {
            sortedContents.sort((a, b) => b.credit - a.credit);
        } else if (order === 'Latest') {
            sortedContents.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (order === 'Oldest') {
            sortedContents.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
        return sortedContents;
    };

    const updateFilteredContents = useCallback(() => {
        let filtered = sampleContents;

        if (selectedTab === 'Credited') {
            filtered = filtered.filter((content) => content.credit > 0);
        }

        filtered = filtered.filter((content) =>
            content.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        filtered = sortSampleContents(filtered, sortOrder);

        setFilteredContents(filtered);
    }, [sampleContents, searchQuery, sortOrder, selectedTab]);

    useEffect(() => {
        // Update finalContents whenever the sortOrder changes
        updateFilteredContents();
    }, [sortOrder, searchQuery, updateFilteredContents]);
    
    return (
        <main id='customer' className='container-fluid'>
            <div className='px-3 pt-3'>
                <h2 className='border-bottom py-2 border-dark-subtle page-header'>Customer List</h2>
            </div>
            <section className='container-fluid px-3 py-3 d-flex' style={{gap: '20px'}}>
            {sampleData.map((data, indx) => (
                <OverviewComponent heading={data} content={content[indx]} key={indx} width={'250px'} />
            ))}
            </section>
            <section className='container-fluid px-3 pb-3'>
                <header className='d-flex justify-content-between align-items-end'>
                    <ul className='nav gap-2'>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('All')}>All</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Credited')}>Credited Customers</button>
                        </li>
                        <li className='nav-item px-3'>
                            <button className='button-itm py-2 px-3 rounded-3'>+ New Customer</button>
                        </li>
                    </ul>
                    <div className='d-flex gap-2 align-items-end'>
                        <div className="dropdown">
                            <button className="button-itm py-2 px-3 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort By: {sortOrder}</button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => setSortOrder('Agua Coins')} >Agua Coins</button></li>
                                <li><button className="dropdown-item" onClick={() => setSortOrder('Total Credits')} >Total Credits</button></li>
                                <li><button className="dropdown-item" onClick={() => setSortOrder('Latest')} >Latest</button></li>
                                <li><button className="dropdown-item" onClick={() => setSortOrder('Oldest')} >Oldest</button></li>
                            </ul>
                        </div>

                        <div className='d-flex flex-column'>
                            <label htmlFor='search' >Search by name...</label>
                            <input type='text' id='search' className='p-2 bg-light rounded-3' placeholder='Search by name...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                        </div>
                    </div>
                </header>
                <div className='w-100 py-2' >
                    <Table headers={headers} data={filteredContents} />
                </div>
            </section>
        </main>
    )
}

export default CustomerMgmt