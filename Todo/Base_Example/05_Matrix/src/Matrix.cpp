//Minimal Example Hello World With GZE on Cwc to build portable app
#include <GZE.h>
#include <Main>


gzVec2<gzFloat> vVec2;  //Standard Vec object, gzVec2, gzVec3, gzVec4 are direcly utilisable


//void fUpCast( _gzMat4x2  _vUpCasted ){
void fUpCast( const gzMat4x2<gzInt>&  _vUpCasted ){

	printf("\n -> to Vec2 is perfecly legal   (extra value ignored): " ); _vUpCasted.fPrint();
	_vUpCasted[0] = 5; //Value was linked to original vec3
	printf("\n3:       ---In subfunction, change first val of _vec2 to 5.0");
}

void fDownCast(const gzMat4x4<gzFloat>& _vDownCasted ){ //In downcast extra value are zerowed

	printf(" to Vec4 must perform a copy (extra value zerowed): " ); _vDownCasted.fPrint();
}



gzInt Main(gzText8 _sArg, gzUIntX _nId, gzInt _nCmd){
	
	gzMat2x2<gzInt> m2x2 = {  1,2,
								1,2,   
								};
				 
	//gzMat4x4 mTest = { {1,2,3,4}  1,2,3,4,  1,2,3,4,  1,2,3,4   };
	gzMat4x4<gzInt> m4x4 = { 	1,2,3,4,
								1,2,3,4,
								1,2,3,4,
								1,2,3,4,   
								};
		//gzMat4x4 mTest = { {1,2,3,4}  1,2,3,4,  1,2,3,4,  1,2,3,4   };
	gzMat4x4<gzFloat> mTest2 = { 1,2,3,4,
								1,2,3,4,
								1,2,3,4,
								1,2,3,4,   
								};
					 
		
	gzMat4x4<gzInt> mResult =	m4x4 + m2x2;
	printf("\n1:mResult:");mResult.fPrint();
			
	gzMat2x2<gzInt> mResult2 =	 m2x2 + m4x4;
	printf("\n1:mResult2:");mResult2.fPrint();
	

	//Initialisation of vectors
	gzVec3<gzFloat> vVec3 = {1,2,3};
		
	//By default initial value are zerowed
	vVec2[1] = 22.0;
	printf("\n1:Default value is zerowed, Vec2:"); vVec2.fPrint(); 
	printf("\n");
	
	//Perfom vector addition, vector with longer length can be additionned and extra value are ignored. A "get()" is required to get a generic datatype (only for different size)
	gzVec2<gzFloat> vAddition = gzVec2<gzFloat>{2,8} + vVec2 + vVec3;
	
	printf("\n2:Addition of: Vec2:");  gzVec2<gzFloat>{2,8}.fPrint(); printf(" + Vec2:");  vVec2.fPrint();  printf(" + Vec3:"); vVec3.fPrint();  printf(" = ");  
	vAddition.fPrint(); 
	printf("\n");

	//// Upcast
	//printf("\n3:    Upcast a Vec3:");mResult.fPrint();   fUpCast((gzMat4x2<gzFloat>&)m4x4);               //Upcast   -> legal
	printf("\n3:    Upcast a Vec3:");mResult.fPrint();   fUpCast(GZ_VecUpCast(gzMat4x2<gzInt>,m4x4));               //Upcast   -> legal
	printf("\n--:    Upcast subfunction values ares link to original vec3:"); m4x4.fPrint();
	printf("\n");

	//// Downcast
	printf("\n4:  Downcast a Vec3:");vVec3.fPrint();   fDownCast( gzMat4x4_NewFrom<gzFloat>(vVec3) ); //Downcast -> array resized & must perform a copy (no link)
	
	printf("\n");
	/*
	//// GLSL like access
	printf("\n2: GLSL like (self RGB add): %.2f",	 vVec3.a + vVec3.b + vVec3.r);
	
	
	*/
		
	printf("\n-------------\n");
		
	return 1; // 1 Still Alive, 0 Stop, < 0 Errors
}




gzInt Update(gzFloat _nDelta){
	return 0; // 1 Still Alive, 0 Stop, < 0 Errors
}
gzInt Close(gzInt _nExitCode){
	printf("Good bye: %d \n", _nExitCode);
	return  _nExitCode; //Success
}
