// hello.cc
// incluimos la libreria node.h 
#include <node.h>

// Crea un namespace que no utilizaremos ahora porque se utiliza para modulos mas grandes
namespace demo {
// funciones de V8 que necesitamos
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;
// aca se creo un primer metodo el cual su callback devolvera
void Method(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    args.GetReturnValue().Set(String::NewFromUtf8( isolate, "KAITO").ToLocalChecked() );
}

// modulo que vamos a exportar lo llamaremos hola
void Initialize(Local<Object> exports) {
    NODE_SET_METHOD(exports, "hello", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace demo