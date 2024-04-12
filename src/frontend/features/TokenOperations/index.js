import { Button, Divider, Grid, Typography, useTheme, TextField } from '@mui/material';
import { useState, useEffect, useCallback } from 'react'
import { ethers } from 'ethers'
import TokenABI from '../../contracts/SimpleDeFiToken.json'
import TokenAddress from '../../contracts/SimpleDeFiToken-address.json'
import { useWeb3React } from "@web3-react/core";
import { localProvider } from '../../components/Wallet';

const TokenOperations = () => {
  const theme = useTheme();

  const [totalSupply, setTotalSupply] = useState(0)
  const [yourBalance, setYourBalance] = useState(0)
  const { active, account, library } = useWeb3React()

  const getTotalSupply = useCallback(async () => {
    try {
      const contract = new ethers.Contract(TokenAddress.address, TokenABI.abi, localProvider)
      const response = await contract.totalSupply()
      setTotalSupply(ethers.utils.formatEther(response))

    } catch (error) {
      console.error("Cannot get total supply", error)
    }
  }, [])

  const getYourBalance = useCallback(async () => {
    if (!active) return
    try {
      let contract = new ethers.Contract(TokenAddress.address, TokenABI.abi, library.getSigner())
      const response = await contract.balanceOf(account)
      setYourBalance(ethers.utils.formatEther(response))
    } catch (error) {
      console.error("Cannot get your balance", error)
    }
  }, [account, library, active])

  useEffect(() => {
    getTotalSupply()
    getYourBalance()
  }, [getTotalSupply, getYourBalance])

  return <>
    <Grid container spacing={2}>
      <Grid item xs={12}><Typography variant='h6'>Simple DeFi Token</Typography></Grid>
      <Grid item xs={6}>
        <Typography variant='h6'>Total Supply</Typography>
        <Typography>{totalSupply}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='h6'>Your Balance</Typography>
        <Typography>{yourBalance}</Typography>
      </Grid>
    </Grid>
    <Divider sx={theme.component.divider} />
    <Grid container spacing={2}>
      <Grid item xs={12}><Typography variant='h6'>Normal Transfer</Typography></Grid>
      <Grid item xs={12}>
        <TextField label="Please Enter Recipient's Address" value={""} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Please Enter Amount to transfer" value={""} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Button sx={theme.component.primaryButton} fullWidth>Transfer!</Button>
      </Grid>
    </Grid>
    <Divider sx={theme.component.divider} />
    <Grid container spacing={2}>
      <Grid item xs={12}><Typography variant='h6'>Transfer with Burn</Typography></Grid>
      <Grid item xs={12}>
        <TextField label="Please Enter Recipient's Address" value={""} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Please Enter Amount to transfer (10% of tokens will be burnt automatically)" value={""} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Button sx={theme.component.primaryButton} fullWidth>Transfer with Burn!</Button>
      </Grid>
    </Grid>
  </>;
};

export default TokenOperations;