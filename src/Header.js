import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { IoSearch, IoLogIn } from "react-icons/io5"
import { MdShoppingBag } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa"

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <div className={scrollPosition < 200 ? "original_header" : "change_header"}>
            <div className="logo" style={{display:'flex', paddingTop:'1.5%', paddingLeft:'3%', height:'50px'}}>
                <Link to="/">
                    <img style={{width:'120px', height:'65px'}} src="https://img.29cm.co.kr/next29cm/sp_29cm_m.png" alt=""></img>
                </Link>
                <div className="logomenu" style={{display:'flex', marginLeft:'auto'}}>
                    <Link to="/login" style={{textDecoration:'none'}}>
                        <strong className="mypage" style={{paddingRight:'20px', fontWeight:'400', fontSize:'11px', lineHeight:'30px', color:'#5d5d5d'}}><FaUser/>MY PAGE</strong>
                    </Link>
                    <Link to="/login" style={{textDecoration:'none'}}>
                        <strong className="mylike" style={{paddingRight:'20px', fontWeight:'400', fontSize:'11px', lineHeight:'30px', color:'#5d5d5d'}} onClick={() => alert('로그인이 필요한 서비스입니다.')}><AiFillHeart/>MY LIKE</strong>
                    </Link>
                    <Link to="/login" style={{textDecoration:'none'}}>
                        <strong className="shopping" style={{paddingRight:'20px', fontWeight:'400', fontSize:'11px', lineHeight:'30px', color:'#5d5d5d'}}><MdShoppingBag/>SHOPPING BAG</strong>
                    </Link>
                    <Link to="/login" style={{textDecoration:'none'}}>
                        <strong className="login" style={{paddingRight:'90px', fontWeight:'400', fontSize:'11px', lineHeight:'30px', color:'#5d5d5d'}}><IoLogIn/>LOGIN</strong>
                    </Link>
                </div>
            </div>
            <div className={scrollPosition <200 ? "SSPW-original" : "SSPW-change"} style={{paddingLeft:'3%'}}>
                <a className="special" style={{fontSize:'2.5vw', fontFamily:'CamptonBold'}}>Special-Order</a>
                <a className="showcase" style={{fontSize:'2.5vw', fontFamily:'CamptonBold', paddingLeft:'1.5%'}}>Showcase</a>
                <a className="pt" style={{fontSize:'2.5vw', fontFamily:'CamptonBold', paddingLeft:'1.5%'}}>PT</a>
                <a className="welove" style={{fontSize:'2.5vw', fontFamily:'CamptonBold', paddingLeft:'1.5%'}}>Welove</a>
                <span className="search" style={{fontSize:'50px',position:'absolute', right:'0', paddingRight:'3%'}}><IoSearch/></span>
            </div>
            <div className="dropmenuall" style={{width:'100%'}}>
                <div className="dropmenu" style={{paddingLeft:'2.5%', paddingTop:'1%', zIndex:'1'}}>
                    <ul className="wpqkfdy" style={{width:'98%', height:'60px'}}>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">BEST</a></li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">WOMEN</a>
                            <ul style={{}}>
                                <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                                    <div className="wpqkf" style={{display:'inline-block', fontFamily:'CamptonLight'}}>
                                        <li><a style={{fontWeight:'900', fontSize:'16px'}}>의류</a></li>
                                        <li><a href="#">ALL</a></li>
                                        <li><a href="#">NEW</a></li>
                                        <li><a href="#">EXCLUSIVE</a></li>
                                        <li><a href="#">상의</a></li>
                                        <li><a href="#">원피스</a></li>
                                        <li><a href="#">바지</a></li>
                                        <li><a href="#">액티브웨어</a></li>
                                        <li><a href="#">아우터</a></li>
                                        <li><a href="#">스커트</a></li>
                                        <li><a href="#">니트웨어</a></li>
                                    </div>  
                                    <div className="wpqkf" style={{display:'inline-block'}}>
                                        <li><a style={{fontWeight:'900', fontSize:'16px'}}>가방</a></li>
                                        <li><a href="#">ALL</a></li>
                                        <li><a href="#">NEW</a></li>
                                        <li><a href="#">숄더백</a></li>
                                        <li><a href="#">토트백</a></li>
                                        <li><a href="#">크로스백</a></li>
                                        <li><a href="#">에코,캔버스백</a></li>
                                        <li><a href="#">백팩</a></li>
                                        <li><a href="#">클러치</a></li>
                                        <li><a href="#">파우치</a></li>
                                        <li><a href="#">가방 액세사리</a></li>
                                    </div> 
                                    <div className="wpqkf" style={{display:'inline-block'}}>
                                        <li><a style={{fontWeight:'900', fontSize:'16px'}}>신발</a></li>
                                        <li><a href="#">ALL</a></li>
                                        <li><a href="#">NEW</a></li>
                                        <li><a href="#">하이엔드</a></li>
                                        <li><a href="#">플랫,로퍼</a></li>
                                        <li><a href="#">부츠</a></li>
                                        <li><a href="#">펌프스</a></li>
                                        <li><a href="#">샌들</a></li>
                                        <li><a href="#">슬리퍼,뮬</a></li>
                                        <li><a href="#">스니커즈</a></li>
                                        <li><a href="#">신발 액세사리</a></li>
                                    </div> 
                                    <div className="wpqkf" style={{display:'inline-block'}}>
                                        <li><a style={{fontWeight:'900', fontSize:'16px'}}>액세사리</a></li>
                                        <li><a href="#">ALL</a></li>
                                        <li><a href="#">NEW</a></li>
                                        <li><a href="#">하이엔드</a></li>
                                        <li><a href="#">EXCLUSIVE</a></li>
                                        <li><a href="#">주얼리</a></li>
                                        <li><a href="#">모자</a></li>
                                        <li><a href="#">시계</a></li>
                                        <li><a href="#">지갑,카드케이스</a></li>
                                        <li><a href="#">아이웨어</a></li>
                                        <li><a href="#">벨트</a></li>
                                    </div> 
                                    <div className="wpqkf" style={{display:'inline-block'}}>
                                        <li><a href="#">이미지</a></li>
                                    </div>
                                </div>  
                            </ul>
                        </li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">MEN</a>
                        <ul>
                        <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                        <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>의류</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">EXCLUSIVE</a></li>
                                    <li><a href="#">하이엔드</a></li>
                                    <li><a href="#">아우터</a></li>
                                    <li><a href="#">상의</a></li>
                                    <li><a href="#">하의</a></li>
                                    <li><a href="#">셋업</a></li>
                                    <li><a href="#">이너웨어</a></li>
                                    <li><a href="#">니트웨어</a></li>
                                </div>  
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>가방</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">EXCLUSIVE</a></li>
                                    <li><a href="#">하이엔드</a></li>
                                    <li><a href="#">크로스백</a></li>
                                    <li><a href="#">웨이스트백</a></li>
                                    <li><a href="#">토트백</a></li>
                                    <li><a href="#">백팩</a></li>
                                    <li><a href="#">숄더백</a></li>
                                    <li><a href="#">랩탑백</a></li>
                                </div> 
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>신발</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">EXCLUSIVE</a></li>
                                    <li><a href="#">하이엔드</a></li>
                                    <li><a href="#">스니커즈</a></li>
                                    <li><a href="#">로퍼</a></li>
                                    <li><a href="#">구두</a></li>
                                    <li><a href="#">부츠</a></li>
                                    <li><a href="#">샌들</a></li>
                                    <li><a href="#">슈즈 액세사리</a></li>
                                </div> 
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>액세사리</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">지갑,카드케이스</a></li>
                                    <li><a href="#">EXCLUSIVE</a></li>
                                    <li><a href="#">하이엔드</a></li>
                                    <li><a href="#">모자</a></li>
                                    <li><a href="#">시계</a></li>
                                    <li><a href="#">아이웨어</a></li>
                                    <li><a href="#">넥타이</a></li>
                                    <li><a href="#">벨트</a></li>
                                </div> 
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a href="#">이미지</a></li>
                                </div>  
                                </div>
                        </ul></li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">INTERIOR</a>
                        <ul>
                        <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>가구,인테리어</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">PREMIUM</a></li>
                                    <li><a href="#">LIVING TASTE</a></li>
                                    <li><a href="#">가구</a></li>
                                    <li><a href="#">조명</a></li>
                                    <li><a href="#">홈데코</a></li>
                                </div>  
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">가드닝</a></li>
                                    <li><a href="#">홈프레그런스</a></li>
                                    <li><a href="#">아트,디자인</a></li>
                                    <li><a href="#">데스크,팬시</a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">.</a></li>
                                    </div>
                                </div>
                                </ul>
                        </li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">KITCHEN</a>
                        <ul>
                        <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>주방,생활</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">PREMIUM</a></li>
                                    <li><a href="#">LIVING TASTE</a></li>
                                    <li><a href="#">쿡웨어</a></li>
                                    <li><a href="#">테이블웨어</a></li>
                                    <li><a href="#">침구</a></li>
                                </div>  
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">홈패브릭</a></li>
                                    <li><a href="#">욕실</a></li>
                                    <li><a href="#">수납,정리</a></li>
                                    <li><a href="#">홈케어</a></li>
                                    <li><a href="#">반려동물</a></li>
                                    <li><a href="#">책,음반</a></li>
                                    <li><a href="#">.</a></li>
                                    </div>
                                </div>
                                </ul></li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">ELECTRONICS</a>
                        <ul>
                        <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>가전</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">영상가전</a></li>
                                    <li><a href="#">주방가전</a></li>
                                    <li><a href="#">세탁기,건조기</a></li>
                                    <li><a href="#">청소기</a></li>
                                    <li><a href="#">생활가전</a></li>
                                </div>  
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">계절가전</a></li>
                                    <li><a href="#">이미용가전</a></li>
                                    <li><a href="#">건강가전</a></li>
                                    <li><a href="#">리퍼브</a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">.</a></li>
                                    </div>
                                </div>
                                </ul></li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">DIGITAL</a>
                        <ul>
                        <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>컴퓨터,디지털</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">음향기기</a></li>
                                    <li><a href="#">모바일,웨어러블</a></li>
                                    <li><a href="#">PC,노트북</a></li>
                                    <li><a href="#">게임</a></li>
                                    <li><a href="#">사진</a></li>
                                </div>  
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">자동차용품,장난감</a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">.</a></li>
                                    </div>
                                </div>
                                </ul></li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">BEAUTY</a>
                        <ul>
                        <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>뷰티</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">선물세트</a></li>
                                    <li><a href="#">스킨케어</a></li>
                                    <li><a href="#">EXCLUSIVE</a></li>
                                    <li><a href="#">채식주의</a></li>
                                    <li><a href="#">친환경 패키지</a></li>
                                </div>  
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">자연유래</a></li>
                                    <li><a href="#">바디케어</a></li>
                                    <li><a href="#">헤어케어</a></li>
                                    <li><a href="#">메이크업</a></li>
                                    <li><a href="#">네일,디자인타투</a></li>
                                    <li><a href="#">향수</a></li>
                                    <li><a href="#">여성용품</a></li>
                                    </div>
                                    <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">뷰티기기,마스크</a></li>
                                    <li><a href="#">남성뷰티</a></li>
                                    <li><a href="#">스킨타입</a></li>
                                    <li><a href="#">이너뷰티</a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">.</a></li>
                                    </div>
                                </div>
                                </ul></li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">FOOD</a>
                        <ul>
                        <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>푸드</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">선물세트</a></li>
                                    <li><a href="#">음료</a></li>
                                    <li><a href="#">가공식품</a></li>
                                    <li><a href="#">신선,냉장</a></li>
                                </div>  
                                </div>
                                </ul></li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">LEISURE</a>
                        <ul>
                        <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>레저</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">캠핑</a></li>
                                    <li><a href="#">등산,하이킹</a></li>
                                    <li><a href="#">골프</a></li>
                                    <li><a href="#">수영</a></li>
                                    <li><a href="#">러닝</a></li>
                                </div>  
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">실내운동</a></li>
                                    <li><a href="#">여행</a></li>
                                    <li><a href="#">테니스</a></li>
                                    <li><a href="#">자전거</a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">.</a></li>
                                    </div>
                                </div>
                                </ul></li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">KIDS</a>
                        <ul>
                        <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>유아,아동</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">의류</a></li>
                                    <li><a href="#">신발,가방</a></li>
                                    <li><a href="#">아동,홈</a></li>
                                </div>  
                                </div>
                                </ul></li>
                        <li><a style={{fontFamily:'CamptonBold'}} href="#">CULTURE</a>
                        <ul>
                        <div style={{paddingLeft:'2%', paddingTop:'1%'}}>
                                <div className="wpqkf" style={{display:'inline-block'}}>
                                    <li><a style={{fontWeight:'900', fontSize:'16px'}}>컬처</a></li>
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">NEW</a></li>
                                    <li><a href="#">숙박,여행</a></li>
                                    <li><a href="#">티켓</a></li>
                                    <li><a href="#">아트,디자인</a></li>
                                    <li><a href="#">책,음반</a></li>
                                    <li><a href="#">스테이셔너리</a></li>
                                </div>  
                                </div>
                                </ul></li>
                        <div style={{display:'flex'}}>
                            <hr style={{height:'20px', width:'0px', borderRight:'0px', marginRight:'10px',marginLeft:'10px'}}/>
                            <li><a style={{fontFamily:'CamptonLight', fontStyle:'italic'}} href="#">Event</a></li>
                            <li><a style={{fontFamily:'CamptonLight', fontStyle:'italic'}} href="#">Lookbook</a></li>
                        </div>
                        
                    </ul>
                    
                </div>
                
            </div>
            
        </div>
        
    )
}

export default Header;