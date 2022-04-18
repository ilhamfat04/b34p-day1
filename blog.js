let blogs = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image")

    let blog = {
        title: title,
        content: content,
        image: URL.createObjectURL(image.files[0])
    }

    blogs.push(blog)
    renderBlog()
}

function renderBlog() {
    let lengthData = blogs.length
    console.table(blogs);
    let blogContainer = document.getElementById("contents")

    blogContainer.innerHTML = firstBlogContent()

    for (let i = 0; i < lengthData; i++) {
        blogContainer.innerHTML += `
        <div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
          </h1>
          <div class="detail-blog-content">
            12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
          </div>
          <p>
            ${blogs[i].content}
          </p>
          <div style="text-align: right;">
            <span style="font-size: 15px; color: grey;">1 hour ago</span>
          </div>
        </div>
      </div>
        `
    }
}


function firstBlogContent() {
    return `
    <div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/img/blog-img.png" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank">Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a>
      </h1>
      <div class="detail-blog-content">
        12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
      </div>
      <p>
        Ketimpangan sumber daya manusia (SDM) di sektor digital masih
        menjadi isu yang belum terpecahkan. Berdasarkan penelitian
        ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
        meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Quam, molestiae
        numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
        eligendi debitis?
      </p>
      <div style="text-align: right;">
        <span style="font-size: 15px; color: grey;">1 hour ago</span>
      </div>
    </div>
  </div>
    `
}