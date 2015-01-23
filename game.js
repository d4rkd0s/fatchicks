$(function() {

window.onload = function() {

    var game = new Phaser.Game(1200, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    
    var jumping = "0";

    function preload() {
        
        game.load.image('guy', 'assets/images/guy.gif');
        game.load.image('background', 'assets/images/background.jpg');
        game.load.image('fatty1', 'assets/images/FatGirl1.jpg')
        game.load.image('fatty2', 'assets/images/FatGirl2.jpg')
        game.load.image('fatty3', 'assets/images/FatGirl3.jpg')
        game.load.image('fattyboss', 'assets/images/FatBoss.jpg')
        cursors = game.input.keyboard.createCursorKeys();

        
    }
    
    function create() {

        //  A simple background for our game
        game.add.sprite(0, 0, 'background');

        // The player and its settings
        player=game.add.sprite(450, game.world.height - 300, 'guy');
        fatty1 = game.add.sprite(450, game.world.height - 300, 'fatty1');
        fatty2 = game.add.sprite(450, game.world.height - 300, 'fatty2');
        fatty3 = game.add.sprite(450, game.world.height - 300, 'fatty3');
    
        //  We need to enable physics on the player
        game.physics.arcade.enable(player);
    
        //  Player physics properties. Give the little guy a slight bounce.
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
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
        if (cursors.up.isDown && jumping == "0")
        {
            jumping=1;
            player.body.velocity.y = -300;
            setTimeout(function(){
                player.body.velocity.y = 300;
            }, 200);
            setTimeout(function(){
                player.body.velocity.y = 0;
                jumping=0;
            }, 400);

            
        }
    
        }

};
});