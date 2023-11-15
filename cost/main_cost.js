
let myGraph_cost = document.getElementById('myGraph_cost');

let trace7 = {};

trace7.type= "pie";
trace7.title = "二月台南行";
trace7.labels= [];
trace7.values= [];
trace7.domain ={
    row:0,
    column:0
};
trace7.hole=0.4;
trace7.hoverinfo= "label+percent+value";

for(let x= 0; x<cost_1.length; x++){
    trace7.labels[x] = cost_1[x]['name'];
    trace7.values[x] = cost_1[x]['cost'];
}

let trace8 = {};
trace8.type= "pie";
trace8.title = "六月台南行";
trace8.labels= [];
trace8.values= [];
trace8.domain ={
    row:0,
    column:1
};
trace8.hole=0.4;
trace8.hoverinfo= "label+percent+value";

for(let x= 0; x<cost_2.length; x++){
    trace8.labels[x] = cost_2[x]['name'];
    trace8.values[x] = cost_2[x]['cost'];
}


let trace9 = {};
trace9.type= "pie";

trace9.title = "七月花蓮行";
trace9.labels= [];
trace9.values= [];
trace9.domain ={
    row:1,
    column:0
};
trace9.hole=0.4;
trace9.hoverinfo= "label+percent+value";


for(let x= 0; x<cost_3.length; x++){
    trace9.labels[x] = cost_3[x]['name'];
    trace9.values[x] = cost_3[x]['cost'];
}


let trace0 = {};
trace0.type= "pie";
trace0.title = "total";

trace0.marker={
     pattern_shape_sequence:[".", "x", "+", "-","","|"],
 }
trace0.labels= [];
trace0.values= [];
trace0.domain ={
    row:1,
    column:1
};
trace0.hole=0.4;
trace0.hoverinfo= "label+percent+value";
trace0.marker={
    pattern:{
        shape:[".", "x", "+", "-","/","|"],
        solidity:0.5
},
};

trace0.textfont={
    color:'black',
    size: 27
};




for(let x= 0; x<cost_4.length; x++){
    trace0.labels[x] = cost_4[x]['name'];
    trace0.values[x] = cost_4[x]['cost'];
}


let data_cost= [];
data_cost.push(trace7);
data_cost.push(trace8);
data_cost.push(trace9);
data_cost.push(trace0);

let layout_cost= {
    margin:{
        t:10,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    },
    
};

Plotly.newPlot(myGraph_cost, data_cost, layout_cost);