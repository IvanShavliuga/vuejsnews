import Vuex from 'vuex'
import Vue from 'vue'
//import users from './users'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        users:[{
            id:0,
            link:"https://test.ru/id",
            login: "iv2",
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
             user:"iv2",
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
             userId:0,
             user:"iv2",
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
             user:"iv2",
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
        }      
    },
    getters: {
        users: state => {return state.users},
        messages: state => {return state.messages},
        cards: state => {return state.cards},
        posts: state => {return state.posts},
        alert: state => {return state.alert}    
    }
})