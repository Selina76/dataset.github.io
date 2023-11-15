d3.csv('HIV/HIV.csv').then(
    res =>{
    console.log('Local CSV:',res);
    drawBarChart(res);
    }
    );
    function drawBarChart(res){
        console.log(res);
        let myGraph_HIV = document.getElementById('myGraph_HIV');
        let trace4 = {};
        trace4.type= "bar";
        trace4.name = "male";
        trace4.x= [];
        trace4.y= [];
        trace4.marker ={color:'blue'};
        trace4.opacity =0.7;
        for(let i=0;i<res.length;i++){
            trace4.x[i] = res[i]['year'];
            trace4.y[i]= res[i]['male'];
        }
        trace4.text = trace4.y;
        // trace4.textfont = {
        //     color: 'black',
        //     size: 20
        // };
        
        let trace5 = {};
        trace5.type= "bar";
        trace5.name = "female";
        trace5.x= [];
        trace5.y= [];
        trace5.marker ={color:'red'};
        trace5.opacity =0.7;

        for(let i=0;i<res.length;i++){
            trace5.x[i] = res[i]['year'];
            trace5.y[i]= res[i]['female'];
            trace5.text = trace5.y;
            // trace5.textfont = {
            //     color: 'black',
            //     size: 20
            // };
        }
    
        
        let data_HIV = [];
        data_HIV.push(trace4);
        data_HIV.push(trace5);

        let layout_HIV={
            margin:{
                t:10
            },
            xaxis:{
                range:[92,112],
                title:"year"
            },
            yaxis:{
                range:[0,520],
                title:"number of people infected HIV"
            },

        
             barmode:'stack',
             titile:"桃園市HIV感染人數"
        };
     Plotly.newPlot(myGraph_HIV, data_HIV, layout_HIV);
}