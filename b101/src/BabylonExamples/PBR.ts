import { CubeTexture, FreeCamera, HemisphericLight, MeshBuilder, PBRMaterial, Scene, Texture, Vector3 } from "@babylonjs/core";
import { Engine } from "@babylonjs/core/Engines";

export class PBR {
    scene: Scene;
    engine: Engine;

    constructor(private canvas:HTMLCanvasElement){
        this.engine=new Engine(this.canvas,true);
        this.scene=this.CreateScene();
        this.CreateEnivornment();

        this.engine.runRenderLoop(()=>{
            this.scene.render();
        })
    }

    CreateScene():Scene{
        const scene=new Scene(this.engine);
        const camera=new FreeCamera("camera",new Vector3(0,1,-5),this.scene);
        camera.attachControl();
        camera.speed=0.25;

        //const hemiLight=new HemisphericLight("hemiLight",new Vector3(0,1,0),this.scene);
        //hemiLight.intensity=0.5;

        const envTex=CubeTexture.CreateFromPrefilteredData("./environment/sky.env",scene);

        scene.environmentTexture=envTex;

        scene.createDefaultSkybox(envTex,true);
        
        

        return scene;
    }

    CreateEnivornment():void{
        const ground=MeshBuilder.CreateGround("ground",{width:10,height:10},this.scene);
        ground.position=new Vector3(0,0,0);
        ground.material=this.CreateAsphalt();
        const ball=MeshBuilder.CreateSphere("ball",{segments:32,diameter:1},this.scene);
        ball.position=new Vector3(0,0.5,0);
    }

    CreateAsphalt(): PBRMaterial{
        const pbr=new PBRMaterial("pbr",this.scene);
        pbr.albedoTexture=new Texture("./textures/asphalt/asphalt_diffuse.jpg",this.scene);
        pbr.bumpTexture=new Texture("./textures/asphalt/asphalt_normal.jpg",this.scene);
        pbr.invertNormalMapX=true;
        pbr.invertNormalMapY=true;

        pbr.useAmbientOcclusionFromMetallicTextureRed=true;
        pbr.useMetallnessFromMetallicTextureBlue=true;
        pbr.useRoughnessFromMetallicTextureGreen=true;
        pbr.metallicTexture=new Texture("./textures/asphalt/asphalt_ao_rough_metal.jpg",this.scene);
        pbr.roughness=1;

        return pbr;
    }
}