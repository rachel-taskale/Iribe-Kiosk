

let keyboardPic= document.querySelector("#keyboard")
let button = document.querySelector("button")
const search_filters = {}


document.getElementById("search").onclick = function() {
    location.href = "./search-results.html"
}


document.getElementById("add-filter").onclick = function() {
    var t = document.getElementById("query").value;
    console.log(`input: ${t}`)
    search_filters[t] = 1
    console.log(search_filters)
    ref = document.getElementById("filters-list")
    ref.innerHTML += ` <div class="column">
                            <div class="filter-choice">
                                <p id="filter-val">${t}</p>
                                <button class="delete-but" onclick="processReq(\`${t}\`)" >&#10005;</button>
                            </div>
                    </div>`

    console.log(ref)
}

function processReq(val){
    console.log(`val: ${val}`)
    delete search_filters[val]
    console.log(search_filters)
    ref = document.getElementById("filters-list")
    ref.innerHTML = ``
    for (i in search_filters){
        console.log(i)
        ref.innerHTML += `<div class="column">
                                <div class="filter-choice">
                                    <p id="filter-val">${i}</p>
                                    <button class="delete-but" onclick="processReq(\`${i}\`)" >&#10005;</button>
                                </div>
                        </div>`
    }
}

