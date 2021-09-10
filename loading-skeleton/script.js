async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    return data
}

const container = document.querySelector(".container")

getPosts().then(data => {
    const fewPosts = data.slice(0, 10)
    let content = ""
    fewPosts.forEach(post => {
        const cardTemplate = `
            <div class="card">
                <div class="header">
                    <img src="https://source.unsplash.com/75x75/?nature/" alt="header-image" />
                    <h3 class="title">${post.title}</h3>
                </div>
                <div class="body">${post.body}</div>
            </div>`

        content += cardTemplate
    })

    container.innerHTML = content
})
