//Minimal Example Hello World With GZE on Cwc to build portable app
#include <GZE.h>
#include <Main>

gzInt Main(gzText8 _sArg, gzUIntX _nId, gzInt _nCmd){
	
	return 1; // 1 Still Alive, 0 Stop, < 0 Errors
}
gzInt Update(gzFloat _nDelta){
	static gzInt _nCount = 0;
	printf("Update: %d" endl_cr, _nCount);
	_nCount++;
	return 1; // 1 Still Alive, 0 Stop, < 0 Errors
}
gzInt Close(gzInt _nExitCode){
	printf("Good bye: %d \n", _nExitCode);
	return  _nExitCode; //Success
}
