package  {

	import GZ.EntryPoint;

	<cpp>
		#include <iostream>
		using namespace std;
	</cpp>
	
	public class MainEntry extends EntryPoint {
	
		public function MainEntry():Int {

			Debug.fTrace("C~: Hello, World!");
			
			<cpp>
				cout << endl << "Cpp: Hello, World!" << endl;
			</cpp>
			
		}
	}
}
