$(() => {
    let nextMove = 'X';
    $('.column').click(function(){
        $(this).text('');
    });
    $('.column').click(function(){
        if(!$(this).hasClass('marked')){
            $(this).addClass('marked');
            $(this).text(nextMove);
            nextMove = nextMove == 'X' ? 'O' : 'X';
            setTimeout(() => validateWinner(), 2000);
        }
    })

    function clearAll(){
        $('.column').removeClass('marked');
        $('.column').text('');
    }
    
    function validateWinner(){
        let line1column1 = $('#line_1_column_1').text();
        let line1column2 = $('#line_1_column_2').text();
        let line1column3 = $('#line_1_column_3').text();
        let line2column1 = $('#line_2_column_1').text();
        let line2column2 = $('#line_2_column_2').text();
        let line2column3 = $('#line_2_column_3').text();
        let line3column1 = $('#line_3_column_1').text();
        let line3column2 = $('#line_3_column_2').text();
        let line3column3 = $('#line_3_column_3').text();
        if(line1column1 == line1column2 && line1column2 == line1column3 && line1column1 != '' && line1column1 != undefined){
            alert(`${line1column1} ganhou!`);
            clearAll();
        }
        if(line2column1 == line2column2 && line2column2 == line2column3 && line2column1 != '' && line2column1 != undefined){
            alert(`${line2column1} ganhou!`);
            clearAll();
        }
        if(line3column1 == line3column2 && line3column2 == line3column3 && line3column1 != '' && line3column1 != undefined){
            alert(`${line3column1} ganhou!`);
            clearAll();
        }
        if(line1column1 == line2column1 && line2column1 == line3column1 && line1column1 != '' && line1column1 != undefined){
            alert(`${line1column1} ganhou!`);
            clearAll();
        }
        if(line1column2 == line2column2 && line2column2 == line3column2 && line1column2 != '' && line1column2 != undefined){
            alert(`${line1column2} ganhou!`);
            clearAll();
        }
        if(line1column3 == line2column3 && line2column3 == line3column3 && line1column3 != '' && line1column3 != undefined){
            alert(`${line1column3} ganhou!`);
            clearAll();
        }
        if(line1column1 == line2column2 && line2column2 == line3column3 && line1column1 != '' && line1column1 != undefined){
            alert(`${line1column1} ganhou!`);
            clearAll();
        }
        if(line1column3 == line2column2 && line2column2 == line3column1 && line1column3 != '' && line1column3 != undefined){
            alert(`${line1column3} ganhou!`);
            clearAll();
        }
        if($('.marked').length == 9){
            alert('Deu velha!');
            clearAll();
        }
    }
})