import Vuex from 'vuex'
import Vue from 'vue'
//import users from './users'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        users:[{
            id:0,
            rang:"Admin",
            link:"https://test.ru/id",
            login: "iv2",
            gender:"men",
            password: "12345",
            friends: [0,1,2],
            name:"Ivan Shavliuga (Ivanov)",
            spec:"Junior Frotend Developer",
            skills:["HTML", "CSS", "JavaScript (ES6)", "JQuery","Vue.js (vue companetes)", "Design","Animation"],
            city:"Novopolotsk, Belarus",
            contacts:[{
               messenger:"phone",
               contact:"+375 (111) 111-11-11"
            },{
               messenger :"email",
               contact:"iva.drakon.nov@gmail.com"
            },{
               messenger:"telegram",
               contact:"https://t.me/vuejscodesru"   
            }] //contacts
        },{
            id:1,
            link:"https://test.ru/id",
            login: "max",
            rang:"Moderator",
            gender: "men",
            password: "12345",
            friends: [0,1,2],
            name:"Max Smirnov",
            spec:"Junior Frotend Developer",
            skills:["HTML", "CSS", "JavaScript (ES6)", "JQuery","Angular.js", "TypeScript","Animation"],
            city:"Minsk, Belarus",
            contacts:[{
               messenger:"phone",
               contact:"+375 (222) 222-22-2"
            },{
               messenger :"email",
               contact:"smirnov.nov@gmail.com"
            },{
               messenger:"telegram",
               contact:"https://t.me/vuejscodesru"   
            }] //contacts
        },{
            id:2,
            link:"https://test.ru/id",
            login: "alex",
            password: "12345",
            rang:"User",
             friends: [0,1,2],
            gender: "men",
            name:"Alex Frolov",
            spec:"Junior Backend Developer",
            skills:["node.js", "php", "mongoDB", "MySQL","Python", "Ruby","Ruby on rails"],
            city:"Rostov, Russia",
            contacts:[{
               messenger:"phone",
               contact:"+7 (222) 222-22-2"
            },{
               messenger :"email",
               contact:"alex@gmail.com"
            },{
               messenger:"telegram",
               contact:"https://t.me/vuejscodesru"   
            }] //contacts
        },{
            id:3,
            link:"https://test.ru/id",
            login: "vlad",
            gender: "men",
            rang:"User",
            friends: [3,4,5,6],
            password: "12345",
            name:"Vald Frolov",
            spec:"Junior Data science Developer",
            skills:["python", "Data ", "mongoDB", "MySQL","Python", "Ruby","Ruby on rails"],
            city:"Rostov, Russia",
            contacts:[{
               messenger:"phone",
               contact:"+7 (222) 222-22-2"
            },{
               messenger :"email",
               contact:"alex@gmail.com"
            },{
               messenger:"telegram",
               contact:"https://t.me/vuejscodesru"   
            }] //contacts
        },{
            id:4,
            link:"https://test.ru/id",
            login: "oleg",
            gender: "men",
            password: "12345",
            friends: [3,4,5,6],
            rang:"User",
            name:"Oleg Frolov",
            spec:"Junior Data science Developer",
            skills:["python", "Data science", "Machine learning", "MySQL","Python", "Ruby","Ruby on rails"],
            city:"Rostov, Russia",
            contacts:[{
               messenger:"phone",
               contact:"+7 (222) 222-22-2"
            },{
               messenger :"email",
               contact:"alex@gmail.com"
            },{
               messenger:"telegram",
               contact:"https://t.me/vuejscodesru"   
            }] //contacts
        },{
            id:5,
            link:"https://test.ru/id",
            login: "ann",
            rang:"User",
            gender: "women",
            friends: [3,4,5,6],
            password: "12345",
            name:"Ann Lenina",
            spec:"Junior Systems Developer",
            skills:["C", "C++", "C#", "Linux"],
            city:"Rostov, Russia",
            contacts:[{
               messenger:"phone",
               contact:"+7 (222) 222-22-2"
            },{
               messenger :"email",
               contact:"ann@gmail.com"
            },{
               messenger:"telegram",
               contact:"https://t.me/vuejscodesru"   
            }] //contacts
        },{
            id:6,
            link:"https://test.ru/id",
            login: "angel",
            rang:"User",
            friends: [3,4,5,6],
            gender: "women",
            password: "12345",
            name:"Angel Lenina",
            spec:"Junior Systems Developer",
            skills:["C", "C++", "C#", "Linux"],
            city:"Rostov, Russia",
            contacts:[{
               messenger:"phone",
               contact:"+7 (222) 222-22-2"
            },{
               messenger :"email",
               contact:"angel.s@gmail.com"
            },{
               messenger:"telegram",
               contact:"https://t.me/vuejscodesru"   
            }] //contacts
        }], //user  
        messages:[{
            user:"admin",
            id:1,
            title:"success registration",
            userId:0,
            body:"You have successfully registered for the website test.com. Terms of use and licensing agreement here. Please fill out your profile and Sub be to the news columns of your choice.",
            read:false,
            show:false
        },{
            user:"admin",
            id:2,
            userId:0,
            title:"User Angel application add to friends",
            body:"Please add my contact as a friend",
            read:false,
            show:false
        }], //messages
        cards: [{
             category:"Work",
             header:"Development of a news portal",
             date:"25.02.2020",
             userId:0,
             body:"The site must be developed using  technology Vue.js. The news portal must be set up using bootstrap."          
        },{
             category:"Work",
             header:"Development of a news portal",
             date:"25.02.2020",
             userId:0,
             body:"The site must be developed using  technology Vue.js. The news portal must be set up using bootstrap."          
                     
        }],
        posts: [{ 
             id: 0,
             userId:0,
             date:"12.08.2019",
             time:"9:00", 
             title: 'I am learn vue.js', 
             desc: 'Vue.js is modern framework. This modern framework comes from China and is already gaining popularity. It is easy to learn and suitable for beginners.',
             like:67,
             repost:3,
             views:500,
             cat:"study",
             type:"post",
             likeclick:false 
        },{ 
             id: 1,
             userId:1,
             date:"13.08.2019",
             time:"10:00", 
             title: 'I am learn angular', 
             desc: 'Angular is popular framework. This framework is used by large banks and online stores. At one time it was actively promoted by google. Angular-developers receive consistently high salaries',
             like:35,
             repost:5,
             views:350,
             cat:"study",
             type:"post",
             likeclick:false
        },{
             id: 2,
             userId:0,
             date:"13.08.2019",
             time:"11:00", 
             title: 'I learn JavaScript', 
             desc: 'Modern JavaScript framework of the operation of the Internet. JavaScript works on both the server and the client. Modern JavaScript development requires knowledge of frameworks (JavaScript libraries).',
             like:24,
             repost:4,
             views:278,
             cat:"study",
             type:"post",
             likeclick:false 
        }],
        alert: {
             header: "Test",
             body:"This alert window created for tests",
             status:"Test OK"              
        },
        groups:[{
             name: "Vue.js",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:0,
             idAdmin:0,
             idNews:[0],
             followers:[0,1]        
        },{
             name: "Angular.js",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:1,
             idAdmin:1,
             idNews:[1],
             followers:[0]        
        },{
             name: "JavaScript",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:2,
             idAdmin:0,
             idNews:[2],
             followers:[0,1,2,3]        
        },{
             name: "TypeScript",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:3,
             idAdmin:1,
             idNews:[],
             followers:[1,3]        
        },{
             name: "Node.js",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:4,
             idAdmin:2,
             idNews:[],
             followers:[0,1,2]        
        },{
             name: "Ruby on rails",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:5,
             idAdmin:2,
             idNews:[],
             followers:[0,2,3]        
        },{
             name: "Python",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:6,
             idAdmin:3,
             idNews:[],
             followers:[0,2,3]        
        },{
             name: "C/C++/C#",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:7,
             idAdmin:4,
             idNews:[],
             followers:[0,4]        
        },{
             name: "Linux",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:8,
             idAdmin:4,
             idNews:[],
             followers:[0,4]        
        }],
        userloginid:0      
    },
    getters: {
        users: state => {return state.users},
        messages: state => {return state.messages.filter((m)=>{return m.userId==state.userloginid})},
        cards: state => {return state.cards},
        postsUser: state => {return state.posts.filter((p)=>{return p.userId==state.userloginid})},
        postsAll: state => {return state.posts},
        alert: state => {return state.alert},
        groups: state => {return state.groups},
        groupsUser: state => {return state.groups.filter((g)=>{return g.idAdmin==state.userloginid})},
        user: state => {return state.users[state.userloginid]},
        friends: state => {
           let fr = state.users[state.userloginid].friends;
           let usr = [];
           for(let i=0; i<fr.length; i++)
              usr.push(state.users[fr[i]]);
           return usr;                               
        }    
    }
})