
    window.onload = function() {

        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

        function preload () {

            game.load.image('guy', 'assets/guy.gif');

        }

        function create () {

            //create player
            var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'guy');
            logo.anchor.setTo(0.5, 0.5);

            //  We're going to be using physics, so enable the Arcade Physics system
            game.physics.startSystem(Phaser.Physics.ARCADE);

        }

    };
