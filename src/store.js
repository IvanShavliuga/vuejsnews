import Vuex from 'vuex'
import Vue from 'vue'
import api from "./server/api.js"
    

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        currentUser: {},
        users:[],
        messages:[],
        cards: [],
        posts: [],
        comments:[],
        alert: {},
        groups:[],
        userloginid:0,
        auth: false
    },
    getters: {
        users: state => {return state.users},
        loginid: state =>{return state.userloginid},
        messages: state => {return state.messages.filter((m)=>{return m.to==state.userloginid||m.from==state.userloginid})},
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
        	    	  	  let frid = state.users[state.userloginid].friends.filter( (f) => {return f === state.userloginid});
        	    	  	  
        	    	  	  if(frid[0]!==undefined||state.posts[i].userId===state.userloginid)
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
        user: state => state.currentUser,
        friends: state => {
           let fr = state.users[state.userloginid].friends.filter((u)=>{return u!==state.userloginid});
           let usr = [];
           for(let i=0; i<fr.length; i++)
              usr.push(state.users[fr[i]]);
           return usr;                               
        },
        groupsUser: state => {
           let grp = [];
           let addcheck=false;
           for(let i=0; i<state.groups.length; i++) {
           	  let fl = state.groups[i].followers.filter((v)=>{return v===state.userloginid});
           	  if(state.groups[i].idAdmin===state.userloginid){
                 grp.push(state.groups[i]);
                 addcheck=true;
              }
           	  if(fl[0]!==undefined&&addcheck!=true) { 
                   grp.push(state.groups[i]);
                   addcheck=true;
              }
          
              
              addcheck=false;   
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
        },
        comments:state => {return state.comments}     
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
        },
        addmessage({commit}, msg) {
            commit("ADDMESSAGE",msg);        
        },
        addcomment({commit}, com) {
        	   commit("ADDCOMMENT",com);
        },
        fetchAll({ commit }) {
		  api.fetchUsersList().then(r => r.data).then(arr => commit('GETUSERS', arr))
		  api.fetchGroupsList().then(r => r.data).then(arr => commit('GETGROUPS', arr))
		  api.fetchMessagesList().then(r => r.data).then(arr => commit('GETMESSAGES', arr))
		  api.fetchCardsList().then(r => r.data).then(arr => commit('GETCARDS', arr))
		  api.fetchPostsList().then(r => r.data).then(arr => commit('GETPOSTS', arr))
		  api.fetchCommentsList().then(r => r.data).then(arr => commit('GETCOMMENTS', arr))
		  api.fetchAlert().then(r => r.data).then(arr => commit('GETALERT', arr))
		  return {status: '200 OK'}
		},
        getusers({commit}) {
          return api.fetchUsersLists().then(r => r.data).then(arr => commit('GETUSERS', arr))
		},
        getgroups({commit}) {
		  return api.fetchGroupsList().then(r => r.data).then(arr => commit('GETGROUPS', arr))
		},
		getmessages({commit}) {
		  return api.fetchMessagesList().then(r => r.data).then(arr => commit('GETMESSAGES', arr))
		},
		getposts({commit}) {
		  return api.fetchPostsList().then(r => r.data).then(arr => commit('GETPOSTS', arr))
		},
		getcards({commit}) {
		  return api.fetchCardsList().then(r => r.data).then(arr => commit('GETCARDS', arr))
		},
		getcomments({commit}) {
		  return api.fetchCommentsList().then(r => r.data).then(arr => commit('GETCOMMENTS', arr))
		},
		getalert({commit}) {
		  return api.fetchCommentsList().then(r => r.data).then(arr => commit('GETALERT', arr))
		},
        signin({commit},user){
            // api.fetchUsersLists().then(response => console.dir(response.data))
            return api.getUser(user).then(r => r.data).then((d) => {
                if (d[0] === undefined) return {auth: false}
                else {
                    commit("SIGNIN", d[0])
                    return {auth: true}
                }
            })
        },
        signup({commit},user){
            commit("SIGNUP",user);        
        }     
    },
    mutations: {
		"GETUSERS" (state, arr) {
			state.users = arr
		},
		"GETMESSAGES" (state, arr) {
			state.messages = arr
		},
		"GETCARDS" (state, arr) {
			state.cards = arr
		},
		"GETPOSTS" (state, arr) {
			state.posts = arr
		},
		"GETCOMMENTS" (state, arr) {
			state.comments = arr
		},
		"GETGROUPS" (state, arr) {
			state.groups = arr
		},
		"GETALERT" (state, obj) {
			state.alert = obj
		},
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
        },
        "ADDMESSAGE" (state, msg) {
        	  msg.id = state.messages.length;
           state.messages.push(msg);        
        },
        "ADDCOMMENT" (state, com) {
        	  let idcom = state.comments.length;
        	  let comment= com;
        	  comment.id=idcom;
           state.posts[com.postId].comments.push(idcom);
           state.comments.push(comment);         
        },
        "SIGNIN" (state, user) {
           if(user === undefined) {
              state.auth = false;
              state.userloginid = -1;
           } else {
               state.userloginid = user.id;
               state.auth = true
               state.currentUser = user
           }
        },
        "SIGNUP" (state,user) {
        	  console.log("state (user): " + user.id)
        	  user.friends.push(user.id);
           state.users.push(user);
           state.userloginid=user.id;
           let d =  new Date();
           let strdate=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
           let strtime=d.getHours()+":"+d.getMinutes();
           let msg = {
           	  type:"system",
            id:state.messages.length,
            title:"success registration, "+user.login,
            to:user.id,
            from:-1,
            groupId:-1,
            body:"userloginid: <i>"+state.userloginid+"</i> user.id: <i>"+user.id+"</i> user.login: <i>"+user.login+"</i><br>User <i>"+user.name+"</i> success registration <i>"+strdate+" "+strtime+"</i>",           
            read:false,
            show:false 
           };
           state.messages.push(msg);        
        }        
           
    }
})
