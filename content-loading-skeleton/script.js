const grid = document.querySelector(".grid")

const getPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    return data
}

// adding the skeleton
for(let i = 0; i < 6; i++) {
    grid.innerHTML += (`<div class="card">
                    <div class="card__row">
                        <div class="card__image skeleton">
                        </div>
                        <h2 class="card__title">
                            <div class="skeleton skeleton-text"></div>
                            <div class="skeleton skeleton-text skeleton-last"></div>
                        </h2>
                    </div>
                    <p class="card__desc">
                        <div class="skeleton skeleton-text"></div>
                        <div class="skeleton skeleton-text"></div>
                        <div class="skeleton skeleton-text"></div>
                        <div class="skeleton skeleton-text skeleton-last"></div>
                    </p>
                </div>`)
}


// replacing the skeleton with data
getPosts().then(item => {
    const tenItems = item.slice(0, 6)
    grid.innerHTML = ""
    tenItems.forEach(post => {
        grid.innerHTML += `<div class="card">
                            <div class="card__row">
                                <div class="card__image skeleton">
                                    <img src="https://source.unsplash.com/100x100/" alt="picture" />
                                </div>
                                <h2 class="card__title">${post.title.substring(0, 15)}</h2>
                            </div>
                            <p class="card__desc">${post.body}</p>
                        </div>`
    })
})