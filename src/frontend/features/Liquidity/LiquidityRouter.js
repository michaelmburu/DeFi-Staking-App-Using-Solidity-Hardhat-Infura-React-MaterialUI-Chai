import React from "react"
import { Routes, Route } from 'react-router-dom'
import ListLiquidity from "./ListLiquidity"
import AddLiquidity from "./AddLiquidity"
import RemoveLiquidity from "./RemoveLiquidity"
import { Grid } from "@mui/material"

const LiquidityRouter = () => {
    return <Grid container>
        <Grid item>
            <Routes>
                <Route path='/' element={<ListLiquidity />} />
                <Route path='/remove' element={<RemoveLiquidity />} />
                <Route path='/add' element={<AddLiquidity />} />
            </Routes>
        </Grid>
    </Grid>
}

export default LiquidityRouter