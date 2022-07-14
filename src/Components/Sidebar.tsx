import { Grid, Button } from '@mantine/core'
import React from 'react'
export default function Sidebar() {
    return (
        <div id='sidebar' className='absolute left-0 w-[250px] bg-sidebar' style={{ height: "calc(100vh - 50px)" }}>
            <Grid gutter="xl" className='text-white mt-[30px] text-left justify-center'>
                <div>
                    <Grid.Col span={12}>Portfolio</Grid.Col>
                    <Grid.Col span={12}>Wallets</Grid.Col>
                    <Grid.Col span={12}>Last Transactions</Grid.Col>
                    <Grid.Col span={12}>Tutorials</Grid.Col>
                    <Grid.Col span={12}>Setting</Grid.Col>
                </div>
            </Grid>

            <Button className='absolute bottom-10 left-1/2' style={{ backgroundColor: "#785B3C", color:"#F5CEA3", transform:"translateX(-50%)"}}>
                Support
            </Button>
        </div>
    )
}
