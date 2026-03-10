class Invader {
    constructor(position, velocity) {
        this.position = position
        this.width = 0;
        this.height = 0;
        this.velocity = velocity;
    

        this.image = this.getImage(PATH_SPACESHIP_IMAGE);
    }

    getImage(path) {
        const image = new Image();
        image.src = path;
        return image;
    }

    moveLeft() {
        this.position.x -= this.velocity;
    }

    moveRight() {
        this.position.x += this.velocity;
    }

    draw(ctx) {

        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        );

        ctx.drawImage(
            this.engineSprite,
            this.sx, 
            0, 
            48, 
            48,
            this.position.x, 
            this.position.y + 4, 
            this.width, 
            this.height
        );

        ctx.drawImage(
            this.engineImage, 
            this.position.x, 
            this.position.y + 3, 
            this.width, 
            this.height
        );

        this.update();
    }
    update() {
        if (this.framesCounter === 0) {
            this.sx = this.sx === 96 ? 0 : this.sx + 48
            this.framesCounter = INITIAL_FRAMES;    
        }

        this.framesCounter--;
    }

    shoot(projectiles) {
        const p = new Projectile({
            x: this.position.x + this.width / 2 - 0.5,
            y: this.position.y + 2 + 1,
        },
        -10
    );
    projectiles.push(p);
    }
}

export default invader;