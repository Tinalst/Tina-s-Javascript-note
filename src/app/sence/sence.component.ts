import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import './js/enableThree';
// import 'three/examples/js/libs/inflate.min';
import 'three/examples/js/loaders/FBXLoader';
import 'three/examples/js/controls/OrbitControls';


@Component({
  selector: 'app-sence',
  templateUrl: './sence.component.html',
  styleUrls: ['./sence.component.css']
})
export class SenceComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') private canvasRef: ElementRef;

  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;

  public controls: THREE.OrbitControls;
  public clock = new THREE.Clock();

  mixers: any[] = [];
  actions: any[] = [];

  constructor() {
    this.render = this.render.bind(this);
    this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  // 1.创建场景
  createScene = () => {
    this.scene = new THREE.Scene();
  };

  // 2. 创建辅助线
  createHelper = () => {
    this.scene.add(new THREE.AxesHelper(200));
  };

  // 3. 创建灯光
  createLight = () => {
    this.scene.add(new THREE.AmbientLight(0x444444));

    // 位于场景上方的灯光，颜色从天空颜色渐变到底色
    const hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0xffffff );
    hemisphereLight.position.set( 0, 200, 0 );
    this.scene.add( hemisphereLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 0, 200, 100 );
    directionalLight.shadow.camera.top = 180;
    directionalLight.shadow.camera.bottom = -100;
    directionalLight.shadow.camera.left = -120;
    directionalLight.shadow.camera.right = 120;
    // 告诉平行光开启阴影投射
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);
  };

  // 4. 创建模型
  createModel = () => {
    const loader = new THREE.FBXLoader();
    loader.load('assets/models/Naruto.fbx', this.onModelLoadingCompleted);
  };

  // 模型配置
  onModelLoadingCompleted = (object) => {

    // 添加骨骼辅助
    const meshHelper = new THREE.SkeletonHelper(object);
    this.scene.add(meshHelper);

    // 为骨骼动画添加播放器
    object.mixer = new THREE.AnimationMixer( object );
    this.mixers.push( object.mixer );

    // 播放第一个骨骼动画
    object.mixer.clipAction( object.animations[23]).play();

    // 设置模型的每个部位都可以投影
    object.traverse( function ( child ) {
      if ( child.isMesh ) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    } );

    // 获取所有骨骼动画
    for (let i = 0; i < object.animations.length; i++) {
      this.createAction(i, object);
    }

    this.scene.add(object);
    // this.render();
  };

  // 获取所有骨骼动画
  createAction = (i, object) => {
    this.actions[i] = object.mixer.clipAction(object.animations[i]);
  }

  // 5. 创建地板
  createGroud = () => {
    const geometry = new THREE.PlaneBufferGeometry(1000, 1000);

    // 添加纹理
    const material = new THREE.MeshPhongMaterial({color: 0xaaaaaa});
    const texture = THREE.ImageUtils.loadTexture('assets/textures/metal-rust.jpg');
    texture.repeat.set(8, 8);
    texture.wrapS = THREE.RepeatWrapping; // X轴重复
    texture.wrapT = THREE.RepeatWrapping; // Y轴重复
    material.map = texture;

    const ground = new THREE.Mesh(geometry, material);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -120;
    ground.receiveShadow = true;

    this.scene.add(ground);
  };

  // 6. 创建相机
  createCamera = () => {
    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(60, aspectRatio, 0.1, 1000);
    this.camera.position.set(0, 10, 400);
    this.scene.add(this.camera);
  }

  // 获取视口长宽比
  getAspectRatio = (): number => {
    const height = this.canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRendering() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    this.renderer.shadowMap.enabled = true;

    const component: SenceComponent = this;

    (function render() {
      // requestAnimationFrame(render);
      // component.render();
    }());
  }

  public render() {
    // 更新控制器
    if ( this.mixers.length > 0 ) {
      for ( let i = 0; i < this.mixers.length; i ++ ) {
        this.mixers[ i ].update( this.clock.getDelta() );
      }
    }
    this.controls.update();

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.render);
  }

  public addControls() {
    this.controls = new THREE.OrbitControls(this.camera);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    // this.controls.addEventListener('change', this.render);
  }


  /* EVENTS */

  public onMouseDown(event: MouseEvent) {
    // event.preventDefault();
    // Example of mesh selection/pick:
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, this.camera);
    //
    // const obj: THREE.Object3D[] = [];
    // this.findAllObjects(obj, this.scene);
    // console.dir(this.scene);
    const intersects = raycaster.intersectObjects(this.scene.children);
    console.log(intersects);
    // // console.log(this.scene);
    if (intersects.length > 0 && intersects[0].object.parent.name === 't1') {
      // const selectObj: any = intersects[0].object.clone();
      // console.log(selectObj);
      // selectObj.material.color.set(0xff0000);
      // console.log(intersects[0].object.parent.name);
      // console.log(intersects[0].object);
    }
  }

  private findAllObjects(pred: THREE.Object3D[], parent: THREE.Object3D) {
    // NOTE: Better to keep separate array of selected objects
    if (parent.children.length > 0) {
      parent.children.forEach((i) => {
        pred.push(i);
        this.findAllObjects(pred, i);
      });
    }
  }

  public onMouseUp(event: MouseEvent) {
    console.log('onMouseUp');
  }


  @HostListener('window:resize', ['$event'])
  public onResize(event: Event) {
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    console.log('onResize: ' + this.canvas.clientWidth + ', ' + this.canvas.clientHeight);

    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.render();
  }

  @HostListener('document:keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent) {
    console.log('onKeyPress: ' + event.key);
  }

  /* LIFECYCLE */
  ngAfterViewInit() {
    this.createScene();
    this.createHelper();
    this.createLight();
    this.createModel();
    this.createGroud();
    this.createCamera();
    this.startRendering();
    this.addControls();
    this.render();
  }

  ngOnInit(): void {
  }
}
