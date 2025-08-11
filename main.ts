namespace SpriteKind {
    export const pewpew = SpriteKind.create()
    export const harpon = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ME, 50, 0)
    pew_pew.startEffect(effects.fire, 200)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.disintegrate, 1000)
    scene.cameraShake(4, 200)
    music.play(music.createSoundEffect(WaveShape.Noise, 408, 1, 162, 180, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    info.player1.changeScoreBy(1)
})
sprites.onDestroyed(SpriteKind.Player2, function (sprite) {
    game.showLongText("player 2 has been eaten \"A\" to accept death", DialogLayout.Center)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.harpon, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.fire, 1000)
    music.play(music.createSoundEffect(WaveShape.Noise, 408, 1, 162, 180, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    info.player2.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(harpoon)
    sprites.destroy(player2)
    myEnemy.follow(ME, 5)
})
info.onScore(50, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "You win")
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f 7 2 2 7 7 2 7 7 f . . . 
        . . . f 7 7 2 7 7 2 7 7 f . . . 
        . . . f 7 7 7 7 7 2 7 7 f . . . 
        . . . f 7 7 7 7 7 2 2 2 f . . . 
        . . . f 7 f f 7 f f f 2 f . . . 
        . . . f 7 2 7 7 7 2 2 2 f . . . 
        . . . f 7 2 7 7 7 7 2 7 f . . . 
        . . . f 7 2 7 7 7 7 2 7 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.setPosition(165, 90)
    myEnemy.follow(ME, 5)
    myEnemy.follow(player2, 5)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.showLongText("player 1 has been eaten \"A\" to accept death", DialogLayout.Center)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(projectile)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(pew_pew)
    sprites.destroy(ME)
    myEnemy.follow(player2, 5)
})
let projectile: Sprite = null
let myEnemy: Sprite = null
let player2: Sprite = null
let harpoon: Sprite = null
let pew_pew: Sprite = null
let ME: Sprite = null
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6668866666666686666666666666666666666666666886666666668666666666666666666666666666688666666666866666666666666666666666666668866666666686666666666666666666666666
    6888666666666886666666666666666666666686688866666666688666666666666666666666668668886666666668866666666666666666666666866888666666666886666666666666666666666686
    6686688666886688666688666666666666666688668668866688668866668866666666666666668866866886668866886666886666666666666666886686688666886688666688666666666666666688
    8888886686688688668688666666666666668868888888668668868866868866666666666666886888888866866886886686886666666666666688688888886686688688668688666666666666668868
    8888866688688888688886666666666666888866888886668868888868888666666666666688886688888666886888886888866666666666668888668888866688688888688886666666666666888866
    8888868888888868888866686666668886668886888886888888886888886668666666888666888688888688888888688888666866666688866688868888868888888868888866686666668886668886
    8888888888888668866888886688866688666888888888888888866886688888668886668866688888888888888886688668888866888666886668888888888888888668866888886688866688666888
    8888888888888688886688866866886688888888888888888888868888668886686688668888888888888888888886888866888668668866888888888888888888888688886688866866886688888888
    88e888888888888888888886886668868888888888e888888888888888888886886668868888888888e888888888888888888886886668868888888888e8888888888888888888868866688688888888
    88e8888888888888888888888e6668888888888888e8888888888888888888888e6668888888888888e8888888888888888888888e6668888888888888e8888888888888888888888e86688888888888
    88e8888888888888888888888ee668888888888888e8888888888888888888888ee668888888888888e8888888888888888888888ee668888888888888e8888888888888888888888ee8688888888888
    88e8888888fee88888888ff88eee88888888888888e8888888fee88888888ff88eee88888888888888e8888888fee88888888ff88eee88888888888888e8888888fee88888888ff88eee888888888888
    88e888888ffcee888888ccf888ee88888888888888e888888fffee888888fff888ee88888888888888e888888fffee888888fff888ee88888888888888e888888fffee888888fff888ee888888888888
    8ee888f88ff88eee8f888cff88ee8888888888888ee888f88ff88eee8f888cff88ee8888888888888ee888f88ff88eee8f888cff88ee8888888888888ee888f88ff88eee8f888cff88ee888888888888
    8ee888cf88f8cfeeeff88cff88eee888888888888ee888cf88f8cfeeeff88cff88eee888888888888ee888cf88f8cfeeeff88cff88eee888888888888ee888cf88f8cfeeeff88cff88eee88888888888
    8ee88ccffffcff8eeffcccf8888ee888888888888ee88ccffffcff8eeffcccf8888ee888888888888ee88ccffffcff8eeffcccf8888ee888888888888ee88ccffffcff8eeffcccf8888ee88888888888
    eee888cffffcff8eeffccff88fceee88f8888888eee888cffffcff8eeffccff88fceee88f8888888eee888cffffcff8eeffccff88fceee88f8888888eee888cffffcff8eeffccff88fceee88f8888888
    eeecc8cffffcfffeeefccfffff8eee88fff88888eeecc8cffffcfffeeefccfffff8eee88fff88888eeecc8cffffcfffeeefccfffff8eee88fff88888eeecc8cffffcfffeeefccfffff8eee88fff88888
    eee8cccffffcffffeefccffffc8eeef8ff888888eee8cccffffcffffeefccffffc8eeef8ff888888eee8cccffffcffffeefccffffc8eeef8ff888888eee8cccffffcffffeefccffffc8eeef8ff888888
    eee8cccfffcfffffeeeccffffcfeeeffff88ff88eee8cccfffcfffffeeeccffffcfeeeffff88ff88eee8cccfffcfffffeeeccffffcfeeeffff88ff88eee8cccfffcfffffeeeccffffcfeeeffff88ff88
    eeeccccfffcffffffeeccffffcfeeeeffffcfff8eeeccccfffcffffffeeccffffcfeeeeffffcfff8eeeccccfffcffffffeeccffffcfeeeeffffcfff8eeeccccfffcffffffeeccffffcfeeeeffffcfff8
    eefccccffccfffffffeeffffccfeeeeffffcffffeefccccffccfffffffeeffffccfeeeeffffcffffeefccccffccfffffffeeffffccfeeeeffffcffffeefccccffccfffffffeeffffccfeeeeffffcffff
    eeffcccccfffffffffeeefffcfffeeeffffcffffeeffcccccfffffffffeeefffcfffeeeffffcffffeeffcccccfffffffffeeefffcfffeeeffffcffffeeffcccccfffffffffeeefffcfffeeeffffcffff
    eeffccccffffffffffceeeeccfffeeeffffcfffeeeffccccffffffffffceeeeccfffeeeffffcfffeeeffccccffffffffffceeeeccfffeeeffffcfffeeeffccccffffffffffceeeeccfffeeeffffcfffe
    eeffcccfffffffffffcceeeeffffeeeefffcfffeeeffcccfffffffffffcceeeeffffeeeefffcfffeeeffcccfffffffffffcceeeeffffeeeefffcfffeeeffcccfffffffffffcceeeeffffeeeefffcfffe
    eeffcccfffffffffffcceeeeeeffeeeefffcfffeeeffcccfffffffffffcceeeeeeffeeeefffcfffeeeffcccfffffffffffcceeeeeeffeeeefffcfffeeeffcccfffffffffffcceeeeeeffeeeefffcfffe
    effffccffffffffffcccceeeeeeeeeeeefffcffeeffffccffffffffffcccceeeeeeeeeeeefffcffeeffffccffffffffffcccceeeeeeeeeeeefffcffeeffffccffffffffffcccceeeeeeeeeeeefffcffe
    effffcccfffffffffccfffffeeeeeeeeefffcffeeffffcccfffffffffccfffffeeeeeeeeefffcffeeffffcccfffffffffccfffffeeeeeeeeefffcffeeffffcccfffffffffccfffffeeeeeeeeefffcffe
    effffccccffffffffccffffffeeeeeeeefffcfeeeffffccccffffffffccffffffeeeeeeeefffcfeeeffffccccffffffffccffffffeeeeeeeefffcfeeeffffccccffffffffccffffffeeeeeeeefffcfee
    effffcccccffffffcccfffffffeeeeeeefffceeeeffffcccccffffffcccfffffffeeeeeeefffceeeeffffcccccffffffcccfffffffeeeeeeefffceeeeffffcccccffffffcccfffffffeeeeeeefffceee
    ccfffffcccccffffcccfffffffffeeeeefffeeeeccfffffcccccffffcccfffffffffeeeeefffeeeeccfffffcccccffffcccfffffffffeeeeefffeeeeccfffffcccccffffcccfffffffffeeeeefffeeee
    fcfffffcccccccfcccffffffffffeeeeeffeeeeffcfffffcccccccfcccffffffffffeeeeeffeeeeffcfffffcccccccfcccffffffffffeeeeeffeeeeffcfffffcccccccfcccffffffffffeeeeeffeeeef
    fcffffffccccccccccffffffffffeeeeeffeeefffcffffffccccccccccffffffffffeeeeeffeeefffcffffffccccccccccffffffffffeeeeeffeeefffcffffffccccccccccffffffffffeeeeeffeeeff
    fcffffffcccccccccfffffffffffeeeeeffeeffffcffffffcccccccccfffffffffffeeeeeffeeffffcffffffcccccccccfffffffffffeeeeeffeeffffcffffffcccccccccfffffffffffeeeeeffeefff
    fccfffffcccccccfffffffffffffeeeeeffeecfffccfffffcccccccfffffffffffffeeeeeffeecfffccfffffcccccccfffffffffffffeeeeeffeecfffccfffffcccccccfffffffffffffeeeeeffeecff
    ffccffffccccccffffffffffffffeeeeeffeecffffccffffccccccffffffffffffffeeeeeffeecffffccffffccccccffffffffffffffeeeeeffeecffffccffffccccccffffffffffffffeeeeeffeecff
    ffcccfffccccccffffffffffffffeeeeefeeeccfffcccfffccccccffffffffffffffeeeeefeeeccfffcccfffccccccffffffffffffffeeeeefeeeccfffcccfffccccccffffffffffffffeeeeefeeeccf
    ffffccccccccccfffffffffffffeeeeeefeeefcfffffccccccccccfffffffffffffeeeeeefeeefcfffffccccccccccfffffffffffffeeeeeefeeefcfffffccccccccccfffffffffffffeeeeeefeeefcf
    ffffccccccccccfffffffffffffeeeeeeeeeffcfffffccccccccccfffffffffffffeeeeeeeeeffcfffffccccccccccfffffffffffffeeeeeeeeeffcfffffccccccccccfffffffffffffeeeeeeeeeffcf
    ffffffccccccccfffffffffffffeeeeeeeeeffccffffffccccccccfffffffffffffeeeeeeeeeffccffffffccccccccfffffffffffffeeeeeeeeeffccffffffccccccccfffffffffffffeeeeeeeeeffcc
    cfffffffccccccffffffffffffeeeeeeeeeffffccfffffffccccccffffffffffffeeeeeeeeeffffccfffffffccccccffffffffffffeeeeeeeeeffffccfffffffccccccffffffffffffeeeeeeeeeffffc
    ccfffffffcccccffffffffffffeeeeeeeeefffffccfffffffcccccffffffffffffeeeeeeeeefffffccfffffffcccccffffffffffffeeeeeeeeefffffccfffffffcccccffffffffffffeeeeeeeeefffff
    ccfffffffcccccffffffffffffeeeeeeeeffffffccfffffffcccccffffffffffffeeeeeeeeffffffccfffffffcccccffffffffffffeeeeeeeeffffffccfffffffcccccffffffffffffeeeeeeeeffffff
    fcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeeffffff
    fcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeeffffff
    fcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeeffffff
    fcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeefffffffcfffffffcccccfffffffffffeeeeeeeeeffffff
    fccffffffcccccfffffffffffeeeeeeeeffffffffccffffffcccccfffffffffffeeeeeeeeffffffffccffffffcccccfffffffffffeeeeeeeeffffffffccffffffcccccfffffffffffeeeeeeeefffffff
    fccffffffcccccfffffffffffeeeeeeeeffffffffccffffffcccccfffffffffffeeeeeeeeffffffffccffffffcccccfffffffffffeeeeeeeeffffffffccffffffcccccfffffffffffeeeeeeeefffffff
    cccffffffcccccfffffffffffeeeeeeeefffffffcccffffffcccccfffffffffffeeeeeeeefffffffcccffffffcccccfffffffffffeeeeeeeefffffffcccffffffcccccfffffffffffeeeeeeeefffffff
    ccfffffffcccccfffffffffffeeeeeeeefffffffccfffffffcccccfffffffffffeeeeeeeefffffffccfffffffcccccfffffffffffeeeeeeeefffffffccfffffffcccccfffffffffffeeeeeeeefffffff
    ccfffffffccccccffffffffffeeeeeeeefffffffccfffffffccccccffffffffffeeeeeeeefffffffccfffffffccccccffffffffffeeeeeeeefffffffccfffffffccccccffffffffffeeeeeeeefffffff
    ccfffffffccccccffffffffffeeeeeeeefffffffccfffffffccccccffffffffffeeeeeeeefffffffccfffffffccccccffffffffffeeeeeeeefffffffccfffffffccccccffffffffffeeeeeeeefffffff
    ccfffffffccccccffffffffffeeeeeeeffffffffccfffffffccccccffffffffffeeeeeeeffffffffccfffffffccccccffffffffffeeeeeeeffffffffccfffffffccccccffffffffffeeeeeeeffffffff
    cffffffffccccccffffffffffeeeeeeefffffffccffffffffccccccffffffffffeeeeeeefffffffccffffffffccccccffffffffffeeeeeeefffffffccffffffffccccccffffffffffeeeeeeefffffffc
    cffffffffccccccffffffffffeeeeeeeffffffcccffffffffccccccffffffffffeeeeeeeffffffcccffffffffccccccffffffffffeeeeeeeffffffcccffffffffccccccffffffffffeeeeeeeffffffcc
    cffffffffccccccffffffffffeeeeeeeffffffcccffffffffccccccffffffffffeeeeeeeffffffcccffffffffccccccffffffffffeeeeeeeffffffcccffffffffccccccffffffffffeeeeeeeffffffcc
    fffffffffcccccccfffffffffeeeeeeefffffcccfffffffffcccccccfffffffffeeeeeeefffffcccfffffffffcccccccfffffffffeeeeeeefffffcccfffffffffcccccccfffffffffeeeeeeefffffccc
    fffffffffcccccccfffffffffeeeeeeefffffcccfffffffffcccccccfffffffffeeeeeeefffffcccfffffffffcccccccfffffffffeeeeeeefffffcccfffffffffcccccccfffffffffeeeeeeefffffccc
    fffffffffcccccccfffffffffeeeeeeefffffcccfffffffffcccccccfffffffffeeeeeeefffffcccfffffffffcccccccfffffffffeeeeeeefffffcccfffffffffcccccccfffffffffeeeeeeefffffccc
    fffffffffccccccccffffffffeeeeeeeffffccccfffffffffccccccccffffffffeeeeeeeffffccccfffffffffccccccccffffffffeeeeeeeffffccccfffffffffccccccccffffffffeeeeeeeffffcccc
    fffffffffccccccccffffffffeeeeeeeffffccccfffffffffccccccccffffffffeeeeeeeffffccccfffffffffccccccccffffffffeeeeeeeffffccccfffffffffccccccccffffffffeeeeeeeffffcccc
    fffffffffccccccccffffffffeeeeeeeffffcccffffffffffccccccccffffffffeeeeeeeffffcccffffffffffccccccccffffffffeeeeeeeffffcccffffffffffccccccccffffffffeeeeeeeffffcccc
    ffffffffffccccccccffffffeeeeeeeeffffcccfffffffffffccccccccffffffeeeeeeeeffffcccfffffffffffccccccccffffffeeeeeeeeffffcccfffffffffffccccccccffffffeeeeeeeeffffcccc
    cfffffffffccccccccffffffeeeeeeeecccccccccfffffffffccccccccffffffeeeeeeeecccccccccfffffffffccccccccffffffeeeeeeeecccccccccfffffffffccccccccffffffeeeeeeeecccccccc
    cccccfffffccccccccffffffeeeeeeeeeccccccccccccfffffccccccccffffffeeeeeeeeeccccccccccccfffffccccccccffffffeeeeeeeeeccccccccccccfffffccccccccffffffeeeeeeeeeccccccc
    ccccccccffcccccccccfffcceeeeeeeeecccccccccccccccffcccccccccfffcceeeeeeeeecccccccccccccccffcccccccccfffcceeeeeeeeecccccccccccccccffcccccccccfffcceeeeeeeeeccccccc
    cccccccccccccccccccfcccceeeeeeeeeccccccccccccccccccccccccccfcccceeeeeeeeeccccccccccccccccccccccccccfcccceeeeeeeeeccccccccccccccccccccccccccfcccceeeeeeeeeccccccc
    cccccccccccccccccccccccceeeeeeeeeecccccccccccccccccccccccccccccceeeeeeeeeecccccccccccccccccccccccccccccceeeeeeeeeecccccccccccccccccccccccccccccceeeeeeeeeecccccc
    cccccccccccccccccccccccceeeeeeeeeecccccccccccccccccccccccccccccceeeeeeeeeecccccccccccccccccccccccccccccceeeeeeeeeecccccccccccccccccccccccccccccceeeeeeeeeecccccc
    ccccccccccccccccccccccceeeeeeeeeeeccccccccccccccccccccccccccccceeeeeeeeeeeccccccccccccccccccccccccccccceeeeeeeeeeeccccccccccccccccccccccccccccceeeeeeeeeeecccccc
    ccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeccccc
    ccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeccccc
    ccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeccccc
    ccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
