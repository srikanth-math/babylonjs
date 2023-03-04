import { FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";
import { Engine } from "@babylonjs/core/Engines";

export class BasicScene {
    scene: Scene;
    engine: Engine;

    constructor(private canvas:HTMLCanvasElement){
        this.engine=new Engine(this.canvas,true);
        this.scene=this.CreateScene();
        

        this.engine.runRenderLoop(()=>{
            this.scene.render();
        })
    }

    CreateScene():Scene{
        const scene=new Scene(this.engine);
        const camera=new FreeCamera("camera",new Vector3(0,1,-5),this.scene);
        camera.attachControl();

        const hemiLight=new HemisphericLight("hemiLight",new Vector3(0,1,0),this.scene);
        hemiLight.intensity=0.5;

        const ground=MeshBuilder.CreateGround("ground",{width:10,height:10},this.scene);

        const ball=MeshBuilder.CreateSphere("ball",{segments:32,diameter:1},this.scene);
        ball.position=new Vector3(0,0.5,0);
        return scene;
    }
}