package GZ.Debug{
	public overclass Debug extends Class{
		private function fConsole(_sValue: String);
		public function fTrace(_sValue: String);
		public function fPass(_sValue: String);
		public function fWarning(_sValue: String);
		public function fError(_sValue: String);
		public function fFatal(_sValue: String);
		public function Debug();
	}
}
package GZ.Base{
	public extension Class {
		public function Class();
	}
}
package GZ.Base.Thread{
	public extension ThreadMsg extends Class{
		public function ThreadMsg();
		public function fRun();
	}
}
package GZ.Base{
	public class Dim extends Vec3{
		public function Dim(_nWidth: Float =  0, _nHeight: Float =  0, _nLength: Float =  0);
	}
}
package GZ.Base.Math{
	public class Math extends Class{
		pure public function fAbs(_nVal: Float);
		pure public function fIAbs(_nVal: Int);
		pure public function fSin(_nRad: Float);
		pure public function fCos(_nRad: Float);
		pure public function fTan(_nRad: Float);
		pure public function fATan2(_nY: Float, _nX: Float);
		pure public function fSqrt(_nVal: Float);
		pure public function fPow(_nVal: Float, _nPower: Float);
		pure public function fPow2(_nVal: Float, _nPower: Float);
		pure public function fFloatToInt(_nVal: Float);
		pure public function fFrac(_nVal: Float);
		pure public function fIFrac(_nVal: Int);
		pure public function fITronc(_nVal: Int);
		pure public function fIPixFrac(_nVal: Int);
		pure public function fMin(_nVal1: Int, _nVal2: Int);
		pure public function fMax(_nVal1: Int, _nVal2: Int);
		pure public function fSqrt(_nVal: Float);
		pure public function fPow(_nVal: Float, _nPower: Float);
		pure public function fPow2(_nVal: Float, _nPower: Float);
		pure public function fToRadian(_nDegree: Float);
		public function Math();
	}
}
package GZ.Base{
	public class Vec3 extends Vec2{
		public function Vec3(_nX: Float =  0, _nY: Float =  0, _nZ: Float =  0);
		public function fRotate(_oQuat: Quaternion);
	}
}
package GZ.Base{
	public class Quaternion extends Vec4{
		public function Quaternion();
		public function fReset();
		public function fRoll(_nAngle: Float);
		public function fYaw(_nAngle: Float);
		public function fPitch(_nAngle: Float);
		public function fCombine(_oOther: Quaternion);
	}
}
package GZ.Base{
	public class Vec4 extends Vec3{
		public function Vec4(_nX: Float =  0, _nY: Float =  0, _nZ: Float =  0, _nW: Float =  0);
	}
}
package GZ.Base{
	public class Vec2 extends Class{
		public function Vec2(_nX: Float =  0, _nY: Float =  0);
	}
}
package GZ.Base{
	public class Mat1x4 extends Class{
		public function Mat1x4();
	}
}
package GZ.Base{
	public class Mat2x4 extends Mat1x4{
		public function Mat2x4();
	}
}
package GZ.Base{
	public class Mat3x4 extends Mat2x4{
		public function Mat3x4();
	}
}
package GZ.Base{
	public class Mat4x4 extends Mat3x4{
		public function Mat4x4();
	}
}
package GZ.Base{
	public class Perspective extends Class{
		public function Perspective();
	}
}
package GZ.Base.Poly{
	public Invalid PolyRect extends Class{
		public function PolyRect();
	}
	public class Rect extends Poly4{
		public function Rect(_oPos: Pt, _oDim: Dim);
		public function fFlipX();
		public function fFlipY();
		public function fFlipD();
	}
}
package GZ.Base{
	public class Pt extends Vec3{
		public function Pt(_nX: Float =  0, _nY: Float =  0, _nZ: Float =  0);
	}
}
package GZ.Base{
	public class Poly4 extends Class{
		public function Poly4(_oPt1: Pt, _oPt2: Pt, _oPt3: Pt, _oPt4: Pt);
	}
}
package GZ.Base.Property{
	public class Property extends Class{
		public function Property(_sName: String, _hType: HoldEnum =  eType.String);
		public function fNewProperty(_sName: String, _sValue: String, _hType: HoldEnum =  eType.String);
	}
}
package GZ.Base.Property{
	public class PropertyString extends Property{
		public function PropertyString(_sName: String, _sValue: String);
	}
}
package GZ.Base.Property{
	public class Vec2 extends Class{
		public function Vec2(_nX: Float =  0, _nY: Float =  0);
	}
}
package GZ.Base{
	public class PtA extends Pt{
		public function PtA(_nX: Float =  0, _nY: Float =  0, _nZ: Float =  0);
		public function fCopyToTf();
	}
}
package GZ.Base{
	public vector Rect extends Class{
		public function Rect(_nX: Number, _nY: Number, _nWidth: Number, _nHeight: Number);
	}
}
package GZ.Base{
	public pod TestPod {
		public function TestPod(_nX: Float =  0, _nY: Float =  0);
	}
}
package GZ.Base{
	public pod TestPod2 extends TestPod{
		public function TestPod2(_nX: Float =  0, _nY: Float =  0, _nZ: Float =  0, _nW: Float =  0);
	}
}
package GZ.Base.Thread{
	public extension Thread extends Class{
		public function Thread();
		public function fLoop();
	}
}
package GZ.Base.Thread{
	public class ThreadExt extends Class{
		public function ThreadExt();
	}
}
package GZ{
	public extension EntryPoint extends Thread{
		public function EntryPoint();
		public function fMain();
	}
}
package GZ.Sys{
	public overclass MainThreadPlatformMsg extends Class{
		public function MainThreadPlatformMsg();
		public function fManageMessage();
		public function fRegisterContext(_gFrom: Gate, _vFrame: Rect, hPos: HoldEnum);
	}
}
package GZ.Sys{
	public overclass Context extends Window{
		public function Context(_oInterface: Interface, _sWindowName: String, _nFrameWidth: UInt, _nFrameHeight: UInt, _bTransparent: Bool =  false, _nBgColor: Int =  0xFFFFFFFF);
		public function fCreate(_nPosX: Int, _nPosY: Int, _nWinWidth: UInt, _nWinHeight: UInt, _nStart: HoldEnum =  eWinState.Normal, _bGpuDraw: Bool =  true, _bResizable: Bool =  false, _bDragAndDrop: Bool =  false, _bVisible: Bool =  true);
		public function fFrameStart();
		public function fContextRegistred();
		public function fCreateNow();
		private function fReceiveMessage(_sMessage: String);
		public function fAddLink(_oLink: ContextLink);
		public function fManageMessage();
		public function fManageMessageOp();
		public function fSendData(_nOtherWinId: UInt);
		public function fIniPixelZone();
		public function drawPixel();
		public function fBlit();
		public function fKeyIsDown(_nKeyVal: Int);
		public function fClear();
		public function fCpuVSyncOnGpu();
		public function fIsWindowReady();
		public function fIniRender();
		public function fGetMousePosition();
		public function fStartCaptureOutside();
		public function fStopCaptureOutside();
		public function fFrameEnd();
		public function fGetPixelArray();
		public function fGetKey(_oKey: Key);
		public function fCompleteContext(_oInfo: ContextCreated);
		public function fBlitComplete(_nDrawZoneAdr: UIntX =  0);
	}
}
package GZ.Gpu{
	public overclass Gpu extends Class{
		public function Gpu(_nHandleId: UIntX, _bGlobalSharedContext: Bool);
		public function fLoadImg(_aImg: Array<Dynamic>, _nWidth: Int, _nHeight: Int);
		public function fBlit();
		public function fContextIni(_nHandleId: UIntX, _bGlobalSharedContext: Bool);
		public function fError(_sError: String);
		public function fFatal(_sError: String);
		public function fClear();
	}
}
package GZ.Gpu{
	public overclass GpuInfo extends Class{
		public function GpuInfo();
		public function fIniFunctions();
		public function fGetVersion();
	}
}
package GZ.Sys{
	public extension Window extends Class{
		public function Window(_oInterface: Interface, _sWindowName: String, _nFrameWidth: UInt, _nFrameHeight: UInt, _bTransparent: Bool =  false, _nBgColor: Int =  0xFFFFFFFF);
		private function fReceiveMessage(_sMessage: String);
		public function fCreate(_nPosX: Int, _nPosY: Int, _nWinWidth: UInt, _nWinHeight: UInt, _nStart: HoldEnum =  eWinState.Normal, _bResizable: Bool =  false, _bDragAndDrop: Bool =  false, _bVisible: Bool =  true);
		public function fFrameStart();
		public function fMove(_nPosX: Int, _nPosY: Int);
		public function fMoveAndSize(_nPosX: Int, _nPosY: Int, _nWidth: Int, _nHeight: Int);
		public function fShow(_bActive: Bool =  true);
		public function fHide();
		public function fIniProcess();
		public function fMinimize();
		public function fMaximize();
		public function fRestore();
		public function fDisable();
		public function fSendData(_nOtherWinId: UInt);
		public function fIniPixelZone();
		public function drawPixel();
		public function fBlit();
		public function fKeyIsDown(_nKeyVal: Int);
		public function fClear();
		public function fCpuVSyncOnGpu();
		public function fIsWindowReady();
		public function fIniRender();
		public function fGetMousePosition();
		public function fStartCaptureOutside();
		public function fStopCaptureOutside();
		public function fFrameEnd();
		public function fGetPixelArray();
		public function fTest();
		public function fGetKey(_oKey: Key);
	}
}
package GZ.Gfx{
	public extension Interface extends FrameRate{
		public function Interface(_oThreadItf: ThreadItf, _sWindowName: String, _nWeakWidth: UInt, _nWeakHeight: UInt, _bTransparent: Bool =  false, _nBgColor: Int =  0xFFFFFFFF);
		public function fCreateInterface(_nPosX: Int =  Window.nPosCenter, _nPosY: Int =  Window.nPosCenter, _hWinState: HoldEnum =  eWinState.Normal);
		public function fNewFrame();
		public function fOnClose();
		public function fTerminate();
		public function fIsWindowReady();
		public function fIniProcess();
		public function fCpuVSyncOnGpu();
		public function fBlit();
		public function fWinStart();
	}
}
package GZ.Gfx{
	public extension Root extends Dispacher{
		public function Root(_oParent: Root);
		public function fChangeParent(_oParent: Root, _bUpdateManually: Bool =  false);
		public function fUpdateChild();
		public function fUpdateRoot();
		public function fRender();
		public function fApplyPos();
		public function tDelete();
		public function fFinalUpdate();
		public function fApplyTransform();
		public function fUpdateChildToParent();
		public function fUpdateParentToChild();
		public function fApplyColor();
		public function fContextResume();
	}
}
package GZ.Gfx{
	public extension Dispacher extends Class{
		public function Dispacher();
		public function fClearChild();
		public function fAddChild(_oObj: Root);
		public function fDispatchUpdate();
		public function fDispatchRender();
		public function fDispatchContextResume();
	}
}
package GZ.Gfx{
	public extension Object extends Attribute{
		public function Object(_oParent: Root, _nX: Float, _nY: Float);
		public function fRender();
		public function fDraw();
		public function fGpuDraw();
		public function fCpuDraw(nPosX: Int, _nPosY: Int, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
	}
}
package GZ.Gfx{
	public extension Attribute extends Root{
		public function Attribute(_oParent: Root);
		public function WnX(_nVal: Float);
		public function WnY(_nVal: Float);
		public function WnZ(_nVal: Float);
		public function fApplyColor();
		public function fApplyPos();
	}
}
package GZ.Gfx{
	public extension Buffer extends Object{
		public function Buffer(_oParent: Root, _nWidth: UInt, _nHeight: UInt, _bNewPerspective: Bool =  false);
		public function fSetLimit(_nLimL: Int, _nLimR: Int, _nLimT: Int, _nLimB: Int);
		Destructor function destructor();
	}
}
package GZ.Gfx{
	public class Pixel extends Class{
		public function fTestShape(_oShape: Shape);
		pure public function fCopyPixelToDest(_aDest: Array<Dynamic>, _nPixelClip: UInt, _nX: Int, _nY: Int);
		pure public function fGetSmoothPixel(_aSource: Array<Dynamic>, _nLx: UInt32, _nTy: UInt32, _aDest: Array<Dynamic>, _nDestX: UInt32, _nDestY: UInt32, _nAlpha: UInt32, _nPcBrRed: UInt32, _nPcBrGreen: UInt32, _nPcBrBlue: UInt32, _nPcRevRed: UInt32, _nPcRevBlue: UInt32, _nPcRevGreen: UInt32, _nOfRevRed: UInt32, _nOfRevBlue: UInt32, _nOfRevGreen: UInt32);
		pure public function fDrawSegTri(_nDirX: Int, _oPtT: Pt, _oPtL: Pt, _rPtST: RtuMap, _rPtSL: RtuMap, _oPtSegT: Pt, _oPtSegL: Pt, _rPtSegST: RtuMap, _rPtSegSL: RtuMap, _aDest: Array<Dynamic>, _aSource: Array<Dynamic>, _nPosX: Int, _nPosY: Int, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int, _nLimW: UInt, _nLimH: UInt, _nLast: Int, _nAlpha: UInt, _nPcBrRed: UInt, _nPcBrGreen: UInt, _nPcBrBlue: UInt, _nPcRevRed: UInt, _nPcRevGreen: UInt, _nPcRevBlue: UInt, _nOfRevRed: UInt, _nOfRevBlue: UInt, _nOfRevGreen: UInt, _nFirst: Int, _bNothingRight: Bool =  false);
		public function fDrawClipSquare(_aDest: Array<Dynamic>, _aSource: Array<Dynamic>, _nPosX: Int, _nPosY: Int, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
		public function Pixel();
	}
}
package GZ.Gfx{
	public extension Shape extends Object{
		public function Shape(_oParent: Root, _nX: Float, _nY: Float, _nNbPt: UInt =  4, _bSmoothBorder: Bool =  true);
		public function fAddPt(_oPt: PtA, _oCenter: Pt);
		public function fCreateFace(_oRc: RcImg, _oSrc: Poly4);
		public function fFinalUpdate();
		public function fGpuDraw();
		public function fIsInside();
		public function fCpuDraw(_nPosX: Int, _nPosY: Int, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
		public function fTransform();
		public function fConvertTo2d();
		public function fContextResume();
	}
}
package GZ.Gfx{
	public class Face extends Class{
		public function Face(_oShape: Shape, _oRc: RcImg, _oPt1: PtA, _oPt2: PtA, _oPt3: PtA, _oPt4: PtA, _aPoint2D: Array<Dynamic>, _oSrc: Poly4);
		public function fGpuDraw();
		public function fCpuDraw(_oDest: Object, _nPosX: Int, _nPosY: Int, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int, _nRsAlpha: UInt, _nRsBrRed: UInt, _nRsBrGreen: UInt, _nRsBrBlue: UInt, _nRsRevRed: UInt, _nRsRevBlue: UInt, _nRsRevGreen: UInt, _nOfRevRed: UInt, _nOfRevBlue: UInt, _nOfRevGreen: UInt);
		Destructor function destructor();
	}
}
package GZ.Gfx{
	public class Triangle extends Class{
		public function Triangle(_oPtA: Array<Dynamic>, _oPtB: Array<Dynamic>, _oPtC: Array<Dynamic>, _aPtSA: Array<Dynamic>, _aPtSB: Array<Dynamic>, _aPtSC: Array<Dynamic>);
		public function fFindXFromLinePt(_oPt1: Pt, _oPt2: Pt, _nY: Float);
		public function fFindAngle(_oPt1: Pt, _oPt2: Pt);
		public function fDraw(_oPtA: Pt, _oPtB: Pt, _oPtC: Pt, _aPtSA: RtuMap, _aPtSB: RtuMap, _aPtSC: RtuMap, _nPosX: Int, _nPosY: Int, _aPixelArray: Array<Dynamic>, _nSWidth: UInt, _nSHeight: UInt, _oSource: Object, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int, _nRsAlpha: UInt, _nRsBrRed: UInt, _nRsBrGreen: UInt, _nRsBrBlue: UInt, _nRsRevRed: UInt, _nRsRevBlue: UInt, _nRsRevGreen: UInt, _nOfRevRed: UInt, _nOfRevBlue: UInt, _nOfRevGreen: UInt, _bNothingRight: Bool =  false );
	}
}
package GZ.Gpu.GpuObj{
	public overclass GpuFace extends Class{
		public function GpuFace();
		public function fIni(_oFace: Face);
		public function fDraw(_oSource: Buffer, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
		public function fSetImg(_oRc: RcImg);
	}
}
package GZ.File{
	public class RcImg extends Resource{
		public function RcImg(_sPath: String);
		public function fCpuLoad();
		public function fGpuLoad();
		Destructor function destructor();
	}
}
package GZ.Sys{
	public overclass System extends Class{
		public function System();
		public function fSleep(_nMilliseconds: UInt =  1);
		public function fIni(_nInstance: UIntX, _sCommandLine: String, _nShowCmd: UInt);
		public function fDetectGpu();
		public function fExit();
	}
}
package GZ.File{
	public extension Resource extends Class{
		public function Resource(_sPath: String, _hLocation: HoldEnum =  eLocation.Unknow);
		public function fLoadFile();
		public function fSetDynamicMemData(_aSrcMemData: Array<Dynamic>, _nSize: UIntX);
		public function fSetStaticMemData(_aSrcMemData: Array<Dynamic>, _nSize: UIntX);
	}
}
package GZ.Sys{
	public overclass File extends Class{
		public function File();
		public function fCreateDirectory(_sFolder: String);
		public function fIsFileExist(_sFile: String);
		public function fLauch(_sFile: String, _sArguments: String);
		public function fGetExePath();
		public function fGetFullPath(_sDrive: String, _sPath: String);
		public function fLoadFileFromVDrive(_oRc: Resource);
		public function fLoadFile(_oRc: Resource, _sFullPath: String);
	}
}
package GZ.Gpu.GpuObj{
	public class GpuObject extends Class{
		public function GpuObject();
		public function fIni(_oInterface: Interface);
		public function fDraw(_oSource: Object, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
	}
}
package GZ.Gfx{
	public class Perspective extends Class{
		public function Perspective(_oBuffer: Buffer, _nFocalPc: Float =  50.0, _bSelf: Bool =  false);
		public function fSetFromPosition(_nFromX: Float, _nFromY: Float);
		public function fSetFromSelf();
		public function fSetFromBuffer();
		public function fSetFromBufferCenter();
		public function fSetFocal(_nPcVal: Float);
	}
}
package GZ.Gpu.GpuObj{
	public overclass GpuBuffer extends GpuObject{
		public function GpuBuffer();
	}
}
package GZ.Gpu.ShaderBase{
	public overclass ProgramShader extends Class{
		public function ProgramShader();
		public function fLoad();
		public function fAttachShader(_oShader: ShaderBase);
		public function fLink();
		public function fUse();
		public function fAddAttribute(_sName: String);
		public function fAddVbo();
		public function fSetDefaultAttribDivisor(_nDefaultAttribDivisor: Int =  0);
	}
}
package GZ.Gpu.ShaderBase{
	public extension ShaderBase extends Class{
		public function ShaderBase(_hGlsl_ES_Version: HoldEnum =  eGlsl_ES_Version.Auto);
		public function fLoad();
		public function fSendToGpu(_sShader: String);
		public function fCompile();
		public function fGetLog();
		public function fGetErrorLine();
		public function fAddLine(_sLine: String);
	}
}
package GZ.Gpu.Base{
	public overclass Attribute extends Class{
		public function Attribute(_oProgram: ProgramShader, _sName: String);
		public function fLoad();
		public function fSetOffset();
		public function fSetDivisor(_nDiv: UInt =  1);
	}
}
package GZ.Gpu.ShaderBase{
	public overclass Vbo extends Class{
		public function Vbo(_oProgram: ProgramShader);
		public function fLoad();
		public function fSendData();
	}
}
package GZ.Gpu.Base{
	public extension Uniform extends Class{
		public function Uniform(_oProgram: ProgramShader, _sName: String);
		public function fLoad();
		public function fSend();
	}
}
package GZ.Gfx{
	public class GlobalData extends Class{
		public function GlobalData();
		public function fGetId();
		public function fIni();
	}
}
package GZ.Sys{
	public extension FrameRate extends Buffer{
		public function FrameRate(_oParent: Root, _nWidth: UInt, _nHeight: UInt);
		public function fStartProcess();
		public function fQuit();
		public function ThreadLoop();
		public function fBlit();
		public function fNewFrame();
		public function fIniProcess();
	}
}
package GZ.Sys{
	public overclass Timer extends Class{
		public function fStart();
		public function fGet();
		public function Timer();
	}
}
package GZ.Gfx.Clip{
	public class Rectangle extends Shape{
		public function Rectangle(_oParent: Root, _nX: Float, _nY: Float, _nW: Float, _nH: Float, _nColor1: UInt, _nColor2: UInt =  0);
		public function fUpdate();
		public function fGpuDraw();
		public function fCpuDraw(_nPosX: Int, _nPosY: Int, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
		private function fGetPixel(x: Int, y: Int);
		public function fSetColor1(_nColor: UInt);
		public function fUpdateLimits();
	}
}
package GZ.Sys{
	public class ThreadItf extends Thread{
		public function ThreadItf();
	}
}
package GZ.Sys{
	public overclass ThreadObj extends Class{
		public function ThreadObj(_oThreadEx: ThreadExt, _dCallBack: Delegate);
		public function fSetPriority(_nPriority: UInt);
		public function fThreadCallBack(_oThreadEx: ThreadExt);
		public function fStart();
		public function fJoin();
		public function fCancel();
		public function fClose();
	}
}
package GZ.Input{
	public class Key extends Class{
		public function Key();
		public function fIsDown(_hKey: HoldEnum);
	}
}
package GZ.Sys.Message{
	public class ContextCreated extends ThreadMsg{
		public function ContextCreated(_nHandleId: UInt, _gContextHandle: Gate, _nDrawZoneAdr: UIntX, _bGpuDraw: Bool =  false);
		public function fRun();
	}
}
package GZ.Sys{
	public overclass ContextHandle extends Class{
		public function ContextHandle(_oLink: ContextLink);
		public function fUpdate();
		public function fCreateContextHandle();
		public function fIniPixelDrawZone();
		public function fBlit();
		public function fGpuBlit();
	}
}
package GZ.Sys.Message{
	public overclass ContextLink extends ThreadMsg{
		public function ContextLink(_sName: String, _oPos: Pt, _oDimention: Dim, _bGpuDraw: Bool =  false);
		public function fRun();
		public function fCreateContext();
		public function fIniDrawZone();
		public function fSendMsg(_oMsg: ThreadMsg);
	}
}
package GZ.Sys.Message{
	public class MousePos extends ThreadMsg{
		public function MousePos();
		public function fRun();
	}
}
package GZ.Sys.Message{
	public class Blit extends ThreadMsg{
		public function Blit();
		public function fRun();
	}
}
package GZ.Sys.Message{
	public class BlitComplete extends ThreadMsg{
		public function BlitComplete(_nDrawZoneAdr: UIntX =  0);
		public function fRun();
	}
}
package GZ.File{
	public class Embed extends Class{
		public function Embed(_sToPath: String);
		public function fDoDirectory(_sSourcePath: String, _sToPath: String, _sPath: String =  "");
		public function fDoPacked(_sSourcePath: String, _sToPath: String, _sFile: String, _sRelativePath: String, _sPackCount: UInt, _sPackStrSize: String);
		public function fDoPackedH(_sSourcePath: String, _sToPath: String, _sFile: String, _sRelativePath: String, _sPackCount: UInt);
		public function fCreatePacked(_sPackStr: String, _sPackStrH: String, _sSourcePath: String, _sToPath: String, _sFile: String, _sRelativePath: String, _sPackCount: UInt, _sPackStrSize: String);
		public function fDoFile(_sSourcePath: String, _sToPath: String, _sFile: String, _sRelativePath: String);
	}
}
package GZ.File{
	public class FileBin extends Class{
		public function FileBin();
		public function fOpen(_sFile: String, _bRead: Bool, _bWrite: Bool, _bAdd: Bool);
		public function fWriteString(_sText: String);
		public function fWriteChar(_nChar: Int);
		public function fReadFullFile();
		public function fWriteInt(_nValue: Int);
		public function fWriteArrayInt(_aArray: Array<Dynamic>, _nStart: Int, _nEnd: Int);
		public function fClose();
	}
}
package GZ.Sys{
	public extension FileGetter extends Class{
		public function FileGetter(_sFolder: String);
		public function fGetNextFile();
		public function fIsDirectory();
	}
}
package GZ.Gfx.Clip{
	public class Img extends Shape{
		public function Img(_oParent: Root, _nX: Float, _nY: Float, _oRc: RcImg, _bCenter: Bool =  true, _nCenterX: Int =  0, _nCenterY: Int =  0, _bSmoothBorder: Bool =  true, _bDrawLine: Bool =  false, _oSrcRegion: Poly4 =  0, _nWidth: UInt =  0, _nHeight: UInt =  0, _oPts: Poly4 =  0);
		public function fUpdateChildToParent();
	}
}
package GZ.File.Font{
	public class CharData extends Class{
		public function CharData(_nChar: Int);
	}
}
package GZ.File{
	public class Image extends Class{
		pure public function fOpen(_oRc: RcImg);
		pure public function fDelete(_oRc: RcImg);
		public function Image();
	}
}
package GZ.File{
	public class RcFont extends RcImg{
		public function RcFont(_sPath: String, _nDefaultScale: Float =  12.0 );
		public function fGetCharRect(_nChar: UInt);
		public function fCpuLoad();
		public function fGetKernAdvance(_nCh1: Int, _nCh2: Int);
		Destructor function destructor();
	}
}
package GZ.Wrap{
	public class Font extends Class{
		pure public function fGetCharData(_oCharData: CharData);
		pure public function fOpen(_oRc: RcFont);
		pure public function fDelete(_oRc: RcFont);
		pure public function fGetKernAdvance(_oRc: RcFont, _nCh1: Int, _nCh2: Int);
		public function Font();
	}
}
package GZ.File{
	public class RcImgSequence extends Resource{
		public function RcImgSequence(_aImg: Array<Dynamic>, _nTotal: UInt);
		public function fCpuLoad();
		public function fGpuLoad();
		Destructor function destructor();
	}
}
package GZ.Wrap{
	public class Image extends Class{
		pure public function fOpen(_oRc: RcImg);
		pure public function fDelete(_oRc: RcImg);
		public function Image();
	}
}
package GZ.Gfx{
	public class AsciiTable extends Clip{
		public function AsciiTable(_oParent: Root, _nX: Int, _nY: Int);
		public function fUpdateParentToChild();
	}
}
package GZ.Gfx{
	public class PixelBuffer extends Object{
		public function PixelBuffer(_oParent: Root, _sPath: String);
	}
}
package GZ.Gfx.File{
	public class FilesImg extends Class{
		public function FilesImg();
		public function fAddImgToList(_oImg: Object);
		public function fWriteImgList(_sFilePath: String);
		public function fWritePixelArray(_oImg: Object, _sFilePath: String);
		public function fGetSize(_oImg: Object);
	}
}
package GZ.Gfx{
	public extension Clip extends Object{
		public function Clip(_oParent: Root, _nX: Float, _nY: Float);
		public function fUpdate();
		public function fDraw();
		public function fContextResume();
		public function fApplyTransform();
		public function fAddSequence();
		public function fCalculateChildBorder();
	}
}
package GZ.Gfx{
	public extension Button extends Clip{
		public function Button(_oParent: Root, _nX: Int, _nY: Int);
		public function fUpdateParentToChild();
		public function fIsPtOver(_nPtx: Float, _nPty: Float);
		public function fUpdateChildToParent();
		public function fStartDrag();
		public function fStopDrag();
		public function fLimitDragAxis(_bUseX: Bool =  true, _bUseY: Bool =  true);
		public function fSetBoundAxisX(_nLeftBound: Int, _nRightBound: Int, _bBoundAxisX: Bool =  true);
		public function fSetBoundAxisY(_nLeftBound: Int, _nRightBound: Int, _bBoundAxisY: Bool =  true);
		public function fDrag();
		public function fButtonUpdate();
	}
}
package GZ.Gfx.Clip{
	public class ButtonImg extends Button{
		public function ButtonImg(_oParent: Root, _nX: Int, _nY: Int, _sPath: String, _bDrawLine: Bool =  false);
		public function fSetOverPressBrightness(_nOverR: Int, _nOverG: Int, _nOverB: Int, _nPressR: Int, _nPressG: Int, _nPressB: Int, _nSpeed: Int);
		public function fDrawObject(_oSource: Object, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
		public function fIsPtOver(_nPtx: Float, _nPty: Float);
		public function fButtonUpdate();
		public function fMouseOver();
	}
}
package GZ.Gfx.Clip{
	public class ButtonSquare extends Button{
		public function ButtonSquare(_oParent: Root, _nX: Int, _nY: Int, _nW: Int, _nH: Int, _bSolid: Bool =  false);
		public function fDrawObject(_oSource: Object, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
		public function fButtonUpdate();
		public function fMouseOver();
	}
}
package GZ.Gfx.Clip{
	public class Letter extends Shape{
		public function Letter(_oParent: Root, _oRc: RcFont, _nX: Float, _nY: Float, _nChar: UInt);
		public function fUpdateChildToParent();
	}
}
package GZ.Gfx.Clip{
	public class Simple extends Clip{
		public function Simple(_oParent: Root, _nX: Int, _nY: Int, _nPlayer: Int);
		public function fUpdateChildToParent();
		public function fDrawObject(_oSource: Object, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
	}
}
package GZ.Gfx.Clip{
	public class SimpleLine extends Shape{
		public function SimpleLine(_oParent: Root, _oBtn1: ButtonSquare, _oBtn2: ButtonSquare);
		public function fUpdate();
	}
}
package GZ.Gfx.Clip{
	public class Slider extends Clip{
		public function Slider(_oParent: Root, _nX: Float, _nY: Float, _nBidirectional: Bool =  false, _nR: UInt =  255, _nG: UInt =  255, _nB: UInt =  255);
		public function fUpdateChildToParent();
	}
}
package GZ.Gfx.Clip{
	public class SliderV extends Clip{
		public function SliderV(_oParent: Root, _nX: Int, _nY: Int, _nBidirectional: Bool =  false, _nR: UInt =  255, _nG: UInt =  255, _nB: UInt =  255);
		public function fUpdateChildToParent();
	}
}
package GZ.Gfx.Clip{
	public class Sprite extends Shape{
		public function Sprite(_oParent: Root, _nX: Int, _nY: Int, _sPath: String, _bCenter: Bool =  true, _nCenterX: Int =  0, _nCenterY: Int =  0, _bSmoothBorder: Bool =  true, _bDrawLine: Bool =  false);
		public function fUpdateChildToParent();
	}
}
package GZ.Gfx.Clip{
	public class Text extends Clip{
		public function Text(_oParent: Root, _oRc: RcFont, _nX: Float, _nY: Float, _sText: String =  "");
		public function fAdd(_sText: String =  "");
	}
}
package GZ.Gfx.Clip{
	public class TextRange extends Clip{
		public function TextRange(_oParent: Root, _oRc: RcFont, _nX: Float, _nY: Float, _sText: String =  "");
		public function fAdd(_sText: String =  "");
		public function fClear();
	}
}
package GZ.Gfx.Clip{
	public class TriangleClip extends Shape{
		public function TriangleClip(_oParent: Root, _nX: Float, _nY: Float, _sPath: String, _bCenter: Bool =  true, _nCenterX: Int =  0, _nCenterY: Int =  0, _bSmoothBorder: Bool =  true, _bDrawLine: Bool =  false);
		public function fUpdateChildToParent();
	}
}
package GZ.Gfx{
	public extension Line extends Object{
		public function Line(_oParent: Root, _nX: Int, _nY: Int);
		public function fDrawObject(_oSource: Object, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
	}
}
package GZ.Gfx{
	public extension MovieClip extends Clip{
		public function MovieClip(_oParent: Root, _nX: Float, _nY: Float);
		public function fUpdateSequence();
		public function fUpdateParentToChild();
		public function fAddSequence(_oRc: RcImgSequence, _nX: Float =  0, _nY: Float =  0, _bCenter: Bool =  true, _nCenterX: Int =  0, _nCenterY: Int =  0);
	}
}
package GZ.Gfx.PreRender{
	public class Batch extends Class{
		public function Batch();
	}
}
package GZ.Gfx.PreRender{
	public Invalid BatchBuffer extends Class{
		public function BatchBuffer();
	}
	public class Batch extends Class{
		public function Batch();
	}
}
package GZ.Gfx.PreRender{
	public Invalid BatchFace extends Class{
		public function BatchFace();
	}
	public class Batch extends Class{
		public function Batch();
	}
}
package GZ.Gfx.PreRender{
	public class Pipeline extends Class{
		public function Pipeline();
	}
}
package GZ.Gfx.Screen{
	public extension Redraw extends Object{
		public function Redraw(_oParent: Root);
		public function getRedrawRegion();
	}
}
package GZ.Gfx{
	public Invalid ShowTriangle extends Class{
		public function ShowTriangle();
	}
	public class BaseForm extends Object{
		public function BaseForm(_oParent: Root, _nX: Float, _nY: Float, _sPath: String, _bCenter: Bool =  true, _nCenterX: Int =  0, _nCenterY: Int =  0, _bSmoothBorder: Bool =  true, _bDrawLine: Bool =  false);
		public function fFinalUpdate();
		public function fSetRectangleBorderCorner();
		public function fDrawObject(_oSource: Object, _nX_Start: Int, _nX_End: Int, _nY_Start: Int, _nY_End: Int);
	}
}
package GZ.Gfx{
	public Invalid Texture extends Class{
		public function Texture();
	}
	public class Face extends Class{
		public function Face(_oRc: RcImg, _nPtS1x: Float, _nPtS1y: Float, _nPtS2x: Float, _nPtS2y: Float, _nPtS3x: Float, _nPtS3y: Float, _nPtS4x: Float, _nPtS4y: Float);
	}
}
package GZ.Gfx.Tile{
	public class LayerClip extends Clip{
		public function LayerClip(_oParent: Root, _oLayerData: LayerData, _nX: Float, _nY: Float);
		public function fLoadLayer(_oLayerData: LayerData);
	}
}
package GZ.Sff.Xml{
	public class Xml extends XmlNode{
		public function Xml(_sPath: String =  "");
		public function fLoad(_sPath: String =  "");
	}
}
package GZ.Sff.Xml{
	public extension XmlNode extends Class{
		public function XmlNode(_oParentNode: XmlNode);
		public function fName();
		public function fFirst(_sElement: String =  "");
		public function fLast(_sElement: String =  "");
		public function fNext(_sElement: String =  "");
		public function fPrevious(_sElement: String =  "");
	}
}
package GZ.Sff.Xml{
	public class XmlElement extends XmlNode{
		public function XmlElement(_sFile: String =  "");
		public function fLoad(_sFile: String =  "");
		public function fGetText();
		public function fAttribute(_sAttribute: String);
		public function fAttributeInt(_sAttribute: String);
		public function fAttributeUInt(_sAttribute: String);
		public function fAttributeBool(_sAttribute: String);
		public function fAttributeFloat(_sAttribute: String);
	}
}
package GZ.Sff.Xml{
	public class XmlText extends XmlNode{
		public function XmlText(_oParentNode: XmlNode);
		public function fParse();
	}
}
package GZ.Gfx.Tile{
	public class LayerData extends Class{
		public function LayerData(_oMap: MapData);
		public function fLoadTmxNode(_oFromNode: XmlElement);
		public function fExtractDataCSV(_sData: String);
		public function fNewTile(_sValue: String, _nX: UInt, _nY: UInt);
		public function fGetTileId(_nX: UInt, _nY: UInt);
	}
}
package GZ.Gfx.Tile{
	public class MapData extends Class{
		public function MapData();
		public function fLoadTxmNode(_oMapNode: XmlElement);
		public function fExtactAllMapTmxNode(_oFromNode: XmlNode);
	}
}
package GZ.Sff.Tmx{
	public class Tmx extends Xml{
		public function Tmx(_sPath: String =  "");
		public function fLoad(_sPath: String =  "");
		public function fTest(_sElement: String =  "");
	}
}
package GZ.Gfx.Tile{
	public class TileSet extends Class{
		public function TileSet();
		public function fLoadTmxNode(_oFromNode: XmlElement);
		public function fIni();
		public function fGetTilePos(_nId: UInt);
	}
}
package GZ.Gfx.Tile{
	public class TileInfo extends Class{
		public function TileInfo();
		public function fLoadTmxNode(_oFromNode: XmlElement);
	}
}
package GZ.Gfx.Tile{
	public class TileData extends Class{
		public function TileData(_oMap: MapData, _nId: UInt, _bFlipD: Bool =  1, _bFlipX: Bool =  1, _bFlipY: Bool =  1);
		public function fFoundInfo(_oMap: MapData);
	}
}
package GZ.Gfx.Tile{
	public class Tile extends Img{
		public function Tile(_oParent: Root, _oLayerData: LayerData, _oTileData: TileData, _nCaseX: UInt, _nCaseY: UInt);
		public function fSetNeighbor(_oSrcPos: Pt);
	}
}
package GZ.Gpu.Base{
	public overclass UnVec2 extends Uniform{
		public function fLoad();
		public function UnVec2(_oProgram: ProgramShader, _sName: String);
	}
}
package GZ.Gpu.GpuObj{
	public overclass GpuBatch extends Class{
		public function GpuBatch();
		public function fDraw();
	}
}
package GZ.Gpu.ShaderBase{
	public overclass FragmentShader extends ShaderBase{
		public function FragmentShader(_hGlsl_ES_Version: HoldEnum =  eGlsl_ES_Version.Auto);
	}
}
package GZ.Gpu.ShaderBase{
	public overclass VertexShader extends ShaderBase{
		public function VertexShader(_hGlsl_ES_Version: HoldEnum =  eGlsl_ES_Version.Auto);
	}
}
package GZ.Gpu.ShaderModel.GzModel{
	public overclass GzShModel extends Class{
		public function GzShModel();
		public function fLoad();
		public function fPod(_oPod: TestPod2);
		public function fDraw();
	}
}
package GZ.Sys{
	public Invalid Debug2 extends Class{
		public function Debug2();
	}
}
package GZ.Sys{
	public extension Process extends Class{
		public function fIsAlive(_nProcessId: UInt);
		public function fIsAlive();
		public function fLauch(_sFile: String, _sParam: String);
		public function Process();
	}
}