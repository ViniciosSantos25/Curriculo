function show(el){
    const display = document.getElementById(el).style.display;
    if(display == 'none'){
        document.getElementById(el).style.display = 'block';
    }else{
        document.getElementById(el).style.display = 'none';
    }
}//função para esconder e mostrar o conteudo das "areas" de informação