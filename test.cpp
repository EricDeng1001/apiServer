#include <iostream>

using std::cout;

int init( int a ){
  cout << "init\n";
  return a;
}

bool judge(){
  cout << "jude\n";
  return true;
}

bool var(){
  cout << "var\n";
  return true;
}

int main(){
  cout << "---------------------origin" << "\n";
  for( int i = init( 1 ) ; judge() && i++ < 4 ; var() ){
    cout << i << "\n";
  }
  cout << "-----------------------answer" << "\n";
  for( int i = init( 2 ) ; judge() && i <= 4 ; var() && i++ ){
    cout << i << "\n";
  }
}
