/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/jDeEsasL
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = 'black';

    game.load.crossOrigin = 'anonymous';

    game.load.image('layerc1', 'sprites/cieloc.png');
    game.load.image('layerc2', 'sprites/lucec.png');
    game.load.image('layerc3', 'sprites/mongolfiere.png');
    game.load.image('layerc4', 'sprites/layerc1.png');
    game.load.image('layerc4-5', 'sprites/nuvolec.png');
    game.load.image('castello', 'sprites/castello.png');
    game.load.image('pontedir', 'sprites/pontedir.png');
    game.load.image('layerc5', 'sprites/layerc2.png');
    game.load.image('layerc6', 'sprites/layerc3.png');

    game.load.image('layer1-c', 'sprites/cielo.png');
    game.load.image('layer2-c', 'sprites/nuvole.png');
    game.load.image('layer3-c', 'sprites/layer3.png');
    game.load.image('layer4-c', 'sprites/layer2.png');
    game.load.image('layer5-c', 'sprites/layer1.png');
    game.load.image('skyway', 'sprites/skyway.png');

    game.load.image('layerd1', 'sprites/cielod.png');
    game.load.image('layerd2', 'sprites/stelle.png');
    game.load.image('layerd3', 'sprites/dune1.png');
    game.load.image('layerd4', 'sprites/dune2.png');
    game.load.image('layerd5', 'sprites/dune3.png');

    game.load.image('platform-c', 'sprites/platform-c2.png');
    game.load.image('platform-s', 'sprites/platform-s.png');

    game.load.image('platformk', 'sprites/platformcas.png');
    game.load.image('platformkb', 'sprites/platformcasb.png');
    game.load.image('platform-k', 'sprites/fplatformc1.png');
    game.load.image('platform-k1', 'sprites/fplatformc2.png');

    game.load.image('platform-d', 'sprites/platformd.png');
    game.load.image('fplatformd1', 'sprites/platformd1.png');
    game.load.image('fplatformd2', 'sprites/platformd2.png');
    game.load.image('mini', 'sprites/minipiattaforma.png');

    game.load.image('fplatform-c', 'sprites/platform-c.png');
    game.load.image('fplatform-k', 'sprites/platform-k.png');
    game.load.image('fplatform-d', 'sprites/platform-d.png');

    game.load.spritesheet('barrel', 'sprites/esplosione.png', 100, 100);

    game.load.spritesheet('petalo', 'sprites/petalo.png', 30, 49);
    game.load.spritesheet('petalos', 'sprites/petalos.png', 30, 49);
    game.load.spritesheet('petalose', 'sprites/perditadellalife.png', 50, 50)

    game.load.spritesheet('reeee', 'sprites/reeee.png', 880, 768);
    game.load.spritesheet('uomodaffari', 'sprites/sprite_jeep.png', 580, 540);

    game.load.spritesheet('player', 'sprites/principerun.png', 85, 100);

    game.load.spritesheet('lives', 'sprites/lifebar.png', 1117, 417);

    game.load.spritesheet('cammello', 'sprites/cammellon.png', 200, 107);

    game.load.spritesheet('lance', 'sprites/lance.png', 55, 90);

    game.load.spritesheet('sega', 'sprites/sega.png', 55, 55);

    game.load.spritesheet('tornado', 'sprites/tornado.png', 350, 351);
    game.load.spritesheet('tornadon', 'sprites/tornadon.png', 1024, 768);

    game.load.spritesheet('scorpio', 'sprites/scorpio.png', 55, 123);

    game.load.spritesheet('macchina', 'sprites/macchina.png', 155, 65);

    game.load.spritesheet('pontel', 'sprites/ponte_levatoio.png', 341, 345);
    game.load.spritesheet('bandiera', 'sprites/bandiera.png', 340, 768);

    game.load.spritesheet('pontec', 'sprites/pontec.png', 552, 380);
    game.load.image('pontecsupp', 'sprites/pontecsupp.png');

    game.load.image('navicellachange', 'sprites/navicellachange.png');
    game.load.image('navicella', 'sprites/navicella.png');

    game.load.spritesheet('stop', 'sprites/semaforo2.png', 55, 180);

    game.load.spritesheet('lights', 'sprites/semaforo1.png', 55, 212);

    game.load.image('gameover1', 'sprites/Gameover_1.jpg');
    game.load.image('gameover2', 'sprites/Gameover_2.jpg');
    game.load.image('gameover3', 'sprites/Gameover_3.jpg');
    game.load.image('vittoria', 'sprites/vittoria.jpg');
    game.load.image('black', 'sprites/black.png');
    game.load.image('tempest', 'sprites/sabbia.png');

    game.load.image('enemy', 'sprites/phaser-dude.png');

    game.load.video('videoc', 'sprites/videocit.mp4');
    game.load.video('videor', 'sprites/videore.mp4');
    game.load.video('videod', 'sprites/videodes.mp4');
    game.load.video('finale', 'sprites/finale.mp4');

    game.load.image('salto', 'sprites/tastosalto.png');
    game.load.image('movimenti', 'sprites/tastomovimento.png');
    game.load.image('alert', 'sprites/testoxtempesta.png');
    game.load.image('pilota', 'sprites/pilota.png');

    //Menu di pausa

    game.load.image('tastopausa', 'sprites/tastopausa.png');
    game.load.image('tastoriprendi', 'sprites/tastoriprendi.png');
    game.load.image('tastoesci', 'sprites/tastoesci.png');
    game.load.image('pausablur', 'sprites/blur.png');

}

var tutorial;
var petalose;
var video;
var sprite;
var player;
var petalo;
var platforms;
var fplatforms;
var cursors;
var jumpButton;
var pauseButton;
var flybutton;
var skip;
var lives;
var lance;
var sega;
var macchina;
var stop;
var barrel;
var lights;
var pontel;
var bandiera;
var pontec;
var pontecs;
var scorpio;
var cammello;
var cammellon;
var cool = false;
var coolf = false;
var life = 3;
var uomodaffari;
var reeee;
var tornadon;
var tempesta;
var hituomo;
var cont = 'right';
var xfactor = true;
var tinijump = true;
var level = 0;
var coolcar = false;
var cooll = true;
var coolc = true;
var coolv = false;
var coolcam = false;
var pos = 0;
var images;
var layer1;
var layer2;
var layer3;
var layer4;
var layer5;
var skyway;
var layerd1;
var layerd2;
var layerd3;
var layerd4;
var layerd5;
var layerc1;
var layerc2;
var layerc3;
var layerc4;
var layerc45;
var layerc5;
var layerc6;
var castello;
var pontedir;
var testo;
var maxl1;
var maxl2;
var maxl3;
var maxl4;
var maxl5;
var stall = true;
var prinx = 400;
var priny = 400;
var start = false;
var john = true;
//Menu pausa
var tastopausa;
var tastoriprendi;
var tastoesci;
var pausablur;
var coolt = false;
var changenav;
var navicella;
var pilota;
var razzoc = false;

