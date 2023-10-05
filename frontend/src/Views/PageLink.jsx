import React from 'react'
import { Navigation } from 'Components'
import { Dashboard } from 'Pages';
import { Routes, Route } from 'react-router-dom';

const PageLink = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
        </>
    )
}

export default PageLink