scroller.scrollBackgroundWithSpeed(-30, 0)
mp.setPlayerIndicatorsVisible(true)
ME = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . f 9 8 9 9 9 9 8 9 f . . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . f 9 9 8 9 9 8 9 9 f . . . 
    . . . f 9 9 8 8 8 8 9 9 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(ME, 20, 0)
ME.setBounceOnWall(true)
pew_pew = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . c c b 
    f . . . . . . . . . . . . c 4 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.pewpew)
pew_pew.follow(ME)
harpoon = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f . . 
    . . . e e e e e e e e e e f f . 
    . . . . . . . . . . . . . f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.harpon)
player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . . f 4 2 4 4 4 4 2 4 f . . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . . f 4 4 2 4 4 2 4 4 f . . . 
    . . . f 4 4 2 2 2 2 4 4 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player2)
controller.player2.moveSprite(player2, 20, 0)
player2.setBounceOnWall(true)
harpoon.follow(player2)
ME.setPosition(14, 90)
pew_pew.setPosition(14, 50)
player2.setPosition(14, 90)
harpoon.setPosition(14, 50)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f 7 2 2 7 7 2 7 7 f . . . 
    . . . f 7 7 2 7 7 2 7 7 f . . . 
    . . . f 7 7 7 7 7 2 7 7 f . . . 
    . . . f 7 7 7 7 7 2 2 2 f . . . 
    . . . f 7 f f 7 f f f 2 f . . . 
    . . . f 7 2 7 7 7 2 2 2 f . . . 
    . . . f 7 2 7 7 7 7 2 7 f . . . 
    . . . f 7 2 7 7 7 7 2 7 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.setBounceOnWall(true)
myEnemy.follow(ME, 5)
myEnemy.follow(player2, 5)
myEnemy.setPosition(166, 90)
info.player1.setScore(0)
info.player2.setScore(0)
info.player1.setLife(1)
info.player2.setLife(1)
