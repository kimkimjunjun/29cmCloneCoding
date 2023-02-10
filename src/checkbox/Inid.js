import React from "react";
import Header from "../Header";

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

function Inid() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="idall" style={{}}>
            <Header/>
            <div className="jointitle" style={{}}>
                <h2 style={{fontSize:'44px', textAlign:'center'}}>간편가입</h2>
                <div className="gubunline" style={{width:'400px', borderTop: '4px solid rgb(244, 244, 244)',position:'absolute', top:'75%', left:'50%', transform:'translate(-50%,-140%)'}}>
                    <i step="1" style={{position:'absolute', top:'-1.7%', left:'0', width:'40%', height:'4px', background: 'rgb(0,0,0)', transition: 'width 0.2s ease 0s'}}></i>
                    <h3 style={{fontSize:'20px', fontWeight:'500'}}>로그인에 사용할<br/>아이디를 입력해주세요.</h3>
                    <div style={{width:'380px'}}>
                        <input type="text" placeholder="아이디 (이메일) 입력" style={idpw} autoCapitalize="none"></input>
                    </div>
                    <div className="checkbox" style={{paddingTop:'40px'}}>
                        <button className="agreejoin" disabled={!open} style={{width:'400px', height:'48px', background:'#375fff', color:'white', fontSize:'14px'}}>다음</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inid;