function create() {

    game.world.setBounds(0, 0, 4096, 768);

    // background

    layerc1 = game.add.sprite(4096, -2, 'layerc1');
    layerc2 = game.add.sprite(4096, 0, 'layerc2');
    layerc45 = game.add.sprite(4096, -100, 'layerc4-5');
    layerc3 = game.add.sprite(4096, 0, 'layerc3');
    layerc4 = game.add.sprite(4096, 0, 'layerc4');
    castello = game.add.sprite(4096, 0, 'castello');
    layerc5 = game.add.sprite(4096, 40, 'layerc5');
    pontedir = game.add.sprite(4096, 0, 'pontedir');
    pontedir.visible = false;
    layer1 = game.add.sprite(8192*2, -768, 'layer1-c');
    layer1.scale.x = 1.1;
    layer2 = game.add.sprite(8192*2, -768, 'layer2-c');
    layer2.scale.x = 1.1;
    skyway = game.add.sprite(8192*2-400, -200, 'skyway');
    skyway.scale.x = 0.5;
    skyway.scale.y = 0.5;
    //skyway.visible = false;
    layer3 = game.add.sprite(8192*2, 0, 'layer3-c');
    layer4 = game.add.sprite(8192*2, 0, 'layer4-c');
    layer5 = game.add.sprite(8192*2, 0, 'layer5-c');

    layerd1 = game.add.sprite(8192*3, 0, 'layerd1');
    layerd1.scale.x = 1.1;
    layerd2 = game.add.sprite(8192*3, 0, 'layerd2');
    layerd2.scale.x = 1.05;
    layerd3 = game.add.sprite(8192*3, 100, 'layerd3');
    layerd4 = game.add.sprite(8192*3, 0, 'layerd4');
    layerd5 = game.add.sprite(8192*3, 0, 'layerd5');

    //layer1.fixedToCamera = true;
    //layer2.fixedToCamera = true;
    //skyway.fixedToCamera = true;
    //layer3.fixedToCamera = true;
    //layer4.fixedToCamera = true;
    //layer5.fixedToCamera = true;

    testo = game.add.text(160, 140, "yea");
    testo.fixedToCamera = true;

    // terreno

    platforms = game.add.physicsGroup();

    platforms.create(0, 600, 'platform-s');
    platforms.create(3250, 1000, 'platform-d');
    platforms.create(3250, 1000, 'platform-d');
    platforms.create(4250, 1000, 'platform-d');
    platforms.create(4250, 1000, 'platform-d');
    platforms.create(5250, 1000, 'platform-s');
    platforms.create(5250, 1000, 'platform-s');
    //
    platforms.create(8192*2, 600, 'platform-s');
    platforms.create(8192*2+1000, 250, 'platform-c');
    platforms.create(8192*2+1217, 300, 'platform-c');
    platforms.create(8192*2+1617, 415, 'platform-c');
    platforms.create(8192*2+1500, 515, 'platform-c');
    platforms.create(8192*2+1100, 600, 'platform-s');
    platforms.create(8192*2+2500, 400, 'platform-c');
    platforms.create(8192*2+3000, 300, 'platform-c');
    platforms.create(8192*2+2800, 510, 'platform-c');
    platforms.create(8192*2+2400, 600, 'platform-s');
    platforms.create(8192*2+4000, 520, 'platform-c');
    platforms.create(8192*2+4300, 420, 'platform-c');
    platforms.create(8192*2+4600, 320, 'platform-c');
    platforms.create(8192*2+5000, 220, 'platform-c');
    platforms.create(8192*2+5500, 170, 'platform-c');
    platforms.create(8192*2+6000, 120, 'platform-c');
    platforms.create(8192*2+3800, 597, 'platform-s');
    platforms.create(8192*2+5800, 600, 'platform-c');
    platforms.create(8192*2+6200, 500, 'platform-c');
    platforms.create(8192*2+6400, 600, 'platform-c');
    platforms.create(8192*2+7300, 435, 'platform-c');
    platforms.create(8192*2+6700, 600, 'platform-s');
    platforms.create(8192*2+6910, 615, 'platform-c');
    platforms.create(8192*2+7945, 535, 'platform-c');
    platforms.create(8192*2+7800, 600, 'platform-c');
    //
    platforms.create(4096, 600, 'platformk');
    platforms.children[32].scale.x = 1.1;
    platforms.create(4096+2100, 500, 'platformk');
    platforms.create(4096+2215, -50, 'platformk');
    platforms.create(4096+3100, 400, 'platformk');
    platforms.create(4096+3100, 582, 'platformkb');
    platforms.create(4096+2100, 682, 'platformkb');
    platforms.create(4096+5400, 550, 'platformk');
    platforms.create(4096+5400, 140, 'platformkb');
    platforms.create(4096+5400, -38, 'platformk');
    platforms.create(4096+6625, 450, 'platformk');
    platforms.create(4096+6625, 632, 'platformkb');
    //
    platforms.create(8192*3-2, 600, 'platform-d');
    platforms.create(8192*3+2800, 600, 'platform-d');
    platforms.create(8192*3+5800, 550, 'platform-d');
    platforms.create(8192*3+5200, 514, 'mini');
    platforms.create(8192*3+5400, 514, 'mini');
    platforms.create(8192*3+5600, 514, 'mini');
    platforms.create(8192*3+4900, 600, 'platform-d');
    platforms.children[45].scale.y = 1.5;
    platforms.create(8192*3+6850, 650, 'platform-d');
    platforms.create(8192*3+7850, 450, 'platform-d');
    platforms.children[51].scale.y = 1.7;


    platforms.children[6].body.setSize(217, 55, 0, 0);
    platforms.children[8].body.setSize(217, 55, 0, 0);
    platforms.children[9].body.setSize(217, 55, 0, 0);
    platforms.children[10].body.setSize(217, 10, 0, 0);
    platforms.children[11].body.setSize(217, 10, 0, 0);
    platforms.children[13].body.setSize(217, 10, 0, 0);
    platforms.children[14].body.setSize(217, 10, 0, 0);
    platforms.children[15].body.setSize(217, 10, 0, 0);
    platforms.children[17].body.setSize(217, 10, 0, 0);
    platforms.children[18].body.setSize(217, 10, 0, 0);
    platforms.children[19].body.setSize(217, 10, 0, 0);
    platforms.children[20].body.setSize(217, 10, 0, 0);
    platforms.children[21].body.setSize(217, 10, 0, 0);
    platforms.children[22].body.setSize(217, 10, 0, 0);
    platforms.children[24].body.setSize(217, 10, 0, 0);
    platforms.children[25].body.setSize(217, 10, 0, 0);
    platforms.children[26].body.setSize(217, 10, 0, 0);
    platforms.children[27].body.setSize(217, 10, 0, 0);

    platforms.children[0].body.setSize(1000, 242, 0, 20);
    platforms.children[7].body.setSize(1000, 242, 0, 20);
    platforms.children[12].body.setSize(1000, 242, 0, 20);
    platforms.children[16].body.setSize(1000, 242, 0, 20);
    platforms.children[23].body.setSize(1000, 242, 0, 20);
    platforms.children[28].body.setSize(1000, 242, 0, 20);

    platforms.children[32].body.setSize(1000, 242, 0, 10);
    platforms.children[33].body.setSize(1000, 242, 0, 10);
    platforms.children[35].body.setSize(1000, 242, 0, 10);
    platforms.children[38].body.setSize(1000, 242, 0, 10);
    platforms.children[41].body.setSize(1000, 242, 0, 10);

    platforms.setAll('body.immovable', true);

    // piattaforme fluttuanti

    fplatforms = game.add.physicsGroup();

    fplatforms.create(400, 500, 'platform-k1');
    fplatforms.create(750, 500, 'platform-k1');
    fplatforms.create(1200, 500, 'platform-k1');
    fplatforms.create(1600, 400, 'platform-k1');
    fplatforms.create(4096+1200, 500, 'platform-k1');
    fplatforms.create(4096+1500, 400, 'platform-k1');
    fplatforms.create(4096+1800, 200, 'platform-k1');
    fplatforms.create(4096+1500, 650, 'platform-k1');
    fplatforms.create(4096+2100, 100, 'platform-k1');
    fplatforms.create(4096+4350, 500, 'platform-k1');
    fplatforms.create(4096+4600, 600, 'platform-k1');
    fplatforms.create(4096+4850, 500, 'platform-k1');
    fplatforms.create(4096+4600, 300, 'platform-k1');
    fplatforms.create(4096+5100, 500, 'platform-k1');
    fplatforms.create(4096+3650, 250, 'platform-k');
    fplatforms.create(4096+3950, 250, 'platform-k');
    fplatforms.create(4096+7800, 460, 'platform-k1');
    fplatforms.create(4096+7850, 480, 'platform-k');
    fplatforms.create(4096+7910, 485, 'platform-k1');
    fplatforms.create(4096+8060, 475, 'platform-k');
    fplatforms.create(4096+7900, 515, 'platform-k');
    fplatforms.create(4096+7650, 460, 'platform-k1');

    fplatforms.create(8192*3+1150, 480, 'fplatformd2');
    fplatforms.create(8192*3+1550, 530, 'fplatformd1');
    fplatforms.create(8192*3+1525, 375, 'fplatformd2');
    fplatforms.create(8192*3+2000, 200, 'fplatformd2');
    fplatforms.create(8192*3+1850, 480, 'fplatformd1');
    fplatforms.create(8192*3+2150, 430, 'fplatformd1');
    fplatforms.create(8192*3+2450, 480, 'fplatformd1');
    fplatforms.create(8192*3+4000, 490, 'fplatformd2');
    fplatforms.create(8192*3+4500, 300, 'fplatformd1');
    fplatforms.create(8192*3+4550, 150, 'fplatformd1');
    fplatforms.create(8192*3+7000, 300, 'fplatformd2');
    fplatforms.create(8192*3+7200, 200, 'fplatformd2');
    fplatforms.create(8192*3+4550, 150, 'fplatformd1');
    fplatforms.create(8192*3+7500, 400, 'fplatformd2');

    fplatforms.setAll('body.immovable', true);

    // ostacoli

    lance = game.add.physicsGroup();

    lance.create(4096+3025, 420, 'lance');
    lance.create(4096+2970, 420, 'lance');
    lance.create(4096+2725, 420, 'lance');
    lance.create(4096+2670, 420, 'lance');
    lance.create(4096+4352, 420, 'lance');
    lance.create(4096+4407, 420, 'lance');
    lance.create(4096+4852, 420, 'lance');
    lance.create(4096+4907, 420, 'lance');
    lance.create(4096+6015, 470, 'lance');
    lance.create(4096+6115, 470, 'lance');
    lance.create(4096+6215, 470, 'lance');
    lance.create(4096+6315, 470, 'lance');

    lance.setAll('body.immovable', true);

    lance.children[0].animations.add('1', [1, 1, 1, 1, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0], 12, true);
    lance.children[1].animations.add('1', [1, 1, 1, 1, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0], 12, true);
    lance.children[2].animations.add('2', [8, 8, 8, 8, 12, 13, 13, 13, 13, 13, 13, 13, 13, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 7, 7], 12, true);
    lance.children[3].animations.add('2', [8, 8, 8, 8, 12, 13, 13, 13, 13, 13, 13, 13, 13, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 7, 7], 12, true);
    lance.children[4].animations.add('3', [15, 15, 15, 15, 19, 20, 20, 20, 20, 20, 20, 20, 20, 19, 18, 17, 16, 15, 14, 14, 14, 14, 14, 14, 14, 14], 12, true);
    lance.children[5].animations.add('3', [15, 15, 15, 15, 19, 20, 20, 20, 20, 20, 20, 20, 20, 19, 18, 17, 16, 15, 14, 14, 14, 14, 14, 14, 14, 14], 12, true);
    lance.children[6].animations.add('4', [22, 22, 22, 22, 26, 27, 27, 27, 27, 27, 27, 27, 27, 26, 25, 24, 23, 22, 21, 21, 21, 21, 21, 21, 21, 21], 12, true);
    lance.children[7].animations.add('4', [22, 22, 22, 22, 26, 27, 27, 27, 27, 27, 27, 27, 27, 26, 25, 24, 23, 22, 21, 21, 21, 21, 21, 21, 21, 21], 12, true);

    lance.children[8].animations.add('1', [1, 1, 1, 1, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0], 12, true);
    lance.children[9].animations.add('2', [8, 8, 8, 8, 12, 13, 13, 13, 13, 13, 13, 13, 13, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 7, 7], 12, true);
    lance.children[10].animations.add('3', [15, 15, 15, 15, 19, 20, 20, 20, 20, 20, 20, 20, 20, 19, 18, 17, 16, 15, 14, 14, 14, 14, 14, 14, 14, 14], 12, true);
    lance.children[11].animations.add('4', [22, 22, 22, 22, 26, 27, 27, 27, 27, 27, 27, 27, 27, 26, 25, 24, 23, 22, 21, 21, 21, 21, 21, 21, 21, 21], 12, true);

    for (var i = 0; i < 12; i++){
      lance.children[i].body.setSize(35, 80, 10, 5);
    }

    sega = game.add.physicsGroup();

    sega.create(4096+3500, 350, 'sega');
    sega.create(4096+3650, 300, 'sega');
    sega.create(4096+3800, 350, 'sega');
    sega.create(4096+3950, 300, 'sega');
    sega.create(4096+5400, 510, 'sega');
    sega.create(4096+5455, 300, 'sega');
    sega.create(4096+5650, 510, 'sega');
    sega.create(4096+5705, 510, 'sega');
    sega.create(4096+5760, 510, 'sega');
    sega.create(4096+5815, 510, 'sega');

    sega.setAll('body.immovable', true);

    for (var i = 0; i < 10; i++){
      sega.children[i].animations.add('segas', [0, 2, 4, 6, 8], 48, true);

      sega.children[i].body.setSize(35, 35, 10, 10);
    }

    pontel = game.add.sprite(4096+7250, 115, 'pontel');
    pontel.animations.add('closel', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 12, false);
    pontel.animations.add('openl', [24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47], 12, false);

    pontel.frame = 23;

    game.physics.arcade.enable(pontel);
    pontel.body.immovable = true;

    barrel = game.add.physicsGroup();

    barrel.create(8192*2+1400, 520, 'barrel');
    barrel.create(8192*2+5800, 500, 'barrel');
    barrel.create(8192*2+6910, 520, 'barrel');
    barrel.create(8192*2+6945, 520, 'barrel');
    barrel.create(8192*2+6980, 520, 'barrel');
    barrel.create(8192*2+7015, 520, 'barrel');
    barrel.create(8192*2+7050, 520, 'barrel');
    barrel.create(8192*2+1435, 520, 'barrel');
    barrel.create(8192*2+1365, 520, 'barrel');
    barrel.create(8192*2+5845, 500, 'barrel');
    barrel.create(8192*2+7300, 340, 'barrel');
    barrel.create(8192*2+7335, 340, 'barrel');
    barrel.create(8192*2+7370, 340, 'barrel');
    barrel.create(8192*2+7405, 340, 'barrel');
    barrel.create(8192*2+7440, 340, 'barrel');
    barrel.create(8192*2+7515, 520, 'barrel');
    barrel.create(8192*2+7565, 520, 'barrel');
    barrel.create(8192*2+7615, 520, 'barrel');

    barrel.setAll('body.immovable', true);
    for (var i = 0; i < 18; i++){
      barrel.children[i].body.setSize(35, 60, 33, 40);
      barrel.children[i].animations.add('explo', [0,1,2,3,4,5,6,7,8,9,10], 12, false);
    }

    stop = game.add.physicsGroup();

    stop.create(8192*2+2400, 420, 'stop');
    stop.create(8192*2+6300, 320, 'stop');

    stop.children[0].animations.add('lights', [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1,], 1, true)
    stop.children[1].animations.add('lights', [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1,], 1, true)


    // oggetti di gioco

    cammello = game.add.sprite(8192*3+4025, 400, 'cammello');

    game.physics.arcade.enable(cammello);
    cammello.body.immovable = true;

    cammello.animations.add('idle', [0, 1, 2, 3, 4, 5], 8, true);
    cammello.animations.add('bounce', [6, 7, 8], 8, false);

    cammello.body.setSize(90, 67, 30, 50);

    cammellon = game.add.sprite(8192*3+6600, 455, 'cammello');

    game.physics.arcade.enable(cammellon);
    cammellon.body.immovable = true;

    cammellon.animations.add('idle', [0, 1, 2, 3, 4, 5], 8, true);
    cammellon.animations.add('bounce', [6, 7, 8], 8, false);

    cammellon.body.setSize(90, 67, 30, 50);

    navicella = game.add.physicsGroup();

    navicella.create(8192+4096-300, 300, 'navicella');
    navicella.create(8192*3-200, 340, 'navicella');
    navicella.create(8192*4-200, 260, 'navicella');

    pilota = game.add.sprite(8192*4-125, 372, 'pilota');

    // player

    player = game.add.sprite(450, 445, 'player');

    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    player.animations.add('left', [7, 8, 9, 10, 11, 12], 12, true);
    player.animations.add('right', [14, 15, 17, 18, 19, 20], 12, true);
    player.animations.add('jumpl', [0, 1], 12, true);
    player.animations.add('falll', [9, 11, 12], 12, true);
    player.animations.add('jumpr', [21, 22], 12, true);
    player.animations.add('fallr', [17, 19, 20], 12, true);

    game.physics.arcade.enable(player);

    player.scale.x = 0.75;
    player.scale.y = 0.75;
    player.body.setSize(60, 80, 10, 20);

    player.body.gravity.y = 500;

    player.body.collideWorldBounds = true;

    petalose = game.add.sprite(player.x, player.y, 'petalose')

    game.physics.arcade.enable(petalose);
    petalose.animations.add('lose', [0,1,2,3,4,5,6,7,8,9,10,11,12,13], 12, false);
    petalose.alpha = 0;

    // powerup

    petalo = game.add.physicsGroup();

    petalo.create(500, 400, 'petalo');
    petalo.create(600, 400, 'petalos');
    petalo.create(4096+1540, 610, 'petalo');
    petalo.create(4096+2140, 51, 'petalos');
    petalo.create(4096+4640, 251, 'petalo');

    petalo.create(8192*2+1100, 201, 'petalo');
    petalo.create(8192*2+3100, 251, 'petalos');
    petalo.create(8192*2+4750, 538, 'petalo');
    petalo.create(8192*2+6100, 71, 'petalo');

    petalo.create(8192*3+2075, 151, 'petalo');
    petalo.create(8192*3+4585, 101, 'petalos');
    petalo.create(8192*3+5525, 551, 'petalo');
    petalo.create(8192*3+7275, 151, 'petalo');

    for(var i = 0; i < 13; i++){
      petalo.children[i].animations.add('levitate', [0,1,2,3,4,5,6,7,8,9,10,11,12,13], 12, true);
    }

    // Livello 2

    bandiera = game.add.sprite(4096+7550, -15, 'bandiera');
    bandiera.animations.add('flow', [0,1,2,3,4,5], 12, true);
    bandiera.animations.play('flow');

    pontecs = game.add.sprite(8192*2+3350, 700, 'pontecsupp');

    pontec = game.add.sprite(8192*2+3350, 370, 'pontec');

    lights = game.add.sprite(8192*2+3295, 475, 'lights');

    game.physics.arcade.enable(pontec);

    pontec.body.immovable = true;

    pontec.animations.add('closec', [12,11,10,9,8,7,6,5,4,3,2,1,0], 12, false);
    pontec.animations.add('openc', [0,1,2,3,4,5,6,7,8,9,10,11,12], 12, false);

    // livello 3

    scorpio = game.add.physicsGroup();

    scorpio.create(8192*3+1575, 424, 'scorpio');
    scorpio.create(8192*3+2900, 497, 'scorpio');
    scorpio.create(8192*3+3100, 497, 'scorpio');
    scorpio.create(8192*3+3300, 497, 'scorpio');
    scorpio.create(8192*3+3500, 497, 'scorpio');
    scorpio.create(8192*3+2475, 375, 'scorpio');
    scorpio.create(8192*3+5223, 410, 'scorpio');
    scorpio.create(8192*3+5423, 410, 'scorpio');
    scorpio.create(8192*3+5623, 410, 'scorpio');
    scorpio.create(8192*3+6950, 543, 'scorpio');
    scorpio.create(8192*3+7150, 543, 'scorpio');
    scorpio.create(8192*3+7350, 543, 'scorpio');
    scorpio.create(8192*3+7550, 543, 'scorpio');

    scorpio.setAll('body.immovable', true);

    for (var i = 0; i < 13; i++){
      scorpio.children[i].animations.add('pungedx', [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 12, true);
      scorpio.children[i].animations.add('pungesx', [8, 7, 6, 5, 5, 5, 5, 5, 5, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 12, true);
      scorpio.children[i].body.setSize(35, 35, 10, 50);
    }

    tempesta = game.add.physicsGroup();

    tempesta.create(-10000, 0, 'tempest');
    tempesta.create(-10000, 0, 'tempest');
    tempesta.create(-10000, 0, 'tempest');

    // nemici

    hituomo = game.add.sprite(0, 0, 'platform-c');
    hituomo.scale.x = 1.5;
    hituomo.scale.y = 1.5;

    game.physics.arcade.enable(hituomo);

    hituomo.body.immovable = true;

    hituomo.alpha = 0;

    reeee = game.add.sprite(0, 0, 'reeee');

    reeee.animations.add('suwag', [0,1,2,3,4,5,6,7,8,9,10], 12, true);
    reeee.animations.play('suwag');

    uomodaffari = game.add.sprite(0, 175, 'uomodaffari');

    uomodaffari.animations.add('swag', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 12, true);
    uomodaffari.animations.play('swag');

    tornadon = game.add.sprite(0, 0, 'tornadon');
    tornadon.scale.y = 1.1;

    tornadon.animations.add('swig', [0,1,2,3,4,5], 12, true);
    tornadon.animations.play('swig');

    // Livello 1

    layerc6 = game.add.sprite(4096, 70, 'layerc6');

    // tutorials

    tutorial = game.add.physicsGroup();

    tutorial.create(4096+625, 625, 'movimenti');
    tutorial.children[0].scale.y = 0.5;
    tutorial.children[0].scale.x = 0.5;
    tutorial.create(4096+875, 625, 'salto');
    tutorial.children[1].scale.y = 0.5;
    tutorial.children[1].scale.x = 0.5;
    tutorial.create(8192*3+4850, 300, 'alert');
    tutorial.children[2].scale.y = 0.2;
    tutorial.children[2].scale.x = 0.2;

    // HUD

    lives = game.add.sprite(20, 20, 'lives');
    lives.scale.x = 0.15;
    lives.scale.y = 0.15;
    lives.fixedToCamera = true;

    // controlli

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    pauseButton = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    flybutton = game.input.keyboard.addKey(Phaser.Keyboard.F);
    skip = game.input.keyboard.addKey(Phaser.Keyboard.K);

    //MENU PAUSA

    tastopausa = game.add.sprite(829, 30, 'tastopausa');
    tastopausa.inputEnabled = true;
    tastopausa.input.useHandCursor = true;
    tastopausa.fixedToCamera = true;
    tastopausa.visible = true;

    tastoriprendi = game.add.button(425, 342.4, 'tastoriprendi');
    tastoriprendi.visible = false;
    tastoriprendi.fixedToCamera = true;
    tastoriprendi.input.useHandCursor = true;

    tastoesci = game.add.button(425, 388.3, 'tastoesci');
    tastoesci.visible = false;
    tastoesci.fixedToCamera = true;

    pausablur = game.add.sprite(0, 0, 'pausablur');
    pausablur.visible = false;
    pausablur.fixedToCamera = true;

    tastopausa.events.onInputUp.add(function () {

       game.paused = true;

       game.world.bringToTop(tastoriprendi);
       game.world.bringToTop(tastoesci);

       tastopausa.visible = false;
       pausablur.visible = true;
       tastoriprendi.visible = true;
       tastoesci.visible = true;
       lives.visible = false;
       petalo.setAll('visible', false);

       tastoriprendi.inputEnabled = true;
       tastoriprendi.input.useHandCursor = true;

    });

    game.input.onDown.add(unpause, self);

    function unpause(event){

       if(game.paused){

         //RIPRENDI
         var x1 = 425, x2 = 599,
             y1 = 342.4, y2 = 378.8;

         if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2){

             var x = event.x - x1,
                 y = event.y - y1;

             tastopausa.visible = true;
             pausablur.visible = false;
             tastoriprendi.visible = false;
             tastoesci.visible = false;
             lives.visible = true;
             petalo.setAll('visible', true);
             game.paused = false;

         }

         //ESCI
         var y3 = 388.3, y4 = 424.8;

         if(event.x > x1 && event.x < x2 && event.y > y3 && event.y < y4){

             var x = event.x - x1,
                 y = event.y - y3;

             window.location.href = "index.html";

         }

       }

     }
     // Screens

     images = game.add.sprite(0, 0, 'black');
     images.fixedToCamera = true;

}

function death() {
  player.body.velocity.y = 0;
  game.time.events.add(3000, function() {
    game.time.events.add(200, function() {
      gamechange();
    })
  player.allowGravity = true;
  player.body.collideWorldBounds = true;
  if (level == 0){
    player.x = 650;
    player.y = 300;
  } else if (level == 1){
    player.x = (450+4096);
    player.y = 300;
  } else if (level == 2){
    player.x = (450+8192*2);
    player.y = 300;
    layer1.y = -768;
    layer2.y = -768;
    layer3.y = 0;
    layer4.y = 0;
    layer5.y = 0;
    skyway.y = -200;
  } else if (level == 3){
    player.x = (450+8192*3);
    player.y = 300;
  }
  hituomo.x = pos;
  life = 3;
  player.visible = true;
  player.alpha = 1;
  lives.visible = true;
  lives.alpha = 1;
  petalo.setAll('visible', true);
  petalo.setAll('alpha', true);
  game.time.events.add(100, function() {
    cool = false;
    coolf = false;
    coolt = false;
    barrel.setAll('frame', 0);
    barrel.setAll('visible', true);
  })
})
}

function gameover() {
  if (level == 1){
    images = game.add.sprite(0, 0, 'gameover1');
    images.fixedToCamera = true;
  } else if (level == 2){
    images = game.add.sprite(0, 0, 'gameover2');
    images.fixedToCamera = true;
  } else if (level == 3){
    images = game.add.sprite(0, 0, 'gameover3');
    images.fixedToCamera = true;
  }
  images.alpha = 0;
  game.time.events.add(50, function() {
    images.alpha += 0.1;
  })
  game.time.events.add(100, function() {
    images.alpha += 0.1;
  })
  game.time.events.add(150, function() {
    images.alpha += 0.1;
  })
  game.time.events.add(200, function() {
    images.alpha += 0.1;
  })
  game.time.events.add(250, function() {
    images.alpha += 0.1;
  })
  game.time.events.add(300, function() {
    images.alpha += 0.1;
  })
  game.time.events.add(350, function() {
    images.alpha += 0.1;
  })
  game.time.events.add(400, function() {
    images.alpha += 0.1;
  })
  game.time.events.add(450, function() {
    images.alpha += 0.1;
  })
  game.time.events.add(500, function() {
    images.alpha = 1;
  })
}

function gamechange() {
  game.time.events.add(50, function() {
    images.alpha -= 0.1;
  })
  game.time.events.add(100, function() {
    images.alpha -= 0.1;
  })
  game.time.events.add(150, function() {
    images.alpha -= 0.1;
  })
  game.time.events.add(200, function() {
    images.alpha -= 0.1;
  })
  game.time.events.add(250, function() {
    images.alpha -= 0.1;
  })
  game.time.events.add(300, function() {
    images.alpha -= 0.1;
  })
  game.time.events.add(350, function() {
    images.alpha -= 0.1;
  })
  game.time.events.add(400, function() {
    images.alpha -= 0.1;
  })
  game.time.events.add(450, function() {
    images.alpha -= 0.1;
  })
  game.time.events.add(500, function() {
    images.alpha -= 0.1;
  })
  game.time.events.add(550, function() {
    images.kill();
  })
}

function damage() {
  if (stall == false){
    if (cool == false){
      perdita();
      cool = true;
      life --;
      player.alpha = 0.5;
      if (tinijump == true){
        tinijump = false;
        player.body.velocity.y = -150;
      }
      if (life == 0){
        player.visible = false;
        death(); gameover();} else {
        game.time.events.add(1000, function() {
          cool = false;
          player.alpha = 1;
        }) }
      }
  }
}

function perdita() {
  john = false;
  petalose.alpha = 1;
  petalose.animations.play('lose');
  petalose.body.velocity.x = -50;
  petalose.body.velocity.y = -50;
  game.time.events.add(1300, function() {
    john = true;
    petalose.alpha = 0;
  })
}

function level1() {
if (coolv == false){
  images.kill();
  coolv = false;
  game.world.setBounds(4096, 0, 8192, 768);
  level++;
  stall = true;
  pos = 4096-200;
  hituomo.x = pos;
  prinx = 450+4096;
  priny = 300;

  video.play(true);

  video.play();
  sprite.fixedToCamera = true;
  game.time.events.add(26000, function() {
    sprite.kill();
    stall = false;
    life = 3;
    coolv = false;
    video = game.add.video('videoc');

    sprite = video.addToWorld(0, 0, 0, 0);
  })
}
}

function level2() {
  stall = true;
  passing();
  game.time.events.add(750, function() {
    if (coolv == false){
      coolv = true;
      game.world.setBounds(8192*2, 0, 8192, 768);
      level++;
      stall = true;
      pos = 8192*2-200;
      hituomo.x = pos;
      prinx = 450+8192*2;
      priny = 300;

      video.play(true);

      video.play();
      sprite.fixedToCamera = true;
      game.time.events.add(37500, function() {
        sprite.kill();
        stall = false;
        life = 3;
        coolv = false;
        video = game.add.video('videod');

        sprite = video.addToWorld(0, 0, 0, 0);
      })
    }
  })
}

function level3() {
stall = true;
passing();
game.time.events.add(750, function() {
  if (coolv == false) {
    coolv = true;
    game.world.setBounds(8192*3, 0, 8192, 768);
    level++;
    stall = true;
    pos = 8192*3-200;
    hituomo.x = pos;
    prinx = 450+8192*3;
    priny = 300;

    video.play(true);

    video.play();
    sprite.fixedToCamera = true;
    game.time.events.add(20000, function() {
      sprite.kill();
      stall = false;
      life = 3;
      coolv = false;
    })
  }
})
}

function passing() {
if (razzoc == false){
  razzoc = true;
  changenav = game.add.sprite(-10, 768, 'navicellachange');
  game.physics.arcade.enable(changenav);
  changenav.x = game.camera.x-10;
  changenav.body.velocity.y = -2800;
  game.time.events.add(750, function() {
    changenav.kill();
    razzoc = false;
  })
}
}

function endgame() {
  stall = true;
  passing();
    game.time.events.add(750, function() {
      if (coolv == false) {
        coolv = true;

        images = game.add.sprite(0, 0, 'vittoria');
        images.fixedToCamera = true;

        video = game.add.video('finale');

        sprite = video.addToWorld(0, 0, 0, 0);

        video.play(true);

        video.play();
        sprite.fixedToCamera = true;
        game.time.events.add(28500, function() {
          sprite.kill();
          game.time.events.add(2500, function() {
            window.location.href = "index.html";
          })
        })
      }
    })
  }

function stopp() {
  if (coolcar == false && stall == false){
    coolcar = true;
    macchina = game.add.sprite(player.x+768, player.y-150, 'macchina');
    game.physics.arcade.enable(macchina);

    macchina.body.gravity.y = 500;
    macchina.body.velocity.x = -500;

    macchina.animations.add('brum', [0, 1, 2, 3, 4, 5], 24, true);
    macchina.animations.play('brum');
    game.time.events.add(6000, function() {
      coolcar = false;
      if (macchina.x < player.x-1000){
        macchina.kill();
      }
    })
  }
}

function hjump() {
  if (xfactor == false){
    coolcam = true;
    game.time.events.add(250, function() {
      coolcam = false;
    })
    cammello.animations.play('bounce');
    cammellon.animations.play('bounce');
    player.body.velocity.y = -600;
    }
  }

function salta() {
  xfactor = true;
  if (player.body.touching.down){
    tinijump = true;
  }
}

function carwreck() {
  macchina.kill();
}

function healplus(player, n) {
  if (life < 4 && n.alpha == 1){
    n.alpha = 0;
    for(var i = life; i < 4; i++){
      life++;
    }
  }
}

function heal(player, n) {
  if (n.visible == true){
    n.visible = false;
    if (life < 3){
      life++;
    }
  }
}

function explos(player, n) {
  if (n.frame == 0){
    game.time.events.add(100, function() {
      damage();
    })
    n.animations.play('explo');
    game.time.events.add(1000, function() {
      n.visible = false;
    })
  }
}

function tempest() {
  if (level == 3 && coolt == false) {
    coolt = true;
    for (var i = 0; i < 3; i++){
      tempesta.children[i].x = game.rnd.integerInRange(player.x+700, player.x+1500);
      tempesta.children[i].y = game.rnd.integerInRange(-200, 400);
      tempesta.children[i].body.velocity.x = game.rnd.integerInRange(-1500, -750)
    }
  }
}

function update () {

    game.physics.arcade.collide(player, platforms, salta);
    game.physics.arcade.collide(player, pontel, salta);
    game.physics.arcade.collide(player, pontec, salta);
    game.physics.arcade.collide(player, fplatforms, salta);
    game.physics.arcade.collide(macchina, platforms.children[16]);
    game.physics.arcade.collide(macchina, platforms.children[23]);
    game.physics.arcade.collide(macchina, platforms.children[28]);
    game.physics.arcade.collide(macchina, hituomo, carwreck);
    game.physics.arcade.overlap(player, sega, damage);
    game.physics.arcade.overlap(player, barrel, explos);
    game.physics.arcade.overlap(player, macchina, damage);
    game.physics.arcade.collide(player, cammello, hjump);
    game.physics.arcade.collide(player, cammellon, hjump);
    game.physics.arcade.collide(player, hituomo, damage);
    game.physics.arcade.overlap(player, petalo, heal);
    game.physics.arcade.overlap(player, petalo.children[3], healplus);
    game.physics.arcade.overlap(player, petalo.children[6], healplus);
    game.physics.arcade.overlap(player, petalo.children[10], healplus);
    game.physics.arcade.overlap(player, navicella.children[0], level2);
    game.physics.arcade.overlap(player, navicella.children[1], level3);
    game.physics.arcade.overlap(player, navicella.children[2], endgame);

    player.body.velocity.x = 0;
    if (john == true){
      petalose.x = player.x;
      petalose.y = player.y;
    }

    if (start == false && (jumpButton.justDown || cursors.right.justDown || cursors.left.justDown)){
      start = true;
      game.time.events.add(1, function() {
        video = game.add.video('videor');

        sprite = video.addToWorld(0, 0, 0, 0);
        level1();
      })
    }

    for(var i = 0; i < 13; i++){
      petalo.children[i].play('levitate');
    }

    if (level == 0){
      uomodaffari.alpha = 0;
      reeee.alpha = 1;
      tornadon.alpha = 0;
      game.world.setBounds(0, 0, 4096, 768);
    }

    if (level == 1){
      layerc2.x = (-game.camera.x/48)+(4096);
      layerc3.x = (-game.camera.x/48)+(4096);
      layerc3.y = Math.sin(game.time.totalElapsedSeconds())*10-50;
      layerc4.x = (game.camera.x/30)+(4096-200);
      layerc45.x = (game.camera.x/20)+(4096-200);
      layerc5.x = (-game.camera.x/12)+(4096);
      layerc6.x = (-game.camera.x/6)+(4096);
      tutorial.children[0].x = (-game.camera.x/6)+(4096+1450);
      tutorial.children[1].x = (-game.camera.x/6)+(4096+1600);
      castello.x = (game.camera.x/20)+(4096-200);
      uomodaffari.alpha = 0;
      reeee.alpha = 1;
      game.world.setBounds(4096, 0, 8192, 768);

    }

    if (level == 2){
      layerc1.kill();
      layerc2.kill();
      layerc3.kill();
      layerc4.kill();
      layerc5.kill();
      layerc6.kill();
      castello.kill();
      pontedir.kill();
      uomodaffari.alpha = 1;
      reeee.alpha = 0;
      game.world.setBounds(8192*2, 0, 8192, 768);
      layer2.x = (-game.camera.x/48)+(8192*2);
      layer3.x = (-game.camera.x/24)+(8192*2);
      layer4.x = (-game.camera.x/12)+(8192*2);
      layer5.x = (-game.camera.x/10)+(8192*2);
      //skyway.x = (game.camera.x/48)+(8192*2);
      if (player.x >= 8192*2+4000 && (player.x < 8192*2+6000)){
        layer1.y = -768 + ((player.x-(8192*2+4000))/2.7);
        layer2.y = -768 + ((player.x-(8192*2+4000))/12);
        layer3.y = 0 + ((player.x-(8192*2+4000))/5);
        layer4.y = 0 + ((player.x-(8192*2+4000))/6);
        layer5.y = 0 + ((player.x-(8192*2+4000))/12);
        skyway.y = -200 + ((player.x-(8192*2+4000))/6);
        maxl1 = layer1.y;
        maxl2 = layer2.y;
        maxl3 = layer3.y;
        maxl4 = layer4.y;
        maxl5 = layer5.y;
      } else if (player.x >= 8192*2+6000 && (player.x <= 8192*2+8000)) {
        layer1.y = maxl1 - ((player.x-(8192*2+6000))/2.7);
        layer2.y = maxl2 - ((player.x-(8192*2+6000))/12);
        layer3.y = maxl3 - ((player.x-(8192*2+6000))/5);
        layer4.y = maxl4 - ((player.x-(8192*2+6000))/6);
        layer5.y = maxl5 - ((player.x-(8192*2+6000))/12);
        skyway.y = (maxl4) - ((player.x-(8192*2+6000))/6);
      } else {
        layer1.y = -768;
        layer2.y = -768;
        layer3.y = 0;
        layer4.y = 0;
        layer5.y = 0;
        skyway.y = -200;
      }
    }

    if (level == 3){
      game.world.setBounds(8192*3, 0, 8192, 768);
      layer1.kill();
      layer2.kill();
      layer3.kill();
      layer4.kill();
      layer5.kill();
      skyway.kill();
      tornadon.alpha = 1;
      uomodaffari.kill();
      reeee.kill();
      layerd3.x = (-game.camera.x/24)+(8192*3);
      layerd4.x = (-game.camera.x/12)+(8192*3);
      layerd5.x = (-game.camera.x/10)+(8192*3);
      if (coolt == true){
        player.body.velocity.x = -200;
        if (tempesta.children[0].x <= (player.x-7207) && tempesta.children[1].x <= (player.x-7207) && tempesta.children[2].x <= (player.x-7207)){
          coolt = false;
        }
      } else {
        player.body.velocity.x = 0;
        tempesta.children[0].x = 100000
        tempesta.children[1].x = 100000
        tempesta.children[2].x = 100000
      }
    }

    if((player.x > 8192*3+4950 && player.x < 8192*3+5600) || (player.x > 8192*3+7050 && player.x < 8192*3+7300)){
      tempest();
    }

    if (coolcam == false){
      cammello.animations.play('idle');
      cammellon.animations.play('idle');
    }

    testo.text = "";

    lance.children[0].animations.play('1');
    lance.children[1].animations.play('1');
    lance.children[8].animations.play('1');

    lance.children[2].animations.play('2');
    lance.children[3].animations.play('2');
    lance.children[9].animations.play('2');

    lance.children[4].animations.play('3');
    lance.children[5].animations.play('3');
    lance.children[10].animations.play('3');

    lance.children[6].animations.play('4');
    lance.children[7].animations.play('4');
    lance.children[11].animations.play('4');

    stop.children[0].animations.play('lights');
    stop.children[1].animations.play('lights');

    if(stop.children[0].frame == 2 && (player.x >= stop.children[0].x && player.x <= stop.children[0].x+500)) {
      stopp();
    }
    if(stop.children[1].frame == 2 && (player.x >= stop.children[1].x && player.x <= stop.children[1].x+500)) {
      stopp();
    }

    for (var i = 0; i < 10; i++){
      sega.children[i].animations.play('segas');
    }

    if (lance.children[0].frame > 4){
      game.physics.arcade.overlap(player, lance, damage);
    }

    if (pontel.frame == 47 && (cooll == false)){
      cooll = true;
      game.time.events.add(10000, function() {
        pontel.animations.play('closel');
      })
    } else if (pontel.frame == 23 && (cooll == true)) {
      cooll = false;
      game.time.events.add(10000, function() {
        pontel.animations.play('openl');
      })
    }

    if (pontel.frame == 0 || pontel.frame == 47){
      pontel.body.setSize(330, 10, 0, 335);
    } else if (pontel.frame == 23){
      pontel.body.setSize(10, 345, 311, 0);
    } else {
      pontel.body.setSize(0, 0, 0, 0);
    }

    if (pontec.frame == 12 && (coolc == false)){
      coolc = true;
      lights.frame = 0;
      game.time.events.add(5000, function() {
        pontec.animations.play('closec');
      })
    } else if (pontec.frame == 0 && (coolc == true)) {
      coolc = false;
      lights.frame = 2;
      game.time.events.add(2500, function() {
        lights.frame = 1;
      })
      game.time.events.add(5000, function() {
        pontec.animations.play('openc');
      })
    }

    if (pontec.frame == 0){
      pontec.body.setSize(552, 80, 0, 250);
    } else {
      pontec.body.setSize(540, 380, 0, 75);
    }

    for (var i = 0; i < 13; i++){
    if (scorpio.children[i].frame == 0 || scorpio.children[i].frame == 9){
      game.physics.arcade.collide(player, scorpio.children[i], damage);
    }
  }

    for (var i = 0; i < 13; i++){
      if (scorpio.children[i].x + 55 < player.x){
        scorpio.children[i].animations.play('pungesx');
      } else {
        scorpio.children[i].animations.play('pungedx');
      }
    }

    if (stall == true){
      player.body.velocity.y = 0;
      player.x = prinx;
      player.y = priny;
    } else {
      prinx = player.x;
      priny = player.y;
      hituomo.x++;
      if (level == 1){
        hituomo.y = Math.sin(game.time.totalElapsedSeconds())*100+100;
      } else {
        hituomo.y = 300;
      }
    }

    if (level == 3){
      hituomo.scale.x = 0.7;
    }

    reeee.x = hituomo.x-300;
    reeee.y = hituomo.y;

    uomodaffari.x = hituomo.x-180;
    uomodaffari.y = hituomo.y-100;

    tornadon.x = hituomo.x-400;
    tornadon.y = hituomo.y-310;

    //fplatforms.children[3].y = Math.sin(game.time.totalElapsedSeconds()/1.2)*150+250;
    if (fplatforms.children[6].y <= 200){
      fplatforms.children[6].body.velocity.y = 0;
      game.time.events.add(1000, function() {
      fplatforms.children[6].body.velocity.y = 100;
      })
    } else if (fplatforms.children[6].y >= 550){
      fplatforms.children[6].body.velocity.y = 0;
      game.time.events.add(1000, function() {
      fplatforms.children[6].body.velocity.y = -100;
      })
    }
    if (fplatforms.children[13].y <= 200){
      fplatforms.children[13].body.velocity.y = 0;
      game.time.events.add(1000, function() {
      fplatforms.children[13].body.velocity.y = 100;
      })
    } else if (fplatforms.children[13].y >= 500){
      fplatforms.children[13].body.velocity.y = 0;
      game.time.events.add(1000, function() {
      fplatforms.children[13].body.velocity.y = -100;
      })
    }
    if (fplatforms.children[24].y <= 200){
      fplatforms.children[24].body.velocity.y = 0;
      game.time.events.add(1000, function() {
      fplatforms.children[24].body.velocity.y = 100;
      })
    } else if (fplatforms.children[24].y >= 375){
      fplatforms.children[24].body.velocity.y = 0;
      game.time.events.add(1000, function() {
      fplatforms.children[24].body.velocity.y = -100;
      })
    }

    if (player.x - hituomo.x < 512){
      game.camera.unfollow();
      if (game.camera.x > hituomo.x){
        game.camera.x --;
      } else {
        game.camera.x = hituomo.x;
      }
    } else {
      game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    }

    if (player.y >= 650){
      player.body.collideWorldBounds = false;
      if (coolf == false && (player.y > 768 && life > 0)){
        coolf = true;
        cool = false;
        life = 1;
        lives.visible = false;
        player.allowGravity = false;
        player.body.velocity.y = 0;
        game.time.events.add(300, function() {
          damage();
        })
      }
    } else {
      player.body.collideWorldBounds = true;
    }

    lives.frame = (life-1);

    if (life == 0) {
      lives.visible = false;
      game.camera.unfollow();
      if (game.camera.x > hituomo.x){
        game.camera.x --;
      } else {
        game.camera.x = hituomo.x;
      }
    } else if (life < 0){
      life = 0;
    }

    if (cursors.left.isDown && stall == false)
    {
        cont = 'left';
        if (coolt == false){
          player.body.velocity.x = -250;
        } else {
          player.body.velocity.x = -350;
        }
        if (player.body.velocity.y <= 0 && (player.body.touching.down == false && player.body.onFloor() == false)){
          player.animations.play('jumpl');
        } else if (player.body.velocity.y == 0) {
          player.animations.play('left');
        }
    }
    else if (cursors.right.isDown && stall == false)
    {
        cont = 'right';
        if (coolt == false){
          player.body.velocity.x = 250;
        } else {
          player.body.velocity.x = 125;
        }
        if (player.body.velocity.y <= 0 && (player.body.touching.down == false)){
          player.animations.play('jumpr');
        } else if (player.body.velocity.y == 0) {
          player.animations.play('right');
        }
    }

    else if (player.body.onFloor() || player.body.touching.down)
    {
        player.frame = 13;
    }

    if (player.body.velocity.y <= 0 && (player.body.onFloor() == false) && (player.body.touching.down == false)){
        if (cont == 'right'){
          player.animations.play('jumpr');
        } else {
          player.animations.play('jumpl');
        }
    }

    if (player.body.velocity.y > 0){
      if (cont == 'right'){
        player.animations.play('fallr');
      } else {
        player.animations.play('falll');
      }
    }

    if (jumpButton.justDown && (player.body.onFloor() || player.body.touching.down) && (xfactor == true) && stall == false)
    {
        player.body.velocity.y = -350;
    }

    if (player.body.touching.down == false){
      xfactor = false;
    }

    if (player.x < hituomo.x+200) {
      damage();
    }
}

function render () {
  //game.debug.body(barrel.children[0]);
  //game.debug.body(player);
}
