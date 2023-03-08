import { CannonJSPlugin, Engine, FreeCamera, HemisphericLight, MeshBuilder, PHI, PhysicsImpostor, Scene, SceneLoader, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders";
import * as CANNON from "cannon";

export class PrototypeLevel{
    scene:Scene;
    engine: Engine;

    constructor(private canvas: HTMLCanvasElement){
        this.engine=new Engine(this.canvas,true);
        this.scene=this.CreateScene();

        this.engine.runRenderLoop(()=>{
            this.scene.render();
        });
    }

    CreateScene():Scene{
        const scene=new Scene(this.engine);
        return scene;
    }

    async CreateEnvironment():Promise<void>{
        const {meshes}=await SceneLoader.ImportMeshAsync(
            "",
            "./models/",
            'Prototype_Level_0.glb',
            this.scene
        );
    }
}