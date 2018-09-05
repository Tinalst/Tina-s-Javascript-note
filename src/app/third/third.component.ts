import {AfterViewInit, Component, ElementRef, HostListener, OnChanges, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import './js/enableThree';
import 'three/examples/js/controls/OrbitControls';
import 'three/examples/js/loaders/OBJLoader';



@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') private canvasRef: ElementRef;

  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;

  public controls: THREE.OrbitControls;

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
    this.scene.add(new THREE.AmbientLight(0xFFFFFF));
    const light = new THREE.DirectionalLight( 0xffffff, 0.3 );
    light.position.set( 50, 50, 50 );
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 512;
    light.shadow.camera.near = 100;
    light.shadow.camera.far = 1200;
    light.shadow.camera.left = -1000;
    light.shadow.camera.right = 1000;
    light.shadow.camera.top = 350;
    light.shadow.camera.bottom = -350;
    this.scene.add( light );
  };

  // 4. 创建模型
  createModel = () => {
    const loader = new THREE.OBJLoader();
    loader.load('assets/models/c01.OBJ', this.onModelLoadingCompleted);
  };

  // 模型配置
  onModelLoadingCompleted = (loadeMesh) => {
    loadeMesh.scale.set(10, 10, 10);
    loadeMesh.position.set(30, 0, 30);
    loadeMesh.name = 't1';
    loadeMesh.castShadow = true;
    loadeMesh.clone();
    this.scene.add(loadeMesh);
    // loadeMesh.add(new THREE.AxesHelper(200)); // 添加坐标轴
    this.render();
  };

  // 5. 创建地板
  createGroud = () => {
    const geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );

    // 添加纹理
    const material = new THREE.MeshPhongMaterial( { color: 0xaaaaaa } );
    const texture = THREE.ImageUtils.loadTexture('assets/textures/metal-rust.jpg');
    texture.repeat.set(8, 8);
    texture.wrapS = THREE.RepeatWrapping; // X轴重复
    texture.wrapT = THREE.RepeatWrapping; // Y轴重复
    material.map = texture;

    const ground = new THREE.Mesh( geometry, material );
    ground.rotation.x = - Math.PI / 2;
    ground.position.y = -10;
    ground.receiveShadow = true;

    this.scene.add( ground );
  };

  // 6. 创建相机
  createCamera = () => {
    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(60, aspectRatio, 0.1, 1000);
    this.camera.position.set(0, 15, 100);
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
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0x519EcB);
    this.renderer.autoClear = true;

    const component: ThirdComponent = this;

    (function render() {
      requestAnimationFrame(render);
      component.render();
    }());
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public addControls() {
    this.controls = new THREE.OrbitControls(this.camera);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.addEventListener('change', this.render);
    // this.controls.addEventListener('start', () => {});
    // this.controls.addEventListener('end', () => {});s
  }


  /* EVENTS */

  public onMouseDown(event: MouseEvent) {
    // event.preventDefault();
    // Example of mesh selection/pick:
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, this.camera);

    const obj: THREE.Object3D[] = [];
    this.findAllObjects(obj, this.scene);
    const intersects = raycaster.intersectObjects(obj);
    console.log(intersects);
    // console.log(this.scene.children);
    // console.log(this.scene);
    if (intersects.length > 0 && intersects[0].object.parent.name === 't1') {
      const selectObj: any = intersects[0].object.clone();
      console.log(selectObj);
      selectObj.material.color.set(0xff0000);
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
  }

  ngOnInit(): void {
  }


}
