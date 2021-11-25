const comment= ()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => commentUpdate(data))
    
}
comment()

const commentUpdate = comments =>{

    const commentSite = document.getElementById("comment");
    comments.forEach( comment => {
      
        const div = document.createElement("div");
        div.innerHTML=`
        <p>${comment.postId}</p>
        <p>${comment.name}</p>
        <p>${comment.email}</p>
        <p>${comment.body}</p>
        <button onclick="loadComment('${comment.postId}')">comment detail</button>
        `
        commentSite.appendChild(div)
})   
}

const loadComment= postId =>{
    const url = `https://jsonplaceholder.typicode.com/${postId}`;

    fetch(url)
    .then(res => res.json())
    .then (data => displayDetails(data))
}
const displayDetails = posts =>{
    const element = document.getElementById("element")
    posts.forEach( post =>{
        const div = document.createElement("div");
        div.innerHTML=`
        <p>${post.postId}</p>
        <p>${post.name}</p>
        <p>${post.email}</p>
        <p>${post.body}</p>
        `;
        element.appendChild(div);
    })
}