let obj = document.getElementById('heading');
let sub_obj=document.getElementById('sub-conatainer');
let container=document.getElementById('container');
sub_obj.addEventListener('mouseup',myfun);

function myfun(){
    sub_obj.style.transform="rotateY(180deg)";
}