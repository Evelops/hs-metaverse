import baseSene from "../../Utility/baseSene.js";
import {I_PLAYER, I_CLASSROOM, I_SQUARE, I_PORTAL, M_SQUARE} from "../constants/assets.js";
import {Square,ClassRoom} from "../constants/scenes.js";

export default class square extends baseSene {  

  constructor() {
    super(Square);
  }

  // 캐릭터에 대한 객체 선언은 여기서 진행
  init(data) {
    console.log(`data: ${data}`);
    // this.player = new Player(this, this.key, this.getPosition(data));
    super.init(this.getPosition(data));
    console.log(`data position : ${this.getPosition(data)}`);  
  }



  // 캐릭터에 대한 create 영역도 여기서 진행하게끔 진행.
  create() {
    


    console.log("create");

    super.create(M_SQUARE,I_SQUARE);

    // let collision = () => this.scene.start(ClassRoom);

    // const map = this.make.tilemap({ key: `${M_SQUARE}` });
    // const tileset = map.addTilesetImage("hs_tiles_source",`${I_SQUARE}`,32,32,0,0);

    // // collision layer define
    // const spawnPoint = map.findObject("object",(obj) => obj.name === "spawn_point");
    // const portal = map.findObject("teleport", (obj) => obj.name === "portal");

    // /**
    //  * tileMap layer define
    //  * tiledGUI 툴에서 지정한 layer에서 지정한 nameSpace로 각 layer를 나눈다.
    //  * */
    // this.background = map.createLayer("background", tileset, 0, 0);
    // const interactive = map.createLayer("interactive", tileset, 0, 0);
    // const location = this.physics.add.staticSprite(portal.x,portal.y,I_PORTAL); // cloassroom으로 이동할 좌표값을 sprite 객체로 지정.

    // // 각 layer 별 충돌 지정부분 활성화.
    // this.background.setCollisionByProperty({ collides: true });
    // interactive.setCollisionByProperty({ collides: true });
    
    // let player = this.player.players[this.player.socket.id];
  
    // // console.log(`player ==> ${player}`);
    // console.log(this.player.socket.id);
    // console.log(this.player.socket);
    // console.log(this.player.socket.id);
    // // console.log(this.player.players[this.player.socket.id]);
    // this.createSpeechBubble(portal.x, portal.y-90, 100, 50, '클래스룸에 입장해주세요');

    // player & layer 별 충돌 지정.
    // this.physics.world.addCollider(player, this.background);
    // this.physics.world.addCollider(this.player, interactive);

    // static layer로 지정한 portal 충돌시 classroom 으로 scene 전환.
    // this.physics.add.collider(player,location,collision,undefined,this);


       // this.createJoystick(); // joy stick 활성화. update 이벤트는 코드 뜯어 고쳐야함.
    // this.initKeyboard(); //joystick & keyboard로 캐릭터 움직임에 대한 정의를 해둔 메서드.

    /** 테스트용 코드*/
    // player create
    // this.player.create();


  //   this.input.keyboard.on('keyup', (event) => {
  //     if (event.keyCode >= 37 && event.keyCode <= 40) {
  //         this.player.stop();
  //     }
  // });

  // const socket = io('ws://3.39.249.46:8080',{
  //   cors: { origin: '*' }
  // });

  // socket.emit("joinMeta","eyJhbGciOiJzaGEyNTYiLCJ0eXAiOiJKV1QifS57ImV4cCI6MTY3MDkyNDAwMiwiaWF0IjoxNjcwOTAyNDAyLCJVc2VyX0lEIjoiTXpJMCIsIlVfTmFtZSI6IjdabU43WU9jN0oyWSIsIlVfRW1haWwiOiJaMmhrZUc5a2JXeEFibUYyWlhJdVkyOXQiLCJUaW1lWm9uZSI6IkxURXkifS4xYmQ4OWM0ZDJkMjYzNzkzOTFkYTc3M2I5NDJmN2ExMzI3Y2U4NGE1YzJlZjIxNjJiOTQ0ZDRhYWNiMTM1MzIw");

  // // 소켓 서버에서 복호화 실패시, 작업 내용 작성.
  // socket.on('errorMsg',(data)=>{
  //   console.log(` err : ${data}`);
  // });

  // // 소켓 서버에서 복호화 성공시, 작업 내용 작성.
  // socket.on('succMeta',(data)=>{
  //   console.log(`succ : ${data}`);
  // });
  // console.log(` get succMeta -> ${values}`);
  // this.player = new player(this, spawnPoint.x, spawnPoint.y,'UserID');



  /** 사용 부분.*/
    // canvas 내부에 text 문구 띄우기 위한 구문. 테스트나 사용법 안내할 때, 주로 사용.
    // this.add.text(16, 16, "press 'D' you can use debug mode", {
    //     font: "18px monospace",
    //     fill: "#000000",
    //     padding: { x: 20, y: 10 },
    //     backgroundColor: "#ffffff", // #00ff0000 -> rgb 투명.
    //   })
    //   .setScrollFactor(0);

    // // debuging mode -> phaser에서 제공하는 디버깅 함수(테스트에서만 사용)
    // this.input.keyboard.once("keydown-D", (event) => {
    //   this.physics.world.createDebugGraphic();

    //   // Create worldLayer collision graphic above the player, but below the help text
    //   const graphics = this.add.graphics().setAlpha(0.75).setDepth(20);

    //   this.background.renderDebug(graphics, {
    //     tileColor: null,
    //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
    //     faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    //   });

    //   interactive.renderDebug(graphics, {
    //     tileColor: null,
    //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
    //     faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    //   });
    // });
  }

