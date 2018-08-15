   
	// function Page() {
	// 	this.init();
	// }
	// Page.prototype = {
		// init: function() {
		// 	var self = this;
		// 	// 初始化场景
		// 	this.scene = new THREE.Scene();
		// 	// 初始化相机
		// 	this.camera = new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,0.1,4000);
		// 	this.camera.position.set( 0, 0, 5 );
        //     this.scene.add(this.camera);
        //     // xyz轴辅助线
        //     var axesHelper = new THREE.AxesHelper( 5 );
        //     this.scene.add( axesHelper );
		// 	// 初始化渲染器
		// 	this.renderer = new THREE.WebGLRenderer({ antialias: true } );
		// 	this.renderer.setSize(window.innerWidth,window.innerHeight);
		// 	this.renderer.setClearColor(0x519EcB);
		// 	this.renderer.shadowMapEnabled = false;
		// 	this.renderer.setPixelRatio(window.devicePixelRatio);
		// 	document.querySelector('.main-page').appendChild(this.renderer.domElement);

        //     var controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
            
		// 	this.threeOnEvent = new THREE.onEvent(this.scene,this.camera);

		// 	// create light
		// 	this.createLight();
		// 	// create ground
		// 	this.createGround(1000,1000);

		// 	// create cube
		// 	// this.createCube();
        //     // this.createSphere();
        //     this.createModel();
		// 	// window resize listener
		// 	this.resize();
		// 	this.render();
		// },
		// resize: function() {
		// 	// var self = this;
		// 	window.addEventListener( 'resize', function() {
		// 		// update when resizing
		// 		camera.aspect = window.innerWidth / window.innerHeight;
		// 		camera.updateProjectionMatrix();
		// 		renderer.setSize( window.innerWidth, window.innerHeight );
		// 	}, false );
		// },
		// createCube: function () {
			// create a cube
			// var geometry = new THREE.CubeGeometry( 20,20,20);
			// var material = new THREE.MeshLambertMaterial( { color: 0xef6500,needsUpdate: true,opacity:1,transparent:true} );
			// this.Cube = new THREE.Mesh( geometry, material );
			// this.Cube.position.set(20,0,-50);
			// this.Cube.castShadow = true;
			// this.scene.add(this.Cube);
			// // add hover listener
			// this.Cube.on('hover',function(m) {
			// 	m.material.opacity = 0.5;
			// },function(m) {
			// 	m.material.opacity = 1;
			// });
		// },
		// createSphere: function () {
			// create a ball
			// var geometry = new THREE.SphereGeometry( 10,20,20);
			// var material = new THREE.MeshLambertMaterial( { color: 0xef6500,needsUpdate: true,opacity:1,transparent:true} );
			// var ball = new THREE.Mesh( geometry, material );
			// ball.position.set(-20,0,-50);
			// ball.castShadow = true;
			// this.scene.add(ball);
            // var isclick = false;
			// // add click listener
			// // add hover listener
			// ball.on('hover',function(m) {
			// 	document.body.style.cursor = 'pointer';
			// 	m.material.opacity = 0.5;
			// },function(m) {
			// 	m.material.opacity = 1;
			// 	document.body.style.cursor = 'initial';
			// });
			// ball.on('click',function(m) {
            //     if(!isclick) {
			// 		m.position.y = 5;
            //         m.scale.set(1.5,1.5,1.5);
            //         isclick = true;
            //     } else {
			// 		m.position.y = 0;
			// 	    m.scale.set(1,1,1);
            //         isclick = false;
            //     }
			// });
        // },
        // createModel: function() {
        //     // var scene =  this.scene;
           
        //     loader.load("./model/c01.OBJ", function (loadeMesh) {
        //         loadeMesh.scale.set(10, 10, 10);
        //         loadeMesh.position.set(-50,-5,-50);
        //         loadeMesh.name = "table0";
        //         // modelArr.push(loadeMesh.children[0]);
        //         // singleModel = loadeMesh;
        //         scene.add(loadeMesh);
        //         loadeMesh.on('click',function(m) {
        //             // console.log(m);
        //             // alert(1111);
        //             m.material.color.set(0xff0000);
        //         });
        //     });

        //     loader.load("./model/c01.OBJ", function (loadeMesh) {
        //         loadeMesh.scale.set(10, 10, 10);
        //         loadeMesh.position.set(-20,-5,-50);
        //         loadeMesh.name = "table1";
        //         // modelArr.push(loadeMesh.children[0]);
        //         // singleModel = loadeMesh;
        //         scene.add(loadeMesh);
        //         loadeMesh.on('click',function(m) {
        //             // console.log(m);
        //             // alert(1111);
        //             m.material.color.set(0xDB7093);
        //         });
        //     });

        //     loader.load("./model/c01.OBJ", function (loadeMesh) {
        //         loadeMesh.scale.set(10, 10, 10);
        //         loadeMesh.position.set(10,-5,-50);
        //         loadeMesh.name = "table3";
        //         // modelArr.push(loadeMesh.children[0]);
        //         // singleModel = loadeMesh;
        //         scene.add(loadeMesh);
        //         loadeMesh.on('click',function(m) {
        //             // console.log(m);
        //             // alert(1111);
        //             m.material.color.set(0xDA70D6);
        //         });
        //     });

        //     loader.load("./model/c01.OBJ", function (loadeMesh) {
        //         loadeMesh.scale.set(10, 10, 10);
        //         loadeMesh.position.set(40,-5,-50);
        //         loadeMesh.name = "table3";
        //         // modelArr.push(loadeMesh.children[0]);
        //         // singleModel = loadeMesh;
        //         scene.add(loadeMesh);
        //         loadeMesh.on('click',function(m) {
        //             // console.log(m);
        //             // alert(1111);
        //             m.material.color.set(0x6495ED);
        //         });
        //     });
        // },
		// createLight: function() {
	    //     scene.add(new THREE.AmbientLight(0xFFFFFF));
	    //     var light = new THREE.DirectionalLight( 0xffffff, 0.3 );
		// 	light.position.set( 50, 50, 50 );
		// 	light.castShadow = true;
		// 	light.shadow.mapSize.width = 2048;
		// 	light.shadow.mapSize.height = 512;
		// 	light.shadow.camera.near = 100;
		// 	light.shadow.camera.far = 1200;
		// 	light.shadow.camera.left = -1000;
		// 	light.shadow.camera.right = 1000;
		// 	light.shadow.camera.top = 350;
		// 	light.shadow.camera.bottom = -350;
		// 	scene.add( light );
		// },
		// createGround: function(width,height) {
		// 	var geometry = new THREE.PlaneBufferGeometry( width, height );
		// 	var material = new THREE.MeshPhongMaterial( { color: 0xaaaaaa } );
		// 	var ground = new THREE.Mesh( geometry, material );
		// 	ground.rotation.x = - Math.PI / 2;
		// 	ground.position.y = -10;
		// 	ground.receiveShadow = true;
		// 	this.scene.add( ground );
		// },
		// render: function() {
		// 	// render
		// 	// var self = this;
		// 	var render = function() {
		// 		// self.Cube.rotation.y += 0.01;
		// 		renderer.render(scene, camera);
		// 		// self.threeOnEvent.update(); // gaze event needed
		// 		requestAnimationFrame(render);
		// 	}
		// 	render();
		// }
	// };

    // new Page();

    // var p = new Page();
    // p.init();
    var scene, camera, renderer;

    var loader = new THREE.OBJLoader();

    function init() {
        // var self = this;
        // 初始化场景
        scene = new THREE.Scene();
        // 初始化相机
        camera = new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,0.1,4000);
        camera.position.set( 0, 0, 5 );
        scene.add(camera);
        // xyz轴辅助线
        var axesHelper = new THREE.AxesHelper( 5 );
        scene.add( axesHelper );
        // 初始化渲染器
        renderer = new THREE.WebGLRenderer({ antialias: true } );
        renderer.setSize(window.innerWidth,window.innerHeight);
        renderer.setClearColor(0x519EcB);
        renderer.shadowMapEnabled = false;
        renderer.setPixelRatio(window.devicePixelRatio);
        document.querySelector('.main-page').appendChild(renderer.domElement);

        var controls = new THREE.OrbitControls(camera, renderer.domElement );
        
        this.threeOnEvent = new THREE.onEvent(scene,camera);

        // create light
        createLight();
        // create ground
        createGround(1000,1000);

        // create cube
        // this.createCube();
        // this.createSphere();
        createModel();
        // window resize listener
        resize();
        render();
    }

    function createModel() {
        // var scene =  this.scene;
       
        loader.load("./model/c01.OBJ", function (loadeMesh) {
            loadeMesh.scale.set(10, 10, 10);
            loadeMesh.position.set(-50,-5,-50);
            loadeMesh.name = "table0";
            // modelArr.push(loadeMesh.children[0]);
            // singleModel = loadeMesh;
            scene.add(loadeMesh);
            loadeMesh.on('click',function(m) {
                // console.log(m);
                // alert(1111);
                m.material.color.set(0xff0000);
            });
        });

        loader.load("./model/c01.OBJ", function (loadeMesh) {
            loadeMesh.scale.set(10, 10, 10);
            loadeMesh.position.set(-20,-5,-50);
            loadeMesh.name = "table1";
            // modelArr.push(loadeMesh.children[0]);
            // singleModel = loadeMesh;
            scene.add(loadeMesh);
            loadeMesh.on('click',function(m) {
                // console.log(m);
                // alert(1111);
                m.material.color.set(0xDB7093);
            });
        });

        loader.load("./model/c01.OBJ", function (loadeMesh) {
            loadeMesh.scale.set(10, 10, 10);
            loadeMesh.position.set(10,-5,-50);
            loadeMesh.name = "table3";
            // modelArr.push(loadeMesh.children[0]);
            // singleModel = loadeMesh;
            scene.add(loadeMesh);
            loadeMesh.on('click',function(m) {
                // console.log(m);
                // alert(1111);
                m.material.color.set(0xDA70D6);
            });
        });

        loader.load("./model/c01.OBJ", function (loadeMesh) {
            loadeMesh.scale.set(10, 10, 10);
            loadeMesh.position.set(40,-5,-50);
            loadeMesh.name = "table3";
            // modelArr.push(loadeMesh.children[0]);
            // singleModel = loadeMesh;
            scene.add(loadeMesh);
            loadeMesh.on('click',function(m) {
                // console.log(m);
                // alert(1111);
                m.material.color.set(0x6495ED);
            });
        });
    }

    function resize() {
        // var self = this;
        window.addEventListener( 'resize', function() {
            // update when resizing
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }, false );
    }

    function createLight() {
        scene.add(new THREE.AmbientLight(0xFFFFFF));
        var light = new THREE.DirectionalLight( 0xffffff, 0.3 );
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
        scene.add( light );
    }

    function createGround(width,height){
        var geometry = new THREE.PlaneBufferGeometry( width, height );
        var material = new THREE.MeshPhongMaterial( { color: 0xaaaaaa } );
        var ground = new THREE.Mesh( geometry, material );
        ground.rotation.x = - Math.PI / 2;
        ground.position.y = -10;
        ground.receiveShadow = true;
        this.scene.add( ground );
    }

    function render() {
        // render
        // var self = this;
        var render = function() {
            // self.Cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            // self.threeOnEvent.update(); // gaze event needed
            requestAnimationFrame(render);
        }
        render();
    }

    init();
    
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function(){
        alert('btn');
    })
