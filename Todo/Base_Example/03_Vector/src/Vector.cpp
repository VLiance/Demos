//Minimal Example Hello World With GZE on Cwc to build portable app
#include <GZE.h>
#include <Main>


//gzDef_Vec(Bloc, 150); //Example to create a custom sized type vector
//gzVec_Bloc vVecBloc; //Custom Vector instance

gzVec2<gzFloat> vVec2;  //Standard Vec object, gzVec2 to gzVec16, are direcly utilisable


//void fUpCast( _gzVec2  _vUpCasted ){
//void fUpCast(const gzVec2<gzFloat>&   _vUpCasted ){
void fUpCast(_gzVec2(gzFloat)  _vUpCasted ){

	printf(" to Vec2 is perfecly legal   (extra value ignored): " ); _vUpCasted.fPrint();
	_vUpCasted[0] = 5; //Value was linked to original vec3
	printf("\n3:       ---In subfunction, change first val of _vec2 to 5.0");
}

//void fDownCast( _gzVec4 _vDownCasted ){ //In downcast extra value are zerowed
//void fDownCast( const gzVec2<gzFloat>&  _vDownCasted ){ //In downcast extra value are zerowed
void fDownCast(_gzVec4(gzFloat)  _vDownCasted ){ //In downcast extra value are zerowed

	printf(" to Vec4 must perform a copy (extra value zerowed): " ); _vDownCasted.fPrint();
}

struct NotPod {
            NotPod(int i, int j) : i(i), j(j) {}
            int i;
            int j;
        };


#include <type_traits> //IsPod

gzInt Main(gzText8 _sArg, gzUIntX _nId, gzInt _nCmd){

	gzVec3<gzInt>  vVecINT = {1,2,3};
	gzVec3<gzInt>  vVecINT2 = {1,2,3};
	gzVec3<gzInt>  vVecINT3;
	vVecINT3 = vVecINT + vVecINT2;
	vVecINT3.fPrint();

	//Initialisation of vectors
	gzVec3<gzFloat>  vVec3 = {1,2,3};
	
	//By default initial value are zerowed
	vVec2[1] = 22.0;
	printf("\n1:Default value is zerowed, Vec2:"); vVec2.fPrint(); 
	
	
	//Perfom vector addition, vector with longer length can be additionned and extra value are ignored. A "get()" is required to get a generic datatype (only for different size)
	gzVec2<gzFloat>  vAddition = gzVec2<gzFloat>{2,8} + vVec2 + vVec3;
	
	printf("\n2:Addition of: Vec2:");  gzVec2<gzFloat>{2,8}.fPrint(); printf(" + Vec2:");  vVec2.fPrint();  printf(" + Vec3:"); vVec3.fPrint();  printf(" = ");  
	vAddition.fPrint(); 
	printf("\n");

	//// Upcast
	//printf("\n3:    Upcast a Vec3:");vVec3.fPrint();   fUpCast((gzVec2<gzFloat>&)vVec3);               //Upcast   -> legal
	printf("\n3:    Upcast a Vec3:");vVec3.fPrint();   fUpCast( GZ_VecUpCast(gzVec2<gzFloat>, vVec3) );               //Upcast   -> legal
          
	//printf("\n3:    Upcast a Vec3:");vVec3.fPrint();   fUpCast((gzVec2&)vVec3);               //Upcast   -> legal
	printf("\n3:    Upcast subfunction values ares link to original vec3:"); vVec3.fPrint();
	printf("\n");
	//// Downcast
	
	//printf("\n3:  Downcast a Vec3:");vVec3.fPrint();   fDownCast( gzVec4_Copy(vVec3.get()) ); //Downcast -> array resized & must perform a copy (no link)
	printf("\n3:  Downcast a Vec3:");vVec3.fPrint();   fDownCast( gzVec4_NewFrom<gzFloat>(vVec3) ); //Downcast -> array resized & must perform a copy (no link)
	
	printf("\n");
	
	//// GLSL like access
	printf("\n2: GLSL like (self RGB add): %.2f",	 vVec3.r + vVec3.g + vVec3.b);
	

		printf("\n");
		gzVec3<gzFloat>  vVec3_1 = {1,2,3};

		//gzVec3 vVec3_2 = vVec3_1;
		gzVec3<gzFloat>  vVec3_2( vVec3_1);
		vVec3_2.fPrint();printf("\n");
		vVec3_1.x = 9;
		vVec3_2.fPrint();printf("\n");
		vVec3_1.fPrint();printf("\n");
		
		
		
	
	printf("\n-------------\n");
	if(std::is_pod<gzVec3<gzFloat> >::value){
		printf("\n VALID: gzVec Is POD \n");
	}else{
		printf("\n ERROR: gzVec Cannot be used as POD \n");
	}

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
