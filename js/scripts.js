function showFunction(value) {
    const x = document.getElementsByClassName('textoUm');
    const y = document.getElementsByClassName('textoDois');
    const z = document.getElementsByClassName('textoTres');
    const home = document.getElementsByClassName('homeText');
    
    switch(value) {
        case 1:
            x[0].style.display = 'block'; x[1].style.display = 'block';
            y[0].style.display = 'none'; y[1].style.display = 'none';
            z[0].style.display = 'none'; z[1].style.display = 'none';
            home[0].style.display = 'none'; home[1].style.display = 'none';
            break;
        case 2:
            x[0].style.display = 'none'; x[1].style.display = 'none';
            y[0].style.display = 'block'; y[1].style.display = 'block';
            z[0].style.display = 'none'; z[1].style.display = 'none';
            home[0].style.display = 'none'; home[1].style.display = 'none';
            break;
        case 3:
            x[0].style.display = 'none'; x[1].style.display = 'none';
            y[0].style.display = 'none'; y[1].style.display = 'none';
            z[0].style.display = 'block'; z[1].style.display = 'block';
            home[0].style.display = 'none'; home[1].style.display = 'none';
            break;
        default:
            x[0].style.display = 'none'; x[1].style.display = 'none';
            y[0].style.display = 'none'; y[1].style.display = 'none';
            z[0].style.display = 'none'; z[1].style.display = 'none';
            home[0].style.display = 'block'; home[1].style.display = 'block';
            break;
    }
    }
    