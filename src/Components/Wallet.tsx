import React, {useState} from 'react'
import { Button, Container, Grid, ScrollArea, Menu, Modal } from '@mantine/core'
import { FiFilter } from 'react-icons/fi'
import { BsArrowDownShort, BsArrowDownUp } from 'react-icons/bs'
import CryptoCard from './CryptoCard'
import data from './data.json'
import ModalContent from './ModalContent'
type Props = {}

export default function Wallet({ }: Props) {
    const [cryptoData, setCryptoData] = useState(data);
    const [modalOpen,setModalOpen] = useState(Array.from(data,x=>false));
    const [modalId, setModalId] = useState(-1);
    const handleCloseModal = ()=>{
        let oldModal = modalOpen;
        oldModal[modalId] = false;
        setModalOpen([...oldModal]);
    }
    return (
        <div id="wallet_page">
            <Container size="xl">
                <div className='flex text-lightGold w-full justify-between'>
                    <h3 className='font-bold text-lg' style={{ color: "#C78D4E" }}>Wallet 1</h3>
                    <Button className='text-lightGold' style={{ backgroundColor: "#191E26" }}>&#43; Add Coin</Button>
                </div>
                <Grid className='my-4 text-primaryText drop-shadow-md border border-gray-600 rounded-sm p-2'>
                    <Grid.Col span={8}>
                        <h3 className='text-left'>Total Coin - 3</h3>
                    </Grid.Col>
                    <Grid.Col className='flex items-center' span={2}>
                        <FiFilter style={{ color:"#C78D4E"}} className='mx-2'></FiFilter> Year
                        <Menu
                            styles={{
                                item: { color: "#ADABAA" },
                                itemHovered: { background: '#fff', color: "#F5CEA3" },
                                body: { backgroundColor: "#191E26" },
                            }}
                            trigger='hover' delay={200}
                            control={<span style={{ color: "#C78D4E" }}><BsArrowDownShort className='text-[25px] mx-2'></BsArrowDownShort></span>} position="bottom">
                            <Menu.Label >Application</Menu.Label>
                            <Menu.Item >Settings</Menu.Item>
                            <Menu.Item >Messages</Menu.Item>
                            <Menu.Item >Gallery</Menu.Item>
                        </Menu>
                    </Grid.Col>
                    <Grid.Col className='flex items-center' span={2}>
                        <BsArrowDownUp style={{ color: "#C78D4E" }} className='mx-2'></BsArrowDownUp> A-Z
                        <Menu styles={{
                            item: { color: "#ADABAA" },
                            itemHovered: { background: '#fff', color: "#F5CEA3" },
                            body: { backgroundColor: "#191E26" },
                        }} control={<span style={{ color: "#C78D4E" }}><BsArrowDownShort className='text-[25px] mx-2'></BsArrowDownShort></span>} trigger='hover' delay={200} position="bottom">
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item>Settings</Menu.Item>
                            <Menu.Item>Messages</Menu.Item>
                            <Menu.Item>Gallery</Menu.Item>
                        </Menu>
                    </Grid.Col>
                </Grid>
                <ScrollArea style={{ height: 480 }}>
                    {cryptoData.map((ele,id)=>{
                        return(
                            <CryptoCard key={id} price={ele.price} coinName={ele.coinName} sym={ele.sym} quantity={ele.quantity} open={modalOpen} setModalOpen={setModalOpen} id={id} setModalId={setModalId}></CryptoCard>
                        )
                    })}
                </ScrollArea>
            </Container>
            <Modal
                opened={modalOpen[modalId]}
                onClose={() => handleCloseModal()}
                title="Receive"
                styles={{
                    modal: { width: "700px", height: "500px", backgroundColor:"#131619"},
                    title: { color: 'white', textAlign:"center", fontSize:"25px",margin:"auto" }
                }}
            >
                <ModalContent></ModalContent>
            </Modal>
        </div>
    )
}