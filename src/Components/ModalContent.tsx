import React, { useState, useEffect, useRef } from 'react'
import { Stepper, Button, Group, Box, Container } from '@mantine/core';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { BiCopy } from 'react-icons/bi'
type Props = {}

export default function ModalContent({ }: Props) {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const [verifyCode, setVerifyCode] = useState('');
    const codeRef = useRef<any>(null);
    const generateRandomCode = (length:number)=>{
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    const copyToClipboard = ()=>{
        if(codeRef.current){
            navigator.clipboard.writeText(codeRef.current.innerText);
            alert('Code Copied');
        }
    }
    useEffect(() => {
      let code = generateRandomCode(29);
      setVerifyCode(code);
    }, [])
    
    return (
        <Box className=''>
            <Container>
                <Stepper
                    
                    styles={{
                        step: { flexDirection: "column", justifyContent: "center" },
                        stepLabel: { marginLeft: "unset", color: "#E19A4C", marginTop:"10px" },
                        stepIcon: { backgroundColor: "#E19A4C", borderColor: "#E19A4C !important" },
                        separator: {
                            background: "rgba(112, 112, 112, 0.5)"
                        },
                        stepBody: { color:"#ADABAA"},
                        separatorActive: { backgroundColor: "#B1B1B1" },
                        // stepCompletedIcon: { backgroundColor: "#E0B36A" }
                    }}
                    active={active} onStepClick={setActive} breakpoint="sm">
                    <Stepper.Step label="Device" allowStepSelect={active > 0}>
                        <Container size="sm" className='my-6'>
                            <h3 className='text-primaryText'>Follow the instructions on device</h3>
                            <div className="flex flex-col my-3 w-full h-full">
                                <div onClick={nextStep} className='w-full h-[50px] flex items-center bg-black-shade-2 rounded-xl px-6 text-modalText justify-between'>
                                    <div className='flex items-center'><AiOutlineArrowRight className='mr-3 text-goldText'></AiOutlineArrowRight> Select the Wallet on Device</div>
                                    <BsCheckLg></BsCheckLg>
                                </div>
                                <div onClick={nextStep} className='w-full h-[50px] flex items-center bg-black-shade-2 rounded-xl px-6 text-modalText justify-between my-6'>
                                    <div className='flex items-center'><AiOutlineArrowRight className='mr-3 text-goldText'></AiOutlineArrowRight> Select the Coin on Device</div>
                                    <BsCheckLg></BsCheckLg>
                                </div>
                                <div onClick={nextStep} className='w-full h-[50px] flex items-center bg-black-shade-2 rounded-xl px-6 text-modalText justify-between'>
                                    <div className='flex items-center'><AiOutlineArrowRight className='mr-3 text-goldText'></AiOutlineArrowRight> Tap 1 Card of any 4 Cards</div>
                                    <BsCheckLg></BsCheckLg>
                                </div>
                            </div>
                        </Container>
                    </Stepper.Step>
                    <Stepper.Step label="Verification" allowStepSelect={active > 1}>
                        <Container size="md" className='my-6'>
                            <div className="flex flex-col w-full h-full justify-between">
                                <div className='w-full h-[100px] my-5 bg-black-shade-2 rounded-lg border border-dashed text-[25px] font-bold text-darkGoldText flex items-center justify-center' style={{ borderColor:"#363A3E"}}>
                                    {verifyCode}
                                </div>
                                <div className="w-full h-[150px] flex flex-col items-center text-primaryText mt-4">
                                    <h3 className='mb-3 mr-auto'>Verify Address on Device</h3>
                                    <div onClick={nextStep} className='w-full h-[50px] flex items-center bg-black-shade-2 rounded-xl px-6 text-modalText justify-between'>
                                        <div className='flex items-center'><AiOutlineArrowRight className='mr-3 text-goldText'></AiOutlineArrowRight> Select the Wallet on Device</div>
                                        <BsCheckLg></BsCheckLg>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Stepper.Step>
                    <Stepper.Step label="Receive" allowStepSelect={active > 2}>
                        <Container size="md" className="my-6">
                            <div className="w-full h-full flex flex-col justify-between">
                                <h3 className='text-primaryText'>Coin Verified</h3>
                                <div className='w-full h-[100px] my-5 bg-black-shade-2 rounded-lg border text-[25px] font-bold text-darkGoldText flex items-center justify-evenly' style={{ borderColor: "#363A3E" }}>
                                    <span ref={codeRef}>{verifyCode}</span>
                                    <BiCopy className='cursor-pointer' onClick={()=>copyToClipboard()}></BiCopy>
                                </div>
                                <Button className='w-[100px] m-auto' variant='outline' color="blue" onClick={()=>setActive(0)}>Re-Verify</Button>
                            </div>

                        </Container>
                    </Stepper.Step>
                    <Stepper.Completed>
                        Completed, click back button to get to previous step
                    </Stepper.Completed>
                </Stepper>
            </Container>
        </Box>
    )
}