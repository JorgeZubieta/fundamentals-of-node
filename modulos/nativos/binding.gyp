# Creamos un objeto como si fuese JSON
{
    # targets son los objetivos donde va a tener que hacer la complilacion, como son mas de uno los ponemos en un array por ahroa un elemento!
    "targets": [
        {
            # le ponemos el nombr que deseemos a nuestro modulo
            "target_name" : "addon",
            # de donde  toma el codigo
            "sources" : [ "hola.cc" ]
        }
    ]
}
# NOTA : luego deberemos decir  node que configure este modulo con node GYP! ejecutandolo desde terminal en la carpeta correcta!