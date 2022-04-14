


search_filters =['cmsc131']

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
    },
    "Clifford Bakalian": {
        "name": "Clifford Bakalian",
        "email": "cbakalia@umd.edu",
        "phone number": "N/A",
        "room number": "IRB2238"
     },
     "Abhinav Bhatele": {
        "name": "Abhinav Bhatele",
        "email": "bhatele@cs.umd.edu",
        "phone number": "3014054507",
        "room number": "IRB5218"
     },

}
const class_per_professor={
'cmsc131': ['Daniel Abadi', 'Ashok Agrawala', 'Clifford Bakalian'],
'cmsc132' : ['John Aloimonos',  "Abhinav Bhatele"]
}



document.getElementById('show-res').onclick = function(){
    console.log(class_per_professor[search_filters[0]])
    arr = class_per_professor[search_filters[0]]
    id_name = 0
    arr.forEach( function(name){

        console.log(name)
        document.getElementById('search-results').innerHTML +=  `
        <button class="profile-button" id="profile_${id_name}">
        ${directory[name]["name"]}
        </button>

        `
        id_name+=1
        }
        
        
    )
    
}


document.getElementById("profile_0").onclick = function(){
    console.log(`made it `)
    location.href = "./profile.html"
}









