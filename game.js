$(function() {

window.onload = function() {

    var game = new Phaser.Game(1200, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    
    var jumping = "0";

    function preload() {
        
        game.load.image('guy', 'assets/images/guy.gif');
        game.load.image('background', 'assets/images/background.jpg');
        //game.load.image('fatty1', 'assets/images/FatGirl1.jpg')
        //game.load.image('fatty2', 'assets/images/FatGirl2.jpg')
        //game.load.image('fatty3', 'assets/images/FatGirl3.jpg')
        //game.load.image('fattyboss', 'assets/images/FatBoss.jpg')
        game.load.image('ground', 'assets/images/ground.png');
        cursors = game.input.keyboard.createCursorKeys();

        
    }
    
    var guy;
    var hotdog;
    var cupcake;
    var fatty;

    var score = 0;
    var lives = 3;

    var scoreText1;
    var scoreText2;
    var scoreText3;
    var scoreText4;
    var scoreText5;
    var livesText;
    var introText;



    function create() {

        //  A simple background for our game
        game.add.sprite(0, 0, 'background');

        //Gane Objects
        player = game.add.sprite(450, game.world.height - 500, 'guy');
        ground = game.add.sprite(0, game.world.height - 92, 'ground');
        //fatty1 = game.add.sprite(450, game.world.height - 300, 'fatty1');
        //fatty2 = game.add.sprite(450, game.world.height - 300, 'fatty2');
        //fatty3 = game.add.sprite(450, game.world.height - 300, 'fatty3');
    

        //ground
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
        if (cursors.up.isDown && player.body.touching.ground)
        {
            
            player.body.velocity.y = -350;

            
        }
    
        }
    function firehotdog() {
    	hotdogOnGuy = false;
    	hotdog.body.velocity.y = -50;
    	hotdog.body.velocity.x = -150
    	introText.visible = false;
    }
    function hotdogHitFatty (_hotdog, _fatty){
    	_hotdog.kill();

    }
};
});