import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./home/HomePage";
import GpuListFragment from "./home/gpu/GpuListFragment";
import CpuListFragment from "./home/cpu/CpuListFragment";
import GpuInfoFragment from "./home/gpu/info/GpuInfoPage";
import CpuInfoFragment from "./home/cpu/info/CpuInfoPage";
import React from "react";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<HomePage />}>
            <Route path="/gpu" element={<GpuListFragment />} />
            <Route path="/cpu" element={<CpuListFragment />} />
            <Route path="/gpu/:id" element={<GpuInfoFragment />} />
            <Route path="/cpu/:id" element={<CpuInfoFragment />} />
        </Route>
    )
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}