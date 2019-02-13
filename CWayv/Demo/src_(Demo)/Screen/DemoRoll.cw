package  {

	import GZ.Gfx.Object;

	import GZ.File.RcImg;
	import GZ.Gfx.Root;

	import GZ.Gfx.Interface;
	import GZ.Gfx.Clip;

	import GZ.Math;
	import GZ.Gfx.Clip.Img;

	/**
	 * @author Maeiky
	 */
	public class DemoRoll extends Clip {

		
		
		public static var nInterger : Int;
		public static var nFloat : Float;
		public static var sTest : String = "Hello";

		
		public var oImg : Img;
		
		public function DemoRoll( _oParent : Root ):Void {
			Clip(_oParent, 0.0, 0.0);
			
			//Debug.fTrace1("Static " + DemoRoll.sTest + " : " + DemoRoll.nInterger);
			
 
			//! ----------------------------------------------------------------------------
			//! ------------ Object as attribute variable to do transformation -------------
			//! ----------------------------------------------------------------------------
			//! -------- Pos -- In Screen Coordinate (0.0, 0.0, 0.0 = Top left)
			//!nX = Position X
			//!nY = Position Y
			//!nZ = Position X
			//! --------Size ------ (1.0 = Normal, 0.5 Half, 2.0 Double)
			//!nWidth  = Width
			//!nHeight = Height
			//!nLength = Length
			//! -----Rotation ----- (0.0 = Normal, PI/2.0 = 90deg,  PI = 180deg ) *All in radian
			//!nRoll  = Rot X
			//!nPitch = Rot Y
			//!nYaw   = Rot Z
			//! -----Brightness --- (0.0 = Normal, -1.0 = Dark, 1.0 = Bright)
			//!nRed =   Red%
			//!nBlue =  Blue%
			//!nGreen = Green%
			//! -----Alpha -------- (0.0 = Transparent, 1.0 = Normal)
			//!nAlpha = Alpha%
			//!
			//! ----------------------------------------------------------------------------
			//! -------------------------- Function Modifier  ------------------------------
			//! ----------------------------------------------------------------------------
			//!	Add one of these modifier to change how the attributes react, in a fonction call
			//!
			//! W = Wrap -> Wrap/Teleport to a specific position/value
			//! T = To -> Move to a specifique destination -- NOTE: without Limit or Ease this will teleport to destination (infinite speed) ---
			//! M = Move -> Move continuously with speed (+=)
			//! L = Limit -> Set maximum speed (use with To or Move)
			//! E = Ease -> Set gradually decreasing speed value (or gradually increasing speed when value are negative)
			//! G = Get -> Getter on attibute (To get is value)
			//!
			//!----------------------------------------------------------------------------
			//!Create an image
			
			
			
			//oImg = new Img(this, 400.0, 300.0, "C:/Transform.png", true);
		//	oImg = new Img(this, 400.0, 300.0, "RcEngine:/Transform.png", true);
		//	oImg = new Img(this, 400.0, 300.0, "Exe:/Transform.png", true);
			oImg = new Img(this, 400.0, 300.0, "Exe:/Tf.png", true);
			/*
			oImg.WnWidth(0.5);
			oImg.WnHeight(0.5);
			oImg.TnWidth(1.0);
			oImg.TnHeight(1.0);
			oImg.EnWidth(75);
			oImg.EnHeight(75);
			*/
			
		//	aaasBugHere
			
		//	floowingnOanal
			/*
			oImg.TnYaw(3.0 * Math.nPI);
			oImg.EnYaw(150);

			oImg.WnAlpha(0.0);
			oImg.TnAlpha(1.0);
			oImg.EnAlpha(100.0);
			*/

		}

		override public function fUpdateParentToChild():Void {
			//!Updated each frame, parents before
			//Debug.fTrace1("aaa ");
	//		oImg.MnRoll(0.005);
			
		}

		override public function fUpdateChildToParent():Void {
			//!Updated each frame, childs before
		}


	}
}
