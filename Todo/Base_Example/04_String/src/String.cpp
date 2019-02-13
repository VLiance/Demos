//Example how to use string With GZE on Cwc to build portable app
#include <GZE.h>
#include <Main>

//extern "C" Lib_GZ::uLib* IniLib_Lib_GZ(){return NULL;};//TEMP

//Method #1, Optimised way to pass string in Read Only, we can pass string without any reference counting ('_gzStr8', with underscore prefix)
gzStr8 fStringPassInFunction_Optimised( _gzStr8 _sTest ){
	// _sTest = gzU8("Expected Error"); // Uncommenting gives an error : Read Only optimisation -> Expected result
	return _sTest + gzU8(" optimised");
 }


//Method #2, We can assign the string, but this involves counting references
//Note: Never use 'const gzStr8&', if you don't know what you are doing (can broke memory if you delete self memory owner by global access) (always use '_gzStr8' instead)
 gzStr8 fStringPassInFunction_Writable( gzStr8 _sTest ){
	_sTest = gzU8(" reassignable"); // Possible to reassing
	return gzU8("Example ") + _sTest ;
 }

 
  int thread = 10;
gzInt Main(gzText8 _sArg, gzUIntX _nId, gzInt _nCmd){

	//// Call Emsc function to set source code URL  ///
	#if defined tPlatform_Web_Emsc
		val window = val::global("window");
		window.call<void>("SetLinkSrcCode", val("<a href='https://github.com/Maeiky/Cwc_Demos/blob/master/Base_Example/02_String/String.cpp'>View Code</a>"));
	#endif
	//////////////////////////////////////////////////
	{

		
		(gzU8("\nE:Thread Val: ") + gzStrUI(thread) ).fPrint();
		 int thread = 5;
		(gzU8("\nE:Thread Val: ") + gzStrUI(thread) ).fPrint();
		
		
		
		printf("2:-The gzString follow the COW (copy-on-write) idiom\n");
		printf("2:-All memory (read-only or not) are automaticly managed, with reference count.\n");
		printf("2:-It's support UTF8/UTF16/UTF32 and all type of convertions\n");
		printf("3:-Ultra fast & efficient and minimizing allocation/deallocation\n\n");

		gzStr8 _sExample = gzU8("UTF8 String Example");   //String litterals must specifie the UTF version, gzU8/gzU16/gzU32
		gzStr8 _sAnotherInstance = _sExample;    //Direct association, multi-instance don't need to recopy the string

		*_sAnotherInstance[8] = 'o';  //Direct access to char value, COW principe make a new string data when we have multiple instance


		printf("1:---Sting with COW idiom--- (Change one letter in the second instance, original was not modified)\n");
		_sAnotherInstance.fPrint();  //Show result on screen
		_sExample.fPrint();			 //First string was not modified -> expected result

		printf("\n1:---Concat Example --- (Combine 2 strings)\n");
		_sExample +=  gzU8(" ") + _sAnotherInstance;
		_sExample.fPrint();


		printf("\n1:---Substr Example --- (Keep last word, original was not modified, no allocation was done, just ajusting bounding data)\n");
		_sExample = _sAnotherInstance.fSubStr(12, _sAnotherInstance.fSize() );
		_sAnotherInstance.fPrint(); //_sAnotherInstance is not be modified -> expected result
		_sExample.fPrint(); //Show the substring


		printf("\n1:-Function with String in parameter and return by value, test ");
		printf("\n2:--- Method #1, Optimised way to pass string in Read Only, we can pass string without any reference counting \n");
		fStringPassInFunction_Optimised(_sExample).fPrint();

		printf("\n2:--- Method #2,  Pass by value, string are reassignable, but this involves counting references\n");
		fStringPassInFunction_Writable(_sExample).fPrint();


		///// Set UTF8 / UTF16 / UTF32 test char ////
		gzStr8 _sChar0 = gzU8("a");
		gzStr8 _sChar1 = gzU8("¢");
		gzStr8 _sChar2 = gzU8("€");
		gzStr8 _sChar3 = gzU8("𐍈");
		/////////////////////////////////////////////

		/////  UTF8  /////
		printf("\n1:--- UTF8 Support  (Each char was one octet or more)\n");

		gzStr8
		_sUTF8 =  _sChar0 + gzU8(" -> ") +  gzStrUI(_sChar0.fSize()) + gzU8(" char");
		_sUTF8.fPrint();

		_sUTF8 =  _sChar1 + gzU8(" -> ") +  gzStrUI(_sChar1.fSize()) + gzU8(" char");
		_sUTF8.fPrint();

		_sUTF8 = _sChar2 +  gzU8(" -> ") +  gzStrUI(_sChar2.fSize()) + gzU8(" char");
		_sUTF8.fPrint();

		_sUTF8 = _sChar3 +  gzU8(" -> ") +  gzStrUI(_sChar3.fSize()) + gzU8(" char");
		_sUTF8.fPrint();

		/////  UTF16  /////
		printf("\n1:--- UTF16 Support  (Each char was 2 octets or more)\n");
		gzStr16 _sChar0_16 = _sChar0.fToUTF16();
		gzStr16 _sChar1_16 = _sChar1.fToUTF16();
		gzStr16 _sChar2_16 = _sChar2.fToUTF16();
		gzStr16 _sChar3_16 = _sChar3.fToUTF16();

		gzStr16
		_sUTF16 =  _sChar0_16 + gzU16(" -> ") +  gzStrUI(_sChar0_16.fSize()).fToUTF16() + gzU16(" char");
		_sUTF16.fPrint();

		_sUTF16 = _sChar1_16 + gzU16(" -> ") +  gzStrUI(_sChar1_16.fSize()).fToUTF16() + gzU16(" char");
		_sUTF16.fPrint();

		_sUTF16 = _sChar2_16 +  gzU16(" -> ") +  gzStrUI(_sChar2_16.fSize()).fToUTF16() + gzU16(" char");
		_sUTF16.fPrint();

		_sUTF16 = _sChar3_16 +  gzU16(" -> ") +  gzStrUI(_sChar3_16.fSize()).fToUTF16() + gzU16(" char");
		_sUTF16.fPrint();


		/////  UTF32  /////
		printf("\n1:--- UTF32 Support  (Each char was 4 octets)\n");
		gzStr32 _sChar0_32 = _sChar0.fToUTF32();
		gzStr32 _sChar1_32 = _sChar1.fToUTF32();
		gzStr32 _sChar2_32 = _sChar2.fToUTF32();
		gzStr32 _sChar3_32 = _sChar3.fToUTF32();

		gzStr32
		_sUTF32 = _sChar0_32 + gzU32(" -> ") +  gzStrUI(_sChar0_32.fSize()).fToUTF32() + gzU32(" char");
		_sUTF32.fPrint();

		_sUTF32 = _sChar1_32 + gzU32(" -> ") +  gzStrUI(_sChar1_32.fSize()).fToUTF32() + gzU32(" char");
		_sUTF32.fPrint();

		_sUTF32 = _sChar2_32 +  gzU32(" -> ") +  gzStrUI(_sChar2_32.fSize()).fToUTF32() + gzU32(" char");
		_sUTF32.fPrint();

		_sUTF32 = _sChar3_32 +  gzU32(" -> ") +  gzStrUI(_sChar3_32.fSize()).fToUTF32() + gzU32(" char");
		_sUTF32.fPrint();

	}//Scope end here, all string will be freed
/*
	//printf("\nTotal: Alloc / Free   ---  %d / %d ", GZ_nArrayTotalAlloc, GZ_nArrayTotalFree);
	if(GZ_nArrayTotalAlloc == GZ_nArrayTotalFree){
		printf("\nP: *-- No memory leak --*  \n");
	}else{
		printf("\n\nE:---!!! MEMORY BROKEN !!!---\n\n");
	}*/

	return 1; // 1 Still Alive, 0 Stop, < 0 Errors
}



gzInt Update(gzFloat _nDelta){
	return 1; // 1 Still Alive, 0 Stop, < 0 Errors
}
gzInt Close(gzInt _nExitCode){
	printf("Good bye: %d \n", _nExitCode);
	return  _nExitCode; //Success
}
