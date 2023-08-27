import { Routes, Route } from 'react-router-dom';

import { ControlPage } from '../pages/Control Page';

export const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<ControlPage />} />
        </Routes>
    )
}