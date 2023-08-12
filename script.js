const letters=document.querySelectorAll('td');
var refword=['HORSE','PIG','GOAT','TIGER','FISH',
    'DUCK','CAT','DOG','COW'];
var word=[];
var worddiv=[];
var startgame=false;

letters.forEach((el)=>{
    el.addEventListener('mousedown',()=>{
        word.push(el.textContent);
        worddiv.push(el);
        el.classList.add('condition');
        startgame=true;
    })
});

letters.forEach((el)=>{
    el.addEventListener('mousemove',()=>{
        if(startgame && !word.includes(el.textContent)){
            word.push(el.textContent);
            worddiv.push(el);
            el.classList.add('condition');
        }
    })
});
function checkword(str){
    for(let i=0; i<refword.length;i++){
        if (str==refword[i]){
            return true;
        }
    }return false;
}
letters.forEach((el)=>{
    el.addEventListener('mouseup',()=>{
        startgame=false;
        //checkword(word.join(''));
        if(checkword(word.join(''))){
            for(let i=0;i<worddiv.length;i++){
                worddiv[i].setAttribute('class','select')
            }
        }
        for(let i=0;i<worddiv.length;i++){
            worddiv[i].classList.remove('condition');
        }
        word=[];
        worddiv=[];
    })
})