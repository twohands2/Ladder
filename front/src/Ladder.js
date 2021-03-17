import React, {Fragment, useState} from 'react';
import Canvas from './Canvas';

const Ladder = () => {

    const [cnt , setCnt] = useState(0);//사다리 라인 수
    const [point, setPoint] = useState([]);//좌표

    function onChange(e) {
        setCnt(e.target.value);
    }

    function onClick(e){
        let cnt_ = new Number(cnt);
        if(cnt_ < 0 || cnt_ > 6){
            alert('1 ~ 6까지만 입력가능합니다.');
            return ;
        }
    }

    return (
        <Fragment>
            <div>
                <p>1 ~ 6까지만 입력가능합니다.</p>
                <input type="number" value={cnt} onChange={onChange}/>
                <button onClick={onClick}>결정</button>
            </div>
            <div>
                <Canvas/>
            </div>
        </Fragment>
    );
};

export default Ladder;