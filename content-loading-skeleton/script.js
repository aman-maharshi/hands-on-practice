const grid = document.querySelector(".grid")

const getPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    return data
}

// getPosts().then(item => {
//     const tenItems = item.slice(0, 20)
//     grid.innerHTML = ""
//     tenItems.forEach(post => {
//         grid.innerHTML += `<div class="card">
//                             <div class="card__row">
//                                 <div class="card__image">
//                                     <img src="https://source.unsplash.com/100x100/" alt="picture" />
//                                 </div>
//                                 <h2 class="card__title">${post.title.substring(0, 15)}</h2>
//                             </div>
//                             <p class="card__desc">${post.body}</p>
//                         </div>`
//     })
// })