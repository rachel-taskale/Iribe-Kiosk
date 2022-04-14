


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


document.getElementById("home").onclick = function() {
    location.href = "../landing-page.html"
}

document.getElementById("back").onclick = function() {
    location.href = "./directory-search.html"
}




document.getElementById("profile_0").onclick = function(){
    console.log(`made it `)
    location.href = "./daniel_profile.html"
}


document.getElementById("profile_1").onclick = function(){
    console.log(`made it `)
    location.href = "./ashok_profile.html"
}


document.getElementById("profile_2").onclick = function(){
    console.log(`made it `)
    location.href = "./clifford_profile.html"
}