  registerCollision() {
    console.log('regiseterCollision');

    // let collision = () => this.scene.start(ClassRoom);

    // const map = this.make.tilemap({ key: `${M_SQUARE}` });
    // const tileset = map.addTilesetImage("hs_tiles_source",`${I_SQUARE}`,32,32,0,0);

    // // collision layer define
    // const spawnPoint = map.findObject("object",(obj) => obj.name === "spawn_point");
    // const portal = map.findObject("teleport", (obj) => obj.name === "portal");

    // /**
    //  * tileMap layer define
    //  * tiledGUI 툴에서 지정한 layer에서 지정한 nameSpace로 각 layer를 나눈다.
    //  * */
    // this.background = map.createLayer("background", tileset, 0, 0);
    // this.interactive = map.createLayer("interactive", tileset, 0, 0);
    // this.location = this.physics.add.staticSprite(portal.x,portal.y,I_PORTAL); // cloassroom으로 이동할 좌표값을 sprite 객체로 지정.

    // // 각 layer 별 충돌 지정부분 활성화.
    // this.background.setCollisionByProperty({ collides: true });
    // this.interactive.setCollisionByProperty({ collides: true });
    
    let player = this.player.players[this.player.socket.id];
  
    // console.log(`player ==> ${player}`);
    // console.log(this.player.socket.id);
    // console.log(this.player.socket);
    // console.log(this.player.socket.id);
    // console.log(this.player.players[this.player.socket.id]);
    this.createSpeechBubble(this.portal.x, this.portal.y-90, 100, 50, '클래스룸에 입장해주세요');

    // player & layer 별 충돌 지정.
    this.physics.world.addCollider(player, this.background);
    this.physics.world.addCollider(player, this.interactive);

    
  //   this.add.text(16, 16, "press 'D' you can use debug mode", {
  //     font: "18px monospace",
  //     fill: "#000000",
  //     padding: { x: 20, y: 10 },
  //     backgroundColor: "#ffffff", // #00ff0000 -> rgb 투명.
  //   })
  //   .setScrollFactor(0);

  // // debuging mode -> phaser에서 제공하는 디버깅 함수(테스트에서만 사용)
  // this.input.keyboard.once("keydown-D", (event) => {
  // this.physics.world.createDebugGraphic();

  //   // Create worldLayer collision graphic above the player, but below the help text
  //   const graphics = this.add.graphics().setAlpha(0.75).setDepth(20);

  //   this.background.renderDebug(graphics, {
  //     tileColor: null,
  //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
  //     faceColor: new Phaser.Display.Color(40, 39, 37, 255),
  //   });

  //   this.interactive.renderDebug(graphics, {
  //     tileColor: null,
  //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
  //     faceColor: new Phaser.Display.Color(40, 39, 37, 255),
  //   });
  // });
}


  // update() {
  //   // this.player.update(); //player의 위치 갱신. 기존코드
  // //   this.player.update({
  // //     isUp: this.keyboard.isUp(),
  // //     isDown: this.keyboard.isDown(),
  // //     isLeft: this.keyboard.isLeft(),
  // //     isRight: this.keyboard.isRight(),
  // // });
  // }

    /**
   * sprite 에 bubble text 추가하는 메서드 
   * @param {x} bubble  x 좌표 
   * @param {y} bubble  y 좌표
   * @param {width} bubble width
   * @param {hegiht} bubble hegiht 
   * @param {quote} buuble content 
  */

  createSpeechBubble (x, y, width, height, quote)
{
    const bubbleWidth = width;
    const bubbleHeight = height;
    const bubblePadding = 10;
    const arrowHeight = bubbleHeight / 4;

    const bubble = this.add.graphics({ x: x, y: y });

    //  Bubble shadow
    bubble.fillStyle(0x222222, 0.5);
    bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16);

    //  Bubble color
    bubble.fillStyle(0xffffff, 1);

    //  Bubble outline line style
    bubble.lineStyle(4, 0x565656, 1);

    //  Bubble shape and outline
    bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);
    bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

    //  Calculate arrow coordinates
    const point1X = Math.floor(bubbleWidth / 7);
    const point1Y = bubbleHeight;
    const point2X = Math.floor((bubbleWidth / 7) * 2);
    const point2Y = bubbleHeight;
    const point3X = Math.floor(bubbleWidth / 7);
    const point3Y = Math.floor(bubbleHeight + arrowHeight);

    //  Bubble arrow shadow
    bubble.lineStyle(4, 0xffffff, 0.5);
    bubble.lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y);

    //  Bubble arrow fill
    bubble.fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y);
    bubble.lineStyle(2, 0x565656, 1);
    bubble.lineBetween(point2X, point2Y, point3X, point3Y);
    bubble.lineBetween(point1X, point1Y, point3X, point3Y);

    const content = this.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 10, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding) } });

    const b = content.getBounds();

    content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
}


// this.spawnPoint 로 나중에 테스트.
getPosition(data) {
      return { x:800, y:800, direction: 'down' };
}


}