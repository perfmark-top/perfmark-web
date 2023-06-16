import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./component/home/HomePage";
import GpuInfoPage from "./component/info/gpu/GpuInfoPage";
import CpuInfoPage from "./component/info/cpu/CpuInfoPage";
import GpuListFragment from "./component/home/gpu/GpuListFragment";
import CpuListFragment from "./component/home/cpu/CpuListFragment";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/info/gpu" element={<GpuInfoPage />} />
            <Route path="/info/cpu" element={<CpuInfoPage />} />
            <Route path="/home" element={<HomePage />}>
                <Route path="/home/gpu" element={<GpuListFragment />} />
                <Route path="/home/cpu" element={<CpuListFragment />} />
            </Route>
        </>
    )
)


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
