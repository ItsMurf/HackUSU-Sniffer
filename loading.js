(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [];
    
    
    (lib.AnMovieClip = function(){
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function(positionOrLabel){
            cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
        }
        this.play = function(){
            cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function(positionOrLabel){
            cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
        }
        this.stop = function(){
            cjs.MovieClip.prototype.stop.call(this);
        }
    }).prototype = p = new cjs.MovieClip();
    // symbols:
    // helper functions:
    
    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }
    
    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
        }
    
    
    (lib.Symbol1 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#872638").ss(10,1,1).p("ABuAAQAAAuggAgQggAgguAAQgtAAggggQggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgQAgAgAAAtg");
        this.shape.setTransform(11,11);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#872538").s().p("AhNBNQgggfAAguQAAgsAgghQAhggAsAAQAuAAAfAgQAhAhAAAsQAAAughAfQgfAhguAAQgsAAghghg");
        this.shape_1.setTransform(11,11);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-5,-5,32,32), null);
    
    
    // stage content:
    (lib.Untitled1 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // Layer_6
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#DD1D48").ss(4,1).p("AgiAAIBFAA");
        this.shape.setTransform(705.425,107.1);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#DD1D48").ss(4,1).p("Ah9AAID7AA");
        this.shape_1.setTransform(682.45,107.1);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#872638").ss(2).p("AAAhkIAADJ");
        this.shape_2.setTransform(751,107.1);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#DD1D48").s().p("AgdAeQgNgMAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMAMQgNANgSAAQgRAAgMgNg");
        this.shape_3.setTransform(750.975,107.1);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#872638").ss(4).p("AAiAAQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANg");
        this.shape_4.setTransform(728.275,47.3);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#872638").ss(4).p("AiDAAIEHAA");
        this.shape_5.setTransform(706.05,52.4);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#872638").ss(4).p("AhkAAIDJAA");
        this.shape_6.setTransform(702.925,43.9);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#DD1D48").s().p("Ai7DpQgiAAgXgYQgXgXAAghIAAkxQAAghAXgXQAXgYAiAAIF3AAQAhAAAYAYQAXAXAAAhIAAExQAAAhgXAXQgYAYghAAg");
        this.shape_7.setTransform(713.025,59.125);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#872638").s().p("AmpB8QghAAgYgXQgXgXAAgiIAAhXQAAghAXgXQAYgYAhAAINTAAQAiAAAXAYQAYAXgBAhIAABXQABAigYAXQgXAXgiAAg");
        this.shape_8.setTransform(713,107.1);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#872638").s().p("AjsETQghAAgYgXQgXgYAAghIAAmFQAAghAXgYQAYgXAhAAIHZAAQAhAAAYAXQAXAYAAAhIAAGFQAAAhgXAYQgYAXghAAg");
        this.shape_9.setTransform(713,59.125);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));
    
        // Layer_5
        this.instance = new lib.Symbol1();
        this.instance.setTransform(158,76.05,1,1,0,0,0,11,11);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:172.5},0).wait(1).to({x:187},0).wait(1).to({x:201.5},0).wait(1).to({x:216},0).wait(1).to({x:230.55},0).wait(1).to({x:245.05},0).wait(1).to({x:259.55},0).wait(1).to({x:274.05},0).wait(1).to({x:288.55},0).wait(1).to({x:303.1},0).wait(1).to({x:317.6},0).wait(1).to({x:332.1},0).wait(1).to({x:346.6},0).wait(1).to({x:361.1},0).wait(1).to({x:375.65},0).wait(1).to({x:390.15},0).wait(1).to({x:404.65},0).wait(1).to({x:419.15},0).wait(1).to({x:433.65},0).wait(1).to({x:448.2},0).wait(1).to({x:462.7},0).wait(1).to({x:477.2},0).wait(1).to({x:491.7},0).wait(1).to({x:506.2},0).wait(1).to({x:520.75},0).wait(1).to({x:535.25},0).wait(1).to({x:549.75},0).wait(1).to({x:564.25},0).wait(1).to({x:578.75},0).wait(1).to({x:593.3},0).wait(1).to({x:607.8},0).wait(1).to({x:622.3},0).wait(1).to({x:636.8},0).wait(1).to({x:651.35},0).wait(1));
    
        // Layer 1
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#872638").ss(10,1,1).p("EgmqAAAMBNVAAA");
        this.shape_10.setTransform(405.5,76.05);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(35));
    
        // Layer 1
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#DD1D48").s().p("AgeAeQgMgMAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMAMQgNANgSAAQgRAAgNgNg");
        this.shape_11.setTransform(122.325,107.1);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#DD1D48").ss(4,1).p("Ah+AAID8AA");
        this.shape_12.setTransform(56.6,111.8);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f().s("#DD1D48").ss(4,1).p("AhbAAIC3AA");
        this.shape_13.setTransform(53.175,102.25);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#872638").s().p("AmpB8QgiAAgXgXQgYgXAAgiIAAhXQAAghAYgXQAXgYAiAAINTAAQAiAAAXAYQAYAXAAAhIAABXQAAAigYAXQgXAXgiAAg");
        this.shape_14.setTransform(85.075,107.1);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#DD1D48").s().p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
        this.shape_15.setTransform(122.325,75.575);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#DD1D48").ss(4,1).p("Ah+AAID8AA");
        this.shape_16.setTransform(56.6,80.25);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f().s("#DD1D48").ss(4,1).p("AhbAAIC3AA");
        this.shape_17.setTransform(53.175,70.7);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#872638").s().p("AmpB8QgiAAgXgXQgYgYAAghIAAhXQAAghAYgYQAXgXAiAAINTAAQAiAAAXAXQAYAYAAAhIAABXQAAAhgYAYQgXAXgiAAg");
        this.shape_18.setTransform(85.075,75.575);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#DD1D48").s().p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
        this.shape_19.setTransform(122.325,44.025);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#DD1D48").ss(4,1).p("Ah+AAID8AA");
        this.shape_20.setTransform(56.6,48.75);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("#DD1D48").ss(4,1).p("AhbAAIC3AA");
        this.shape_21.setTransform(53.175,39.15);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#872638").s().p("AmpB8QgiAAgXgXQgYgYAAghIAAhXQAAghAYgYQAXgXAiAAINTAAQAiAAAXAXQAYAYAAAhIAABXQAAAhgYAYQgXAXgiAAg");
        this.shape_22.setTransform(85.075,44.025);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(35));
    
        // Layer_2
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#DD1D48").s().p("EhI4AN9IAA75MCRxAAAIAAb5g");
        this.shape_23.setTransform(414.2,78.3);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(35));
    
        this._renderFirstFrame();
    
    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(347.7,62.1,533,105.5);
    // library properties:
    lib.properties = {
        id: 'E2315515DC4D4198BB5D9D590E3FD676',
        width: 800,
        height: 146,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [],
        preloads: []
    };
    
    
    
    // bootstrap callback support:
    
    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();
    
    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
    
    p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
    
    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if(!an.bootstrapListeners) {
        an.bootstrapListeners=[];
    }
    
    an.bootstrapCallback=function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if(an.bootcompsLoaded.length > 0) {
            for(var i=0; i<an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };
    
    an.compositions = an.compositions || {};
    an.compositions['E2315515DC4D4198BB5D9D590E3FD676'] = {
        getStage: function() { return exportRoot.stage; },
        getLibrary: function() { return lib; },
        getSpriteSheet: function() { return ss; },
        getImages: function() { return img; }
    };
    
    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for(var j=0; j<an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }
    
    an.getComposition = function(id) {
        return an.compositions[id];
    }
    
    
    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
        var lastW, lastH, lastS=1;		
        window.addEventListener('resize', resizeCanvas);		
        resizeCanvas();		
        function resizeCanvas() {			
            var w = lib.properties.width, h = lib.properties.height;			
            var iw = window.innerWidth, ih=window.innerHeight;			
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
            if(isResp) {                
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                    sRatio = lastS;                
                }				
                else if(!isScale) {					
                    if(iw<w || ih<h)						
                        sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==1) {					
                    sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==2) {					
                    sRatio = Math.max(xRatio, yRatio);				
                }			
            }
            domContainers[0].width = w * pRatio * sRatio;			
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function(container) {				
                container.style.width = w * sRatio + 'px';				
                container.style.height = h * sRatio + 'px';			
            });
            stage.scaleX = pRatio*sRatio;			
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;            
            stage.tickOnUpdate = false;            
            stage.update();            
            stage.tickOnUpdate = true;		
        }
    }
    an.handleSoundStreamOnTick = function(event) {
        if(!event.paused){
            var stageChild = stage.getChildAt(0);
            if(!stageChild.paused || stageChild.ignorePause){
                stageChild.syncStreamSounds();
            }
        }
    }
    an.handleFilterCache = function(event) {
        if(!event.paused){
            var target = event.target;
            if(target){
                if(target.filterCacheList){
                    for(var index = 0; index < target.filterCacheList.length ; index++){
                        var cacheInst = target.filterCacheList[index];
                        if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
                            cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                        }
                    }
                }
            }
        }
    }
    
    
    })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
    var createjs, AdobeAn;