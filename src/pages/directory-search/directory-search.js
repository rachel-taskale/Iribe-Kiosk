const search_filters = {}
const directory = {
        'Daniel Abadi': {
            "name" : "Daniel Abadi",
            "email": "N/A",
            "phone number": "3014059695",
            "room number": "IRB5156"},

        'Ashok Agrawala': {
            "name": "Ashok Agrawala",
            "email": "agrawala@cs.umd.edu",
            "phone number": "3014052525",
            "room number": "IRB5204"

        },
        'John Aloimonos': {
            "name": "John Aloimonos",
            "email": "yiannis@cs.umd.edu",
            "phone number": "3014051743",
            "room number": "IRB4214"
        }
    }
const class_per_professor={
    'cmsc131': ['Daniel Abadi', 'Ashok Agrawala' ],
    'cmsc132' : ['John Aloimonos']
}


document.getElementById("home").onclick = function() {
    location.href = "../landing-page.html";

}

document.getElementById("search").onclick = function() {
    location.href = "./search-results.html"
    ref = document.getElementById("search-results")
    console.log("made it here!")
    res = []
    for( i in search_filters){ 
        console.log(i)
        for (j in class_per_professor.get){
            console.log(class_per_professor[j])
            console.log(directory[j])
            res.push([directory[j]])
        }
    }
    console.log(res)
  
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


