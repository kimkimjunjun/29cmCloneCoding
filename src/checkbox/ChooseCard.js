import React, {useState} from "react";
import Header from "../Header";
import Checkbox from "./Checkbox";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import './checkbox.css';


function ChooseCard() {
    const [service, setService] = React.useState(false);
    const [service1, setService1] = React.useState(false);
    const [service2, setService2] = React.useState(false);
    const [service3, setService3] = React.useState(false);
    const [marketing, setMarketing] = React.useState(false);
    return (
        <div>
            <div className="joinall" style={{}}>
            <Header/>
            <div className="jointitle" style={{}}>
                <h2 style={{fontSize:'44px', textAlign:'center'}}>간편가입</h2>
                <div className="gubunline" style={{width:'400px', borderTop: '4px solid rgb(244, 244, 244)',position:'absolute', top:'95%', left:'50%', transform:'translate(-50%,-140%)'}}>
                    <i step="1" style={{position:'absolute', top:'-1.2%', left:'0', width:'20%', height:'4px', background: 'rgb(0,0,0)', transition: 'width 0.2s ease 0s'}}></i>
                    <h3 style={{fontSize:'20px', fontWeight:'500'}}>29CM 서비스 이용약관에<br/>동의해주세요.</h3>
                    <article style={{fontSize:'14px'}}>
                        <div style={{borderBottom:'2px solid rgb(244, 244, 244)', paddingTop:'20px', paddingBottom:'20px'}}>
                        <Checkbox checked={service} onChange={setService}>
                            모두 동의 (선택 정보 포함)
                        </Checkbox>
                        </div>
                        <div style={{paddingTop:'10px', paddingBottom:'5px'}}>
                        <Checkbox checked={service1} onChange={setService1}>
                            [필수] 만 14세 이상
                        </Checkbox>
                        </div>
                        <div style={{paddingTop:'5px', paddingBottom:'5px'}}>
                        <Checkbox checked={service2} onChange={setService2}>
                            [필수] 이용약관 동의
                        </Checkbox>
                        </div>
                        <div style={{paddingTop:'5px', paddingBottom:'5px'}}>
                        <Checkbox checked={service3} onChange={setService3}>
                            [필수] 개인정보 수집 및 이용 동의
                        </Checkbox>
                        </div>
                        <div style={{paddingTop:'5px', paddingBottom:'40px'}}>
                        <Checkbox checked={marketing} onChange={setMarketing}>
                            [선택] 광고성 정보 수신 및 마케팅 활용 동의
                        </Checkbox>
                        </div>
                        <footer>
                            <Link to="/join/1">
                            <button disabled={!service1 || !service2 || !service3}>동의하고 가입하기</button>
                            </Link>
                        </footer>
                        </article>
                    </div>
                    </div>
                    </div>
                    </div>
    )
}

export default ChooseCard;