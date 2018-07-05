
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
            "img":"@dataImage('280x100')",
            "text":"@cparagraph",
            "address":"@county(true)",
            "title":"@cword(6,10)",
            "picurl":"@picurl"
        }
    ]
})

export default Mock;
