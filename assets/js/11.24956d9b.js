(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{216:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"crear-imagenes-con-dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crear-imagenes-con-dockerfile"}},[a._v("#")]),a._v(" Crear imágenes con Dockerfile")]),a._v(" "),s("h2",{attrs:{id:"ejemplo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ejemplo"}},[a._v("#")]),a._v(" "),s("code",[a._v("Ejemplo")])]),a._v(" "),s("blockquote",[s("p",[a._v("Dockerfile")])]),a._v(" "),s("div",{staticClass:"language-Dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" ubuntu\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("get install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("y curl\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("get "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("y vim\n")])])]),s("h2",{attrs:{id:"construir-imagen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#construir-imagen"}},[a._v("#")]),a._v(" Construir imagen")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("h2",{attrs:{id:"listar-imagenes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listar-imagenes"}},[a._v("#")]),a._v(" listar imagenes")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker images\n")])])]),s("h2",{attrs:{id:"pasar-un-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pasar-un-tag"}},[a._v("#")]),a._v(" pasar un tag")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker build -t "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("TAG"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ docker build -t ubuntu_vim-curl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("h2",{attrs:{id:"no-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-cache"}},[a._v("#")]),a._v(" no cache")]),a._v(" "),s("h3",{attrs:{id:"docker-usa-cache-y-este-se-puede-invalidar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-usa-cache-y-este-se-puede-invalidar"}},[a._v("#")]),a._v(" Docker usa cache y este se puede invalidar")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker build --no-cache -t "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("TAG"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"entrar-al-contenedor-de-forma-interactiva"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entrar-al-contenedor-de-forma-interactiva"}},[a._v("#")]),a._v(" entrar al contenedor de forma interactiva")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -ti "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("NAME or ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])]),s("h2",{attrs:{id:"etiquetas-que-puede-contener-un-dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etiquetas-que-puede-contener-un-dockerfile"}},[a._v("#")]),a._v(" Etiquetas que puede contener un Dockerfile")]),a._v(" "),s("blockquote",[s("p",[a._v("Dockerfile")])]),a._v(" "),s("div",{staticClass:"language-Dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("imagen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("MAINTAINER")]),a._v(" joaquinaraujojs@gmail.com\n    LABEL"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"[clave]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"[valor]"')]),a._v("\nWORKDIR/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("directorio raíz del proyecto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nCOPY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ruta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("relativa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("del"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("archivo/carpeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("destino"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("del"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("archivo/carpeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" ./\nADD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("URL del archivo ha descargar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nRUN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("comando"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" && "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("comando"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" && "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),a._v(" && \\\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CMD")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("comando"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nENTRYPOINT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("comando"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXPOSE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("puerto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("variable de entorno"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("ul",[s("li",[a._v("Inicializa la constricción de una imagen a partir de un archivo Dockerfile.")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker build "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ruta del dockerfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" \n")])])]),s("ul",[s("li",[a._v("Permite establecer un nombre y un tag a la imagen a generar.")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker build -t "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("nombre-de-la-imagen:tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ruta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" Run")]),a._v(" "),s("p",[s("code",[a._v("-P")]),a._v(" elige un puerto aletorio en mi maquina local")]),a._v(" "),s("p",[s("code",[a._v("-d")]),a._v(" ejecuta como demonio")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker run -d -P app\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);