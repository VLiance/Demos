#include "SimpleClass.h"

Simple::Simple(const std::string& name): name(name) {
  std::cout << "Welcome " << name << "!" << std::endl;
}

void Simple::greet() {
  std::cout << "Hi there " << name << "!" << std::endl;
}

Simple::~Simple() {
  std::cout << "Goodbye " << name << "!" << std::endl;
}