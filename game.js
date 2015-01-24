$(function() {

window.onload = function() {

    var game = new Phaser.Game(1200, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    
    var jumping = "0";

    function preload() {
        
        game.load.image('guy', 'assets/images/guy.png');
        game.load.image('background', 'assets/images/background.jpg');
        game.load.image('fatty1', 'assets/images/FatGirl1.jpg')
        //game.load.image('fatty2', 'assets/images/FatGirl2.jpg')
        //game.load.image('fatty3', 'assets/images/FatGirl3.jpg')
        //game.load.image('fattyboss', 'assets/images/FatBoss.jpg')
        game.load.image('ground', 'assets/images/ground.png');
        cursors = game.input.keyboard.createCursorKeys();
        game.load.audio('jumpsound', 'assets/sounds/jump.ogg');
        
    }
    
    var health;
    var hotdog;
    var cupcake;
    var fatty;

    var score = 0;
    var lives = 3;

    var scoreText1;
    var scoreText2;
    var scoreText3;
    var scoreText4;
    var scoreCounter;
    var livesText;
    var introText;



    function create() {

        //  A simple background for our game
        game.add.sprite(0, 0, 'background');

        //Game Objects
        player = game.add.sprite(550, game.world.height - 300, 'guy');


        //sound
        jumpsound = game.add.audio('jumpsound');
        jumpsound.allowMultiple = false;
        jumpsound.addMarker('begin', 0, 1.0)

        //hiding this for now its in the way
        //var fatty1 = game.add.sprite(0, 0, 'fatty1');
        

        //Uncaught TypeError: Cannot read property 'velocity' of null
        //fatty1.body.velocity.x=20;

        ground = game.add.sprite(0, game.world.height - 92, 'ground');
    

        //fatty1 = game.add.sprite(450, game.world.height - 300, 'fatty1');
        //fatty2 = game.add.sprite(450, game.world.height - 300, 'fatty2');
        //fatty3 = game.add.sprite(450, game.world.height - 300, 'fatty3');
    

        //ground
        game.physics.enable(ground, Phaser.Physics.ARCADE);
        ground.body.immovable = true;

        //start physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(player);
        game.physics.arcade.enableBody(player);
        //Player physics properties. 
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 600;
        player.body.collideWorldBounds = true;
    
        
    }
    
    function update() {
        

        //ground collision
        game.physics.arcade.collide(player, ground);

        //  Reset the players velocity (movement)
        player.body.velocity.x = 0;
    
        if (cursors.left.isDown)
        {
            //  Move to the left
            player.body.velocity.x = -150;
    
            
        }
        else if (cursors.right.isDown)
        {
            //  Move to the right
            player.body.velocity.x = 150;
    
            
        }
        else
        {
            
        }
        

        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.y > 430)
        {
            jumpsound.play('begin', 50);
            player.body.velocity.y = -350;
            
        }
    
        }
    function intro (){
    	introText.text = 'Welcome! Feed those fatties!';
    	introText.visible = true;
    }
    function firehotdog() {
    	hotdogOnGuy = false;
    	hotdog.body.velocity.y = -50;
    	hotdog.body.velocity.x = -150;
    	introText.visible = false;
    }
    function hotdogHitFatty (_hotdog, _fatty){
    	_hotdog.kill();
    	score += 1;
    	scoreText1.text = 'score: ' + score;

    	//If there are still lives, put hotdog back on man
    
    

    	

    }
};
});