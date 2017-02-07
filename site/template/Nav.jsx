import React from 'react';

export default (props)=> {

    const {items} = props;

    return <div >
        <ul className="nav nav-pills"  style={{margin:'30px auto'}}>
            <li className="active"><a href=""  role="presentation">首页</a></li>
            {
                items.map((item, i)=> {
                    return <li key={'key-' + i}><a href={'/src/'+item}>{item}</a></li>
                })
            }
        </ul>
    </div>
}