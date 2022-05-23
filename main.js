nosex=0;
nosey=0;

function preload(){
    img = loadImage('https://i.postimg.cc/PrCSzgN0/Clown-nose.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0,0,300,300);
    image(img,nosex,nosey,40,40);
}

function modelLoaded(){
    console.log('poseNet is instialized')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-20;
        nosey=results[0].pose.nose.y-20;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function take_snapshot(){
    save('filter.png');
}