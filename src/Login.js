import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Login.css"

const idpw = {
    border: '1px solid #d4d4d4',
    borderRadius: '2px',
    display:'block',
    width:'100%',
    height:'48px',
    color:'#1a1a1a',
    outline:'none',
    marginTop:'10px',
    paddingLeft:'15px',
    fontSize:'14px'
}

function Login() {
    return (
        <div className="alltag">
            <Header/>
            <div className="nextlg">
                <div className="loginlogin">
                    <h2 style={{fontSize:'44px', fontWeight:'400', textAlign:'center',height:'20px', paddingBottom:'20px'}}>로그인</h2>
                    <div className="lineline" style={{borderTop: '4px solid black', margin:'10px auto', width:'400px', textAlign:'center'}}>
                        <div style={{marginTop:'30px', marginBottom:'8px', width:'380px'}}>
                            <input type="text" placeholder="아이디 (이메일)" style={idpw} autoCapitalize="none"></input>
                        </div>
                        <div style={{marginTop:'8px', width:'380px'}}>
                            <input type="password" placeholder="비밀번호" style={idpw}></input>
                        </div>
                        <div>
                            <button style={{width:'400px',height:'56px', backgroundColor:'black', color:'white', fontSize:'16px', fontWeight:'900', marginTop:'20px'}}>로그인하기</button>
                        </div>
                        <div className="snslogin" style={{marginTop:'30px'}}>
                            <h3 style={{fontSize:'16px', fontWeight:'400'}}>SNS 계정으로 로그인하기</h3>
                            <div class="css-gmuwbf e1rwcevq2" style={{display:'flex', justifyContent:'center'}}><button id="naverIdLogin" class="eor3ps00 css-byyd3s e10q62zt1" type="button" style={{width:'20px', height:'40px'}}><span class="css-1hyfx7x eor3ps01"></span><div class="css-wnofq2 e1t9ajzo0"><p class="css-1gwckx0 e1t9ajzo1"><span class="css-qrhhxg e1t9ajzo2"></span></p></div></button><button class="e1sxgh8e0 css-17rofkg e10q62zt1" type="button" style={{width:'20px', height:'40px'}}><span class="css-1hyfx7x e1sxgh8e1"></span><div class="css-wnofq2 e1t9ajzo0"><p class="css-1gwckx0 e1t9ajzo1"><span class="css-qrhhxg e1t9ajzo2"></span></p></div></button><button class="e1ejkzwj0 css-3a10m9 e10q62zt1" type="button" style={{width:'20px', height:'40px'}}><span class="css-1hyfx7x e1ejkzwj1"></span><div class="css-wnofq2 e1t9ajzo0"><p class="css-1gwckx0 e1t9ajzo1"><span class="css-qrhhxg e1t9ajzo2"></span></p></div></button><button class="e10nigko0 css-mvgqia e10q62zt1" type="button" style={{width:'20px', height:'40px'}}><span class="css-1hyfx7x e10nigko1"></span><div class="css-wnofq2 e1t9ajzo0"><p class="css-1gwckx0 e1t9ajzo1"><span class="css-qrhhxg e1t9ajzo2"></span></p></div></button></div>
                        </div>
                        <div className="register" style={{marginTop:'90px'}}>
                            <p style={{fontSize:'13px'}}>회원가입하고 <a href="https://www.29cm.co.kr/event/benefit-guide/guide" style={{color:'red'}}>최대 15% 할인 쿠폰</a>을 받으세요!</p>
                            <Link to='/join'>
                                <button className="resi" style={{width:'400px', height:'56px', backgroundColor:'white', border:'1px solid #5d5d5d', borderRadius:'28px', fontWeight:'600', fontSize:'14px', color:'black'}}>간편 회원가입하기</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Login;