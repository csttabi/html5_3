// elemek kiválasztása
// @param selector: (string) az elemet kiválasztó szelektor.

function _q( selector ){
    
    //elemek kiválasztása
    var elements = document.querySelectorAll( selector );
    return elements;
};

// Beviteli mező megjelenítése

function showProfile() {
    var div = document.querySelector('.profile-div');
    
    if(div.classList.contains('show')){
        
        div.classList.remove('show');    
        
    } else {
        
        div.classList.add('show');
    }
    
};