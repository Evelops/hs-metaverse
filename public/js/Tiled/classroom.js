import players from "../Object/players.js";
export default class classroom extends Phaser.Scene{
    constructor(){
        super("class");
        Phaser.Scene.call(this,{key:'class'});
    }

    preload(){
        console.log('classroom preload');
        players.preload(this); 
        this.load.image("classRoom", "resource/images/tileset_school.png"); // 타일맵에 사용된 이미지 리소스 로드.
        this.load.tilemapTiledJSON("classMap", "resource/tileset/room.json"); // 타일맵 json 이미지 로드.
    }
    create(){
        let collision = () => this.scene.start("new_tile_map");

        const map = this.make.tilemap({ key: "classMap" }); // 타일 맵 define.
        const tileset = map.addTilesetImage("tileset_school","classRoom",32,32,0,0);

        const background = map.createLayer("background", tileset, 0, 0); // background layer
        const interactive = map.createLayer("interactive", tileset, 0, 0); // background layer 위에 올려진 layer를 추가할 때, 다음과 같이 구성. => interactive는 json 파일에 layer name으로 명시.
        let overhead = map.createLayer("overhead",tileset,0,0); 

        const spawnPoint = map.findObject("object",(obj) => obj.name === "spawn_point"); // player의 스폰지역을 tiled 에서 지정한 영역으로 지정.
        const portal = map.findObject("teleport",(obj) => obj.name === "portal");

        const location = this.physics.add.staticSprite(portal.x,portal.y,); 



        this.players = new players(this, spawnPoint.x, spawnPoint.y); // player object 생성.

        background.setCollisionByProperty({ collides: true }); // tiled 툴에서 background layer의 collides 영역 활성화.
        interactive.setCollisionByProperty({ collides: true });
        this.physics.world.addCollider(this.players.sprite, background); // tiled 에서 지정한 collides 충돌영역과 player object간 충돌 효과.
        this.physics.world.addCollider(this.players.sprite, interactive); // tiled 에서 지정한 collides 충돌영역과 player object간 충돌 효과.

        overhead.setDepth(40); // overhead layer 를 background와 interactive layer 위에 배치해서 화면상에 보이는 View가 어색하지 않도록 지정.

        this.physics.add.collider(this.players.sprite,location,collision,undefined,this); 


        this.cameras.main.startFollow(this.players.sprite); // camera follow.
    }
    update(){
        this.players.update();
     
    }


}