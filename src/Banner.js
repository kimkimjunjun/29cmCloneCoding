import React from "react";

function Banner() {
    return (
        <div className="bannALL" style={{width:'100%'}}>
            <div className="first" style={{display:'flex'}}>
                <img style={{width:'41vw', height:'50vw'}} src="//img.29cm.co.kr/next-contents/2023/01/31/7dc306a14b78420db5dde8f34668d02e_20230131164831.jpg?width=1000" alt=""></img>
                <div className="rightimg" style={{display:'flex', marginLeft:'auto'}}>
                    <img style={{width:'28vw', height:'50vw', paddingRight:'1px'}} src="//img.29cm.co.kr/next-edition/2023/01/31/3cab59551a3e476881f26d5306fe0184_20230131164021.jpg?width=600" alt=""/>
                    <img style={{width:'27vw', height:'50vw', paddingRight:'10px'}} src="//img.29cm.co.kr/next-edition/2023/01/31/95f8ad07fd91495192c22672c7232871_20230131164023.jpg?width=600" alt=""></img>
                </div>
            </div>
            <div className="second">
                <img style={{width:'41vw'}} src="//img.29cm.co.kr/next-contents/2023/01/31/a7e35190050946ceae5057df4dc97708_20230131153618.jpg?width=1000" alt=""></img>
            </div>
        </div>
    )
}

export default Banner;