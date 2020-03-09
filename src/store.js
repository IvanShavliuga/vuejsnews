import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        users:[{
            id:0,
            rang:"Admin",
            link:"https://test.ru/id",
            login: "iv2",
            gender:"men",
            age:31,
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
            age:29,
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
            age:27,
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
            age:24,
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
            age:30,
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
            age:31,
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
            age:27,
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
            type:"system",
            id:0,
            title:"success registration",
            to:0,
            from:-1,
            groupId:-1,
            body:"You have successfully registered for the website vuejsnews.com. Terms of use and licensing agreement here. Please fill out your profile and Sub be to the news columns of your choice.",
            read:false,
            show:false
        },{
            type:"user-add",
            id:1,
            from:6,
            to:0,
            groupId:-1,
            title:"User Angel application add to friends",
            body:"Please add my contact as a friend",
            read:false,
            show:false
        },{
            type:"group-add",
            id:2,
            from:1,
            to:0,
            groupId:3,
            title:"The user sent an invitation to join the group",
            body:"Please subscribe to my group",
            read:false,
            show:false
        }], //messages
        cards: [{
             category:"Work",
             header:"Development of a news portal",
             date:"25.02.2020",
             userId:0,
             id:0,
             body:"The site must be developed using  technology Vue.js. The news portal must be set up using bootstrap."          
        },{
             category:"Work",
             header:"Development of a news portal",
             date:"25.02.2020",
             userId:0,
             id:1,
             body:"The site must be developed using  technology Vue.js. The news portal must be set up using bootstrap."          
                     
        }],
        posts: [{ 
             id: 0,
             userId:0,
             groupId:0,
             date:"12.08.2019",
             time:"9:00", 
             title: 'I am learn vue.js', 
             desc: 'Vue.js is modern framework. This modern framework comes from China and is already gaining popularity. It is easy to learn and suitable for beginners.',
             like:[1,2,3],
             repost:[1,2,3],
             views:[1,2,3],
             cat:["Study", "Vue.js", "Frontend"],
             type:"post",
             likeclick:false 
        },{ 
             id: 1,
             userId:1,
             groupId:1,
             date:"13.08.2019",
             time:"10:00", 
             title: 'I am learn angular', 
             desc: 'Angular is popular framework. This framework is used by large banks and online stores. At one time it was actively promoted by google. Angular-developers receive consistently high salaries',
             like:[1,2,3],
             repost:[1,2,3],
             views:[1,2,3],
             cat:["Study", "Angular", "Frontend", "TypeScript"],
             type:"post",
             likeclick:false
        },{
             id: 2,
             userId:0,
             groupId:2,
             date:"13.08.2019",
             time:"11:00", 
             title: 'I learn JavaScript', 
             desc: 'Modern JavaScript framework of the operation of the Internet. JavaScript works on both the server and the client. Modern JavaScript development requires knowledge of frameworks (JavaScript libraries).',
             like:[1,2,3],
             repost:[1,2,3],
             views:[1,2,3],
             cat:["Study", "JavaScript", "Frontend"],
             type:"post",
             likeclick:false 
        },{
             id: 3,
             userId:0,
             groupId:-1,
             date:"13.02.2020",
             time:"11:00", 
             title: 'I installed LINUX ROSA', 
             desc: 'My dream has finally come true. When I was at University, I wanted to install Linux Mandriva. But then it was not possible, the iron was weak and unsuitable. But now I have a Russian Mandriva (for Linux Rosa)',
             like:[1,6],
             repost:[1,6],
             views:[1,2,3,6],
             cat:["Work", "Linux"],
             type:"post",
             likeclick:false 
        },{
             id: 4,
             userId:1,
             groupId:3,
             date:"13.02.2020",
             time:"11:00", 
             title: 'First typescript app', 
             desc: 'Developed the first full-fledged typescript application. The project has already passed preliminary testing and will be published in a week',
             like:[0,1,2,3],
             repost:[0,2],
             views:[0,1,2,3,6],
             cat:["Work", "Angular","TypeScript"],
             type:"post",
             likeclick:false 
        },{
             like:[1,2,3,4,5,6],
             id: 5,
             userId:0,
             groupId:0,
             date:"29.02.2020",
             time:"11:00", 
             title: 'First vue.js app', 
             desc: 'Developed the first full-fledged vue.js application. The project has already passed preliminary testing and will be published in a week',
             repost:[1,2],
             views:[0,1,2,3,4,5,6],
             cat:["Work", "Vue.js","SPA"],
             type:"post",
             likeclick:false 
        
        },{
             id: 6,
             userId:4,
             groupId:6,
             date:"29.02.2020",
             time:"11:00", 
             title: 'First python code', 
             desc:"I started studying Python and have already written my first neural network that determines who is depicted in the photo.",
             repost:[3,5],
             like:[3,5],
             views:[0,1,2,3,4,5,6],
             cat:["Work", "Python"],
             type:"post",
             likeclick:false         
        },{
             id: 7,
             userId:2,
             groupId:4,
             date:"29.02.2020",
             time:"11:00", 
             title: 'First node.js', 
             desc:"I started learning node.js and wrote his first multi-user chat.",
              repost:[1,2],
             like:[1,5],
             views:[0,1,2],
             cat:["Work", "Node.js","Study"],
             type:"post",
             likeclick:false     
        }],
        alert: {
             header: "Test",
             body:"On debug mode. Testing repost and like",
             status:"Test processing"              
        },
        groups:[{
             name: "Vue.js",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:0,
             idAdmin:0,
             idNews:[0,5],
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
             idNews:[4],
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
             followers:[2,3]        
        },{
             name: "Python",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:6,
             idAdmin:3,
             idNews:[6],
             followers:[2,3]        
        },{
             name: "C/C++/C#",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:7,
             idAdmin:5,
             idNews:[],
             followers:[3,4]        
        },{
             name: "Linux",
             desc: "Courses, code, simples, webinars",
             category: "study",
             id:8,
             idAdmin:6,
             idNews:[3],
             followers:[0,4]        
        }],
        userloginid:0      
    },
    getters: {
        users: state => {return state.users},
        loginid: state => {return state.userloginid},
        messages: state => {return state.messages.filter((m)=>{return m.to==state.userloginid})},
        cards: state => {return state.cards},
        personalcards: state => {return state.cards.filter((c)=>{return c.userId === state.userloginid})},
        personalposts: state => {
             return state.posts.filter((g)=>{return g.groupId === -1 && g.userId === state.userloginid})
        },
        postsUser: state => {
        	    let pu = [];//state.posts.filter((p)=>{return p.userId==state.userloginid});
        	    for(let i=0; i<state.posts.length; i++) {
        	    	  let gi = state.posts[i].groupId;
        	    	  if(gi === -1){
        	    	     pu.push(state.posts[i])
        	    	     continue;
        	    	  }
        	    	  let pf=false;                         	    	  
                 let fl = state.groups[gi].followers.filter((rp)=>{return rp===state.userloginid});
        	        let ru = state.posts[i].repost.filter((rp)=>{return rp===state.userloginid});
                 if(ru[0]!==undefined){
                 	  pf=true;
                    pu.push(state.posts[i]);
                 }else if(state.groups[gi].idAdmin!==state.userloginid&&fl[0]==state.userloginid&&pf===false) {                  
                    pu.push(state.posts[i]);
                 }else if(state.posts[i].userId===state.userloginid&&pf===false){ 
                    pu.push(state.posts[i]);
                 }
                 pf=false;
                 
        	    }
        	    return pu
        },
        postsAll: state => {return state.posts},
        alert: state => {return state.alert},
        groups: state => {return state.groups},
        groupsAdmin: state => {return state.groups.filter((g)=>{return g.idAdmin==state.userloginid})},
        user: state => {return state.users[state.userloginid]},
        friends: state => {
           let fr = state.users[state.userloginid].friends.filter((u)=>{return u!==state.userloginid});
           let usr = [];
           for(let i=0; i<fr.length; i++)
              usr.push(state.users[fr[i]]);
           return usr;                               
        },
        groupsUser: state => {
           let grp = [];
           for(let i=0; i<state.groups.length; i++) {
           	  let fl = state.groups[i].followers.filter((v)=>{return v===state.userloginid});
           	  if(fl[0]!==undefined) { 
                   grp.push(state.groups[i]);
              }
           }   
           return grp;                               
        },
        repostsUser:state=> {
            let rps=[];
            let id = state.userloginid;
            for(let i=0; i<state.posts.length; i++) {
                 let r = state.posts[i].repost.filter((rid)=>{return rid===id});
                 if(r[0] !==undefined)
                     rps.push(state.posts[i]);                     
            }  
            return rps;      
        },
        likesUser:state=> {
            let rps=[];
            let id = state.userloginid;
            for(let i=0; i<state.posts.length; i++) {
                 let r = state.posts[i].likes.filter((rid)=>{return rid===id});
                 if(r[0] !==undefined)
                     rps.push(state.posts[i]);                     
            }  
            return rps;      
        }     
    },
    actions: {
        likepost({commit}, post) {
            commit("LIKEPOST",post);          
        },
        repost({commit},post) {
            commit("REPOST",post);        
        },
        addfriend({commit},user) {
            commit("ADDFRIEND",user);          
        },        
        groupfollow({commit},group) {
            commit("GROUPFOLLOW",group);          
        },
        addpost({commit},post) {
            commit("ADDPOST",post);        
        },
        editpost({commit},post) {
            commit("EDITPOST",post);        
        },
        addgroup({commit},group) {
            commit("ADDGROUP",group);        
        },
        editcard({commit},card) {
            commit("EDITCARD",card);        
        }   
    },
    mutations: {
        "LIKEPOST" (state,post) {
           let  lu  = post.like.filter((idl)=>{return idl===state.userloginid});
           if(lu[0]!==undefined)
               post.like = post.like.filter((idl) => {return idl !==state.userloginid});
           else 
               post.like.push(state.userloginid) 
           state.posts[post.id]=post;
        },  
        "REPOST" (state,post) {
           let  lu  = post.repost.filter((idl)=>{return idl===state.userloginid});
           if(lu[0]!==undefined)
               post.repost = post.repost.filter((idl) => {return idl !==state.userloginid});
           else 
               post.repost.push(state.userloginid) 
           state.posts[post.id]=post;
        },
        "ADDFRIEND" (state,user) {
           let uid= state.users.filter((u)=>{return u===state.userloginid});
           if(uid[0]===undefined) {                             
              state.users[state.userloginid].friends.push(user.id);
              state.users[user.id].friends.push(state.userloginid);
           }        
        },
        "GROUPFOLLOW" (state, group) {
        	  let uid= state.groups.filter((gf)=>{return gf===state.userloginid});
           if(uid[0]===undefined)           
              state.groups[group.id].followers.push(state.userloginid);        
        },
        "ADDPOST" (state,post) {
        	  post.id = state.posts.length;
        	  let d= new Date();
           post.date=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
           post.time=d.getHours()+":"+d.getMinutes();
           if(post.groupId>=0)
                state.groups[post.groupId].idNews.push(post.id); 
           state.posts.push(post);        
        },
        "EDITPOST" (state,post) {
        	  let d= new Date();
           post.date=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
           post.time=d.getHours()+":"+d.getMinutes();
           state.posts[post.id]=post;        
        },
        "EDITGROUP" (state,group) {
           state.groups[group.id]=group;        
        },
        "ADDGROUP" (state,group) {
        	  group.id=state.groups.length;
           state.groups.push(group);        
        },
        "EDITCARD" (state, card) {
           state.cards[card.id]=card;       
        }        
           
    }
})