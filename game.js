window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    
    function preload() {
        
        game.load.image('guy', 'assets/guy.gif');
        game.load.image('background', 'assets/background.jpg');

    }
    
    function create() {

        //  A simple background for our game
        game.add.sprite(0, 0, 'background');

        // The player and its settings
        player = game.add.sprite(32, game.world.height - 150, 'dude');
    
        //  We need to enable physics on the player
        game.physics.arcade.enable(player);
    
        //  Player physics properties. Give the little guy a slight bounce.
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;
    
        //  Our two animations, walking left and right.
        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);
            
    }
    
    function update() {
        
    }

};