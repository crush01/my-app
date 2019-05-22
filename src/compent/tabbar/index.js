import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
const tabbarArr = [
    {
        img: 'icon-37',
        text: '首页',
        link:'/home'
    },
    {
        img: 'icon-fenleishousuo',
        text: '分类',
        link:'category'
    },
    {
        img: 'icon-gouwuche',
        text: '购物车',
        link:'car'
    },
    {
        img: 'icon-yonhu',
        text: '用户',
        link:'user'
    }
]

class Tabbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }


    render() {
        const url=window.location.href;
        return (
            <div className="tabbar">
                <div className="tabbar-content">
                    {
                        tabbarArr.map((v, i) => (
                            <Link to={v.link} key={i} className={"tabbar-item " + (url.indexOf(v.link)>-1 ? 'active' : '')}
                                 >
                                <div className={'iconfont ' + v.img}></div>
                                <div>{v.text}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Tabbar;