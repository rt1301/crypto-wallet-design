import React, { Dispatch, SetStateAction } from 'react'
import { Box, Container, Grid } from '@mantine/core';
import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs';
type Props = {
    coinName: string,
    sym: string,
    price: number,
    quantity: number,
    open: Array<boolean>,
    setModalOpen: Dispatch<SetStateAction<boolean[]>>,
    setModalId: Dispatch<SetStateAction<number>>,
    id:number
}

export default function CryptoCard({ coinName, sym, price, quantity, open, setModalOpen,id, setModalId }: Props) {
    const handleOpenModal = ()=>{
        let oldModal = open;
        oldModal[id] = true;
        setModalId(id);
        setModalOpen([...oldModal]);
    }
    const btcIcon = (<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18.0565" cy="18.4917" r="15" transform="rotate(-12.199 18.0565 18.4917)" fill="#403D3A" />
        <path d="M23.1683 15.3058C23.0591 13.6062 21.6134 12.9922 19.7719 12.772L19.8457 10.4212L18.4155 10.3769L18.343 12.6658C17.9671 12.6533 17.5831 12.6492 17.1999 12.6449L17.2732 10.341L15.8428 10.2959L15.7688 12.646C15.4588 12.6423 15.154 12.6391 14.8575 12.6292L14.8576 12.6218L12.8841 12.5593L12.8362 14.0873C12.8362 14.0873 13.8938 14.1004 13.8757 14.1191C14.4552 14.1377 14.6328 14.4799 14.6788 14.7725L14.595 17.4502C14.6348 17.4515 14.6865 17.4551 14.7461 17.4645L14.5947 17.4602L14.4767 21.2116C14.4452 21.3927 14.3289 21.6801 13.9235 21.6683C13.9419 21.6849 12.8839 21.6357 12.8839 21.6357L12.5458 23.335L14.4083 23.3936C14.7544 23.4051 15.0951 23.4218 15.4292 23.4343L15.3552 25.8115L16.7847 25.8559L16.8585 23.5051C17.2508 23.5247 17.6306 23.5396 18.0015 23.5515L17.9272 25.8926L19.3574 25.9369L19.4323 23.5645C21.8425 23.5022 23.5448 22.9492 23.8249 20.6968C24.0512 18.8836 23.2211 18.0444 21.8659 17.6739C22.7092 17.2778 23.2507 16.5499 23.1683 15.3058ZM21.0063 20.3262C20.9522 22.103 17.9157 21.8049 16.9458 21.7754L17.0459 18.6255C18.0161 18.6566 21.0653 18.4735 21.0063 20.3262ZM20.4808 15.8613C20.43 17.4779 17.8988 17.2087 17.0917 17.1834L17.1814 14.3277C17.9884 14.353 20.534 14.1751 20.4808 15.8613Z" fill="#DB953C" />
    </svg>)
    const ethereumIcon = (<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.8309" cy="18.4917" r="15" transform="rotate(-12.199 17.8309 18.4917)" fill="#403D3A" />
        <path d="M18.5 9.99951L18.5 16.5055L23.9989 18.9626L18.5 9.99951Z" fill="white" fillOpacity="0.602" />
        <path d="M18.4996 9.99951L13 18.9626L18.4996 16.5055L18.4996 9.99951Z" fill="white" />
        <path d="M18.5 23.1789L18.5 27.5996L24.0025 19.9868L18.5 23.1789Z" fill="white" fillOpacity="0.602" />
        <path d="M18.4996 27.5996L18.4996 23.1782L13 19.9868L18.4996 27.5996Z" fill="white" />
        <path d="M18.5 22.1553L23.9989 18.9625L18.5 16.5068L18.5 22.1553Z" fill="white" fillOpacity="0.2" />
        <path d="M13 18.9625L18.4996 22.1553L18.4996 16.5068L13 18.9625Z" fill="white" fillOpacity="0.602" />
    </svg>
    )
    const binanceIcon = (<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.8309" cy="18.4917" r="15" transform="rotate(-12.199 17.8309 18.4917)" fill="#403D3A" />
        <path d="M15.1986 17.1434L18.5 13.842L21.8031 17.1451L23.7241 15.2241L18.5 10L13.2776 15.2224L15.1986 17.1434ZM10 18.5L11.921 16.579L13.842 18.5L11.921 20.421L10 18.5ZM15.1986 19.8566L18.5 23.158L21.8031 19.8549L23.7241 21.7751L18.5 27L13.2776 21.7776L13.275 21.7751L15.1986 19.8566ZM23.158 18.5L25.079 16.579L27 18.5L25.079 20.421L23.158 18.5ZM20.4482 18.4983L20.4499 18.4983L20.4499 18.5L18.5 20.4499L16.5526 18.5034L16.5493 18.5L16.5526 18.4974L16.8935 18.1558L17.0593 17.99L18.5 16.5501L20.449 18.4992L20.4482 18.4983Z" fill="#F3BA2F" />
    </svg>
    )
    let icon;
    if (sym === 'BTC') {
        icon = btcIcon
    } else if (sym === 'ETH') {
        icon = ethereumIcon
    } else {
        icon = binanceIcon
    }
    return (
        <Box className='w-full my-3 rounded-md' style={{ backgroundColor: "#161C23" }}>
            <Container size="lg" className='flex items-center justify-between w-full h-[85px] font-bold'>
                <Grid className='w-full'>
                    <Grid.Col span={3}>
                        <div className='flex items-center text-primaryText'>
                            {icon}
                            {coinName.toUpperCase()}</div>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <div className='text-primaryText'>{sym} {quantity}</div>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <div className='text-primaryText'>USD {price}</div>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <div className='flex items-center justify-around'>
                            <div onClick={()=>handleOpenModal()} className='flex items-center cursor-pointer'>
                                <BsArrowDownLeft style={{ color: "#8484F1" }} className='mx-2'></BsArrowDownLeft>
                                <span className='text-lg font-bold' style={{ color: "#8484F1" }}>RECIEVE</span>
                            </div>
                            <div className='text-lg opacity-25 text-slate-300'>|</div>
                            <div className='flex items-center cursor-pointer'>
                                <BsArrowUpRight style={{ color: "#CAA276" }} className='mr-2'></BsArrowUpRight>
                                <span className='text-lg font-bold' style={{ color: "#CAA276" }}>SEND</span>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    )
}