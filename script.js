document.addEventListener("DOMContentLoaded", () => {

    // -------------------------
    // Dark Mode Toggle
    // -------------------------
    const toggle = document.createElement("button");
    toggle.textContent = "🌙 Dark Mode";
    toggle.style.cssText = `
        position:fixed;
        top:20px;
        right:20px;
        padding:10px 15px;
        font-size:16px;
        cursor:pointer;
        border-radius:8px;
        z-index:999;
    `;
    document.body.appendChild(toggle);

    let dark = false;

    toggle.addEventListener("click", () => {
        dark = !dark;

        if (dark) {
            document.body.style.background = "#1b1b1b";
            document.body.style.color = "white";
            document.querySelector("header").style.background = "#333";
            document.querySelector("footer").style.background = "#333";
            toggle.textContent = "☀ Light Mode";
        } else {
            document.body.style.background = "white";
            document.body.style.color = "black";
            document.querySelector("header").style.background = "azure";
            document.querySelector("footer").style.background = "white";
            toggle.textContent = "🌙 Dark Mode";
        }
    });

    // -------------------------
    // Live Search
    // -------------------------
    const search = document.querySelector(".sidebar input");
    const posts = document.querySelectorAll(".post1, .post2, .post3");

    search.addEventListener("keyup", () => {
        let value = search.value.toLowerCase();

        posts.forEach(post => {
            let title = post.querySelector("h2").innerText.toLowerCase();

            if (title.includes(value)) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        });
    });

    // -------------------------
    // Read More Buttons
    // -------------------------
    document.querySelectorAll(".readmore").forEach(button => {

        button.addEventListener("click", () => {

            const desc = button.previousElementSibling;

            if (button.innerText === "Read More") {
                desc.innerHTML =
                    "This is a detailed description of the blog post. It contains extra information about the article, interesting facts, and engaging content for readers.";
                button.innerText = "Show Less";
            } else {
                desc.innerHTML = "Description...";
                button.innerText = "Read More";
            }

        });

    });

    // -------------------------
    // Scroll To Top Button
    // -------------------------
    const topBtn = document.createElement("button");

    topBtn.innerHTML = "⬆";
    topBtn.style.cssText = `
        position:fixed;
        bottom:20px;
        right:20px;
        width:55px;
        height:55px;
        border:none;
        border-radius:50%;
        background:#0077ff;
        color:white;
        font-size:22px;
        cursor:pointer;
        display:none;
        box-shadow:0 0 10px rgba(0,0,0,.4);
        z-index:999;
    `;

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 250)
            topBtn.style.display = "block";
        else
            topBtn.style.display = "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // -------------------------
    // Fade-in Animation
    // -------------------------
    posts.forEach(post => {
        post.style.opacity = "0";
        post.style.transform = "translateY(40px)";
        post.style.transition = "0.6s";
    });

    function revealPosts() {

        posts.forEach(post => {

            const top = post.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {
                post.style.opacity = "1";
                post.style.transform = "translateY(0)";
            }

        });

    }

    revealPosts();
    window.addEventListener("scroll", revealPosts);

    // -------------------------
    // Menu Highlight
    // -------------------------
    document.querySelectorAll(".content a").forEach(link => {

        link.addEventListener("click", () => {

            document.querySelectorAll(".content a").forEach(a => {
                a.style.background = "";
                a.style.color = "";
            });

            link.style.background = "#0077ff";
            link.style.color = "white";

        });

    });

});