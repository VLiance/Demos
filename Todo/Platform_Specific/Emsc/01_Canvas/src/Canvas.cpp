//Example how to use string With GZE on Cwc to build portable app
#include <GZE.h>
#include <Main>

#include "Lib_GZ_Platform/GzEmsc.h"

#include "Lib_GZ_OpenGL/OpenGL.h"


 
Lib_GZ_OpenGL::csOpenGL* oMainOGL;
 
gzInt Main(gzText8 _sArg, gzUIntX _nId, gzInt _nCmd){

	using namespace Lib_GZ_OpenGL;
	
	//// Call Emsc function to set source code URL  ///
	#if defined tPlatform_Web_Emsc
		gzVal window = gzVal::global("window");
		window.fCall("SetLinkSrcCode", "<a href='https://github.com/Maeiky/Cwc_Demos/blob/master/Base_Example/02_String/String.cpp'>View Code</a>");
	#endif
	//////////////////////////////////////////////////
	{
		
		
		gzVal oCanvasw;
		
		
			
		// ------  Buffer section  ------ //
/*
		val oCanvas = val::global("Null");
		val aData = val::global("Null");
		val pixelArray  = val::global("Null");
		val buf8  = val::global("Null");
		val imageData = val::global("Null");
	*/
		gzVal oCanvas;
		gzVal aData;
		gzVal pixelArray;
		gzVal buf8;
		gzVal imageData;
	
		
		gzInt* aPixels;
		// --------------------------- //
	
		gzInt _nCanvasWidth = 400;
		gzInt _nCanvasHeight = 300;
		gzBool _bContext2d = false;
		

	//	printf("\n1:-- Canvas EMSC --- ");
		gzInt _nGpuVal = GzEmsc::fDetectGPU();
		
		(gzU8("\n2: -----  WebGL Context: ") + gzStrC( GzEmsc::aGLContextName[_nGpuVal] ) + gzU8("  -----")).fPrint();
		
		
		if( !GzEmsc::fIsGpuSupported(_nGpuVal)){
			gzU8("\nE:Gpu Is Not supported").fPrint();
		}
		
		
		Lib_GZ_OpenGL::csOpenGL* _oSaticOGL = new  Lib_GZ_OpenGL::csOpenGL(0);
		oMainOGL = _oSaticOGL;
		
		
		///Create canvas
		gzVal document = gzVal::global("document");
		gzVal canvas = document.call<val>("getElementById", "canvas");
		canvas.set("width", _nCanvasWidth);
		canvas.set("height", _nCanvasHeight);
		
		
		
		if(_bContext2d || !GzEmsc::fIsGpuSupported(_nGpuVal)){
			gzU8("\n1: -- Create a 2d canvas --").fPrint();
			///// Test context 2d //////////
	
			oCanvas = canvas.fCall("getContext", "2d");
			imageData = oCanvas.fCall("createImageData", _nCanvasWidth, _nCanvasHeight);
			
			//Create pixel buffer
			pixelArray = imageData["data"];
			val ArrayBuffer = val::global("ArrayBuffer");
			val Uint8ClampedArray = val::global("Uint8ClampedArray");
			val Uint32Array = val::global("Uint32Array");
			val buf = ArrayBuffer.new_(pixelArray["length"]);
			buf8 = Uint8ClampedArray.new_(buf);
			aData = Uint32Array.new_(buf);
			
			//val data = new Uint32Array(buf);
			
		}else{	///Create WebGL Context
		
		//	gzVal document = gzVal::global("document");

			//gzVal canvas = document.call<val>("getElementById", val("canvas"));
			//gzVal canvas = document.call<val>("getElementById", gzVal("canvas").get() );
	
		//	gzVal canvas = document.call2<val>("getElementById", gzVal("canvas") );
		//	gzVal canvas = document.call<val>("getElementById", "canvas" );
		//	gzVal canvas = document.call3<val>("getElementById", gzU8( "canvas") );
			
			
			//canvas.set("width", 800);
		//	canvas.set("height", 600);
			//val gl = canvas.call<val>("getContext", val("webgl"));
			if( _bContext2d == false && _nGpuVal >= 0){ //WebGl supported
				//gzVal gl = canvas.call<val>("getContext", val(GzEmsc::aGLContextName[_nGpuVal]));

				gzVal gl = canvas.fCall("getContext", GzEmsc::aGLContextName[_nGpuVal] );
				
				//(gzU8("\n2:Version: ") + GzEmsc::fGetVersion() ).fPrint();
				
				
			
				gl.fCall("clearColor",  0.5, 0.1, 0.8, 1.0);
				//gl.call<void>("clearColor",  0.5,  0.5, 0.5,  1.0);  //(Other way)
				
				
				//	gl.call<void>("clear",  gl["COLOR_BUFFER_BIT"]  );
				//  gl.call<void>("clear",  0x00004000 );
				gzVal window = gzVal::global("window");
				window.set("OpenGL", gl);
				
		//		gl.call<void>("clear",  gl["COLOR_BUFFER_BIT"] );
				
				//Lib_GZ_OpenGL::OpenGL::Get(thread)->oGL = gl; //Temp
				/*
				EM_ASM_ARGS({
				var _sContexte = Pointer_stringify($0);
				OpenGL = canvas.getContext(_sContexte);
				},aGLContextName[_nGpuVal]);
				*/
				
				
				
				oMainOGL->oGL = gl;
				
			//	EM_ASM_ARGS({	OpenGL.clear($0);	},0x00004000); //(Other way)
			
				oMainOGL->fClearColor(0.5, 0.1, 0.8, 1.0);

				oMainOGL->fClear( OpenGL::eClearBuffer::COLOR_BUFFER_BIT);
			
			
			}
		}
		
		
	//oMainOGL = 	
		//		 gzSp<cOpenGL> Lib_GZ_OpenGL::OpenGL::New	
			//	 gzSp<cOpenGL> Lib_GZ_OpenGL::OpenGL::New	
			
			
	
	
					
	//	OpenGL::GzInst->fClear(	OpenGL::eClearBuffer::COLOR_BUFFER_BIT);
		
		
		
		//Lib_GZ_OpenGL::OpenGL::GzInst->fClear(	Lib_GZ_OpenGL::OpenGL::eClearBuffer::COLOR_BUFFER_BIT);
		
		
		
		
		
	//_nCompilationStatus = Lib_GZ_OpenGL::OpenGL::Get(thread)->fGetShaderParameter(gzVal(nId), Lib_GZ_OpenGL::OpenGL::eShaderInfo(Lib_GZ_OpenGL::OpenGL::eShaderInfo::COMPILE_STATUS));
	
	//	OpenGL::Get->fDetectGPU
	
	
	
		
	}//Scope end here, all string will be freed

	//printf("\nTotal: Alloc / Free   ---  %d / %d ", GZ_nArrayTotalAlloc, GZ_nArrayTotalFree);
	if(GZ_nArrayTotalAlloc == GZ_nArrayTotalFree){
		printf("\nP: *-- No memory leak --* \n");
	}else{
		printf("\n\nE:---!!! MEMORY BROKEN !!!---\n\n");
	}

	return 1; // 1 Still Alive, 0 Stop, < 0 Errors
}



gzInt Update(gzFloat _nDelta){
	return 1; // 1 Still Alive, 0 Stop, < 0 Errors
}
gzInt Close(gzInt _nExitCode){
	printf("Good bye: %d \n", _nExitCode);
	return  _nExitCode; //Success
}
