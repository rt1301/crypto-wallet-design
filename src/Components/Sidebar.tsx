import { Grid, Button } from '@mantine/core'
import React, { useState, Dispatch, SetStateAction } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
type Props = {
    setWalletNo: Dispatch<SetStateAction<number>>
}
export default function Sidebar({setWalletNo}:Props) {
    const [wallets, setWallets] = useState([(<Grid.Col key="wallet_1" className='text-darkGoldText cursor-pointer' onClick={() => setWalletNo(1)} offset={2} span={10}>Wallet 1</Grid.Col>)]);
    const [flag, setFlag] = useState(false);
    const addWallets = () => {
        let oldWallets = wallets;
        let idx = oldWallets.length;
        if(idx < 5){
            oldWallets.push(<Grid.Col onClick={() => setWalletNo(idx+1)} key={`wallet_${idx + 1}`} className='text-darkGoldText cursor-pointer' offset={2} span={10}>Wallet {idx + 1}</Grid.Col>);
            setWallets([...oldWallets]);
            if(wallets.length === 5){
                setFlag(true);
            }
        }
    }
    return (
        <div id='sidebar' className='absolute left-0 w-[250px] bg-sidebar' style={{ height: "calc(100vh - 50px)" }}>
            <Grid gutter="xl" className='text-white mt-[30px] text-center justify-center'>
                <div>
                    <Grid.Col span={12}>Portfolio</Grid.Col>
                    <Grid.Col span={12}>
                        <Grid>
                            <Grid.Col span={12}>Wallets</Grid.Col>
                            {wallets.map((ele,idx)=>{
                                return(
                                    ele
                                )
                            })}
                            {flag?(<></>):(
                                <Grid.Col className='flex justify-center' offset={4} span={8}>
                                    <div style={{ borderRadius: "25px" }} className='border border-dashed text-primaryText cursor-pointer opacity-60 w-[100px] h-[30px] flex items-center justify-center' onClick={() => addWallets()}><AiOutlinePlus className='mx-1'></AiOutlinePlus><span className='text-xs'>Add Wallet</span></div>
                                </Grid.Col>
                            )}
                        </Grid>
                    </Grid.Col>
                    <Grid.Col span={12}>Last Transactions</Grid.Col>
                    <Grid.Col span={12}>Tutorials</Grid.Col>
                    <Grid.Col span={12}>Setting</Grid.Col>
                </div>
            </Grid>

            <Button className='absolute bottom-10 left-1/2' style={{ backgroundColor: "#785B3C", color: "#F5CEA3", transform: "translateX(-50%)" }}>
                Support
            </Button>
        </div>
    )
}
