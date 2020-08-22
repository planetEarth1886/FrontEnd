import React, { Component } from 'react';
import { CardStack, Card } from 'react-cardstack';
import blackstyle from './blackstyle.css';

/* 사용자가 클릭한 국가 코드 가져오는 함수들 */
var country;
function HelloCountry(props) {
    country = `${props.name}`;
    return <div style={{ country: props.name }}></div>
}
class Posts extends Component {
    /* 컴포넌트 생성시 */
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);
        this.state = {
            sizes: [],
            dates: [],
            keywords: [],
        }
    }
    //fetch('https://planet-earth.run.goorm.io/json_result/?geo='+country)
    // 'https://planet-earth.run.goorm.io/json_result/?geo=KR'
    // 'https://my-json-server.typicode.com/planetEarth1886/countrydata/db'
    componentWillMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // fetch('https://raw.githubusercontent.com/planetEarth1886/backend/master/json_result/result_' + country + '.json')
        fetch(proxyurl + 'https://planet-earth.run.goorm.io/json_result/?geo=' + country)
            .then(res => res.json())
            .then(data => this.setState({
                sizes: data.sizes,
                dates: data.dates,
                keywords: data.keywords,
            }));
    }



    render() {
        /* 각 나라별 국기 보여주는 함수 */
        var emojiFlags = require('emoji-flags');
        function showflag() {
            return " " + emojiFlags.countryCode(country).emoji + " ";
        }
        const { sizes, dates, keywords } = this.state;
        // const sizesList = sizes.map((size, index) => (
        //     <div key={size.size}>
        //         <h4>{size.size}</h4>
        //     </div>
        // ));
        const datesList = dates.map((date, index) => (
            <div key={date}>
                <center>
                    <span>{showflag()}
                        {date.date}
                        {showflag()}

                    </span>
                </center>
            </div>

        ));
        const naverURL = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query="
        const googleURL = "https://www.google.com/search?q="
        const keywordstitleList = keywords.map((keyword, index) => (
            <div key={keyword.title}>
                {/* {keyword.title} */}
                <a href={googleURL + keyword.title} target="_blank">{keyword.title}</a>
            </div>
        ));
        const keywordscontentList = keywords.map((keyword, index) => (
            <div key={keyword.content}>
                {keyword.content}
            </div>
        ));

        return (
            <CardStack
                height={650}
                width={400}
                //background='#f8f8f8'
                hoverOffset={100}
                borderRadius={15}>
                <Card background='#540b0e' borderRadius={15}>
                    <center><h3><font color="white">
                        {datesList}</font></h3></center>
                </Card>
                <Card background='#6F2B2C' borderRadius={15}>
                    <h3><ul>{keywordstitleList[0]}</ul></h3>
                    <h6>{keywordscontentList[0]}</h6>
                </Card>
                <Card background='#924130' borderRadius={15}>
                    <h3>
                        <ul>
                            {keywordstitleList[1]}
                        </ul>
                    </h3>
                    <h6>{keywordscontentList[1]}</h6>
                </Card>
                <Card background='#4D4B58' borderRadius={15}>
                    <h3>
                        <ul>
                            {keywordstitleList[2]}
                        </ul>
                    </h3>
                    <h6>{keywordscontentList[2]}</h6>
                </Card>
                <Card background='#C5A763' borderRadius={15}>
                    <h3>
                        <ul>
                            {keywordstitleList[3]}
                        </ul>
                    </h3>
                    <h6>{keywordscontentList[3]}</h6>
                </Card>
                <Card background='#827F7B' borderRadius={15}>
                    <h3>
                        <ul>
                            {keywordstitleList[4]}
                        </ul>
                    </h3>
                    <h6>{keywordscontentList[4]}</h6>
                </Card>
                <Card background='#5B4540' borderRadius={15}>
                    <h3>
                        <ul>
                            {keywordstitleList[5]}
                        </ul>
                    </h3>
                    <h6>{keywordscontentList[5]}</h6>
                </Card>
                <Card background='#594F33' borderRadius={15}>
                    <h3>
                        <ul>
                            {keywordstitleList[6]}
                        </ul>
                    </h3>
                    <h6>{keywordscontentList[6]}</h6>
                </Card>
                <Card background='#CDC2A2' borderRadius={15}>
                    <h3>
                        <ul>
                            {keywordstitleList[7]}
                        </ul>
                    </h3>
                    <h6>{keywordscontentList[7]}</h6>
                </Card>
                <Card background='#758467' borderRadius={15}>
                    <h3>
                        <ul>
                            {keywordstitleList[8]}
                        </ul>
                    </h3>
                    <h6>{keywordscontentList[8]}</h6>
                </Card>
                <Card background='#B6B36E' borderRadius={15}>
                    <h3>
                        <ul>
                            {keywordstitleList[9]}
                        </ul>
                    </h3>
                    <h6>{keywordscontentList[9]}</h6>
                </Card>
            </CardStack>
        );
    }

}
export default Posts;
export { HelloCountry };