
    window.onload = function() {

        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

        function preload () {

            game.load.image('guy', 'assets/guy.gif');
            game.load.image('space', 'assets/space.jpg');

        }

        function create () {

            //create player
            var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'guy');
            logo.anchor.setTo(0.5, 0.5);

            //  A simple background for our game
            game.add.sprite(0, 0, 'space');
            //  We're going to be using physics, so enable the Arcade Physics system
            //game.physics.startSystem(Phaser.Physics.ARCADE);

        }

    };
