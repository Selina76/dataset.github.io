let myGraph_age = document.getElementById('myGraph_age');

let trace1 ={};
trace1.mode ="markers+lines";
trace1.type ="scatter";
trace1.name ="桃園市男性初婚者平均年齡";
trace1.marker={
    color:'blue',
    size:5
};
trace1.x =[];
trace1.y =[];
trace1.visible =true;
trace1.text=[];
for(let i=0;i<set_marry_age_male.length;i++){
    trace1.x[i] =set_marry_age_male[i][0];
    trace1.y[i] =set_marry_age_male[i][1];
    trace1.text[i] =set_marry_age_male[i][2];
}

let trace2 = {};
trace2.mode = "markers+lines";
trace2.type = "scatter";
trace2.name = "桃園市女性初婚者平均年齡";
trace2.visible = false;
trace2.marker = {
    color:'red',
    size:5
};
trace2.x = [];
trace2.y = [];
trace2.text = [];
for (let i = 0; i < set_marry_age_female.length; i++) {
    trace2.x[i] = set_marry_age_female[i][0];
    trace2.y[i] = set_marry_age_female[i][1];
    trace2.text[i] = set_marry_age_female[i][2];
}


let trace3 = {};
trace3.mode = "lines+markers+text";
trace3.type = "scatter";
trace3.name = "桃園市生母生育第1胎平均年齡";
trace3.visible = false;
trace3.marker = {
    color:'green',
    family:"Times New Roman, sans-serif",
    size:5
};
trace3.x = [];
trace3.y = [];
trace3.text = [];
trace3.textposition="top middle";
trace3.textfont={
    color:'black',
    size:10,
    
};

trace3.line={shape:'spline',}

for (let i = 0; i < set_mom_age.length; i++) {
    trace3.x[i] = set_mom_age[i][0];
    trace3.y[i] = set_mom_age[i][1];
    trace3.text[i] = set_mom_age[i][2];
}

let data_age =[];
data_age.push(trace1);
data_age.push(trace2);
data_age.push(trace3);

let layout_age ={
    margin:{
        t:70
    },
    xaxis:{
        range:[92,112],
        title:"year"
    },
    yaxis:{
        range:[26,33],
        title:"age"
    },
    // title:'',
    updatemenus:[
        {
            y:1.2,
            x:0.2,
            bgcolor:'white',
            bordercolor:'gray',
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false, false]],
                    label:'桃園市男性初婚者平均年齡'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, true, false]],
                    label: '桃園市女性初婚者平均年齡'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true]],
                    label: '桃園市生母生育第1胎平均年齡'
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, true, true]],
                    label: 'Display All'
                },
            ]
        }
    ]
};
Plotly.newPlot(myGraph_age, data_age, layout_age);




//https://plotly.com/javascript/
//https://plotly.com/javascript/reference/index/