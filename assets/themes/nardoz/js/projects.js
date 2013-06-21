var projects = [
  {
    title: 'RestBA',
    author: 'Nicolás Melendez',
    description: 'RestBA es una librería java pensada para acceder a los datos de la Ciudad de Buenos Aires de una manera simple y flexible.',
    links: [
      { title: 'Repo en Github', url: 'https://github.com/RestOpenGov/RestOpenGov/tree/master/RestBA' },
    ],
    tags: [ 'Open Data', 'Java', 'RestOpenGov' ]
  },
  {
    title: 'RestOpenGov',
    author: 'Nicolás Melendez, Pablo Paladino, Sebastián Scarano, Alan Reid',
    description: 'RestOpenGov es un proyecto libre que se propone proveer una manera estándar y simple de acceder a la información que los gobiernos de diversos países y ciudades exponen a partir de fuentes heterogéneas de datos.',
    links: [
      { title: 'Website', url: 'http://www.restopengov.org' },
      { title: 'Repo en Github', url: 'https://github.com/RestOpenGov/RestOpenGov' }
    ],
    tags: [ 'Open Data', 'Java', 'Akka', 'Elasticsearch', 'RestOpenGov' ]
  },
  {
    title: 'IdeasBA',
    author: 'Nicolás Melendez, Martín Moscovich, Pablo Paladino, Sebastián Scarano, Alan Reid, Matías Urbano.',
    description: 'IdeasBA es una plataforma open-source para mejorar tu ciudad. Permite a los ciudadanos compartir ideas, sugerencias, preguntas y reclamos con la comunidad.<br/>Este proyecto ganó una mención especial en el concurso BAapps, organizado por el Gobierno de la Ciudad de Buenos Aires. ',
    links: [
      { title: 'Website', url: 'https://ideasba.org' },
      { title: 'Repo en Github', url: 'https://github.com/RestOpenGov/ideas' }
    ],
    tags: [ 'Scala', 'Play Framework', 'AngularJS', 'REST', 'IdeasBA', 'Javascript' ]
  },
  {
    title: 'CityStorming',
    author: 'Alan Reid',
    description: 'Juego colaborativo para responder preguntas de IdeasBA.',
    links: [
      { title: 'Demo', url: 'http://alanreid.com.ar/CityStorming/' },
      { title: 'Repo en Github', url: 'https://github.com/alanreid/CityStorming' }
    ],
    tags: [ 'Javascript', 'IdeasBA' ]
  },
  {
    title: 'AutoViz',
    author: 'Pablo Paladino, Matías Urbano, Sebastián Scarano',
    description: 'Scrapeo y visualizaciones de datos extraídos de la DNRPA sobre la cantidad de autos matriculados por año y marca.',
    links: [
      { title: 'Demo', url: 'http://demos.restopengov.org/autoViz/' },
      { title: 'Repo en Github', url: 'https://github.com/RestOpenGov/RestOpenGov' }
    ],
    tags: [ 'Javascript', 'Info Toolkit', 'RestOpenGov', 'Visualization', 'Scraping' ]
  },
  {
    title: 'ComuViz',
    author: 'Pablo Paladino, Alan Reid',
    description: 'Scrapeo y visualizaciones de datos del último censo del INDEC, combinados con geoShapes de comunas de GCBA. Se puede apreciar la cantidad de personas que viven en cada comuna en un mapa 3D.',
    links: [
      { title: 'Demo', url: 'http://alanreid.com.ar/comuViz/3d/index.html' },
      { title: 'Repo en Github', url: 'https://github.com/palamago/comuViz' }
    ],
    tags: [ 'Javascript', 'Visualization', 'Scraping' ]
  },
  {
    title: 'PlayBafici',
    author: 'Pablo Paladino, Alan Reid, Sebastián Scarano, Nicolás Melendez',
    description: 'Trivia sobre las películas del festival de Bafici. Aplicación ganadora de una mención especial en Cultura en el Hackatón del Gobierno de la Ciudad de Buenos Aires 2012.',
    links: [
      { title: 'Demo', url: 'http://playbafici.com.ar/' },
      { title: 'Repo en Github', url: 'https://github.com/RestOpenGov/RestOpenGov/tree/master/PlayBafici' }
    ],
    tags: [ 'Scala', 'Play Framework', 'RestOpenGov' ]
  },
  {
    title: 'Armadillo',
    author: 'Alan Reid, Martín Moscovich, Sebastián Scarano',
    description: 'Armadillo es un servicio REST que extrae información útil de cualquier texto. Es una herramienta útil para auto-tagging y categorización de información.',
    links: [
      { title: 'Repo en Github', url: 'https://github.com/alanreid/Armadillo' }
    ],
    tags: [ 'Scala', 'Akka', 'Data Mining', 'Realtime' ]
  },
  {
    title: 'Sensitive.js',
    author: 'Alan Reid',
    description: 'Sensitive es un módulo de node.js para usar dispositivos móviles como joysticks de una aplicación Web, posibilitando juegos o aplicaciones multi-player en un mismo browser.',
    links: [
      { title: 'Repo en Github', url: 'https://github.com/alanreid/Sensitive' },
    ],
    tags: [ 'NodeJS', 'Javascript', 'Mobile' ]
  },
  {
    title: 'Sensitive Arduino',
    author: 'Alan Reid',
    description: 'Sensitive Arduino es un módulo de node.js para usar un dispositivo móvil como joystick en un proyecto de Arduino.',
    links: [
      { title: 'Repo en Github', url: 'https://github.com/alanreid/Sensitive-Arduino' }
    ],
    tags: [ 'NodeJS', 'Javascript', 'Mobile', 'Arduino' ]
  },
  {
    title: 'Ayuda La Plata',
    author: 'Federica Pelzel, Celeste Acosta, Alan Reid, Pablo Paladino',
    description: 'Sitio que permitió reunir necesidades de ayuda con aportes solidarios durante la inundación de La Plata en Abril de 2013.',
    links: [
      { title: 'Website', url: 'http://www.ayudalaplata.org' },
      { title: 'Repo en Github', url: 'https://github.com/alanreid/ayudalaplata' }
    ],
    tags: [ 'Open Data', 'PHP', 'Ushahidi' ]
  },
  {
    title: 'SnakeApp',
    author: 'Pablo Paladino, Alan Reid, Nicolás Meléndez, Ignacio Orlandini',
    description: 'Aplicación desarrollada en 24hs durante la Hackatón de Mercado Libre en marzo 2013. Permite comparar el precio de venta de un mismo producto en los países de la región.',
    links: [
      { title: 'Website', url: 'http://snakeapp.aws.af.cm/' }
    ],
    tags: [ 'PHP', 'Javascript', 'Flat UI' ]
  },
  {
    title: 'Buenos Aires Traffic',
    author: 'Alan Reid',
    description: 'Visualización en tiempo real de los carteles de tráfico de la Ciudad de Buenos Aires.',
    links: [
      { title: 'Demo', url: 'http://alanreid.com.ar/batraffic/' },
      { title: 'Repo en Github', url: 'https://github.com/alanreid/BuenosAiresTraffic.js' }
    ],
    tags: [ 'Open Data', 'Javascript', 'Visualization', 'Realtime' ]
  },
  {
    title: 'Restangular',
    author: 'Martín Gontovnikas',
    description: 'Servicio para Angular JS que permite acceder a una API REST de una forma correcta y fácil.',
    links: [
      { title: 'Repo en Github', url: 'https://github.com/mgonto/restangular' }
    ],
    tags: [ 'Javascript', 'AngularJS' , 'REST' ]
  },
  {
    title: 'Angularytics',
    author: 'Martín Gontovnikas',
    description: 'Tracking de page views y eventos en una SPA hecha con AngularJS',
    links: [
      { title: 'Repo en Github', url: 'https://github.com/mgonto/angularytics' }
    ],
    tags: [ 'Javascript', 'AngularJS' ]
  },
  {
    title: 'FactoryPal',
    author: 'Martín Gontovnikas',
    description: 'FactoryPal es un framework hecho en Scala que te permite crear objetos para tests. Todo lo que tenes que hacer es definir templates para cada una de las clases que vos queres que FactoryPal te cree instancias. Luego de esto, FactoryPal se encarga del resto.',
    links: [
      { title: 'Repo en Github', url: 'https://github.com/mgonto/factory_pal' }
    ],
    tags: [ 'Scala', 'TDD' ]
  },
  {
    title: 'SecureSocial',
    author: 'Jorge Aliss',
    description: 'Módulo de autenticación para aplicaciones Play Framework. Soporta OAuth, OAuth2, OpenID, usuario/password y esquemas de autenticación personalizados.',
    links: [
      { title: 'Website', url: 'http://securesocial.ws/' },
      { title: 'Repo en Github', url: 'https://github.com/jaliss/securesocial' }
    ],
    tags: [ 'Scala', 'Java', 'Play Framework', 'oAuth', 'OpenID' ]
  },
  {
    title: 'Kiwi',
    author: 'Alan Reid, Ignacio Orlandini, Pablo Paladino, Nicolás Melendez, Victoria Ferrieri, Jennifer Reid, Martin Moscovich',
    description: 'Automatización de la entrega de bicicletas púbicas vía SMS. Implementación de código abierta y de bajo costo realizada con Arduino y RaspberryPi. Prototipo funcional realizado en el Hackatón 2013 del Gobierno de la Ciudad de Buenos Aires.',
    links: [
      { title: 'Repo en Github', url: 'https://github.com/Nardoz/kiwi' }
    ],
    tags: [ 'NodeJS', 'Javascript', 'Arduino', 'RaspberryPi' ]
  },
];



function generateProjects(projects) {
  var html = '';
  for(var i in projects) {
    var project = projects[i];

    html += '<li class="item" fiso-tags=".' + project.tags.join('.') + '.">' +
                '<div class="well">' +
                '  <h2>' + project.title + '</h2>' +
                '  <p class="author"><strong>Autor' + (project.author.split(',').length > 1 ? 'es' : '') + ':</strong> ' + project.author + '</p>' +
                '  <p class="description">' + project.description + '</p>' +
                '</div>' +
                '<p class="links">';

    for(var j in project.links) {
      var link = project.links[j];
      html += '<a class="btn btn-success btn-medium" target="_blank" href="' + link.url +'">' + link.title +'</a>';
    }

    html += '</p><p class="tags">';

    for(var j in project.tags) {
      html += '<a href="#" class="label label-info fiso-toggle-category" fiso-facet="tags" fiso-category="' + project.tags[j] +'">' + project.tags[j] +'</a>';
    }

    html += '</p></li>';

  }

  return html;
}
