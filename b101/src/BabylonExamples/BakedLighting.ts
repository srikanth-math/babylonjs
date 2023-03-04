import { Engine, FreeCamera, Scene, SceneLoader, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders";

export class BakedLighting{
    scene: Scene;
    engine: Engine;

    constructor(private canvas:HTMLCanvasElement){
        this.engine=new Engine(this.canvas,true);
        this.scene=this.CreateScene();
        this.CreateEnvironment();

        this.engine.runRenderLoop(()=>{
            this.scene.render();
        });
    }

    CreateScene():Scene{
        const scene=new Scene(this.engine);
        const camera=new FreeCamera("camera",new Vector3(0,1,-4),this.scene);
        camera.attachControl();
        camera.speed=0.1;

        camera.minZ=0.01;

        return scene;
    }

    async CreateEnvironment():Promise<void>{
        const {meshes} = await SceneLoader.ImportMeshAsync("","./models/","bust_demo.glb");

    }
}