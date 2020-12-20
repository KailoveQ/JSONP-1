// const request =new XMLHttpRequest
// request.open('GET','http://qq.com:8888/friends.json')
// request.onreadystatechange=()=>{
// if(request.readyState===4&&request.status===200){
//     console.log(request.response)
// }
// }
// request.send()

// const { rejects } = require("assert")


// JSONP 方法1 赋值版本
// const script= document.createElement('script')
// script.src = 'http://qq.com:8888/friends.js'
// script.onload=()=>{
//     console.log(window.xxx)
// }
// document.body.appendChild(script) 


// window.xxx = (data)=>{
//     console.log(data)
// }
// const script= document.createElement('script')
// script.src = 'http://qq.com:8888/friends.js'
// document.body.appendChild(script) 


// const random ='frankJSOPCallbackName'+Math.random()
// console.log(random)
// window[random]=(data)=>{
//     console.log(data)
// }
// const script= document.createElement('script')
// script.src = `http://qq.com:8888/friends.js?functionName=${random}`
// document.body.appendChild(script) 
// script.remove()


function jsonp(url){
    return new Promise((resolve,rejects)=>{
        const random ='frankJSOPCallbackName'+Math.random()
        window[random]=(data)=>{
            resolve(data)
        }
        const script= document.createElement('script')
        script.src = `${url}?functionName=${random}`
        script.onload=()=>{
            script.remove()
        }
        script.onerror=()=>{
            rejects()
        }
        document.body.appendChild(script)
    })
}

//使用
jsonp('http://qq.com:8888/friends.js')
.then((data)=>{
    console.log(data)
})