window.onload = function() {
    const motionCanvas = document.getElementById("motionCanvas");
    const ctx = motionCanvas.getContext("2d");

    motionCanvas.width = window.innerWidth;
    motionCanvas.height = window.innerHeight;

    let x = window.innerWidth  / 2;
    let y = window.innerHeight / 2;
    //화면 중앙

    let canvasAnimation = false;
    let animationTime = null;
    //애니메이션 작동 변수

    ctx.translate(x, y);
    ctx.fillRect(-50, -50 , 100, 100);
    ctx.fillStyle = "black";
    //화면 기본 네모

    const rectangle = {
        x: -50,
        y: -50,
        dx: ,
        dy: 1,
    }

    function base() {
        ctx.fillRect(rectangle.x, rectangle.y , 100, 100);
        ctx.fillStyle = "black";
    }
    //시작모션 사각형

    let angle = 0;
    //회전 애니메이션 변수

    // let yPoint = 0;
    // //b버튼 애니메이션 변수

    function animationA(timestamp) {
        if (!animationTime) {
            animationTime = timestamp;
        }
        const time = (timestamp - animationTime) / 1000;
        //애니메이션 타이머 저장

        ctx.clearRect(-x, -y, motionCanvas.width, motionCanvas.height);
        
        base();

        rectangle.x += rectangle.dx;

        if(rectangle.x + 50 > motionCanvas.width / 2 || rectangle.x - 50 < -motionCanvas.width / 2) {
            rectangle.dx *= -1
        }

        if(rectangle.y + 50 > motionCanvas.height / 2 || rectangle.y - 50 < -motionCanvas.height / 2) {
            rectangle.dx *= -1
        }
        

        if(time > 10) {
            canvasAnimation = false;
            animationTime = null;
            angle = 0;
            ctx.clearRect(-x, -y, motionCanvas.width, motionCanvas.height);
            base()
            return
        }
        //타이머 종료

        if(canvasAnimation) {
            requestAnimationFrame(animationA);
        }
    }
    // r버튼 애니메이션 함수

    // function animationB(timestamp) {
    //     if (!animationTime) {
    //         animationTime = timestamp;
    //     }
    //     const time = (timestamp - animationTime) / 1000;
    //     //애니메이션 타이머 저장

    //     ctx.save();
    //     ctx.fillStyle = "black";
        
        
    //     ctx.fillRect(-300, -50 , 100, 100);
    //     ctx.fillRect(-50, -50 , 100, 100);
    //     ctx.fillRect(200, -50 , 100, 100);

    //     yPoint += 2;

    //     ctx.fillRect(-300, -50 - yPoint , 100, 100);
    //     ctx.fillRect(-50, -50 - yPoint , 100, 100);
    //     ctx.fillRect(200, -50 - yPoint , 100, 100);

        
    //     ctx.restore();

    //     if(time > 10) {
    //         canvasAnimation = false;
    //         animationTime = null;
    //         yPoint = 0;
    //         ctx.clearRect(-x, -y, motionCanvas.width, motionCanvas.height);
    //         base()
    //         return
    //     }
    //     //타이머 종료

    //     if(canvasAnimation) {
    //         requestAnimationFrame(animationB);
    //     }
    // }
    // //b버튼 애니메이션 함수

    // function animationC1() {

    //     ctx.save();
    //     ctx.fillStyle = "blue";
    //     ctx.rotate(angle);

        
    //     ctx.fillRect(-50, -50 , 400, 100);
        

    //     ctx.restore();

    //     angle += Math.PI / 180

    //     if(angle >= 2 * Math.PI) {
    //         animationTime = null;
    //         angle = 0;
    //         animationC2()
    //         return
    //     }
    //     //타이머 종료


    //     if(canvasAnimation) {
    //         requestAnimationFrame(animationC1);
    //     }
    // }
    // //c버튼 애니메이션 함수

    // function animationC2(timestamp) {
    //     if (!animationTime) {
    //         animationTime = timestamp;
    //     }
    //     const time = (timestamp - animationTime) / 1000;
    //     //애니메이션 타이머 저장

    //     ctx.save();
    //     ctx.fillStyle = "green";
    //     ctx.rotate(angle);

        
    //     ctx.fillRect(-50, -50 , 400, 100);
        

    //     ctx.restore();

    //     angle += Math.PI / 180

    //     if(time > 10) {
    //         canvasAnimation = false;
    //         animationTime = null;
    //         angle = 0;
    //         ctx.clearRect(-x, -y, motionCanvas.width, motionCanvas.height);
    //         base()
    //         return
    //     }
    //     //타이머 종료

    //     if(canvasAnimation) {
    //         requestAnimationFrame(animationC2);
    //     }
    // }

    function animationR(timestamp) {
        if (!animationTime) {
            animationTime = timestamp;
        }
        const time = (timestamp - animationTime) / 1000;
        //애니메이션 타이머 저장

        ctx.clearRect(-x, -y, motionCanvas.width, motionCanvas.height);

        ctx.rotate(angle);
        
        base();

        angle += Math.PI / 2880

        if(angle >= 2 * Math.PI) {
            canvasAnimation = false;
            animationTime = null;
            angle = 0;
            ctx.clearRect(-x, -y, motionCanvas.width, motionCanvas.height);
            base()
            return
        }
        //타이머 종료

        if(canvasAnimation) {
            requestAnimationFrame(animationR);
        }
    }
    // r버튼 애니메이션 함수

    function press(e) {
        if(e.key === "a") {
            canvasAnimation = true;
            animationA();
            requestAnimationFrame(animationA);
        }
        else if(e.key === "b") {
            canvasAnimation = true;
            animationB();
        }
        else if(e.key === "c" ) {
            canvasAnimation = true;
            animationC1();
        }
        else if(e.key === "r") {
            canvasAnimation = true;
            animationR();
            requestAnimationFrame(animationR);
        }

    }

    document.addEventListener("keydown",press);


}