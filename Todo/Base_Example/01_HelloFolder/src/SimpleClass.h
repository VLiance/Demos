#ifndef HClass_Simple
#define HClass_Simple

	#include <iostream>
	#include <string>

	class Simple {
	public:
	  Simple(const std::string& name);
	  void greet();
	  ~Simple();
	private:
	  std::string name;
	};
	
#endif