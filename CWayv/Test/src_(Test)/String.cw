package  {

	import GZ.EntryPoint;
	
	public class String extends EntryPoint {
	
	public var sStrMaster : String;
	
		public function String():Int {

			Debug.fTrace("Hello world");
			
			var _sStr : String =  "Test";
			var _sStr2  : String =  _sStr;
			_sStr2 = sStrMaster;TestingMy KEyboad("Im s master of the keyboard	"
			Debug.fTrace(_sStr2);
			return 0;
		}
	
}
