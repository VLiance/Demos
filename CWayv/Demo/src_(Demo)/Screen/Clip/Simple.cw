package  { 
	
	import GZ.GFX.Root;

	import GZ.Math;
	import GZ.GFX.Clip.Img;
	import GZ.GFX.Object;
	import GZ.GFX.Clip;
	
	/**
	 * @author Maeiky
	 */	
	public class Simple extends Clip {
		

		private var nPlayer : Int;
		private var nVitesse : Int =  Math.nPrec/10;
		
		public var oImg : Img;
		

		
		//Player 0 = CPU
		//Player 1 = ArrowKey move
		//Player 2 = WASD move
		
		public function Simple( _oParent : Root, _nX: Int, _nY:Int, _nPlayer : Int):Void {
			Clip(_oParent : Root, _nX: Int, _nY:Int);
			
			nPlayer = _nPlayer;
			oImg = new Img(this, 0p , 0p, "toucan.png");
			
			if (nPlayer == 0) {
				oImg.nRotation =  0.01;
			}
		}
		
		
		override public function fUpdateChildToParent():Void {
			//Debug.fTrace1("update");
			//Debug.fTrace3("Simple update");
			
	
			
			
			if (nPlayer == 1) {
				nClipX = nClipX + nVitesse;
			}
			
			
			if (nPlayer == 0) {

				if (oWindow.fKeyIsDown( 0x25 ) ) { //LEFT
					nClipX = nClipX - nVitesse;
					nClipY = nClipY - nVitesse;
				}
				
				if (oWindow.fKeyIsDown( 0x27 )) { //RIGHT
					nClipX = nClipX + nVitesse;
					nClipY = nClipY + nVitesse;
				}
				
				if (oWindow.fKeyIsDown( 0x26 )) { //UP
					//nPosY = nPosY - nVitesse;
					oImg.nRotation = oImg.nRotation + 0.01;
					
				}
				if (oWindow.fKeyIsDown( 0x28 )) { //DOWN
					//nPosY = nPosY + nVitesse;
					oImg.nRotation = oImg.nRotation - 0.01;
					
				}
				/*
				if (oWindow.fKeyIsDown( 0x26 ) ) { //LEFT
					nPosY = nPosY - nVitesse;
				}
				
				if (oWindow.fKeyIsDown( 0x28 )) { //RIGHT
					nPosY= nPosY + nVitesse;
				}*/
				
				
			}
			
			if (nClipX > 800p) {
				nClipX = -200p;
			}
			

			
		//	nPosY = nPosY + 25;
			
		}
		
		
				//overrided!!
		override public function fDrawObject(_oSource : Object, _nX_Start:Int, _nX_End:Int, _nY_Start:Int, _nY_End:Int ):Void {
				
			//dispatchRender(_oSource, _nX_Start + nPosX, _nX_End  + nPosX,  _nY_Start + nPosY, _nY_End+ nPosY);
			
		}
		
	}
}