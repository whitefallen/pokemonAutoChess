
export default class WeatherManager{
    constructor(scene){
        this.scene = scene;
        this.offscreen = new Phaser.Geom.Rectangle(0, 0, 2000, 100);
        this.screen = new Phaser.Geom.Rectangle(0, 0, 2000, 1000);
    }

    addRain(){
        this.rectangle = this.scene.add.existing(new Phaser.GameObjects.Rectangle(this.scene,1000,500,2000,1000,0x296383,0.3));
        this.particles = this.scene.add.particles('rain', [
            {
                emitZone: { source: this.offscreen },
                deathZone: { source: this.screen, type: 'onLeave' },
                frequency: 50,
                speedY: { min: 260, max: 280 },
                lifespan: 30000,
                scale: 0.5
            },
            {
                emitZone: { source: this.offscreen },
                deathZone: { source: this.screen, type: 'onLeave' },
                frequency: 100,
                speedY: { min: 360, max: 380 },
                lifespan: 30000,
                scale: 0.8
            },
            {
                emitZone: { source: this.offscreen },
                deathZone: { source: this.screen, type: 'onLeave' },
                frequency: 200,
                quantity: 4,
                speedY: { min: 460, max: 480 },
                lifespan: 30000
            },
        ]);
    }

    clearWeather(){
        if(this.particles){
            this.particles.destroy();
        }
        if(this.rectangle){
            this.rectangle.destroy();
        }
    }
}