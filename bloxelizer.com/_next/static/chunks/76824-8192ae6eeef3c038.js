"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76824],{63563:function(e,t,n){n.d(t,{R:function(){return o}});var r=n(52983),i=n(9375),a=n(62510);function o(e,t,n){let o=(0,a.D)(e=>e.size),s=(0,a.D)(e=>e.viewport),l="number"==typeof e?e:o.width*s.dpr,u="number"==typeof t?t:o.height*s.dpr,{samples:d=0,depth:c,...f}=("number"==typeof e?n:e)||{},p=r.useMemo(()=>{let e=new i.dd2(l,u,{minFilter:i.wem,magFilter:i.wem,type:i.cLu,...f});return c&&(e.depthTexture=new i.$YQ(l,u,i.VzW)),e.samples=d,e},[]);return r.useLayoutEffect(()=>{p.setSize(l,u),d&&(p.samples=d)},[d,p,l,u]),r.useEffect(()=>()=>p.dispose(),[]),p}},66466:function(e,t,n){n.d(t,{u:function(){return s}});var r=n(9375),i=n(52983),a=n(62510);function o({defaultScene:e,defaultCamera:t,renderPriority:n=1}){let r;let{gl:o,scene:s,camera:l}=(0,a.D)();return(0,a.F)(()=>{r=o.autoClear,1===n&&(o.autoClear=!0,o.render(e,t)),o.autoClear=!1,o.clearDepth(),o.render(s,l),o.autoClear=r},n),i.createElement("group",{onPointerOver:()=>null})}function s({children:e,renderPriority:t=1}){let{scene:n,camera:s}=(0,a.D)(),[l]=i.useState(()=>new r.xsS);return i.createElement(i.Fragment,null,(0,a.h)(i.createElement(i.Fragment,null,e,i.createElement(o,{defaultScene:n,defaultCamera:s,renderPriority:t})),l,{events:{priority:t+1}}))}},76967:function(e,t,n){let r,i;n.d(t,{x:function(){return R}});var a=n(99217),o=n(52983),s=n(9375),l=n(62510);let u=new s.ZzF,d=new s.Pa4;class c extends s.L5s{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.a$l([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.a$l([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new s.$TI(t,6,1);return this.setAttribute("instanceStart",new s.kB5(n,3,0)),this.setAttribute("instanceEnd",new s.kB5(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new s.$TI(n,2*t,1);return this.setAttribute("instanceColorStart",new s.kB5(r,t,0)),this.setAttribute("instanceColorEnd",new s.kB5(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.Uk6(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.ZzF);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),u.setFromBufferAttribute(t),this.boundingBox.union(u))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.aLr),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)d.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(d)),d.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(d));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var f=n(16808),p=n(4248);class m extends s.jyz{constructor(e){super({type:"LineMaterial",uniforms:s.rDY.clone(s.rDY.merge([f.UniformsLib.common,f.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.FM8(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${p.i>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=p.i>=125?"uv1":"uv2",v=new s.Ltg,y=new s.Pa4,g=new s.Pa4,x=new s.Ltg,w=new s.Ltg,S=new s.Ltg,b=new s.Pa4,E=new s.yGw,_=new s.Zzh,M=new s.Pa4,A=new s.ZzF,P=new s.aLr,L=new s.Ltg;function z(e,t,n){return L.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),L.multiplyScalar(1/L.w),L.x=i/n.width,L.y=i/n.height,L.applyMatrix4(e.projectionMatrixInverse),L.multiplyScalar(1/L.w),Math.abs(Math.max(L.x,L.y))}class C extends s.Kj0{constructor(e=new c,t=new m({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)y.fromBufferAttribute(t,e),g.fromBufferAttribute(n,e),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+y.distanceTo(g);let i=new s.$TI(r,2,1);return e.setAttribute("instanceDistanceStart",new s.kB5(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.kB5(i,1,1)),this}raycast(e,t){let n,a;let o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let u=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let d=this.matrixWorld,c=this.geometry,f=this.material;if(i=f.linewidth+u,null===c.boundingSphere&&c.computeBoundingSphere(),P.copy(c.boundingSphere).applyMatrix4(d),o)n=.5*i;else{let e=Math.max(l.near,P.distanceToPoint(r.origin));n=z(l,e,f.resolution)}if(P.radius+=n,!1!==r.intersectsSphere(P)){if(null===c.boundingBox&&c.computeBoundingBox(),A.copy(c.boundingBox).applyMatrix4(d),o)a=.5*i;else{let e=Math.max(l.near,A.distanceToPoint(r.origin));a=z(l,e,f.resolution)}A.expandByScalar(a),!1!==r.intersectsBox(A)&&(o?function(e,t){let n=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,o.count);for(let a=0;a<u;a++){_.start.fromBufferAttribute(o,a),_.end.fromBufferAttribute(l,a),_.applyMatrix4(n);let u=new s.Pa4,d=new s.Pa4;r.distanceSqToSegment(_.start,_.end,d,u),d.distanceTo(u)<.5*i&&t.push({point:d,pointOnLine:u,distance:r.origin.distanceTo(d),object:e,face:null,faceIndex:a,uv:null,[h]:null})}}(this,t):function(e,t,n){let a=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,u=e.geometry,d=u.attributes.instanceStart,c=u.attributes.instanceEnd,f=Math.min(u.instanceCount,d.count),p=-t.near;r.at(1,S),S.w=1,S.applyMatrix4(t.matrixWorldInverse),S.applyMatrix4(a),S.multiplyScalar(1/S.w),S.x*=o.x/2,S.y*=o.y/2,S.z=0,b.copy(S),E.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<f;t++){if(x.fromBufferAttribute(d,t),w.fromBufferAttribute(c,t),x.w=1,w.w=1,x.applyMatrix4(E),w.applyMatrix4(E),x.z>p&&w.z>p)continue;if(x.z>p){let e=x.z-w.z,t=(x.z-p)/e;x.lerp(w,t)}else if(w.z>p){let e=w.z-x.z,t=(w.z-p)/e;w.lerp(x,t)}x.applyMatrix4(a),w.applyMatrix4(a),x.multiplyScalar(1/x.w),w.multiplyScalar(1/w.w),x.x*=o.x/2,x.y*=o.y/2,w.x*=o.x/2,w.y*=o.y/2,_.start.copy(x),_.start.z=0,_.end.copy(w),_.end.z=0;let u=_.closestPointToPointParameter(b,!0);_.at(u,M);let f=s.M8C.lerp(x.z,w.z,u),m=f>=-1&&f<=1,v=b.distanceTo(M)<.5*i;if(m&&v){_.start.fromBufferAttribute(d,t),_.end.fromBufferAttribute(c,t),_.start.applyMatrix4(l),_.end.applyMatrix4(l);let i=new s.Pa4,a=new s.Pa4;r.distanceSqToSegment(_.start,_.end,a,i),n.push({point:a,pointOnLine:i,distance:r.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class U extends c{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class D extends C{constructor(e=new U,t=new m({color:16777215*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let R=o.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:r,lineWidth:i,segments:u,dashed:d,...f},p){var h,v;let y=(0,l.D)(e=>e.size),g=o.useMemo(()=>u?new C:new D,[u]),[x]=o.useState(()=>new m),w=(null==n||null==(h=n[0])?void 0:h.length)===4?4:3,S=o.useMemo(()=>{let r=u?new c:new U,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pa4||e instanceof s.Ltg?[e.x,e.y,e.z]:e instanceof s.FM8?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=16777215;let e=n.map(e=>e instanceof s.Ilk?e.toArray():e);r.setColors(e.flat(),w)}return r},[e,u,n,w]);return o.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),o.useLayoutEffect(()=>{d?x.defines.USE_DASH="":delete x.defines.USE_DASH,x.needsUpdate=!0},[d,x]),o.useEffect(()=>()=>{S.dispose(),x.dispose()},[S]),o.createElement("primitive",(0,a.Z)({object:g,ref:p},f),o.createElement("primitive",{object:S,attach:"geometry"}),o.createElement("primitive",(0,a.Z)({object:x,attach:"material",color:t,vertexColors:!!n,resolution:[y.width,y.height],linewidth:null!==(v=null!=r?r:i)&&void 0!==v?v:1,dashed:d,transparent:4===w},f)))})},96428:function(e,t,n){n.d(t,{i:function(){return l}});var r=n(99217),i=n(52983),a=n(62510),o=n(63563);let s=e=>"function"==typeof e,l=i.forwardRef(({envMap:e,resolution:t=256,frames:n=1/0,children:l,makeDefault:u,...d},c)=>{let f=(0,a.D)(({set:e})=>e),p=(0,a.D)(({camera:e})=>e),m=(0,a.D)(({size:e})=>e),h=i.useRef(null);i.useImperativeHandle(c,()=>h.current,[]);let v=i.useRef(null),y=(0,o.R)(t);i.useLayoutEffect(()=>{d.manual||h.current.updateProjectionMatrix()},[m,d]),i.useLayoutEffect(()=>{h.current.updateProjectionMatrix()}),i.useLayoutEffect(()=>{if(u)return f(()=>({camera:h.current})),()=>f(()=>({camera:p}))},[h,u,f]);let g=0,x=null,w=s(l);return(0,a.F)(t=>{w&&(n===1/0||g<n)&&(v.current.visible=!1,t.gl.setRenderTarget(y),x=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,h.current),t.scene.background=x,t.gl.setRenderTarget(null),v.current.visible=!0,g++)}),i.createElement(i.Fragment,null,i.createElement("orthographicCamera",(0,r.Z)({left:-(m.width/2),right:m.width/2,top:m.height/2,bottom:-(m.height/2),ref:h},d),!w&&l),i.createElement("group",{ref:v},w&&l(y.texture)))})},7642:function(e,t,n){let r,i;n.d(t,{V:function(){return x}});var a=n(99217),o=n(52983),s=n(78520),l=n(9375),u=n(62510);let d=new l.Pa4,c=new l.Pa4,f=new l.Pa4,p=new l.FM8;function m(e,t,n){let r=d.setFromMatrixPosition(e.matrixWorld);r.project(t);let i=n.width/2,a=n.height/2;return[r.x*i+i,-(r.y*a)+a]}let h=e=>1e-10>Math.abs(e)?0:e;function v(e,t,n=""){let r="matrix3d(";for(let n=0;16!==n;n++)r+=h(t[n]*e.elements[n])+(15!==n?",":")");return n+r}let y=(r=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>v(e,r)),g=(i=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>v(e,i(t),"translate(-50%,-50%)")),x=o.forwardRef(({children:e,eps:t=.001,style:n,className:r,prepend:i,center:v,fullscreen:x,portal:w,distanceFactor:S,sprite:b=!1,transform:E=!1,occlude:_,onOcclude:M,castShadow:A,receiveShadow:P,material:L,geometry:z,zIndexRange:C=[16777271,0],calculatePosition:U=m,as:D="div",wrapperClass:R,pointerEvents:T="auto",...B},k)=>{let{gl:O,camera:I,scene:j,size:W,raycaster:F,events:N,viewport:H}=(0,u.D)(),[$]=o.useState(()=>document.createElement(D)),V=o.useRef(),G=o.useRef(null),q=o.useRef(0),Z=o.useRef([0,0]),K=o.useRef(null),Y=o.useRef(null),Q=(null==w?void 0:w.current)||N.connected||O.domElement.parentNode,X=o.useRef(null),J=o.useRef(!1),ee=o.useMemo(()=>{var e;return _&&"blending"!==_||Array.isArray(_)&&_.length&&(e=_[0])&&"object"==typeof e&&"current"in e},[_]);o.useLayoutEffect(()=>{let e=O.domElement;_&&"blending"===_?(e.style.zIndex=`${Math.floor(C[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[_]),o.useLayoutEffect(()=>{if(G.current){let e=V.current=s.createRoot($);if(j.updateMatrixWorld(),E)$.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=U(G.current,I,W);$.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Q&&(i?Q.prepend($):Q.appendChild($)),()=>{Q&&Q.removeChild($),e.unmount()}}},[Q,E]),o.useLayoutEffect(()=>{R&&($.className=R)},[R]);let et=o.useMemo(()=>E?{position:"absolute",top:0,left:0,width:W.width,height:W.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:v?"translate3d(-50%,-50%,0)":"none",...x&&{top:-W.height/2,left:-W.width/2,width:W.width,height:W.height},...n},[n,v,x,W,E]),en=o.useMemo(()=>({position:"absolute",pointerEvents:T}),[T]);o.useLayoutEffect(()=>{var t,i;J.current=!1,E?null==(t=V.current)||t.render(o.createElement("div",{ref:K,style:et},o.createElement("div",{ref:Y,style:en},o.createElement("div",{ref:k,className:r,style:n,children:e})))):null==(i=V.current)||i.render(o.createElement("div",{ref:k,style:et,className:r,children:e}))});let er=o.useRef(!0);(0,u.F)(e=>{if(G.current){I.updateMatrixWorld(),G.current.updateWorldMatrix(!0,!1);let e=E?Z.current:U(G.current,I,W);if(E||Math.abs(q.current-I.zoom)>t||Math.abs(Z.current[0]-e[0])>t||Math.abs(Z.current[1]-e[1])>t){let t=function(e,t){let n=d.setFromMatrixPosition(e.matrixWorld),r=c.setFromMatrixPosition(t.matrixWorld),i=n.sub(r),a=t.getWorldDirection(f);return i.angleTo(a)>Math.PI/2}(G.current,I),n=!1;ee&&(Array.isArray(_)?n=_.map(e=>e.current):"blending"!==_&&(n=[j]));let r=er.current;if(n){let e=function(e,t,n,r){let i=d.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),p.set(a.x,a.y),n.setFromCamera(p,t);let o=n.intersectObjects(r,!0);if(o.length){let e=o[0].distance;return i.distanceTo(n.ray.origin)<e}return!0}(G.current,I,F,n);er.current=e&&!t}else er.current=!t;r!==er.current&&(M?M(!er.current):$.style.display=er.current?"block":"none");let i=Math.floor(C[0]/2),a=_?ee?[C[0],i]:[i-1,0]:C;if($.style.zIndex=`${function(e,t,n){if(t instanceof l.cPb||t instanceof l.iKG){let r=d.setFromMatrixPosition(e.matrixWorld),i=c.setFromMatrixPosition(t.matrixWorld),a=r.distanceTo(i),o=(n[1]-n[0])/(t.far-t.near),s=n[1]-o*t.far;return Math.round(o*a+s)}}(G.current,I,a)}`,E){let[e,t]=[W.width/2,W.height/2],n=I.projectionMatrix.elements[5]*t,{isOrthographicCamera:r,top:i,left:a,bottom:o,right:s}=I,l=y(I.matrixWorldInverse),u=r?`scale(${n})translate(${h(-(s+a)/2)}px,${h((i+o)/2)}px)`:`translateZ(${n}px)`,d=G.current.matrixWorld;b&&((d=I.matrixWorldInverse.clone().transpose().copyPosition(d).scale(G.current.scale)).elements[3]=d.elements[7]=d.elements[11]=0,d.elements[15]=1),$.style.width=W.width+"px",$.style.height=W.height+"px",$.style.perspective=r?"":`${n}px`,K.current&&Y.current&&(K.current.style.transform=`${u}${l}translate(${e}px,${t}px)`,Y.current.style.transform=g(d,1/((S||10)/400)))}else{let t=void 0===S?1:function(e,t){if(t instanceof l.iKG)return t.zoom;if(!(t instanceof l.cPb))return 1;{let n=d.setFromMatrixPosition(e.matrixWorld),r=c.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*n.distanceTo(r))}}(G.current,I)*S;$.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}Z.current=e,q.current=I.zoom}}if(!ee&&X.current&&!J.current){if(E){if(K.current){let e=K.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=I;if(t||z)B.scale&&(Array.isArray(B.scale)?B.scale instanceof l.Pa4?X.current.scale.copy(B.scale.clone().divideScalar(1)):X.current.scale.set(1/B.scale[0],1/B.scale[1],1/B.scale[2]):X.current.scale.setScalar(1/B.scale));else{let t=(S||10)/400,n=e.clientWidth*t,r=e.clientHeight*t;X.current.scale.set(n,r,1)}J.current=!0}}}else{let t=$.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/H.factor,n=t.clientWidth*e,r=t.clientHeight*e;X.current.scale.set(n,r,1),J.current=!0}X.current.lookAt(e.camera.position)}}});let ei=o.useMemo(()=>({vertexShader:E?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[E]);return o.createElement("group",(0,a.Z)({},B,{ref:G}),_&&!ee&&o.createElement("mesh",{castShadow:A,receiveShadow:P,ref:X},z||o.createElement("planeGeometry",null),L||o.createElement("shaderMaterial",{side:l.ehD,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))})},84760:function(e,t,n){n.d(t,{U2:function(){return _},I2:function(){return P},xW:function(){return M},ug:function(){return A}});var r=n(43146),i=n(94970),a=n(59201),o=n(79206),s=n(3431),l=n(36938),u=n(16227),d=n(94086),c=n(52983),f=n(2377),p=n(96248),m=n(26398),h=n(15627),v=n(42089),y=n(61112),g=n(25610),x=n(97458),[w,S]=(0,p.k)({name:"SliderContext",errorMessage:"useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"}),[b,E]=(0,p.k)({name:"RangeSliderStylesContext",errorMessage:"useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<RangeSlider />\" "}),_=(0,m.G)(function(e,t){let n={orientation:"horizontal",...e},p=(0,h.jC)("Slider",n),m=(0,v.Lr)(n),{direction:S}=(0,y.F)();m.direction=S;let{getRootProps:E,..._}=function(e){var t;let{min:n=0,max:p=100,onChange:m,value:h,defaultValue:v,isReversed:y,direction:g="ltr",orientation:x="horizontal",id:w,isDisabled:S,isReadOnly:b,onChangeStart:E,onChangeEnd:_,step:M=1,getAriaValueText:A,"aria-valuetext":P,"aria-label":L,"aria-labelledby":z,name:C,focusThumbOnChange:U=!0,minStepsBetweenThumbs:D=0,...R}=e,T=(0,s.W)(E),B=(0,s.W)(_),k=(0,s.W)(A),O=(0,i.XY)({isReversed:y,direction:g,orientation:x}),[I,j]=(0,o.T)({value:h,defaultValue:null!=v?v:[25,75],onChange:m});if(!Array.isArray(I))throw TypeError(`[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof I}\``);let[W,F]=(0,c.useState)(!1),[N,H]=(0,c.useState)(!1),[$,V]=(0,c.useState)(-1),G=!(S||b),q=(0,c.useRef)(I),Z=I.map(e=>(0,d.HU)(e,n,p)),K=(t=D*M,Z.map((e,r)=>({min:0===r?n:Z[r-1]+t,max:r===Z.length-1?p:Z[r+1]-t}))),Y=(0,c.useRef)({eventSource:null,value:[],valueBounds:[]});Y.current.value=Z,Y.current.valueBounds=K;let Q=Z.map(e=>p-e+n),X=(O?Q:Z).map(e=>(0,d.Rg)(e,n,p)),J="vertical"===x,ee=(0,c.useRef)(null),et=(0,c.useRef)(null),en=(0,f.M)({getNodes(){let e=et.current,t=null==e?void 0:e.querySelectorAll("[role=slider]");return t?Array.from(t):[]}}),er=(0,c.useId)(),ei=(0,i.s3)(null!=w?w:er),ea=(0,c.useCallback)(e=>{var t,r;if(!ee.current)return;Y.current.eventSource="pointer";let i=ee.current.getBoundingClientRect(),{clientX:a,clientY:o}=null!=(r=null==(t=e.touches)?void 0:t[0])?r:e,s=(J?i.bottom-o:a-i.left)/(J?i.height:i.width);return O&&(s=1-s),(0,d.WS)(s,n,p)},[J,O,p,n]),eo=(p-n)/10,es=M||(p-n)/100,el=(0,c.useMemo)(()=>({setValueAtIndex(e,t){if(!G)return;let n=Y.current.valueBounds[e];t=parseFloat((0,d.WP)(t,n.min,es)),t=(0,d.HU)(t,n.min,n.max);let r=[...Y.current.value];r[e]=t,j(r)},setActiveIndex:V,stepUp(e,t=es){let n=Y.current.value[e],r=O?n-t:n+t;el.setValueAtIndex(e,r)},stepDown(e,t=es){let n=Y.current.value[e],r=O?n+t:n-t;el.setValueAtIndex(e,r)},reset(){j(q.current)}}),[es,O,j,G]),eu=(0,c.useCallback)(e=>{let t={ArrowRight:()=>el.stepUp($),ArrowUp:()=>el.stepUp($),ArrowLeft:()=>el.stepDown($),ArrowDown:()=>el.stepDown($),PageUp:()=>el.stepUp($,eo),PageDown:()=>el.stepDown($,eo),Home:()=>{let{min:e}=K[$];el.setValueAtIndex($,e)},End:()=>{let{max:e}=K[$];el.setValueAtIndex($,e)}}[e.key];t&&(e.preventDefault(),e.stopPropagation(),t(e),Y.current.eventSource="keyboard")},[el,$,eo,K]),{getThumbStyle:ed,rootStyle:ec,trackStyle:ef,innerTrackStyle:ep}=(0,c.useMemo)(()=>(0,i.Wi)({isReversed:O,orientation:x,thumbRects:en,thumbPercents:X}),[O,x,X,en]),em=(0,c.useCallback)(e=>{var t;let n=null!=e?e:$;if(-1!==n&&U){let e=ei.getThumb(n),r=null==(t=et.current)?void 0:t.ownerDocument.getElementById(e);r&&setTimeout(()=>r.focus())}},[U,$,ei]);(0,l.r)(()=>{"keyboard"===Y.current.eventSource&&(null==B||B(Y.current.value))},[Z,B]);let eh=e=>{let t=ea(e)||0,n=Y.current.value.map(e=>Math.abs(e-t)),r=Math.min(...n),i=n.indexOf(r),a=n.filter(e=>e===r);a.length>1&&t>Y.current.value[i]&&(i=i+a.length-1),V(i),el.setValueAtIndex(i,t),em(i)},ev=e=>{if(-1==$)return;let t=ea(e)||0;V($),el.setValueAtIndex($,t),em($)};(0,a.O)(et,{onPanSessionStart(e){G&&(F(!0),eh(e),null==T||T(Y.current.value))},onPanSessionEnd(){G&&(F(!1),null==B||B(Y.current.value))},onPan(e){G&&ev(e)}});let ey=(0,c.useCallback)((e={},t=null)=>({...e,...R,id:ei.root,ref:(0,u.lq)(t,et),tabIndex:-1,"aria-disabled":(0,r.Qm)(S),"data-focused":(0,r.PB)(N),style:{...e.style,...ec}}),[R,S,N,ec,ei]),eg=(0,c.useCallback)((e={},t=null)=>({...e,ref:(0,u.lq)(t,ee),id:ei.track,"data-disabled":(0,r.PB)(S),style:{...e.style,...ef}}),[S,ef,ei]),ex=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,id:ei.innerTrack,style:{...e.style,...ep}}),[ep,ei]),ew=(0,c.useCallback)((e,t=null)=>{var n;let{index:i,...a}=e,o=Z[i];if(null==o)throw TypeError(`[range-slider > thumb] Cannot find value at index \`${i}\`. The \`value\` or \`defaultValue\` length is : ${Z.length}`);let s=K[i];return{...a,ref:t,role:"slider",tabIndex:G?0:void 0,id:ei.getThumb(i),"data-active":(0,r.PB)(W&&$===i),"aria-valuetext":null!=(n=null==k?void 0:k(o))?n:null==P?void 0:P[i],"aria-valuemin":s.min,"aria-valuemax":s.max,"aria-valuenow":o,"aria-orientation":x,"aria-disabled":(0,r.Qm)(S),"aria-readonly":(0,r.Qm)(b),"aria-label":null==L?void 0:L[i],"aria-labelledby":(null==L?void 0:L[i])?void 0:null==z?void 0:z[i],style:{...e.style,...ed(i)},onKeyDown:(0,r.v0)(e.onKeyDown,eu),onFocus:(0,r.v0)(e.onFocus,()=>{H(!0),V(i)}),onBlur:(0,r.v0)(e.onBlur,()=>{H(!1),V(-1)})}},[ei,Z,K,G,W,$,k,P,x,S,b,L,z,ed,eu,H]),eS=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,id:ei.output,htmlFor:Z.map((e,t)=>ei.getThumb(t)).join(" "),"aria-live":"off"}),[ei,Z]),eb=(0,c.useCallback)((e,t=null)=>{let{value:a,...o}=e,s=!(a<n||a>p),l=a>=Z[0]&&a<=Z[Z.length-1],u=(0,d.Rg)(a,n,p);u=O?100-u:u;let c={position:"absolute",pointerEvents:"none",...(0,i.fL)({orientation:x,vertical:{bottom:`${u}%`},horizontal:{left:`${u}%`}})};return{...o,ref:t,id:ei.getMarker(e.value),role:"presentation","aria-hidden":!0,"data-disabled":(0,r.PB)(S),"data-invalid":(0,r.PB)(!s),"data-highlighted":(0,r.PB)(l),style:{...e.style,...c}}},[S,O,p,n,x,Z,ei]),eE=(0,c.useCallback)((e,t=null)=>{let{index:n,...r}=e;return{...r,ref:t,id:ei.getInput(n),type:"hidden",value:Z[n],name:Array.isArray(C)?C[n]:`${C}-${n}`}},[C,Z,ei]);return{state:{value:Z,isFocused:N,isDragging:W,getThumbPercent:e=>X[e],getThumbMinValue:e=>K[e].min,getThumbMaxValue:e=>K[e].max},actions:el,getRootProps:ey,getTrackProps:eg,getInnerTrackProps:ex,getThumbProps:ew,getMarkerProps:eb,getInputProps:eE,getOutputProps:eS}}(m),M=(0,c.useMemo)(()=>({..._,name:n.name}),[_,n.name]);return(0,x.jsx)(w,{value:M,children:(0,x.jsx)(b,{value:p,children:(0,x.jsx)(g.m.div,{...E({},t),className:"chakra-slider",__css:p.container,children:n.children})})})});_.displayName="RangeSlider";var M=(0,m.G)(function(e,t){let{getThumbProps:n,getInputProps:i,name:a}=S(),o=E(),s=n(e,t);return(0,x.jsxs)(g.m.div,{...s,className:(0,r.cx)("chakra-slider__thumb",e.className),__css:o.thumb,children:[s.children,a&&(0,x.jsx)("input",{...i({index:e.index})})]})});M.displayName="RangeSliderThumb";var A=(0,m.G)(function(e,t){let{getTrackProps:n}=S(),i=E(),a=n(e,t);return(0,x.jsx)(g.m.div,{...a,className:(0,r.cx)("chakra-slider__track",e.className),__css:i.track,"data-testid":"chakra-range-slider-track"})});A.displayName="RangeSliderTrack";var P=(0,m.G)(function(e,t){let{getInnerTrackProps:n}=S(),r=E(),i=n(e,t);return(0,x.jsx)(g.m.div,{...i,className:"chakra-slider__filled-track",__css:r.filledTrack})});P.displayName="RangeSliderFilledTrack",(0,m.G)(function(e,t){let{getMarkerProps:n}=S(),i=E(),a=n(e,t);return(0,x.jsx)(g.m.div,{...a,className:(0,r.cx)("chakra-slider__marker",e.className),__css:i.mark})}).displayName="RangeSliderMark"}}]);