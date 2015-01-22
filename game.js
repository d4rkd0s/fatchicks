window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    
    function preload() {
        
        game.load.image('guy', 'assets/guy.gif');
        game.load.image('background', 'assets/background.jpg');

    }
    
    function create() {

        //  A simple background for our game
        game.add.sprite(0, 0, 'background');

        //create player
        var player = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
        player.anchor.setTo(0.5, 0.5);


        //  We need to enable physics on the player
        game.physics.arcade.enable(player);
        
    }
    
    function update() {
        
    }

};