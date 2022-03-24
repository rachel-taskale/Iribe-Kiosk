

//   let routes={};
//   let templates = {};
//   let app_div = document.getElementById('button-group');


//   // create navigation element to other pages from main (landing) page
//   function landing_page(){
//     let div = document.createElement('div');
//     let link = document.createElement('a');
//     link.href = '#/map';
//     link.innerText='<h1>map</h1>';
//     div.appendChild('./index.html');
//     app_div.appendChild(div);


//   }
// // create navigation element to other pages from map page
//   function map_page(){
//     let div = document.createElement('div');
//     let link = document.createElement('a');
//     link.href = '#/';
//     link.innerText='<h1>Home</h1>';
//     div.appendChild(link);
//     app_div.appendChild(div);

//   }



//   function directory_search_page(){

//   }

//   function schedule_page(){

//   }


// // If the template given is a funciton then on the path store as a routes object
// // If not then store it in the templates arr
//   function route (path, template){    
//     if (typeof template === 'function'){
//       return routes[path] = template;
//     }else if (typeof template === 'string'){
//       return routes[path] = templates[template];
//     }else{
//       return;
//     };
//   };


//   function template (name, templateFunction){
//     return templates[name] = templateFunction;
//   }

//   template('home',function(){
//     landing_page();
//   });

//   template('about', function(){
//     map_page();
//   });

//   route('/', 'landing_page');
//   route('/map', 'map_page');

//   function resolveRoute(route){
//     try{
//       return routes[route];
//     } catch(e){
//       throw new Error (`Route ${route} not found.`);
//     }
//   }

//   function router(evt){
//     let url =  window.location.hash.slice(1) || '/';
//     let route = resolveRoute(url);

//     route();
//   }

//   window.addEventListener('load', router);
//   window.addEventListener('hashchange', router);