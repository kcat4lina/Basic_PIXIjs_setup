// Import necessary classes from the PixiJS library
import { Application, Sprite } from 'pixi.js'

// Create a new PixiJS application
const app = new Application<HTMLCanvasElement>({
    // Set the canvas element to render on
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    // Set the resolution based on device pixel ratio
    resolution: window.devicePixelRatio || 1,
    // Adjust the renderer's resolution based on the device's pixel ratio
    autoDensity: true,
    // Set the background color (light blue)
    backgroundColor: 0x6495ed,
    // Set the width of the canvas
    width: 640,
    // Set the height of the canvas
    height: 480
})

// Create a new Sprite using the 'cow.png' image
const cow: Sprite = Sprite.from("cow.png")

// Set the anchor point to the center of the sprite
cow.anchor.set(0.5)

// Position the cow sprite at the center of the screen
cow.x = app.screen.width / 2
cow.y = app.screen.height / 2

// Add the cow sprite to the stage
app.stage.addChild(cow)
