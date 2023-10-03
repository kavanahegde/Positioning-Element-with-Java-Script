var x=100,y=150;
function pos(dx,dy) {
    if (!document.getElementById) return;
    x+=30*dx;
    y+=30*dy;
    obj=document.getElementById("square");
    obj.style.top=y + "px";
    obj.style.left=x + "px";
}
function hidesquare(){
    if (!document.getElementById) return;
    obj=document.getElementById("square");
    obj.style.disply="none";

}
function showsquare(){
    if (!document.getElementById) return;
    obj=document.getElementById("square");
    obj.style.disply="block";
}