import { CubeTexture, Engine, FreeCamera, Scene, SceneLoader, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders";
//import { CustomLoadingScreen } from "./CustomLoadingScreen";

export class CustomLoading {
    scene: Scene;
    engine: Engine;
    // loadingScreen:CustomLoadingScreen;

    constructor(
        private canvas: HTMLCanvasElement,
        private setLoaded: () => void,
        private loadingBar?: HTMLElement,
        private percentLoaded?: HTMLElement,
        private loader?: HTMLElement
    ){
        this.engine=new Engine(this.canvas,true);
        
        /* this.loadingScreen=new CustomLoadingScreen(this.loadingBar,this.percentLoaded,this.loader);

        this.engine.loadingScreen=this.loadingScreen;

        this.engine.displayLoadingUI(); */

        this.scene=this.CreateScene();

        this.CreateEnvironment();

        this.engine.runRenderLoop(()=>{
            this.scene.render();
        })
    }

    CreateScene():Scene{
        const scene=new Scene(this.engine);
        const camera=new FreeCamera("camera",new Vector3(0,0.75,-8),this.scene);
        camera.attachControl();
        camera.speed=0.1;

        const envTex=CubeTexture.CreateFromPrefilteredData(
            "./environment/sky.env",
            scene
        );
        
        scene.environmentTexture=envTex;

        scene.createDefaultSkybox(envTex);

        scene.environmentIntensity=0.5;

        return scene;
    }

    async CreateEnvironment(): Promise<void> {
        await SceneLoader.ImportMeshAsync(
          "",
          "./models/",
          "LightingScene.glb",
          this.scene,
          /* (evt) => {
            // onProgress
            let loadedPercent:any = "0";
            if (evt.lengthComputable) {
                loadedPercent = ((evt.loaded * 100 / evt.total).toFixed())+"";
            } else {
                const dlCount = evt.loaded / (1024 * 1024);
                loadedPercent = (Math.floor(dlCount * 100.0) / 100.0)+"";
            }
            console.log(loadedPercent);
            const loadStatus = ((evt.loaded * 100) / evt.total).toFixed();
    
            //this.loadingScreen.updateLoadStatus(loadedPercent);
          } */
        );    
        this.setLoaded();    
        //this.engine.hideLoadingUI();
    }
}