lipsx=0;
lipsy=0;
function preload()
{
lip=loadImage("https://i.postimg.cc/6qRzWkLP/ef812dbaddc7fec1821fda4584d379a4.png");
}
function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses)
}
function modelLoaded()
{
console.log("PoseNet is Initialized")
}
function gotPoses(results)
{
 if(results.length>0)
{
console.log(results)
lipsx=results[0].pose.nose.x-15;
lipsy=results[0].pose.nose.y+20;
 }
}
function draw()
{
image(video,0,0,300,300);
image(lip,lipsx,lipsy,40,25);

}
function Snapshot()
{
 save("Lipstick_Filter_Image.png")
}