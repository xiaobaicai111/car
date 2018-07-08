
import Mock from "mockjs";
var Random=Mock.Random;

Random.extend({
    picurl: function(date) {
        var constellations = ['http://img.chuguoqu.com/g1/M00/02/90/eSl1sVYmEHaAG2uAAAEskrraQDc744.jpg', 'http://img.chuguoqu.com/g1/M00/02/90/eSl1sVYmEO-AQ_C7AADWjdtMOaM043.jpg']
        return this.pick(constellations)
    }
})

Mock.mock("http://www.baidu.com/api",{
    "user|5-8":[
        {
            "ids|+1":0,
            "name":"@cname",
            "img":"@dataImage('280x280')",
            "text":"@cparagraph",
            "address":"@county(true)",
            "title":"@cword(6,10)",
            "picurl":"@picurl",
            "price":"@integer(200,800)",
        }
    ],
    "lvyou|4-20":[
        {
            "id|+1":0,
            "price":"@integer(200,800)",
            "img":"@dataImage('280x280')",
            "img1":"@dataImage('700x360')",
            "img2":"@dataImage('700x360')",
            "img3":"@dataImage('700x360')",
            "title":"@cword(6,10)",
            "etitle":"@word(2,4)",
            "city":"@cword(2,6)",
            "text":"@cparagraph(1,3)",
            "address":"@county(true)"
        }
    ],
    "haoquchu|4":[
        {
            "id|+1":0,
            "img":"@dataImage('280x190')",
            "title":"@cword(6,10)",
            "etitle":"@word(5,9)",
            "city":"@cword(2,6)",
        }
    ]
})

export default Mock;
