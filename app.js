const sidebar = document.querySelector(".sidebar")
const toggleBtn = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")

toggleBtn.addEventListener("click", function(){
    
    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar")
    // }
    // else{
    //     sidebar.classList.add("show-sidebar")
    // }

    sidebar.classList.toggle("show-sidebar")
})